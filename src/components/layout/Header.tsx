
import { useEffect, useState, type ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { brand, fonts } from "../../theme/brand";
import { SITE } from "../../data/site";
import {
  NAV_ITEMS,
  UTILITY_LINKS,
  type NavItem,
} from "../../data/navigation";
import BrandMark from "../common/BrandMark";

const navId = (prefix: string, to: string) =>
  `${prefix}-${to.replace(/[^a-z0-9]+/gi, "-")}`;

/* ------------------------------------------------------------------ */
/* Barra de contacto superior                                         */
/* ------------------------------------------------------------------ */

type ContactItem = {
  icon: ReactNode;
  label: string;
  href?: string;
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: <PhoneIphoneOutlinedIcon />,
    label: SITE.contact.phone,
    href: SITE.contact.phoneHref,
  },
  ...(SITE.contact.phoneFixed
    ? [
      {
        icon: <PhoneOutlinedIcon />,
        label: SITE.contact.phoneFixed,
        href: `tel:${SITE.contact.phoneFixed.replace(/[^\d+]/g, "")}`,
      },
    ]
    : []),
  {
    icon: <MailOutlinedIcon />,
    label: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
  },
  {
    icon: <PlaceOutlinedIcon />,
    label: SITE.contact.address,
  },
];

const contactItemSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.7,
  minWidth: 0,
  color: "rgba(255,255,255,0.86)",
  textDecoration: "none",
  fontSize: "0.84rem",
  lineHeight: 1.5,
  whiteSpace: "normal",
  overflowWrap: "anywhere",
  transition: "color 0.18s ease",
  "& svg": {
    fontSize: 15,
    color: brand.goldSoft,
    flexShrink: 0,
  },
  "&:hover": {
    color: brand.white,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Ítem de navegación de escritorio                                   */
/* ------------------------------------------------------------------ */

function DesktopNavItem({
  item,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const { pathname } = useLocation();

  const active =
    pathname === item.to ||
    (item.to !== "/" && pathname.startsWith(`${item.to}/`));

  const menuId = navId("nav-menu", item.to);

  if (!item.children) {
    return (
      <Box
        component={RouterLink}
        to={item.to}
        onClick={onClose}
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          py: 1.5,
          px: 0.4,
          minWidth: 0,
          flexShrink: 1,
          color: active ? brand.white : "rgba(242,242,247,0.88)",
          textDecoration: "none",
          fontSize: { lg: "0.86rem", xl: "0.86rem" },
          fontWeight: 700,
          lineHeight: 1.35,
          letterSpacing: "0.005em",
          textAlign: "center",
          overflowWrap: "normal",
          transition: "color 0.18s ease",
          "&:hover": {
            color: brand.white,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 7,
            height: 2,
            backgroundColor: brand.goldBright,
            transform: active ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.2s ease",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
          },
        }}
      >
        {item.label}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minWidth: 0,
        flexShrink: 1,
      }}
      onMouseEnter={onOpen}
      onMouseLeave={(event) => {
        const related = event.relatedTarget;

        if (
          related instanceof Node &&
          event.currentTarget.contains(related)
        ) {
          return;
        }

        const menu = document.getElementById(menuId);

        if (!menu?.contains(document.activeElement)) {
          onClose();
        }
      }}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          onClose();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onClose();
          event.currentTarget.querySelector("button")?.focus();
        }
      }}
    >
      <Stack
        component="button"
        type="button"
        direction="row"
        spacing={0.3}
        onClick={open ? onClose : onOpen}
        aria-expanded={open}
        aria-controls={menuId}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: 0,
          p: 0.4,
          py: 1.5,
          minWidth: 0,
          flexShrink: 1,
          fontFamily: "inherit",
          cursor: "pointer",
          color: active || open
            ? brand.white
            : "rgba(242,242,247,0.88)",
          fontSize: "0.86rem",
          fontWeight: 700,
          lineHeight: 1.35,
          letterSpacing: "0.005em",
          textAlign: "center",
          transition: "color 0.18s ease",
          "&:hover": {
            color: brand.white,
          },
          "& svg": {
            fontSize: 16,
            flexShrink: 0,
            transition: "transform 0.18s ease",
            transform: open ? "rotate(180deg)" : "none",
          },
        }}
      >
        {item.label}
        <ExpandMoreIcon />
      </Stack>

      <Box
        id={menuId}
        sx={{
          position: "absolute",
          top: "calc(100% - 2px)",
          left: "50%",
          zIndex: 1300,
          width: 290,
          maxWidth: "calc(100vw - 24px)",
          py: 1,
          backgroundColor: brand.white,
          border: "1px solid rgba(10,36,75,0.10)",
          borderTop: `2px solid ${brand.gold}`,
          boxShadow: "0 16px 34px rgba(4,15,38,0.20)",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
          transform: open
            ? "translate(-50%, 0)"
            : "translate(-50%, -4px)",
          transition:
            "opacity 0.16s ease, transform 0.16s ease, visibility 0.16s",
        }}
      >
        {item.children.map((child) => {
          const childActive =
            pathname === child.to ||
            pathname.startsWith(`${child.to}/`);

          return (
            <Box
              key={child.to}
              component={RouterLink}
              to={child.to}
              onClick={onClose}
              sx={{
                position: "relative",
                display: "block",
                px: 2.2,
                py: 1.2,
                color: childActive ? brand.primaryDeep : brand.ink,
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: childActive ? 700 : 500,
                lineHeight: 1.5,
                borderLeft: `2px solid ${childActive ? brand.gold : "transparent"
                  }`,
                backgroundColor: childActive
                  ? brand.skySoft
                  : "transparent",
                transition:
                  "background-color 0.16s ease, color 0.16s ease",
                "&:hover": {
                  backgroundColor: brand.paper,
                  color: brand.primaryDeep,
                  borderLeftColor: brand.gold,
                },
                "&:focus-visible": {
                  outline: `2px solid ${brand.gold}`,
                  outlineOffset: "-2px",
                },
              }}
            >
              {child.label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Encabezado                                                          */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMobileGroup(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: 1200,
        backgroundColor: brand.primaryDeep,
        backdropFilter: "blur(10px)",
        borderBottom: `2px solid ${brand.gold}`,
        boxShadow: "0 1px 6px rgba(4,15,38,0.24)",
        color: brand.white,
        overflow: "visible",
      }}
    >
      {/* BARRA DE CONTACTO SUPERIOR */}

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundColor: brand.primaryDark,
          boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.14)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: { md: 3, lg: 4, xl: 5 },
          }}
        >
          <Stack
            direction="row"


            sx={{
              width: "100%",
              minHeight: "var(--header-topbar-h)",
              flexWrap: "nowrap",
              gap: { md: 1.5, lg: 2, xl: 3 },
              overflow: "hidden",
              whiteSpace: "nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}

          >
            {CONTACT_ITEMS.map((item) => {
              const content = (
                <>
                  <Box
                    component="span"
                    sx={{ display: "inline-flex", flexShrink: 0 }}
                  >
                    {item.icon}
                  </Box>
                  <Box component="span">{item.label}</Box>
                </>
              );

              return item.href ? (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={contactItemSx}
                >
                  {content}
                </Box>
              ) : (
                <Box key={item.label} sx={contactItemSx}>
                  {content}
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>

      {/* BARRA PRINCIPAL */}

      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 2.5, md: 3, lg: 3.5, xl: 5 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: "calc(var(--header-bar-h) - 2px)",
            minHeight: "calc(var(--header-bar-h) - 2px)",
            gap: { xs: 1, md: 1.2, lg: 1.4, xl: 1.8 },
            width: "100%",
          }}
        >
          {/* LOGOTIPO */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              minWidth: 0,
              mr: { xs: "auto", xl: 0 },
              textDecoration: "none",
            }}
          >
            <BrandMark light />
          </Box>

          {/* NAVEGACIÓN DESKTOP */}

          <Stack
            component="nav"
            aria-label="Navegación principal"
            direction="row"

            sx={{
              display: { xs: "none", lg: "flex" },
              flex: "1 1 auto",
              minWidth: 0,
              alignItems: "center",
              justifyContent: "center",
              columnGap: { lg: 0.8, xl: 1.4 },
              mx: { lg: 0.8, xl: 1.5 },
            }}

          >
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.to}
                item={item}
                open={openMenu === item.to}
                onOpen={() => setOpenMenu(item.to)}
                onClose={() => setOpenMenu(null)}
              />
            ))}
          </Stack>

          {/* ACCIONES */}

          <Stack
            direction="row"
            spacing={{ xs: 0.7, md: 1 }}
            sx={{
              alignItems: "center",
              flexShrink: 0,
              ml: { xs: 0, xl: "auto" },
              position: "relative",
              zIndex: 2,
            }}
          >


            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                minWidth: 0,
                px: { md: 2, xl: 2.5 },
                py: 1.15,
                fontSize: "1.05rem",
                fontWeight: 700,
                letterSpacing: "0.01em",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
                cursor: "default",
                borderRadius: "4px",

                color: "#071F3A",
                backgroundColor: "#E0AD19",
                border: "1px solid #F0C94F",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
                transition:
                  "background-color 180ms ease, box-shadow 180ms ease, transform 180ms ease",

                "&:hover": {
                  backgroundColor: "#F0C443",
                  color: "#071F3A",
                  boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-1px)",
                },

                "&:focus-visible": {
                  outline: "2px solid #F7D875",
                  outlineOffset: "3px",
                },
              }}
            >
              Mesa de Partes
            </Button>



            <IconButton
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              onClick={() => {
                setOpenMenu(null);
                setMobileGroup(null);
                setMobileOpen(true);
              }}
              sx={{
                display: { xs: "inline-flex", lg: "none" },
                color: brand.white,
                border: "1px solid rgba(255,255,255,0.24)",
                borderRadius: 1.5,
                width: 44,
                height: 44,
                backgroundColor: "rgba(255,255,255,0.06)",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.16)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Box>

      {/* MENÚ MÓVIL */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
          setMobileGroup(null);
        }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "100%", sm: 390 },
              maxWidth: "100vw",
              backgroundColor: brand.paper,
              backgroundImage: "none",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
          }}
        >
          {/* CABECERA DRAWER */}

          <Box
            sx={{
              minHeight: 76,
              px: 2.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              flexShrink: 0,
              backgroundColor: brand.primaryDeep,
              borderBottom: `2px solid ${brand.gold}`,
            }}
          >
            <BrandMark
              light
              compact
              onClick={() => setMobileOpen(false)}
            />

            <IconButton
              aria-label="Cerrar menú"
              onClick={() => {
                setMobileOpen(false);
                setMobileGroup(null);
              }}
              sx={{
                color: brand.white,
                width: 42,
                height: 42,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.12)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* NAVEGACIÓN */}

          <Stack
            sx={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              p: 2.5,
            }}
            spacing={2}
          >
            <List disablePadding sx={{ flex: 1 }}>
              {NAV_ITEMS.map((item) => {
                const groupOpen = mobileGroup === item.to;
                const itemActive =
                  pathname === item.to ||
                  (item.to !== "/" && pathname.startsWith(`${item.to}/`));

                return (
                  <Box
                    key={item.to}
                    sx={{
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <ListItemButton
                      component={item.children ? "button" : RouterLink}
                      {...(item.children
                        ? {
                          onClick: () =>
                            setMobileGroup(groupOpen ? null : item.to),
                        }
                        : {
                          to: item.to,
                          onClick: () => setMobileOpen(false),
                        })}
                      aria-expanded={
                        item.children ? groupOpen : undefined
                      }
                      aria-controls={
                        item.children
                          ? navId("mobile-nav", item.to)
                          : undefined
                      }
                      sx={{
                        width: "100%",
                        px: 0,
                        py: 1.35,
                        color: itemActive ? brand.primaryDeep : brand.ink,
                        textAlign: "left",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: brand.primary,
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        slotProps={{
                          primary: {
                            sx: {
                              fontFamily: fonts.display,
                              fontSize: "1.12rem",
                              fontWeight: itemActive ? 700 : 600,
                              lineHeight: 1.4,
                            },
                          },
                        }}
                      />

                      {item.children ? (
                        <ExpandMoreIcon
                          sx={{
                            color: brand.muted,
                            transform: groupOpen
                              ? "rotate(180deg)"
                              : "none",
                            transition: "transform 0.18s ease",
                          }}
                        />
                      ) : null}
                    </ListItemButton>

                    {item.children ? (
                      <Collapse
                        id={navId("mobile-nav", item.to)}
                        in={groupOpen}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List disablePadding sx={{ pb: 1.2 }}>
                          {item.children.map((child) => {
                            const childActive =
                              pathname === child.to ||
                              pathname.startsWith(`${child.to}/`);

                            return (
                              <ListItemButton
                                key={child.to}
                                component={RouterLink}
                                to={child.to}
                                onClick={() => setMobileOpen(false)}
                                sx={{
                                  py: 0.8,
                                  pl: 1.5,
                                  borderLeft: `2px solid ${childActive
                                    ? brand.gold
                                    : brand.lineStrong
                                    }`,
                                  color: childActive
                                    ? brand.primaryDeep
                                    : brand.muted,
                                  "&:hover": {
                                    backgroundColor: "transparent",
                                    color: brand.primary,
                                  },
                                }}
                              >
                                <ListItemText
                                  primary={child.label}
                                  slotProps={{
                                    primary: {
                                      sx: {
                                        fontSize: "0.88rem",
                                        lineHeight: 1.5,
                                        fontWeight: childActive ? 700 : 400,
                                      },
                                    },
                                  }}
                                />
                              </ListItemButton>
                            );
                          })}
                        </List>
                      </Collapse>
                    ) : null}
                  </Box>
                );
              })}
            </List>

            {/* ACCIONES Y CONTACTO MÓVIL */}

            <Stack spacing={1.5} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  py: 1.2,
                  borderRadius: "3px",
                  fontWeight: 700,
                  backgroundColor: brand.gold,
                  color: brand.primaryDeep,
                  "&:hover": {
                    backgroundColor: brand.goldBright,
                  },
                }}
              >
                Intranet
              </Button>

              <Stack spacing={1.5} sx={{ pt: 0.5 }}>
                <Box
                  component="a"
                  href={SITE.contact.phoneHref}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: brand.muted,
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    overflowWrap: "anywhere",
                    "&:hover": {
                      color: brand.primary,
                    },
                  }}
                >
                  <PhoneOutlinedIcon
                    sx={{ fontSize: 17, flexShrink: 0 }}
                  />
                  {SITE.contact.phone}
                </Box>

                <Box
                  component="a"
                  href={`mailto:${SITE.contact.email}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: brand.muted,
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    overflowWrap: "anywhere",
                    "&:hover": {
                      color: brand.primary,
                    },
                  }}
                >
                  <MailOutlinedIcon
                    sx={{ fontSize: 17, flexShrink: 0 }}
                  />
                  {SITE.contact.email}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                    color: brand.muted,
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                  }}
                >
                  <PlaceOutlinedIcon
                    sx={{
                      fontSize: 17,
                      mt: 0.2,
                      flexShrink: 0,
                    }}
                  />
                  {SITE.contact.address}
                </Box>
              </Stack>

              <Divider sx={{ borderColor: brand.line }} />

              <Stack
                direction="row"
                sx={{
                  flexWrap: "wrap",
                  columnGap: 2,
                  rowGap: 1
                }}
              >
                {UTILITY_LINKS.map((link) => (
                  <Typography
                    key={link.to}
                    component={RouterLink}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      color: brand.muted,
                      textDecoration: "none",
                      fontSize: "0.76rem",
                      "&:hover": {
                        color: brand.primary,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
