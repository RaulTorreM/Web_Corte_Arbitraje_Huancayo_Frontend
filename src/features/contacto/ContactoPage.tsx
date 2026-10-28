import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { SITE } from "../../data/site";
import { MEDIA } from "../../data/media";

const CANALES = [
  {
    label: "Teléfono",
    value: SITE.contact.phone,
    href: SITE.contact.phoneHref,
    icon: PhoneOutlinedIcon,
    note: "Atención directa de la Secretaría General en horario de oficina.",
  },
  {
    label: "Correo electrónico",
    value: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
    icon: MailOutlinedIcon,
    note: "Para consultas, solicitudes y envío de documentación. Indica el número de expediente si corresponde.",
  },
  {
    label: "WhatsApp",
    value: "Escribir por WhatsApp",
    href: `https://wa.me/${SITE.contact.whatsapp}`,
    icon: WhatsAppIcon,
    note: "Canal referencial para consultas breves. No reemplaza la presentación formal de documentos.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageMeta
        title="Contacto"
        description="Canales de atención de la Corte Superior de Arbitraje de Huancayo: teléfono, correo, WhatsApp, dirección y horarios."
      />

      <PageHero
        kicker="Atención institucional"
        title="Canales de atención"
        subtitle="La Secretaría General orienta consultas sobre arbitraje, documentación y capacitaciones. "
        crumbs={[{ label: "Contacto" }]}
        image={MEDIA.sede}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
          <Button
            href={`https://wa.me/${SITE.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<WhatsAppIcon />}
          >
            Escribir por WhatsApp
          </Button>
          <Button
            component={RouterLink}
            to="/arbitraje/inicio"
            variant="outlined"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
          >
            Ver requisitos
          </Button>
        </Stack>
      </PageHero>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Canales"
                title="Hablemos por el canal que prefieras"
                subtitle="No usamos formularios con envío simulado. Cada consulta llega directamente a la Secretaría General por un canal real."
              />

              <Stack
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                sx={{ borderTop: `1px solid ${brand.lineStrong}` }}
              >
                {CANALES.map((canal) => {
                  const Icon = canal.icon;

                  return (
                    <Box
                      key={canal.label}
                      component={motion.a}
                      variants={fadeUp}
                      href={canal.href}
                      target={canal.href.startsWith("http") ? "_blank" : undefined}
                      rel={canal.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "28px 1fr 24px",
                        gap: 1.6,
                        alignItems: "start",
                        py: 2.4,
                        borderBottom: `1px solid ${brand.line}`,
                        textDecoration: "none",
                        transition: "background-color 0.18s ease",
                        "&:hover": { backgroundColor: brand.paper },
                        "&:hover .canal-arrow": { color: brand.primary, transform: "translateX(3px)" },
                      }}
                    >
                      <Icon sx={{ color: brand.goldInk, fontSize: 20, mt: "3px" }} />

                      <Box>
                        <Typography
                          sx={{
                            color: brand.muted,
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {canal.label}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 0.4,
                            color: brand.primaryDeep,
                            fontFamily: fonts.display,
                            fontSize: "1.18rem",
                            fontWeight: 600,
                            lineHeight: 1.3,
                            wordBreak: "break-word",
                          }}
                        >
                          {canal.value}
                        </Typography>
                        <Typography sx={{ mt: 0.6, color: brand.muted, fontSize: "0.82rem", lineHeight: 1.6 }}>
                          {canal.note}
                        </Typography>
                      </Box>

                      <OpenInNewIcon
                        className="canal-arrow"
                        sx={{ fontSize: 17, color: brand.lineStrong, mt: "4px", transition: "all 0.18s ease" }}
                      />
                    </Box>
                  );
                })}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 2.2 }}>
                  <Typography
                    sx={{
                      color: brand.goldInk,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      mb: 1.2,
                    }}
                  >
                    Horario de atención
                  </Typography>

                  <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.55rem" }}>
                    Secretaría General
                  </Typography>

                  <Stack spacing={1.5} sx={{ mt: 2.2 }}>
                    <Stack direction="row" spacing={1.3} sx={{ alignItems: "flex-start" }}>
                      <AccessTimeOutlinedIcon sx={{ fontSize: 18, color: brand.goldInk, mt: "2px" }} />
                      <Box>
                        {SITE.contact.schedule.map((line) => (
                          <Typography
                            key={line}
                            sx={{ color: brand.muted, fontSize: "0.84rem", lineHeight: 1.6 }}
                          >
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    </Stack>
                  </Stack>

                </Box>

              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: { sm: "flex-end" }, justifyContent: "space-between", mb: 3 }}
          >
            <Box>
              <Typography
                sx={{
                  color: brand.goldInk,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Ubicación
              </Typography>

              <Typography variant="h2" sx={{ color: brand.primaryDeep, fontSize: { xs: "1.8rem", md: "2.3rem" } }}>
                Cómo llegar
              </Typography>
            </Box>

            <Typography sx={{ color: brand.muted, fontSize: "0.74rem", maxWidth: 360 }}>
              Ubicación de la sede institucional.
            </Typography>
          </Stack>

          <Box
            sx={{
              mt: 3,
              pt: 3,
              borderTop: `2px solid ${brand.gold}`,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) auto" },
              gap: { xs: 3, md: 4 },
              alignItems: { md: "end" },
            }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
              <PlaceOutlinedIcon sx={{ fontSize: 30, color: brand.goldInk, mt: "2px", flexShrink: 0 }} />

              <Box>
                <Typography
                  sx={{
                    color: brand.goldInk,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Dirección
                </Typography>

                <Typography
                  variant="h3"
                  sx={{ mt: 0.6, color: brand.primaryDeep, fontSize: { xs: "1.35rem", md: "1.7rem" } }}
                >
                  {SITE.contact.address}
                </Typography>

              </Box>
            </Stack>

            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.contact.mapQuery}, Huancayo, Perú`)}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<OpenInNewIcon sx={{ fontSize: 15 }} />}
              sx={{ width: { xs: "100%", sm: "fit-content" }, justifySelf: { md: "end" } }}
            >
              Abrir en Google Maps
            </Button>
          </Box>

          <Box
            sx={{
              mt: 4,
              border: `1px solid ${brand.line}`,
              backgroundColor: brand.white,
              overflow: "hidden",
            }}
          >
            <Box
              component="iframe"
              title="Mapa de ubicación de la sede de la Corte Superior de Arbitraje de Huancayo"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${SITE.contact.mapQuery}, Huancayo, Perú`
              )}&z=16&output=embed`}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              sx={{
                display: "block",
                width: "100%",
                height: { xs: 300, md: 420 },
                border: 0,
              }}
            />
          </Box>
        </Container>
      </Box>

    </>
  );
}
