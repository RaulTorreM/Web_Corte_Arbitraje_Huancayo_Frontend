import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import RegistryBrowser from "../../components/common/RegistryBrowser";
import CtaBand from "../../components/common/CtaBand";
import { brand } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { LAUDOS } from "../../data/registros";

export default function LaudosPage() {
  return (
    <>
      <PageMeta
        title="Banco de laudos"
        description="Consulta los laudos emitidos en procedimientos administrados por la Corte Superior de Arbitraje de Huancayo, con datos anonimizados."
      />

      <PageHero
        kicker="Transparencia jurisprudencial"
        title="Banco de laudos"
        subtitle="Decisiones que contribuyen al conocimiento del arbitraje y a la previsibilidad de futuras controversias."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Banco de laudos" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Repositorio de decisiones"
                title="Laudos al servicio del conocimiento"
                subtitle="Publicamos una selección de laudos con datos personales y comerciales anonimizados, en respeto de la confidencialidad del arbitraje."
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
                  Los documentos se publican con fines académicos e informativos.
                  No sustituyen la consulta del expediente ni constituyen
                  asesoría legal para un caso concreto.
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={0} sx={{ mt: { xs: 4, md: 5 }, mb: { xs: 4, md: 5 } }}>
            {[
              { value: LAUDOS.length, label: "Laudos publicados" },
              { value: new Set(LAUDOS.map((l) => l.anio)).size, label: "Años de referencia" },
              { value: new Set(LAUDOS.map((l) => l.materia)).size, label: "Materias abordadas" },
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
                    <GavelOutlinedIcon sx={{ color: brand.goldDeep, fontSize: "1.2rem" }} />
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
            registros={LAUDOS}
            searchPlaceholder="Buscar por expediente, materia o palabra clave"
            expedienteLabel="Expediente"
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
            La publicación de un laudo no implica la identificación de las partes
            ni la divulgación de información protegida. Para solicitar una copia
            adicional, dirígete a la Secretaría General.
          </Typography>
        </Container>
      </Box>

      <CtaBand
        title="¿Buscas un precedente específico?"
        subtitle="La Secretaría General puede orientarte sobre los criterios adoptados en casos anteriores."
        secondaryLabel="Contactar a la Corte"
        secondaryTo="/contacto"
      />
    </>
  );
}
