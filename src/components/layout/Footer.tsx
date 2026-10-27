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
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";
import { UTILITY_LINKS } from "../../data/navigation";
import BrandMark from "../common/BrandMark";
import TikTokIcon from "../icons/TikTokIcon";

const CORTE = [
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Consejo Directivo", to: "/quienes-somos/consejo-directivo" },
  { label: "Consejo Superior", to: "/quienes-somos/consejo" },
  { label: "Certificaciones", to: "/quienes-somos/certificaciones" },
  { label: "Documentos", to: "/documentos" },
  { label: "Capacitaciones", to: "/capacitaciones" },
];

const ARBITRAJE = [
  { label: "Presentación", to: "/arbitraje" },
  { label: "Costos y tarifas", to: "/arbitraje/costos" },
  { label: "Nómina de árbitros", to: "/arbitraje/arbitros" },
  { label: "Cláusula arbitral", to: "/arbitraje/clausula" },
  { label: "Banco de laudos", to: "/arbitraje/laudos" },
  { label: "JPRD", to: "/jprd" },
];

const LINK = "rgba(255,255,255,0.7)";

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
        color: LINK,
        fontSize: "0.8rem",
        lineHeight: 1.45,
        transition: "color 0.18s ease",
        "&:hover": { color: brand.goldSoft },
      }}
    >
      {label}
    </Link>
  );
}

function FooterLabel({ children }: { children: string }) {
  return (
    <Typography
      sx={{
        mb: 1.2,
        color: brand.goldSoft,
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: brand.primaryDeep,
        color: brand.white,
        borderTop: `2px solid ${brand.gold}`,
      }}
    >
      <Container sx={{ py: { xs: 4, md: 5 } }}>
        <Grid container spacing={{ xs: 3, md: 3 }}>
          <Grid size={{ xs: 12, md: 3.5 }}>
            <BrandMark light />

            <Typography
              sx={{
                mt: 1.8,
                maxWidth: 300,
                color: "rgba(255,255,255,0.66)",
                fontSize: "0.82rem",
                lineHeight: 1.6,
              }}
            >
              {SITE.description}
            </Typography>

            <Stack direction="row" spacing={0.6} sx={{ mt: 2 }}>
              {SITE.socials.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    width: 32,
                    height: 32,
                    color: "rgba(255,255,255,0.82)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: 0,
                    "&:hover": {
                      color: brand.primaryDeep,
                      backgroundColor: brand.goldSoft,
                      borderColor: brand.goldSoft,
                    },
                  }}
                >
                  {socialIcon(social.icon)}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2.5 }}>
            <FooterLabel>La Corte</FooterLabel>
            <Stack spacing={0.55}>
              {CORTE.map((item) => (
                <FooterLink key={item.to} {...item} />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2.5 }}>
            <FooterLabel>Arbitraje</FooterLabel>
            <Stack spacing={0.55}>
              {ARBITRAJE.map((item) => (
                <FooterLink key={item.to} {...item} />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3.5 }}>
            <FooterLabel>Contacto</FooterLabel>

            <Stack spacing={0.8}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "flex-start" }}>
                <PlaceOutlinedIcon sx={{ fontSize: 16, color: brand.goldSoft, mt: "2px" }} />
                <Typography sx={{ color: LINK, fontSize: "0.8rem", lineHeight: 1.5 }}>
                  {SITE.contact.address}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <PhoneOutlinedIcon sx={{ fontSize: 16, color: brand.goldSoft }} />
                <Link
                  href={SITE.contact.phoneHref}
                  underline="none"
                  sx={{
                    color: LINK,
                    fontSize: "0.8rem",
                    "&:hover": { color: brand.goldSoft },
                  }}
                >
                  {SITE.contact.phone}
                </Link>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <MailOutlinedIcon sx={{ fontSize: 16, color: brand.goldSoft }} />
                <Link
                  href={`mailto:${SITE.contact.email}`}
                  underline="none"
                  sx={{
                    color: LINK,
                    fontSize: "0.8rem",
                    wordBreak: "break-all",
                    "&:hover": { color: brand.goldSoft },
                  }}
                >
                  {SITE.contact.email}
                </Link>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: "flex-start" }}>
                <ScheduleOutlinedIcon
                  sx={{ fontSize: 16, color: brand.goldSoft, mt: "2px" }}
                />
                <Box>
                  <Typography
                    sx={{
                      color: brand.white,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      lineHeight: 1.45,
                    }}
                  >
                    Horario de atención
                  </Typography>
                  <Stack spacing={0.1} sx={{ mt: 0.2 }}>
                    {SITE.contact.schedule.map((linea) => (
                      <Typography
                        key={linea}
                        sx={{ color: LINK, fontSize: "0.76rem", lineHeight: 1.45 }}
                      >
                        {linea}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Stack>

              <Link
                component={RouterLink}
                to="/contacto"
                underline="none"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  width: "fit-content",
                  mt: 0.3,
                  color: brand.goldSoft,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  "&:hover": { color: brand.white },
                }}
              >
                Ver canales de atención
                <OpenInNewIcon sx={{ fontSize: 13 }} />
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 2.5, md: 3 }, borderColor: "rgba(255,255,255,0.13)" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.2}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            width: 1200
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.48)",
              fontSize: "0.72rem",
              lineHeight: 1.5,
              maxWidth: 820,
            }}
          >
            © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.
          </Typography>

          <Stack direction="row" sx={{ flexWrap: "wrap", gap: { xs: 1.2, sm: 2 } }}>
            {UTILITY_LINKS.map((item) => (
              <Link
                key={item.to}
                component={RouterLink}
                to={item.to}
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.58)",
                  fontSize: "0.72rem",
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
                fontSize: "0.72rem",
                "&:hover": { color: brand.white },
              }}
            >
              {SITE.mainSiteLabel}
              <OpenInNewIcon sx={{ fontSize: 12 }} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
