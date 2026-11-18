import type { ReactNode } from "react";
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

type FooterNavGroup = {
  title: string;
  links: { label: string; to: string }[];
};

const NAV_GROUPS: FooterNavGroup[] = [
  {
    title: "La Corte",
    links: [
      { label: "Quiénes somos", to: "/quienes-somos" },
      { label: "Consejo Directivo", to: "/quienes-somos/consejo-directivo" },
      { label: "Consejo Superior", to: "/quienes-somos/consejo" },
      { label: "Equipo de trabajo", to: "/quienes-somos/equipo" },
      { label: "Certificaciones", to: "/quienes-somos/certificaciones" },
      { label: "Documentos", to: "/documentos" },
      { label: "Capacitaciones", to: "/capacitaciones" },
    ],
  },
  {
    title: "Arbitraje",
    links: [
      { label: "Presentación", to: "/arbitraje" },
      { label: "Costos y tarifas", to: "/arbitraje/costos" },
      { label: "Reglamento y directivas", to: "/arbitraje/reglamentos" },
      { label: "Nómina de árbitros", to: "/arbitraje/arbitros" },
      { label: "Cláusula arbitral", to: "/arbitraje/clausula" },
      { label: "Inicio de arbitraje", to: "/arbitraje/inicio" },
      { label: "Banco de laudos", to: "/arbitraje/laudos" },
    ],
  },
  {
    title: "JPRD",
    links: [
      { label: "Presentación", to: "/jprd" },
      { label: "Reglamento y directivas", to: "/jprd/reglamento" },
      { label: "Nómina de adjudicadores", to: "/jprd/adjudicadores" },
      { label: "Aranceles JRD y JPRD", to: "/jprd/aranceles" },
      { label: "Cláusula", to: "/jprd/clausula" },
      { label: "Banco de decisiones", to: "/jprd/decisiones" },
    ],
  },
  {
    title: "Conciliación",
    links: [
      { label: "Presentación", to: "/conciliacion" },
      { label: "Inicio de conciliación", to: "/conciliacion/inicio" },
      { label: "Costos y tarifas", to: "/conciliacion/costos" },
      { label: "Reglamento", to: "/conciliacion/reglamento" },
    ],
  },
];

const CERTIFICACIONES = [
  {
    label: "ISO 27001",
    src: "/certificaciones/ISO_27001_footer.webp",
    alt: "Certificación ISO 27001",
  },
  {
    label: "ISO 37001",
    src: "/certificaciones/ISO_37001_gold.webp",
    alt: "Certificación ISO 37001",
  },
  {
    label: "ISO 9001",
    src: "/certificaciones/ISO_9001_gold.webp",
    alt: "Certificación ISO 9001",
  },
];

const LINK = "rgba(255,255,255,0.7)";
const RULE = "rgba(255,255,255,0.1)";

const CONTACT_LABEL = {
  color: brand.goldSoft,
  fontSize: "0.64rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  lineHeight: 1.4,
  textTransform: "uppercase",
} as const;

const CONTACT_VALUE = {
  color: LINK,
  fontSize: "0.8rem",
  lineHeight: 1.55,
} as const;

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
        display: "flex",
        alignItems: "flex-start",
        gap: 0.8,
        width: "fit-content",
        py: 0.25,
        color: LINK,
        fontSize: "0.79rem",
        lineHeight: 1.45,
        transition: "color 0.18s ease",
        "&::before": {
          content: '""',
          width: 8,
          height: 1,
          mt: "0.66em",
          flexShrink: 0,
          backgroundColor: brand.gold,
          opacity: 0.45,
          transition: "width 0.18s ease, opacity 0.18s ease",
        },
        "&:hover": {
          color: brand.goldSoft,
          "&::before": { width: 14, opacity: 1 },
        },
      }}
    >
      {label}
    </Link>
  );
}

