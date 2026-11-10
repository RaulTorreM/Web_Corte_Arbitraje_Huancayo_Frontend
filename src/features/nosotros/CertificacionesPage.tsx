import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import { brand, fonts } from "../../theme/brand";
import { QUIENES_SUBNAV } from "../../data/navigation";

type Registro = {
  id: string;
  codigo?: string;
  etiqueta?: string;
  titulo: string;
  texto: string;
  to?: string;
};

const REGISTROS: Registro[] = [

  {
    id: "iso-9001",
    codigo: "9001",
    titulo: "Gestión de la calidad",
    texto:
      "Procesos documentados, seguimiento de la satisfacción de las partes y mejora continua de la gestión institucional.",
  },
  {
    id: "iso-37001",
    codigo: "37001",
    titulo: "Gestión antisoborno",
    texto:
      "Debida diligencia de terceros, canal de denuncias confidencial y una cultura institucional de integridad.",
  },
  {
    id: "iso-27001",
    codigo: "27001",
    titulo: "Seguridad de la información",
    texto:
      "Protección de la información de las partes, controles de acceso y continuidad de los servicios arbitrales.",
  },
];

const kickerSx = {
  color: brand.goldInk,
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
} as const;

export default function CertificacionesPage() {
  return (
    <>
      <PageMeta
        title="Certificaciones"
        description="Licencia de funcionamiento y certificaciones ISO de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Calidad e integridad"
        title="Certificaciones"
        subtitle="Licencia de funcionamiento y certificaciones internacionales de la Corte."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Certificaciones" },
        ]}
      />

      <SectionSubnav
        items={QUIENES_SUBNAV}
        ariaLabel="Secciones de Quiénes somos"
      />

      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: brand.whiteSoft,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Registro institucional"
            title="Certificaciones y habilitación"
            subtitle="Licencia de funcionamiento y tres estándares internacionales que orientan la calidad, la integridad y la seguridad de la información."
          />

          <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "stretch" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  pt: 2,
                  borderTop: `2px solid ${brand.primaryDeep}`,
                }}
              >
                <Typography sx={{ ...kickerSx, mb: 1.2 }}>
                  Sistema de Gestión Integrada
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    color: brand.primaryDeep,
                    fontFamily: fonts.display,
                    fontSize: { xs: "1.55rem", md: "1.9rem" },
                    fontWeight: 600,
                    lineHeight: 1.15,
                    textWrap: "balance",
                  }}
                >
                  Políticas de Sistema de Gestión Integrada
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    maxWidth: 520,
                    color: brand.muted,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  Este espacio reunirá las políticas aprobadas del Sistema de
                  Gestión Integrada de la Corte.
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: brand.goldInk,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Documentos en proceso de publicación
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  pt: 2,
                  borderTop: `2px solid ${brand.gold}`,
                }}
              >
                <Typography sx={{ ...kickerSx, mb: 1.2 }}>
                  Certificaciones ISO
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    color: brand.primaryDeep,
                    fontFamily: fonts.display,
                    fontSize: { xs: "1.55rem", md: "1.9rem" },
                    fontWeight: 600,
                    lineHeight: 1.15,
                    textWrap: "balance",
                  }}
                >
                  Otras certificaciones ISO
                </Typography>

                <Box sx={{ mt: 2.5, borderTop: `1px solid ${brand.lineStrong}` }}>
                  {REGISTROS.map((registro) => (
                    <Stack
                      key={registro.id}
                      direction="row"
                      spacing={{ xs: 1.5, sm: 2.2 }}
                      sx={{
                        alignItems: "flex-start",
                        py: 2,
                        borderBottom: `1px solid ${brand.line}`,
                      }}
                    >
                      <Typography
                        sx={{
                          flexShrink: 0,
                          minWidth: { xs: 58, sm: 72 },
                          color: brand.primaryDeep,
                          fontFamily: fonts.display,
                          fontSize: { xs: "1.7rem", sm: "2rem" },
                          fontWeight: 600,
                          lineHeight: 0.95,
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {registro.codigo}
                      </Typography>

                      <Box>
                        <Typography
                          sx={{
                            color: brand.primaryDeep,
                            fontFamily: fonts.display,
                            fontSize: "1.05rem",
                            fontWeight: 600,
                            lineHeight: 1.25,
                          }}
                        >
                          {registro.titulo}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 0.6,
                            color: brand.muted,
                            fontSize: "0.84rem",
                            lineHeight: 1.65,
                          }}
                        >
                          {registro.texto}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
