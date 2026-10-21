import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import PersonCard from "../../components/common/PersonCard";
import DocumentCard from "../../components/common/DocumentCard";
import { Stagger } from "../../components/common/Reveal";
import { viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { CONSEJO } from "../../data/directivos";
import { DOCUMENTOS } from "../../data/documentos";

const FUNCIONES_CONSEJO = [
  "Define la política institucional y aprueba el plan anual de la Corte.",
  "Supervisa la administración de expedientes y el cumplimiento de los reglamentos.",
  "Aprueba y actualiza la nómina de árbitros y adjudicadores.",
  "Adopta las medidas disciplinarias que correspondan conforme al Código de Ética.",
];

export default function ConsejoPage() {
  const documentos = DOCUMENTOS.filter((doc) => ["d-01", "d-02"].includes(doc.id));

  return (
    <>
      <PageMeta
        title="Consejo directivo"
        description="Conoce a los integrantes del Consejo Directivo de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Gobierno institucional"
        title="Consejo directivo"
        subtitle="El Consejo Directivo conduce la Corte con autonomía técnica, vocación de servicio y apego a los principios de integridad y transparencia."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Consejo directivo" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Nuestros integrantes"
            title="Experiencia y compromiso al servicio de la institución"
            subtitle="Profesionales del derecho, la ingeniería y las ciencias económicas que aportan una mirada multidisciplinaria a la administración de la Corte."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {CONSEJO.map((persona) => (
                <Grid key={persona.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <PersonCard persona={persona} />
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.primaryDark,
          color: brand.white,
          borderTop: `3px solid ${brand.gold}`,
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
                    backgroundColor: "rgba(186,153,7,0.16)",
                    color: brand.goldSoft,
                    border: "1px solid rgba(186,153,7,0.35)",
                  }}
                >
                  <AccountBalanceOutlinedIcon />
                </Box>

                <Typography
                  variant="h2"
                  sx={{ color: brand.white, fontSize: { xs: "1.9rem", md: "2.3rem" } }}
                >
                  Funciones del Consejo
                </Typography>

                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  El Consejo Directivo es el órgano de gobierno de la Corte. Sus
                  decisiones se adoptan de forma colegiada y quedan registradas en
                  actas institucionales.
                </Typography>

                <Button
                  component={RouterLink}
                  to="/documentos"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                  sx={{
                    alignSelf: "flex-start",
                    color: brand.white,
                    borderColor: "rgba(255,255,255,0.35)",
                    "&:hover": {
                      color: brand.goldSoft,
                      borderColor: brand.goldSoft,
                      backgroundColor: "rgba(255,255,255,0.04)",
                    },
                  }}
                >
                  Documentos institucionales
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2}>
                {FUNCIONES_CONSEJO.map((funcion, index) => (
                  <Stack
                    key={funcion}
                    component={motion.div}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    direction="row"
                    spacing={2}
                    sx={{
                      p: 2.2,
                      backgroundColor: "rgba(255,255,255,0.045)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderLeft: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: brand.goldSoft,
                        lineHeight: 1.2,
                        minWidth: 26,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Typography sx={{ color: "rgba(255,255,255,0.78)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {funcion}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 6 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Marco normativo"
                title="Reglas claras para una gestión predecible"
                subtitle="El Estatuto y el Reglamento de Organización y Funciones establecen las competencias y el régimen de adopción de decisiones."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stagger>
                <Grid container spacing={2.5}>
                  {documentos.map((documento) => (
                    <Grid key={documento.id} size={{ xs: 12, sm: 6 }}>
                      <DocumentCard documento={documento} />
                    </Grid>
                  ))}
                </Grid>
              </Stagger>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="Conoce al equipo que acompaña cada expediente"
        subtitle="La Secretaría General y el equipo administrativo garantizan el debido curso de los procedimientos."
        secondaryLabel="Ver equipo de trabajo"
        secondaryTo="/quienes-somos/equipo"
      />
    </>
  );
}
