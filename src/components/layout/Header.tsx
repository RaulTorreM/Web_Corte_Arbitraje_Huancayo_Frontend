import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";
import { NAV_ITEMS, UTILITY_LINKS, type NavItem } from "../../data/navigation";
import BrandMark from "../common/BrandMark";

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
    item.to === "/"
      ? pathname === "/"
      : pathname === item.to || pathname.startsWith(`${item.to}/`);

  const linkSx = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: 0.4,
    py: 1,
    color: active ? brand.primaryDark : brand.ink,
    fontSize: { lg: "0.8rem", xl: "0.84rem" },
    fontWeight: active ? 750 : 550,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "color 0.2s ease",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 4,
      height: 2,
      width: active ? "100%" : 0,
      backgroundColor: brand.gold,
      transition: "width 0.25s ease",
    },
    "&:hover": {
      color: brand.primary,
      "&::after": { width: "100%" },
    },
  } as const;

  if (!item.children?.length) {
    return (
      <Box component={RouterLink} to={item.to} sx={linkSx}>
        {item.highlight && (
          <Box
            component="span"
            sx={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: brand.gold,
              mr: 0.4,
            }}
          />
        )}
        {item.label}
      </Box>
    );
  }

  return (
    <Box
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      sx={{ position: "relative", display: "inline-flex" }}
    >
      <Box component={RouterLink} to={item.to} sx={linkSx}>
        {item.label}
        <ExpandMoreIcon
          sx={{
            fontSize: "0.98rem",
            color: active ? brand.primary : brand.muted,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: "-12px",
          pt: 1.2,
          display: open ? "block" : "none",
          zIndex: 1400,
        }}
      >
        <Box
          sx={{
            minWidth: 270,
            py: 0.8,
            backgroundColor: brand.white,
            border: `1px solid ${brand.line}`,
            boxShadow: "0 18px 44px rgba(18,35,61,0.14)",
          }}
        >
          {item.children.map((child) => {
            const childActive = pathname === child.to;

            return (
              <Box
                key={child.to}
                component={RouterLink}
                to={child.to}
                onClick={onClose}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  minHeight: 42,
                  px: 2.4,
                  color: childActive ? brand.primary : brand.ink,
                  backgroundColor: childActive
                    ? "rgba(157,196,239,0.18)"
                    : "transparent",
                  textDecoration: "none",
                  fontSize: "0.84rem",
                  fontWeight: childActive ? 700 : 500,
                  transition: "background-color 0.18s ease, color 0.18s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 8,
                    bottom: 8,
                    width: 2,
                    backgroundColor: brand.gold,
                    transform: childActive ? "scaleY(1)" : "scaleY(0)",
                    transition: "transform 0.18s ease",
                  },
                  "&:hover": {
                    backgroundColor: brand.skySoft,
                    color: brand.primary,
                    "&::before": { transform: "scaleY(1)" },
                  },
                }}
              >
                {child.label}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Patrón recomendado por React para ajustar estado cuando cambia la ruta,
  // sin un efecto que provoque renders en cascada.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleExpanded = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: `2px solid ${brand.gold}`,
          boxShadow: scrolled
            ? "0 10px 30px rgba(18,35,61,0.10)"
            : "0 1px 0 rgba(18,35,61,0.04)",
          transition: "box-shadow 0.25s ease",
          color: brand.ink,
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 74, md: 86 },
              gap: 2,
            }}
          >
            <BrandMark onClick={() => setMobileOpen(false)} />

            <Stack
              direction="row"
              spacing={{ lg: 1.6, xl: 2.2 }}
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                minWidth: 0,
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

            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", ml: "auto", flexShrink: 0 }}
            >
              <Button
                component={RouterLink}
                to="/arbitraje/inicio"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "0.95rem !important" }} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  px: { sm: 1.6, xl: 2.1 },
                  py: 0.9,
                  borderRadius: "3px",
                  background:
                    "linear-gradient(115deg, #E9CE78 0%, #D8B54A 52%, #C49A24 100%)",
                  border: "1px solid rgba(112,79,17,0.65)",
                  color: brand.primaryDeep,
                  fontSize: { sm: "0.72rem", xl: "0.78rem" },
                  fontWeight: 750,
                  letterSpacing: "0.03em",
                  whiteSpace: "nowrap",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.32), 0 2px 6px rgba(0,0,0,0.12)",
                  transition:
                    "transform 180ms ease, box-shadow 180ms ease, background 180ms ease",
                  "&:hover": {
                    background:
                      "linear-gradient(115deg, #F0D888 0%, #DFBC55 52%, #CFA52E 100%)",
                    color: brand.primaryDeep,
                    transform: "translateY(-1px)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.4), 0 5px 12px rgba(0,0,0,0.16)",
                  },
                }}
              >
                Iniciar arbitraje
              </Button>

              <IconButton
                aria-label={
                  mobileOpen
                    ? "Cerrar menú de navegación"
                    : "Abrir menú de navegación"
                }
                onClick={() => setMobileOpen((prev) => !prev)}
                sx={{
                  display: { xs: "inline-flex", lg: "none" },
                  color: brand.primaryDark,
                  width: 44,
                  height: 44,
                  border: `1px solid ${brand.line}`,
                  borderRadius: 1,
                  backgroundColor: brand.white,
                  "&:hover": {
                    backgroundColor: brand.skySoft,
                  },
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "90vw", sm: 370 },
              maxWidth: 390,
              backgroundColor: brand.white,
              display: "flex",
              flexDirection: "column",
              boxShadow: "-12px 0 44px rgba(18,35,61,0.22)",
            },
          },
        }}
      >
        <Box
          sx={{
            minHeight: 88,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: brand.primaryDark,
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
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ flex: 1, overflowY: "auto", py: 1.5 }}>
          <Typography
            sx={{
              px: 2.5,
              pb: 0.8,
              fontSize: "0.66rem",
              fontWeight: 750,
              color: brand.muted,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Navegación
          </Typography>

          <List disablePadding sx={{ px: 1.5 }}>
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length;
              const isExpanded = !!expanded[item.label];
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);

              return (
                <Box key={item.to}>
                  <ListItemButton
                    component={hasChildren ? "div" : RouterLink}
                    to={hasChildren ? undefined : item.to}
                    onClick={() => {
                      if (hasChildren) {
                        toggleExpanded(item.label);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                    sx={{
                      minHeight: 48,
                      borderRadius: 1,
                      mb: 0.3,
                      px: 2,
                      color: active ? brand.primary : brand.primaryDark,
                      backgroundColor: active
                        ? "rgba(157,196,239,0.22)"
                        : "transparent",
                      "&:hover": { backgroundColor: brand.skySoft },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: "0.93rem",
                            fontWeight: active ? 750 : 550,
                          },
                        },
                      }}
                    />

                    {hasChildren && (
                      <ExpandMoreIcon
                        sx={{
                          fontSize: "1.1rem",
                          color: brand.muted,
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    )}
                  </ListItemButton>

                  {hasChildren && (
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      <Box
                        sx={{
                          ml: 2.2,
                          pl: 1.2,
                          mb: 0.8,
                          borderLeft: `1px solid ${brand.line}`,
                        }}
                      >
                        {item.children?.map((child) => (
                          <ListItemButton
                            key={child.to}
                            component={RouterLink}
                            to={child.to}
                            onClick={() => setMobileOpen(false)}
                            sx={{
                              minHeight: 40,
                              borderRadius: 1,
                              px: 1.4,
                              color:
                                pathname === child.to
                                  ? brand.primary
                                  : brand.muted,
                              backgroundColor:
                                pathname === child.to
                                  ? "rgba(157,196,239,0.16)"
                                  : "transparent",
                              "&:hover": { backgroundColor: brand.skySoft },
                            }}
                          >
                            <ListItemText
                              primary={child.label}
                              slotProps={{
                                primary: {
                                  sx: { fontSize: "0.83rem", fontWeight: 500 },
                                },
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </Box>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </List>

          <Divider sx={{ mx: 2, my: 1.5 }} />

          <Stack spacing={0.4} sx={{ px: 1.5 }}>
            {UTILITY_LINKS.map((item) => (
              <ListItemButton
                key={item.to}
                component={RouterLink}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                sx={{
                  minHeight: 42,
                  borderRadius: 1,
                  px: 2,
                  color: brand.muted,
                  "&:hover": { backgroundColor: brand.skySoft },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: { sx: { fontSize: "0.85rem", fontWeight: 500 } },
                  }}
                />
              </ListItemButton>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            borderTop: `1px solid ${brand.line}`,
            backgroundColor: brand.paper,
            p: 2,
          }}
        >
          <Button
            fullWidth
            component={RouterLink}
            to="/arbitraje/inicio"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            sx={{
              py: 1.2,
              background:
                "linear-gradient(115deg, #E9CE78 0%, #D8B54A 52%, #C49A24 100%)",
              border: "1px solid rgba(112,79,17,0.65)",
              color: brand.primaryDeep,
              fontWeight: 750,
              mb: 1.2,
            }}
          >
            Cómo iniciar un arbitraje
          </Button>

          <Stack spacing={0.7} sx={{ px: 0.5 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PhoneOutlinedIcon sx={{ fontSize: "0.95rem", color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.76rem", color: brand.muted }}>
                {SITE.contact.phone}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <MailOutlinedIcon sx={{ fontSize: "0.95rem", color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.76rem", color: brand.muted }}>
                {SITE.contact.email}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PlaceOutlinedIcon sx={{ fontSize: "0.95rem", color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.76rem", color: brand.muted }}>
                {SITE.contact.address}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
