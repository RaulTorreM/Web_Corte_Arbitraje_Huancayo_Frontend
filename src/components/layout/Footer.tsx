import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";
import { UTILITY_LINKS } from "../../data/navigation";
import BrandMark from "../common/BrandMark";
import TikTokIcon from "../icons/TikTokIcon";
import seal from "../../assets/brand/logo-corte.png";

const EXPLORA = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Documentos", to: "/documentos" },
  { label: "Capacitaciones", to: "/capacitaciones" },
  { label: "Contacto", to: "/contacto" },
];

const ARBITRAJE = [
  { label: "Presentación", to: "/arbitraje" },
  { label: "Costos y tarifas", to: "/arbitraje/costos" },
  { label: "Nómina de árbitros", to: "/arbitraje/arbitros" },
  { label: "Cláusula arbitral", to: "/arbitraje/clausula" },
  { label: "Banco de laudos", to: "/arbitraje/laudos" },
  { label: "JPRD", to: "/jprd" },
];

const socialIcon = (icon: string) => {
  if (icon === "facebook") return <FacebookIcon fontSize="small" />;
  if (icon === "instagram") return <InstagramIcon fontSize="small" />;
  return <TikTokIcon fontSize="small" />;
};

function FooterLink({ label, to }: { label: string; to: string }) {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline="none"
      sx={{
        display: "block",
        width: "fit-content",
        color: "rgba(255,255,255,0.68)",
        fontSize: "0.9rem",
        lineHeight: 1.6,
        transition: "color 0.2s ease, transform 0.2s ease",
        "&:hover": {
          color: brand.goldSoft,
          transform: "translateX(3px)",
        },
      }}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: brand.primaryDeep,
        color: brand.white,
        borderTop: `3px solid ${brand.gold}`,
      }}
    >
      <Box
        aria-hidden
        component="img"
        src={seal}
        alt=""
        sx={{
          position: "absolute",
          right: { xs: "-25%", md: "-4%" },
          bottom: { xs: "-30%", md: "-40%" },
          width: { xs: 460, md: 520 },
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <BrandMark light />

            <Typography
              sx={{
                mt: 2.5,
                maxWidth: 330,
                color: "rgba(255,255,255,0.62)",
                fontSize: "0.86rem",
                lineHeight: 1.75,
              }}
            >
              {SITE.description}
            </Typography>

            <Typography
              sx={{
                mt: 3,
                mb: 1.4,
                color: "rgba(255,255,255,0.82)",
                fontSize: "0.78rem",
                fontWeight: 650,
              }}
            >
              Síguenos en nuestras redes
            </Typography>

            <Stack direction="row" spacing={1.2}>
              {SITE.socials.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    width: 38,
                    height: 38,
                    color: brand.white,
                    border: "1px solid rgba(255,255,255,0.24)",
                    borderRadius: "50%",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: brand.goldSoft,
                      borderColor: brand.gold,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {socialIcon(social.icon)}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                mb: 2,
                color: brand.white,
                fontSize: "0.8rem",
                fontWeight: 750,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Explora
            </Typography>

            <Stack spacing={1.2}>
              {EXPLORA.map((item) => (
                <FooterLink key={item.to} {...item} />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              sx={{
                mb: 2,
                color: brand.white,
                fontSize: "0.8rem",
                fontWeight: 750,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Arbitraje
            </Typography>

            <Stack spacing={1.2}>
              {ARBITRAJE.map((item) => (
                <FooterLink key={item.to} {...item} />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                mb: 2,
                color: brand.white,
                fontSize: "0.8rem",
                fontWeight: 750,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Contacto
            </Typography>

            <Stack spacing={1.7}>
              <Stack direction="row" spacing={1.3} sx={{ alignItems: "flex-start" }}>
                <PlaceOutlinedIcon
                  sx={{ fontSize: "1.15rem", color: brand.goldSoft, mt: "2px" }}
                />
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.66)",
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                  }}
                >
                  {SITE.contact.address}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.3} sx={{ alignItems: "center" }}>
                <PhoneOutlinedIcon sx={{ fontSize: "1.15rem", color: brand.goldSoft }} />
                <Link
                  href={SITE.contact.phoneHref}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.66)",
                    fontSize: "0.85rem",
                    "&:hover": { color: brand.goldSoft },
                  }}
                >
                  {SITE.contact.phone}
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.3} sx={{ alignItems: "center" }}>
                <MailOutlinedIcon sx={{ fontSize: "1.15rem", color: brand.goldSoft }} />
                <Link
                  href={`mailto:${SITE.contact.email}`}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.66)",
                    fontSize: "0.85rem",
                    wordBreak: "break-all",
                    "&:hover": { color: brand.goldSoft },
                  }}
                >
                  {SITE.contact.email}
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.3} sx={{ alignItems: "flex-start" }}>
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: "1.15rem", color: brand.goldSoft, mt: "2px" }}
                />
                <Box>
                  {SITE.contact.schedule.map((line) => (
                    <Typography
                      key={line}
                      sx={{
                        color: "rgba(255,255,255,0.58)",
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 5 }, borderColor: "rgba(255,255,255,0.12)" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.76rem",
              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 1.5, sm: 2.5 }}
            sx={{ flexWrap: "wrap", gap: 1 }}
          >
            {UTILITY_LINKS.map((item) => (
              <Link
                key={item.to}
                component={RouterLink}
                to={item.to}
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.76rem",
                  "&:hover": { color: brand.goldSoft },
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={SITE.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.4,
                color: brand.goldSoft,
                fontSize: "0.76rem",
                "&:hover": { color: brand.white },
              }}
            >
              {SITE.mainSiteLabel}
              <OpenInNewIcon sx={{ fontSize: "0.72rem" }} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
