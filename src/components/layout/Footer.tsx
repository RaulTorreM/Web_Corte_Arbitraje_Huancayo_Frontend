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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";
import { UTILITY_LINKS } from "../../data/navigation";
import BrandMark from "../common/BrandMark";
import TikTokIcon from "../icons/TikTokIcon";

const CORTE = [
  { label: "Quiénes somos", to: "/quienes-somos" },
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
        color: "rgba(255,255,255,0.66)",
        fontSize: "0.86rem",
        lineHeight: 1.55,
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
        mb: 2,
        color: brand.goldSoft,
        fontSize: "0.68rem",
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
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <BrandMark light />

            <Typography
              sx={{
                mt: 2.5,
                maxWidth: 330,
                color: "rgba(255,255,255,0.62)",
                fontSize: "0.87rem",
                lineHeight: 1.7,
              }}
            >
              {SITE.description}
            </Typography>

            <Stack direction="row" spacing={0.8} sx={{ mt: 3 }}>
              {SITE.socials.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    width: 36,
                    height: 36,
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

          <Grid size={{ xs: 6, md: 2 }}>
            <FooterLabel>La Corte</FooterLabel>
            <Stack spacing={1.05}>
              {CORTE.map((item) => (
                <FooterLink key={item.to} {...item} />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2.5 }}>
            <FooterLabel>Arbitraje</FooterLabel>
            <Stack spacing={1.05}>
              {ARBITRAJE.map((item) => (
                <FooterLink key={item.to} {...item} />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3.5 }}>
            <FooterLabel>Contacto</FooterLabel>

            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                <PlaceOutlinedIcon sx={{ fontSize: 18, color: brand.goldSoft, mt: "1px" }} />
                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.84rem", lineHeight: 1.55 }}>
                  {SITE.contact.address}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                <PhoneOutlinedIcon sx={{ fontSize: 18, color: brand.goldSoft }} />
                <Link
                  href={SITE.contact.phoneHref}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.84rem",
                    "&:hover": { color: brand.goldSoft },
                  }}
                >
                  {SITE.contact.phone}
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                <MailOutlinedIcon sx={{ fontSize: 18, color: brand.goldSoft }} />
                <Link
                  href={`mailto:${SITE.contact.email}`}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.84rem",
                    wordBreak: "break-all",
                    "&:hover": { color: brand.goldSoft },
                  }}
                >
                  {SITE.contact.email}
                </Link>
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
                  mt: 0.5,
                  color: brand.goldSoft,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  "&:hover": { color: brand.white },
                }}
              >
                Ver canales de atención
                <OpenInNewIcon sx={{ fontSize: 14 }} />
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 5 }, borderColor: "rgba(255,255,255,0.13)" }} />

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
              color: "rgba(255,255,255,0.48)",
              fontSize: "0.73rem",
              lineHeight: 1.6,
              maxWidth: 720,
            }}
          >
            © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.
          </Typography>

          <Stack direction="row" sx={{ flexWrap: "wrap", gap: { xs: 1.5, sm: 2.5 } }}>
            {UTILITY_LINKS.map((item) => (
              <Link
                key={item.to}
                component={RouterLink}
                to={item.to}
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.52)",
                  fontSize: "0.73rem",
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
                fontSize: "0.73rem",
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
