import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import RegistryBrowser from "../../components/common/RegistryBrowser";
import CtaBand from "../../components/common/CtaBand";
import { brand } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { DECISIONES } from "../../data/registros";

export default function JprdDecisionesPage() {
  return (
    <>
      <PageMeta
        title="Banco de decisiones JPRD"
        description="Consulta las decisiones emitidas por adjudicadores de la Junta de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Transparencia jurisprudencial"
        title="Banco de decisiones"
        subtitle="Decisiones de la JPRD que contribuyen a una práctica uniforme y predecible en la ejecución contractual."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Banco de decisiones" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Repositorio de decisiones"
                title="Criterios que ordenan la ejecución"
                subtitle="Publicamos una selección de decisiones con datos anonimizados, para difundir criterios técnicos y jurídicos aplicados por los adjudicadores."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  p: 2.4,
                  alignItems: "flex-start",
                  backgroundColor: brand.skySoft,
                  border: `1px solid ${brand.skyMid}`,
                  borderLeft: `4px solid ${brand.gold}`,
                }}
              >
                <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.1rem", mt: "1px" }} />
                <Typography sx={{ color: brand.primary, fontSize: "0.82rem", lineHeight: 1.65 }}>
                  Las decisiones se publican con fines académicos e informativos.
                  No sustituyen la consulta del expediente ni constituyen
                  asesoría legal para un caso concreto.
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={0} sx={{ mt: { xs: 4, md: 5 }, mb: { xs: 4, md: 5 } }}>
            {[
              { value: DECISIONES.length, label: "Decisiones publicadas" },
              { value: new Set(DECISIONES.map((d) => d.anio)).size, label: "Años de referencia" },
              { value: new Set(DECISIONES.map((d) => d.materia)).size, label: "Materias abordadas" },
            ].map((item) => (
              <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
                <Box
                  sx={{
                    px: 2.5,
                    py: 2,
                    backgroundColor: brand.paper,
                    border: `1px solid ${brand.line}`,
                    borderLeft: `3px solid ${brand.gold}`,
                    height: "100%",
                  }}
                >
                  <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
                    <HandshakeOutlinedIcon sx={{ color: brand.goldDeep, fontSize: "1.2rem" }} />
                    <Typography
                      sx={{
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontSize: "1.7rem",
                        fontWeight: 600,
                        color: brand.primaryDark,
                        lineHeight: 1,
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      mt: 0.8,
                      color: brand.muted,
                      fontSize: "0.72rem",
                      fontWeight: 650,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <RegistryBrowser
            registros={DECISIONES}
            searchPlaceholder="Buscar por expediente, materia o palabra clave"
            expedienteLabel="Expediente JPRD"
          />

          <Typography
            sx={{
              mt: 3,
              color: brand.muted,
              fontSize: "0.78rem",
              lineHeight: 1.65,
              maxWidth: 760,
            }}
          >
            La publicación de una decisión no implica la identificación de las
            partes ni la divulgación de información protegida. Para solicitar una
            copia adicional, dirígete a la Secretaría General.
          </Typography>
        </Container>
      </Box>

      <CtaBand
        title="¿Buscas un criterio sobre tu contrato?"
        subtitle="La Secretaría General puede orientarte sobre decisiones anteriores y su aplicación a tu caso."
        secondaryLabel="Contactar a la Corte"
        secondaryTo="/contacto"
      />
    </>
  );
}
