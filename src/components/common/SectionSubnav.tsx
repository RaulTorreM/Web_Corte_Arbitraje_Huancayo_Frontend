import { startTransition, useEffect, useLayoutEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { brand } from "../../theme/brand";
import type { NavChild } from "../../data/navigation";

type SectionSubnavProps = {
  items: NavChild[];
  ariaLabel: string;
  /** Mantiene la barra bajo el encabezado mientras se recorre la página. */
  sticky?: boolean;
  /** Vuelve al inicio de la sección con un desplazamiento suave al navegar. */
  smoothScrollOnNavigate?: boolean;
};

/** Alinea la página recién cargada con la posición fija de su subnav. */
let pendingSubnavAlignment = false;

/** Conserva el desplazamiento horizontal de cada barra al cambiar de página. */
const subnavScrollPositions = new Map<string, number>();

const requestSubnavAlignment = () => {
  pendingSubnavAlignment = true;
};

const consumeSubnavAlignment = () => {
  if (!pendingSubnavAlignment) return false;

  pendingSubnavAlignment = false;
  return true;
};

const getHeaderHeight = () => {
  const header = document.querySelector<HTMLElement>(".MuiAppBar-root");
  return header?.getBoundingClientRect().height ?? 0;
};

const getStickyScrollTop = (sentinel: HTMLElement | null) => {
  if (!sentinel) return 0;

  const naturalTop = sentinel.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, naturalTop - getHeaderHeight() + 1);
};

const centerActiveSubnavItem = (container: HTMLElement) => {
  const active = container.querySelector<HTMLElement>('[aria-current="page"]');
  if (!active) return;

  const containerRect = container.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();
  const centered =
    container.scrollLeft +
    activeRect.left -
    containerRect.left -
    (container.clientWidth - activeRect.width) / 2;

  container.scrollLeft = Math.max(0, centered);
};

export default function SectionSubnav({
  items,
  ariaLabel,
  sticky = true,
  smoothScrollOnNavigate = true,
}: SectionSubnavProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const horizontalInitRef = useRef(false);
  const cancelScrollRef = useRef<(() => void) | null>(null);

  useEffect(
    () => () => {
      cancelScrollRef.current?.();
    },
    []
  );

  // Se ejecuta antes de pintar: el contenido nuevo aparece ya alineado bajo
  // el subnav, sin mostrar el hero ni saltar de posición.
  useLayoutEffect(() => {
    const alignToSticky = consumeSubnavAlignment();
    const stack = stackRef.current;
    let cancelled = false;

    if (stack) {
      if (alignToSticky) {
        const savedPosition = subnavScrollPositions.get(ariaLabel);

        if (savedPosition !== undefined) {
          stack.scrollLeft = savedPosition;
        }

        horizontalInitRef.current = true;
      } else if (!horizontalInitRef.current) {
        // En una carga directa, la pestaña activa debe quedar visible.
        horizontalInitRef.current = true;
        centerActiveSubnavItem(stack);

        if (document.fonts?.status !== "loaded") {
          void document.fonts.ready.then(() => {
            if (!cancelled) {
              centerActiveSubnavItem(stack);
            }
          });
        }
      }
    }

    if (alignToSticky) {
      window.scrollTo({
        top: getStickyScrollTop(sentinelRef.current),
        left: 0,
        behavior: "instant",
      });
    }

    return () => {
      cancelled = true;
    };
  }, [ariaLabel, pathname]);

  const handleNavigate = (
    event: MouseEvent<HTMLAnchorElement>,
    destination: string
  ) => {
    if (!smoothScrollOnNavigate) {
      return;
    }

    cancelScrollRef.current?.();

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const samePage = pathname === destination;
    const targetY = getStickyScrollTop(sentinelRef.current);
    const startY = window.scrollY;
    const reachedSubnav = startY >= targetY;

    // Si el hero todavía está a la vista, solo se cambia de página.
    if (!reachedSubnav) {
      return;
    }

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      if (!samePage) {
        requestSubnavAlignment();
      }
      return;
    }

    if (startY <= targetY) {
      if (!samePage) {
        requestSubnavAlignment();
      }
      return;
    }

    event.preventDefault();

    const distance = startY - targetY;
    const duration = Math.min(420, Math.max(200, distance * 0.22));
    let startedAt: number | null = null;
    let frameId = 0;

    const step = (now: number) => {
      if (startedAt === null) {
        startedAt = now;
      }

      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      window.scrollTo({
        top: Math.round(startY - distance * eased),
        left: 0,
        behavior: "instant",
      });

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
        return;
      }

      cancelScrollRef.current = null;

      if (!samePage) {
        requestSubnavAlignment();
        startTransition(() => {
          navigate(destination, { state: { preserveScroll: true } });
        });
      }
    };

    cancelScrollRef.current = () => {
      window.cancelAnimationFrame(frameId);
      cancelScrollRef.current = null;
    };

    frameId = window.requestAnimationFrame(step);
  };

  return (
    <>
      <Box ref={sentinelRef} aria-hidden="true" sx={{ height: 0 }} />

      <Box
        component="nav"
        aria-label={ariaLabel}
        sx={{
          position: sticky ? "sticky" : "static",
          top: sticky ? "var(--header-h)" : undefined,
          zIndex: sticky ? 1100 : undefined,
          backgroundColor: brand.paper,
          boxShadow: sticky
            ? `inset 0 -1px 0 ${brand.line}, 0 8px 18px rgba(9,35,84,0.08)`
            : `inset 0 -1px 0 ${brand.line}`,
        }}
      >
        <Container>
          <Stack
            ref={stackRef}
            direction="row"
            spacing={{ xs: 2.2, md: 3.2 }}
            onScroll={(event) => {
              subnavScrollPositions.set(
                ariaLabel,
                event.currentTarget.scrollLeft
              );
            }}
            sx={{
              minHeight: 52,
              alignItems: "stretch",
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {items.map((item) => {
              const active = pathname === item.to;

              return (
                <Box
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  state={{ preserveScroll: true }}
                  onClick={(event) => handleNavigate(event, item.to)}
                  aria-current={active ? "page" : undefined}
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    flexShrink: 0,
                    color: active ? brand.primaryDeep : brand.muted,
                    fontSize: "0.78rem",
                    fontWeight: active ? 700 : 500,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "color 0.18s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: -1,
                      height: 2,
                      backgroundColor: brand.gold,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.2s ease",
                    },
                    "&:hover": {
                      color: brand.primary,
                      "&::after": { transform: "scaleX(1)" },
                    },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
