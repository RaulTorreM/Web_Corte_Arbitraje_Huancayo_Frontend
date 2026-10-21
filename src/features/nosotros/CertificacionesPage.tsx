import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import { Stagger } from "../../components/common/Reveal";
import { fadeUp, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";

const CERTIFICACIONES = [
  {
    norma: "ISO 9001:2015",
    estado: "En implementación",
    titulo: "Sistema de gestión de la calidad",
    icon: VerifiedOutlinedIcon,
    text: "La Corte se encuentra implementando un sistema de gestión de la calidad. Aún no cuenta con certificación otorgada; el diagnóstico y el mapa de procesos están concluidos.",
    items: [
      "Procesos documentados y auditables",
      "Seguimiento de la satisfacción de las partes",
      "Revisión periódica por la alta dirección",
    ],
  },
  {
    norma: "ISO 37001:2016",
    estado: "En implementación",
    titulo: "Sistema de gestión antisoborno",
    icon: ShieldOutlinedIcon,
    text: "La política antisoborno se encuentra aprobada y el sistema en implementación. No debe presentarse como certificación obtenida hasta que exista el certificado correspondiente.",
    items: [
      "Debida diligencia de terceros",
      "Canal de denuncias confidencial",
      "Cultura de integridad y transparencia",
    ],
  },
];

const COMPROMISOS = [
  "Actuar con independencia, imparcialidad y transparencia en cada procedimiento.",
  "Proteger la confidencialidad de la información de las partes.",
  "Cumplir los requisitos legales, reglamentarios y de nuestros usuarios.",
  "Mejorar de forma continua la eficacia del sistema integrado de gestión.",
];

export default function CertificacionesPage() {
  return (
    <>
      <PageMeta
        title="Certificaciones"
        description="Estado de implementación de los sistemas de gestión de calidad y antisoborno de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Calidad e integridad"
        title="Estándares en construcción"
        subtitle="La Corte se encuentra implementando sistemas de gestión de calidad y antisoborno. Publicamos su estado real y no presentamos como certificación obtenida lo que aún está en proceso."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Certificaciones" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Certificaciones"
            title="Calidad e integridad como compromiso institucional"
            subtitle="Los sistemas de gestión se encuentran en implementación. Su avance se refleja en la política antisoborno, el mapa de procesos y los controles internos."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {CERTIFICACIONES.map((certificacion, index) => {
                const Icon = certificacion.icon;
                const dark = index === 0;

                return (
                  <Grid key={certificacion.norma} size={{ xs: 12, md: 6 }}>
                    <Stack
                      component={motion.article}
                      variants={fadeUp}
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: "100%",
                        p: { xs: 3, md: 4 },
                        backgroundColor: dark ? brand.primaryDark : brand.white,
                        color: dark ? brand.white : brand.ink,
                        border: `1px solid ${dark ? brand.primaryDark : brand.line}`,
                        borderTop: `3px solid ${brand.gold}`,
                      }}
                    >
                      <Typography
                        aria-hidden
                        sx={{
                          position: "absolute",
                          right: 16,
                          top: 0,
                          fontFamily: fonts.display,
                          fontSize: { xs: "4.5rem", md: "6rem" },
                          fontWeight: 600,
                          lineHeight: 1,
                          color: dark
                            ? "rgba(255,255,255,0.045)"
                            : "rgba(45,73,121,0.05)",
                        }}
                      >
                        ISO
                      </Typography>

                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: dark ? "rgba(186,153,7,0.16)" : brand.skySoft,
                          color: dark ? brand.goldSoft : brand.primary,
                          border: `1px solid ${dark ? "rgba(186,153,7,0.35)" : brand.skyMid}`,
                          mb: 2.8,
                        }}
                      >
                        <Icon sx={{ fontSize: "1.6rem" }} />
                      </Box>

                      <Typography
                        sx={{
                          color: dark ? brand.goldSoft : brand.goldDeep,
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                        }}
                      >
                        {certificacion.norma} · {certificacion.estado}
                      </Typography>

                      <Typography
                        variant="h3"
                        sx={{
                          mt: 1,
                          color: dark ? brand.white : brand.primaryDark,
                          fontSize: { xs: "1.5rem", md: "1.75rem" },
                        }}
                      >
                        {certificacion.titulo}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1.8,
                          color: dark ? "rgba(255,255,255,0.72)" : brand.muted,
                          fontSize: "0.94rem",
                          lineHeight: 1.8,
                        }}
                      >
                        {certificacion.text}
                      </Typography>

                      <Stack spacing={1.3} sx={{ mt: 3 }}>
                        {certificacion.items.map((item) => (
                          <Stack key={item} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                            <CheckCircleOutlineIcon
                              sx={{
                                fontSize: "1.05rem",
                                color: dark ? brand.goldSoft : brand.goldDeep,
                                mt: "2px",
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                color: dark ? "rgba(255,255,255,0.78)" : brand.ink,
                                fontSize: "0.86rem",
                                lineHeight: 1.6,
                              }}
                            >
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
          borderBottom: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack
                component={motion.div}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                spacing={2.5}
              >
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: brand.primaryDark,
                    color: brand.goldSoft,
                  }}
                >
                  <WorkspacePremiumOutlinedIcon />
                </Box>

                <Typography
                  variant="h2"
                  sx={{ color: brand.primaryDark, fontSize: { xs: "1.9rem", md: "2.3rem" } }}
                >
                  Compromisos de calidad e integridad
                </Typography>

                <Typography sx={{ color: brand.muted, fontSize: "0.96rem", lineHeight: 1.8 }}>
                  Mientras los sistemas de gestión completan su implementación,
                  la Corte mantiene compromisos públicos de actuación. No se
                  publican números de registro ni certificados que no puedan
                  acreditarse documentalmente.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: brand.white,
                  border: `1px solid ${brand.line}`,
                  borderLeft: `4px solid ${brand.gold}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    fontSize: { xs: "1.25rem", md: "1.45rem" },
                    fontStyle: "italic",
                    color: brand.primaryDark,
                    lineHeight: 1.55,
                    mb: 3,
                  }}
                >
                  “Administramos arbitrajes con rigor técnico, protegiendo la
                  confianza de las partes y actuando siempre con integridad.”
                </Typography>

                <Stack spacing={1.6}>
                  {COMPROMISOS.map((compromiso) => (
                    <Stack key={compromiso} direction="row" spacing={1.4} sx={{ alignItems: "flex-start" }}>
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: brand.gold,
                          mt: "8px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography sx={{ color: brand.muted, fontSize: "0.9rem", lineHeight: 1.65 }}>
                        {compromiso}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="La confianza se construye con hechos"
        subtitle="Conoce nuestros reglamentos, políticas y canales de atención institucional."
        primaryLabel="Contactar a la Corte"
        primaryTo="/contacto"
        secondaryLabel="Ver documentos"
        secondaryTo="/documentos"
      />
    </>
  );
}