function FooterLabel({ children }: { children: string }) {
  return (
    <Box>
      <Typography
        sx={{
          color: brand.goldSoft,
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          lineHeight: 1.35,
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
      <Box
        aria-hidden="true"
        sx={{
          width: 26,
          height: 1,
          mt: 0.8,
          backgroundColor: "rgba(231,216,174,0.38)",
        }}
      />
    </Box>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={0.8}
        sx={{ alignItems: "center", mb: 0.5 }}
      >
        {icon}
        <Typography sx={CONTACT_LABEL}>{label}</Typography>
      </Stack>
      <Box sx={{ pl: "24px" }}>{children}</Box>
    </Box>
  );
}

function FooterNavGroup({ group }: { group: FooterNavGroup }) {
  return (
    <Grid size={{ xs: 6, md: 3 }}>
      <Box
        sx={{
          height: "100%",
          pt: { xs: 1.5, md: 1.8 },
          borderTop: "1px solid rgba(231,216,174,0.28)",
        }}
      >
        <Box sx={{ mb: 1.3 }}>
          <FooterLabel>{group.title}</FooterLabel>
        </Box>
        <Stack spacing={0.35}>
          {group.links.map((link) => (
            <FooterLink key={link.to} {...link} />
          ))}
        </Stack>
      </Box>
    </Grid>
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
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "none",
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
          py: { xs: 4, md: 5 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <BrandMark light compact />

            <Typography
              sx={{
                mt: 1.6,
                maxWidth: 440,
                color: "rgba(255,255,255,0.66)",
                fontSize: "0.8rem",
                lineHeight: 1.55,
              }}
            >
              {SITE.description}
            </Typography>

            <Stack direction="row" spacing={0.6} sx={{ mt: 1.6 }}>
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

          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: { xs: 2, md: 2.2 },
                }}
              >
                <FooterLabel>Contacto</FooterLabel>

                <Link
                  component={RouterLink}
                  to="/contacto"
                  underline="none"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    pb: 0.2,
                    color: brand.goldSoft,
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    "&:hover": { color: brand.white },
                  }}
                >
                  Ver canales de atención
                  <OpenInNewIcon sx={{ fontSize: 13 }} />
                </Link>
              </Stack>

              <Box
                sx={{
                  position: "relative",
                  flexGrow: 1,
                  display: "flex",
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "50%",
                    width: "1px",
                    backgroundColor: RULE,
                  }}
                />

                <Box
                  sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    columnGap: { sm: 3, md: 4 },
                    rowGap: { xs: 2.2, sm: 2.6 },
                    alignContent: "start",
                    "& > *": { minWidth: 0 },
                    "& > :nth-of-type(2n)": {
                      pl: { sm: 3, md: 4 },
                    },
                  }}
                >
                  <ContactItem
                    icon={<PlaceOutlinedIcon sx={{ fontSize: 16, color: brand.goldSoft }} />}
                    label="Dirección"
                  >
                    <Typography sx={CONTACT_VALUE}>
                      {SITE.contact.address}
                    </Typography>
                  </ContactItem>

                  <ContactItem
                    icon={<PhoneOutlinedIcon sx={{ fontSize: 16, color: brand.goldSoft }} />}
                    label="Teléfono"
                  >
                    <Link
                      href={SITE.contact.phoneHref}
                      underline="none"
                      sx={[CONTACT_VALUE, { "&:hover": { color: brand.goldSoft } }]}
                    >
                      {SITE.contact.phone}
                    </Link>
                  </ContactItem>

                  <ContactItem
                    icon={<MailOutlinedIcon sx={{ fontSize: 16, color: brand.goldSoft }} />}
                    label="Correo"
                  >
                    <Link
                      href={`mailto:${SITE.contact.email}`}
                      underline="none"
                      sx={[
                        CONTACT_VALUE,
                        { wordBreak: "break-word", "&:hover": { color: brand.goldSoft } },
                      ]}
                    >
                      {SITE.contact.email}
                    </Link>
                  </ContactItem>

                  <ContactItem
                    icon={<ScheduleOutlinedIcon sx={{ fontSize: 16, color: brand.goldSoft }} />}
                    label="Horario de atención"
                  >
                    <Stack spacing={0.2}>
                      {SITE.contact.schedule.map((linea) => (
                        <Typography
                          key={linea}
                          sx={{ color: LINK, fontSize: "0.76rem", lineHeight: 1.45 }}
                        >
                          {linea}
                        </Typography>
                      ))}
                    </Stack>
                  </ContactItem>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 2.5, md: 3 } }}>
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box component="nav" aria-label="Enlaces del pie de página">
                <Grid container spacing={{ xs: 3, md: 2 }}>
                  {NAV_GROUPS.map((group) => (
                    <FooterNavGroup key={group.title} group={group} />
                  ))}
                </Grid>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 2, md: 2.2 },
                  backgroundColor: "#23417153",
                  border: "1px solid rgba(231,216,174,0.22)",
                  borderTop: `2px solid ${brand.gold}`,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: brand.goldSoft,
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  Certificaciones
                </Typography>
                <Typography
                  sx={{
                    mt: 0.6,
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.72rem",
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}
                >
                  Sistema de Gestión Integrada
                </Typography>

                <Stack
                  direction="row"
                  spacing={{ xs: 1.2, sm: 1.8 }}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    rowGap: 1,
                    width: "100%",
                    mt: 1.8,
                  }}
                >
                  {CERTIFICACIONES.map((certificacion) => (
                    <Box
                      key={certificacion.label}
                      component="img"
                      src={certificacion.src}
                      alt={certificacion.alt}
                      sx={{
                        display: "block",
                        height: { xs: 42, sm: 84 },
                        width: "auto",
                        opacity: 1,
                        filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.18))",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: { xs: 2.5, md: 3 }, borderColor: "rgba(255,255,255,0.13)" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1.4, md: 1.2 }}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: 1.2,
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.48)",
              fontSize: "0.72rem",
              lineHeight: 1.5,
              maxWidth: 820,
              flex: { md: "1 1 520px" },
              minWidth: 0,
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
