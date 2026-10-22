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
import { brand, fonts } from "../../theme/brand";
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
    pathname === item.to ||
    (item.to !== "/" && pathname.startsWith(`${item.to}/`));

  if (!item.children) {
    return (
      <Box
        component={RouterLink}
        to={item.to}
        onClick={onClose}
        sx={{
          position: "relative",
          py: 3,
          color: active ? brand.primaryDeep : brand.ink,
          textDecoration: "none",
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.01em",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 18,
            height: 2,
            backgroundColor: brand.gold,
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
      sx={{ position: "relative" }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Stack
        component="button"
        type="button"
        direction="row"
        spacing={0.4}
        onClick={open ? onClose : onOpen}
        aria-expanded={open}
        aria-haspopup="true"
        sx={{
          alignItems: "center",
          background: "none",
          border: 0,
          p: 0,
          py: 3,
          fontFamily: "inherit",
          cursor: "pointer",
          color: active ? brand.primaryDeep : brand.ink,
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.01em",
          "& svg": {
            fontSize: 17,
            transition: "transform 0.18s ease",
            transform: open ? "rotate(180deg)" : "none",
          },
        }}
      >
        {item.label}
        <ExpandMoreIcon />
      </Stack>

      <Box
        role="menu"
        sx={{
          position: "absolute",
          top: "calc(100% - 6px)",
          left: -18,
          width: 290,
          py: 1,
          backgroundColor: brand.whiteSoft,
          border: `1px solid ${brand.line}`,
          boxShadow: "0 16px 34px rgba(10,27,43,0.12)",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: open ? "translateY(0)" : "translateY(-4px)",
          transition: "opacity 0.16s ease, transform 0.16s ease, visibility 0.16s",
        }}
      >
        {item.children.map((child) => {
          const childActive = pathname === child.to;
          return (
            <Box
              key={child.to}
              component={RouterLink}
              to={child.to}
              role="menuitem"
              onClick={onClose}
              sx={{
                display: "block",
                px: 2.2,
                py: 1.15,
                color: childActive ? brand.primary : brand.ink,
                textDecoration: "none",
                fontSize: "0.85rem",
                lineHeight: 1.4,
                borderLeft: `2px solid ${childActive ? brand.gold : "transparent"}`,
                backgroundColor: childActive ? brand.paper : "transparent",
                transition: "background-color 0.16s ease, color 0.16s ease",
                "&:hover": {
                  backgroundColor: brand.paper,
                  color: brand.primary,
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

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1200,
          backgroundColor: "rgba(244,240,231,0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${brand.line}`,
          color: brand.ink,
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 68, md: 78 },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <BrandMark />

            <Stack
              component="nav"
              aria-label="Navegación principal"
              direction="row"
              spacing={{ lg: 2.1, xl: 2.8 }}
              sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}
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

            <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
              <Button
                component={RouterLink}
                to="/arbitraje/inicio"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  whiteSpace: "nowrap",
                }}
              >
                Iniciar arbitraje
              </Button>

              <IconButton
                aria-label="Abrir menú"
                onClick={() => {
                  setOpenMenu(null);
                  setMobileGroup(null);
                  setMobileOpen(true);
                }}
                sx={{
                  display: { xs: "inline-flex", lg: "none" },
                  border: `1px solid ${brand.lineStrong}`,
                  borderRadius: 0,
                  width: 44,
                  height: 44,
                }}
              >
                <MenuIcon />
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
              width: { xs: "100%", sm: 390 },
              backgroundColor: brand.paper,
              backgroundImage: "none",
            },
          },
        }}
      >
        <Stack sx={{ minHeight: "100%", p: 2.5 }} spacing={2}>
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <BrandMark compact onClick={() => setMobileOpen(false)} />
            <IconButton aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider />

          <List disablePadding sx={{ flex: 1 }}>
            {NAV_ITEMS.map((item) => (
              <Box key={item.to} sx={{ borderBottom: `1px solid ${brand.line}` }}>
                <ListItemButton
                  component={item.children ? "button" : RouterLink}
                  {...(item.children
                    ? { onClick: () => setMobileGroup(mobileGroup === item.to ? null : item.to) }
                    : { to: item.to, onClick: () => setMobileOpen(false) })}
                  sx={{
                    px: 0,
                    py: 1.25,
                    color: brand.ink,
                    "&:hover": { backgroundColor: "transparent", color: brand.primary },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontFamily: fonts.display,
                          fontSize: "1.18rem",
                          fontWeight: 600,
                        },
                      },
                    }}
                  />
                  {item.children ? (
                    <ExpandMoreIcon
                      sx={{
                        color: brand.muted,
                        transform: mobileGroup === item.to ? "rotate(180deg)" : "none",
                        transition: "transform 0.18s ease",
                      }}
                    />
                  ) : null}
                </ListItemButton>

                {item.children ? (
                  <Collapse in={mobileGroup === item.to} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ pb: 1.2 }}>
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.to}
                          component={RouterLink}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          sx={{
                            py: 0.6,
                            pl: 1.4,
                            borderLeft: `1px solid ${brand.lineStrong}`,
                            color: brand.muted,
                            "&:hover": { backgroundColor: "transparent", color: brand.primary },
                          }}
                        >
                          <ListItemText
                            primary={child.label}
                            slotProps={{
                              primary: { sx: { fontSize: "0.86rem", lineHeight: 1.45 } },
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                ) : null}
              </Box>
            ))}
          </List>

          <Stack spacing={1.1}>
            <Button
              component={RouterLink}
              to="/arbitraje/inicio"
              variant="contained"
              fullWidth
              endIcon={<ArrowForwardIcon />}
              onClick={() => setMobileOpen(false)}
            >
              Iniciar un arbitraje
            </Button>

            <Stack direction="row" spacing={2} sx={{ pt: 0.5 }}>
              <Box
                component="a"
                href={SITE.contact.phoneHref}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.7,
                  color: brand.muted,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                }}
              >
                <PhoneOutlinedIcon sx={{ fontSize: 16 }} />
                {SITE.contact.phone}
              </Box>
              <Box
                component="a"
                href={`mailto:${SITE.contact.email}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.7,
                  color: brand.muted,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                }}
              >
                <MailOutlinedIcon sx={{ fontSize: 16 }} />
                Escríbenos
              </Box>
            </Stack>

            <Divider />

            <Stack direction="row" spacing={2}>
              {UTILITY_LINKS.map((link) => (
                <Typography
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    color: brand.muted,
                    textDecoration: "none",
                    fontSize: "0.74rem",
                    "&:hover": { color: brand.primary },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
