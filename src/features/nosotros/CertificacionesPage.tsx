import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import { brand, fonts } from "../../theme/brand";

const CERTIFICACIONES = [
  {
    norma: "ISO 9001:2015",
    estado: "En implementación",
    titulo: "Sistema de gestión de la calidad",
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
        subtitle="La Corte implementa sistemas de gestión de calidad y antisoborno. Publicamos su estado real: no presentamos como certificación obtenida lo que aún está en proceso."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Certificaciones" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Estado de implementación"
            title="Dos sistemas, un mismo compromiso institucional"
            subtitle="Los sistemas de gestión se encuentran en implementación. Su avance se refleja en la política antisoborno, el mapa de procesos y los controles internos."
          />

          <Grid container spacing={{ xs: 4, md: 5 }}>
            {CERTIFICACIONES.map((certificacion) => (
              <Grid key={certificacion.norma} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: "100%",
                    pt: 2.2,
                    borderTop: `2px solid ${brand.accent}`,
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 0.8, sm: 2 }}
                    sx={{
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "space-between",
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
                      {certificacion.norma}
                    </Typography>

                    <Typography
                      sx={{
                        color: brand.accent,
                        fontSize: "0.64rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {certificacion.estado}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h3"
                    sx={{ color: brand.primaryDeep, fontSize: { xs: "1.5rem", md: "1.75rem" } }}
                  >
                    {certificacion.titulo}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      color: brand.muted,
                      fontSize: "0.92rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {certificacion.text}
                  </Typography>

                  <Stack sx={{ mt: 2.5, borderTop: `1px solid ${brand.line}` }}>
                    {certificacion.items.map((item) => (
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
                Mientras los sistemas de gestión completan su implementación, la
                Corte mantiene compromisos públicos de actuación. No se publican
                números de registro ni certificados que no puedan acreditarse
                documentalmente.
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
