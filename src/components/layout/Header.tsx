import { useEffect, useState, type ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
import SectionSearch from "../common/SectionSearch";

/* ------------------------------------------------------------------ */
/* Barra de contacto superior                                         */
/* ------------------------------------------------------------------ */

type ContactItem = {
  icon: ReactNode;
  label: string;
  href?: string;
  hideOnMobile?: boolean;
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
    hideOnMobile: true,
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

function DesktopNavItem({ item, label }: { item: NavItem; label: string }) {
  const { pathname } = useLocation();

  const active =
    pathname === item.to ||
    (item.to !== "/" && pathname.startsWith(`${item.to}/`));

  return (
    <Box
      component={RouterLink}
      to={item.to}
      aria-current={active ? "page" : undefined}
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        py: 1.5,
        px: 0.4,
        minWidth: 0,
        flexShrink: 1,
        color: active ? brand.gold : "rgba(242,242,247,0.88)",
        textDecoration: "none",
        fontSize: { lg: "0.8rem", xl: "0.84rem" },
        fontWeight: 700,
        lineHeight: 1.35,
        letterSpacing: "0.005em",
        textAlign: "center",
        overflowWrap: "normal",
        transition:
          "color 0.18s ease, background-color 0.22s ease, transform 0.22s ease",
        "&:hover": {
          color: brand.white,
          backgroundColor: "rgba(243,187,57,0.08)",
          transform: "translateY(-1px)",
          "& .nav-subsection-line": {
            width: "100%",
            opacity: 1,
            backgroundColor: brand.goldSoft,
          },
        },
      }}
    >
      {item.children ? (
        <Box
          component="span"
          aria-hidden="true"
          className="nav-subsection-line"
          sx={{
            position: "absolute",
            left: "50%",
            bottom: 2,
            width: active ? "100%" : 14,
            height: 2,
            transform: "translateX(-50%)",
            borderRadius: "2px",
            backgroundColor: active ? brand.goldSoft : brand.gold,
            opacity: active ? 1 : 0.5,
            transition:
              "width 0.26s ease, opacity 0.22s ease, background-color 0.22s ease",
          }}
        />
      ) : null}
      {label}
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Encabezado                                                          */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const wideNav = useMediaQuery("(min-width:1400px)");

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
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
          display: "flex",
          backgroundColor: brand.primaryDark,
          boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.14)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: { xs: 1.5, sm: 2, md: 3, lg: 4, xl: 5 },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              width: "100%",
              minHeight: "var(--header-topbar-h)",
              flexWrap: "nowrap",
              rowGap: 0.2,
              columnGap: { sm: 2, md: 1.5, lg: 2, xl: 3 },
              py: { xs: 0.55, sm: 0.35 },
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0 }}>
              <SectionSearch />
            </Box>

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

              const itemSx = {
                ...contactItemSx,
                fontSize: { xs: "0.72rem", sm: "0.78rem", md: "0.84rem" },
                display: {
                  xs: item.hideOnMobile ? "none" : "inline-flex",
                  sm: "inline-flex",
                },
              } as const;

              return item.href ? (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={itemSx}
                >
                  {content}
                </Box>
              ) : (
                <Box key={item.label} sx={itemSx}>
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
              paddingLeft: 5,
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
              columnGap: { lg: 0.7, xl: 1.0 },
              mx: { lg: 0.6, xl: 1.2 },
            }}
          >
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.to}
                item={item}
                label={wideNav ? item.label : item.shortLabel ?? item.label}
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

            <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <SectionSearch compact />
            </Box>

            <IconButton
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
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
        onClose={() => setMobileOpen(false)}
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
              onClick={() => setMobileOpen(false)}
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
                      component={RouterLink}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      aria-current={itemActive ? "page" : undefined}
                      sx={{
                        width: "100%",
                        px: 0,
                        py: 1.35,
                        color: itemActive ? brand.primaryDeep : brand.ink,
                        textAlign: "left",
                        backgroundColor: itemActive
                          ? "rgba(243,187,57,0.1)"
                          : "transparent",
                        boxShadow: itemActive
                          ? `inset 2px 0 0 ${brand.gold}`
                          : "none",
                        transition: "background-color 0.18s ease",
                        "&:hover": {
                          backgroundColor: "rgba(243,187,57,0.06)",
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
                        <Box
                          aria-hidden="true"
                          sx={{
                            width: 5,
                            height: 5,
                            flexShrink: 0,
                            transform: "rotate(45deg)",
                            backgroundColor: brand.gold,
                            opacity: itemActive ? 1 : 0.85,
                          }}
                        />
                      ) : null}
                    </ListItemButton>
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
                Mesa de Partes
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
                  <PhoneOutlinedIcon sx={{ fontSize: 17, flexShrink: 0 }} />
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
                  <MailOutlinedIcon sx={{ fontSize: 17, flexShrink: 0 }} />
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
                    sx={{ fontSize: 17, mt: 0.2, flexShrink: 0 }}
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
                  rowGap: 1,
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
