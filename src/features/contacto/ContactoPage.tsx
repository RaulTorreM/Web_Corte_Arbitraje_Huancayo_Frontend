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

const HORARIOS = SITE.contact.schedule.reduce<
  { dia: string; horas: string[] }[]
>((groups, line) => {
  const separator = line.indexOf(": ");
  if (separator === -1) return groups;

  const dia = line.slice(0, separator);
  const hora = line.slice(separator + 2);
  const current = groups[groups.length - 1];

  if (current?.dia === dia) {
    current.horas.push(hora);
  } else {
    groups.push({ dia, horas: [hora] });
  }

  return groups;
}, []);

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

      <Box component="section" sx={{ py: { xs: 5, md: 7 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Canales"
            title="Hablemos por el canal que prefieras"
            subtitle="No usamos formularios con envío simulado. Cada consulta llega directamente a la Secretaría General por un canal real."
          />

          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {CANALES.map((canal) => {
                const Icon = canal.icon;

                return (
                  <Grid key={canal.label} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                      component={motion.a}
                      variants={fadeUp}
                      href={canal.href}
                      target={
                        canal.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        canal.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.4,
                        height: "100%",
                        pt: 2,
                        borderTop: `1px solid ${brand.lineStrong}`,
                        textDecoration: "none",
                        transition: "border-color 0.18s ease",
                        "&:hover": {
                          borderColor: brand.gold,
                        },
                        "&:hover .canal-arrow": {
                          color: brand.primary,
                          transform: "translateX(3px)",
                        },
                      }}
                    >
                      <Icon
                        sx={{
                          color: brand.goldInk,
                          fontSize: 20,
                          mt: "3px",
                          flexShrink: 0,
                        }}
                      />

                      <Box sx={{ flex: 1, minWidth: 0 }}>
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
                            fontSize: { xs: "0.95rem", md: "1.08rem" },
                            fontWeight: 600,
                            lineHeight: 1.3,
                            wordBreak: "break-word",
                          }}
                        >
                          {canal.value}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 0.6,
                            color: brand.muted,
                            fontSize: "0.8rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {canal.note}
                        </Typography>
                      </Box>

                      <OpenInNewIcon
                        className="canal-arrow"
                        sx={{
                          fontSize: 17,
                          color: brand.lineStrong,
                          mt: "4px",
                          flexShrink: 0,
                          transition: "all 0.18s ease",
                        }}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.85fr) minmax(0, 1.15fr)" },
              backgroundColor: brand.white,
              border: `1px solid ${brand.line}`,
              borderTop: `3px solid ${brand.gold}`,
              boxShadow: "0 12px 30px rgba(9,35,84,0.06)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.6,
                p: { xs: 2, md: 2.5 },
                borderBottom: { xs: `1px solid ${brand.line}`, md: 0 },
                borderRight: { md: `1px solid ${brand.line}` },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  placeItems: "center",
                  width: 42,
                  height: 42,
                  flexShrink: 0,
                  color: brand.goldInk,
                  backgroundColor: brand.paper,
                  border: `1px solid ${brand.line}`,
                }}
              >
                <AccessTimeOutlinedIcon sx={{ fontSize: 21 }} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: brand.goldInk,
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Horario de atención
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    mt: 0.5,
                    color: brand.primaryDeep,
                    fontSize: "1.45rem",
                  }}
                >
                  Secretaría General
                </Typography>
                <Typography
                  sx={{
                    mt: 0.6,
                    color: brand.muted,
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                  }}
                >
                  Atención presencial y telefónica.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: { xs: 2, sm: 3 },
                p: { xs: 2, md: 2.5 },
              }}
            >
              {HORARIOS.map((grupo) => (
                <Box key={grupo.dia}>
                  <Typography
                    sx={{
                      pb: 1,
                      color: brand.primaryDeep,
                      fontFamily: fonts.display,
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    {grupo.dia}
                  </Typography>

                  <Stack spacing={0.7} sx={{ mt: 1.2 }}>
                    {grupo.horas.map((hora) => (
                      <Stack
                        key={hora}
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center" }}
                      >
                        <Box
                          aria-hidden="true"
                          sx={{
                            width: 14,
                            height: 1,
                            flexShrink: 0,
                            backgroundColor: brand.gold,
                          }}
                        />
                        <Typography
                          sx={{
                            color: brand.muted,
                            fontSize: "0.83rem",
                            lineHeight: 1.55,
                          }}
                        >
                          {hora}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 5, md: 7 }, backgroundColor: brand.paper }}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              alignItems: { sm: "flex-end" },
              justifyContent: "space-between",
              mb: 2,
            }}
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

              <Typography
                variant="h2"
                sx={{
                  color: brand.primaryDeep,
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                }}
              >
                Cómo llegar
              </Typography>
            </Box>

            <Typography
              sx={{ color: brand.muted, fontSize: "0.74rem", maxWidth: 360 }}
            >
              Ubicación de la sede institucional.
            </Typography>
          </Stack>

          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            sx={{
              mt: 1,
              pt: 2.5,
              borderTop: `2px solid ${brand.gold}`,
            }}
          >
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 320, md: 420 },
                  backgroundColor: brand.white,
                  border: `1px solid ${brand.line}`,
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
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 12, sm: 18, md: 22 },
                    right: { xs: 12, sm: "auto" },
                    bottom: { xs: 12, sm: 18, md: 22 },
                    zIndex: 1,
                    width: { xs: "auto", sm: 360 },
                    p: { xs: 1.8, md: 2.2 },
                    backgroundColor: "rgba(247,250,254,0.96)",
                    borderTop: `3px solid ${brand.gold}`,
                    boxShadow: "0 14px 34px rgba(9,35,84,0.18)",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.4}
                    sx={{ alignItems: "flex-start" }}
                  >
                    <PlaceOutlinedIcon
                      sx={{
                        fontSize: 26,
                        color: brand.goldInk,
                        mt: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          color: brand.goldInk,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        Dirección
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.5,
                          color: brand.primaryDeep,
                          fontFamily: fonts.display,
                          fontSize: { xs: "1.05rem", md: "1.2rem" },
                          fontWeight: 600,
                          lineHeight: 1.35,
                        }}
                      >
                        {SITE.contact.address}
                      </Typography>
                    </Box>
                  </Stack>

                  <Button
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${SITE.contact.mapQuery}, Huancayo, Perú`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    size="small"
                    endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      mt: 1.4,
                      px: 0,
                      color: brand.primary,
                      fontSize: "0.74rem",
                      fontWeight: 700,
                    }}
                  >
                    Abrir en Google Maps
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: { xs: 320, md: 420 },
                  overflow: "hidden",
                  backgroundColor: brand.white,
                  border: `1px solid ${brand.line}`,
                  "&:hover .sede-photo": { transform: "scale(1.03)" },
                }}
              >
                <Box
                  component="img"
                  className="sede-photo"
                  src={MEDIA.heroSede.src}
                  alt={MEDIA.heroSede.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    display: "block",
                    flex: 1,
                    minHeight: 0,
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center 55%",
                    transition: "transform 0.6s ease",
                  }}
                />

                <Box
                  sx={{
                    flexShrink: 0,
                    px: { xs: 1.8, md: 2.2 },
                    py: { xs: 1.5, md: 1.8 },
                    backgroundColor: brand.primaryDeep,
                    borderTop: `3px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: brand.goldSoft,
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                    }}
                  >
                    Fachada institucional
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.6,
                      color: brand.white,
                      fontFamily: fonts.display,
                      fontSize: { xs: "1.35rem", md: "1.55rem" },
                      fontWeight: 600,
                      lineHeight: 1.15,
                    }}
                  >
                    Sede de la Corte
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.4,
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "0.78rem",
                    }}
                  >
                    Huancayo, Perú
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  );
}
