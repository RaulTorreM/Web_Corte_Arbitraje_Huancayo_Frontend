import { useEffect, useRef, useState } from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand, fonts } from "../../theme/brand";
import { NAV_ITEMS, UTILITY_LINKS } from "../../data/navigation";

type PageItem = { label: string; to: string; section?: string };

const PAGE_ORDER: PageItem[] = (() => {
  const seen = new Set<string>();
  const candidates: PageItem[] = [
    ...NAV_ITEMS.flatMap((item) => [
      { label: item.label, to: item.to },
      ...(item.children ?? []).map((child) => ({
        label: child.label,
        to: child.to,
        section: item.label,
      })),
    ]),
    ...UTILITY_LINKS.map((link) => ({
      label: link.label,
      to: link.to,
      section: "Servicios",
    })),
  ];

  return candidates.filter((item) => {
    if (seen.has(item.to)) return false;
    seen.add(item.to);
    return true;
  });
})();

const titleSx = {
  fontFamily: fonts.display,
  fontSize: { xs: "0.8rem", md: "0.84rem" },
  fontWeight: 600,
  lineHeight: 1.2,
  color: brand.primaryDeep,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: { xs: 130, sm: 200, md: 280 },
} as const;

const sectionSx = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: brand.goldInk,
  lineHeight: 1.2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: { xs: 130, sm: 200, md: 280 },
} as const;

function NavLink({
  item,
  direction,
}: {
  item: PageItem;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      component={RouterLink}
      to={item.to}
      aria-label={`Página ${isNext ? "siguiente" : "anterior"}: ${item.label}`}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: { xs: 0.5, md: 0.7 },
        minWidth: 0,
        color: brand.primaryDeep,
        textDecoration: "none",
        transition: "color 0.18s ease",
        "&:hover": { color: brand.goldInk },
        "&:hover .page-nav-icon": {
          color: brand.goldInk,
          opacity: 1,
        },
      }}
    >
      {!isNext && (
        <ArrowBackIcon
          className="page-nav-icon"
          sx={{
            fontSize: 16,
            flexShrink: 0,
            color: brand.primary,
            opacity: 0.62,
            transition: "color 0.18s ease, opacity 0.18s ease",
          }}
        />
      )}

      <Box sx={{ minWidth: 0, textAlign: isNext ? "right" : "left" }}>
        {item.section && (
          <Typography component="span" sx={{ ...sectionSx, display: "block" }}>
            {item.section}
          </Typography>
        )}
        <Typography
          component="span"
          sx={{
            ...titleSx,
            display: "block",
            mt: item.section ? 0.15 : 0,
          }}
        >
          {item.label}
        </Typography>
      </Box>

      {isNext && (
        <ArrowForwardIcon
          className="page-nav-icon"
          sx={{
            fontSize: 16,
            flexShrink: 0,
            color: brand.primary,
            opacity: 0.62,
            transition: "color 0.18s ease, opacity 0.18s ease",
          }}
        />
      )}
    </Link>
  );
}

/**
 * Navegación entre páginas. Permanece fija en la parte inferior mientras se
 * recorre el contenido y se desprende al llegar a su lugar natural, encima
 * del footer. No se muestra en el inicio.
 */
export default function PageNavigator() {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fixed, setFixed] = useState(true);

  const current = pathname.replace(/\/+$/, "") || "/";
  const index = PAGE_ORDER.findIndex((item) => item.to === current);

  useEffect(() => {
    void index;
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setFixed(!entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [index]);

  if (current === "/" || index === -1) return null;

  const previous = index > 0 ? PAGE_ORDER[index - 1] : null;
  const next = index < PAGE_ORDER.length - 1 ? PAGE_ORDER[index + 1] : null;

  if (!previous && !next) return null;

  return (
    <Box
      ref={containerRef}
      component="nav"
      aria-label="Navegación entre páginas"
      sx={{
        position: "relative",
        height: { xs: 54, md: 50 },
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          position: fixed ? "fixed" : "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1150,
          minHeight: { xs: 54, md: 50 },
          background:
            "linear-gradient(180deg, rgba(239,244,251,0) 0%, rgba(239,244,251,0.55) 45%, rgba(239,244,251,0.94) 100%)",
        }}
      >
        <Container>
          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 3 }}
            sx={{
              minHeight: { xs: 54, md: 50 },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {previous ? (
              <NavLink item={previous} direction="previous" />
            ) : (
              <Box />
            )}

            {next ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  minWidth: 0,
                  ml: "auto",
                }}
              >
                <NavLink item={next} direction="next" />
              </Box>
            ) : (
              <Box />
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
