import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import { brand, fonts } from "../../theme/brand";
import { MEDIA } from "../../data/media";

const SISTEMAS = [
  {
    categoria: "Calidad",
    titulo: "Sistema de gestión de la calidad",
    text: "La Corte orienta su gestión a la mejora continua de sus procesos, con criterios de calidad, seguimiento y revisión permanente.",
    items: [
      "Procesos documentados y auditables",
      "Seguimiento de la satisfacción de las partes",
      "Revisión periódica por la alta dirección",
    ],
  },
  {
    categoria: "Integridad",
    titulo: "Sistema de gestión antisoborno",
    text: "La Corte promueve una actuación íntegra y transparente, con controles internos y canales de denuncia confidenciales.",
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
        description="Sistemas de gestión de la calidad y antisoborno de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Calidad e integridad"
        title="Certificaciones"
        subtitle="La Corte promueve estándares de calidad e integridad en la gestión de sus procedimientos."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Certificaciones" },
        ]}
        image={MEDIA.sede}
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Sistemas de gestión"
            title="Dos sistemas, un mismo compromiso institucional"
            subtitle="La calidad y la integridad orientan la actuación de la Corte en cada procedimiento."
          />

          <Grid container spacing={{ xs: 4, md: 5 }}>
            {SISTEMAS.map((sistema) => (
              <Grid key={sistema.titulo} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: "100%",
                    pt: 2.2,
                    borderTop: `2px solid ${brand.accent}`,
                  }}
                >
                  <Stack
                    sx={{
                      mb: 1.6,
                    }}
                  >
                    <Typography
                      sx={{
                        color: brand.primaryDeep,
                        fontFamily: fonts.display,
                        fontSize: "1.05rem",
                        fontWeight: 600,
                      }}
                    >
                      {sistema.categoria}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h3"
                    sx={{ color: brand.primaryDeep, fontSize: { xs: "1.5rem", md: "1.75rem" } }}
                  >
                    {sistema.titulo}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      color: brand.muted,
                      fontSize: "0.92rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {sistema.text}
                  </Typography>

                  <Stack sx={{ mt: 2.5, borderTop: `1px solid ${brand.line}` }}>
                    {sistema.items.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          py: 0.95,
                          borderBottom: `1px solid ${brand.line}`,
                          color: brand.ink,
                          fontSize: "0.84rem",
                          lineHeight: 1.55,
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Nuestro compromiso
              </Typography>

              <Typography
                variant="h2"
                sx={{ color: brand.primaryDeep, fontSize: { xs: "1.9rem", md: "2.4rem" } }}
              >
                La confianza se construye con hechos verificables
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: brand.muted,
                  fontSize: "0.94rem",
                  lineHeight: 1.78,
                }}
              >
                La Corte mantiene compromisos públicos de actuación orientados
                a la transparencia, la independencia y la mejora continua.
              </Typography>

              <Box
                sx={{
                  mt: 3.5,
                  pt: 2.2,
                  borderTop: `1px solid ${brand.lineStrong}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    fontSize: { xs: "1.2rem", md: "1.38rem" },
                    fontStyle: "italic",
                    color: brand.primaryDeep,
                    lineHeight: 1.6,
                  }}
                >
                  “Administramos arbitrajes con rigor técnico, protegiendo la
                  confianza de las partes y actuando siempre con integridad.”
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                {COMPROMISOS.map((compromiso, index) => (
                  <Box
                    key={compromiso}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "34px 1fr",
                      gap: 1.6,
                      py: 2,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.goldDeep,
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography sx={{ color: brand.muted, fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {compromiso}
                    </Typography>
                  </Box>
                ))}
              </Stack>
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
