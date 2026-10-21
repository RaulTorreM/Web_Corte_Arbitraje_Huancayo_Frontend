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

const COMISIONES = [
  {
    nombre: "Registro y Designación",
    funcion: "Inscribe, renueva y designa árbitros y adjudicadores de forma directa y residual.",
  },
  {
    nombre: "Confirmación",
    funcion: "Confirma o no la designación de árbitros que no integran el Registro.",
  },
  {
    nombre: "Recusación y Remoción",
    funcion: "Resuelve recusaciones y remociones, incluidas las iniciadas de oficio.",
  },
  {
    nombre: "Ética",
    funcion: "Aplica el Código de Ética, determina infracciones e impone sanciones.",
  },
  {
    nombre: "Arbitraje de Emergencia",
    funcion: "Designa árbitros de emergencia y mantiene la lista corta de acceso público.",
  },
  {
    nombre: "Buenas Prácticas",
    funcion: "Vela por la calidad, la transparencia web, las certificaciones y la memoria anual.",
  },
];

const FUNCIONES_CONSEJO = [
  "Propone al Consejo Directivo de la Cámara las modificaciones a los reglamentos.",
  "Interpreta los alcances de los reglamentos y emite directivas y lineamientos.",
  "Absuelve consultas generales de los usuarios sobre la administración del arbitraje.",
  "Resuelve conflictos de competencia entre los órganos de la Corte.",
  "Resuelve en última instancia los asuntos administrativos decididos por las comisiones.",
  "Nombra al Secretario del Consejo, al Secretario General y a los secretarios arbitrales.",
  "Aprueba el presupuesto y monitorea la marcha de los casos arbitrales.",
  "Supervisa la capacitación de los árbitros y el cumplimiento del Código de Ética.",
];

export default function ConsejoPage() {
  const documentos = DOCUMENTOS.filter((doc) => ["d-01", "d-02"].includes(doc.id));

  return (
    <>
      <PageMeta
        title="Consejo Superior"
        description="Composición, requisitos y funciones del Consejo Superior de Arbitraje de la Cámara de Comercio de Huancayo."
      />

      <PageHero
        kicker="Gobierno institucional"
        title="Consejo Superior de Arbitraje"
        subtitle="Es la máxima autoridad institucional de gobierno administrativo no jurisdiccional. Asegura la aplicación de los reglamentos y, a pedido de parte, resuelve en última instancia los temas administrativos e incidentes procesales del arbitraje."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Consejo Superior" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Nuestros integrantes"
            title="Experiencia y compromiso al servicio de la institución"
            subtitle="Un presidente, un vicepresidente y hasta cinco consejeros, con sus respectivos suplentes, nombrados por el Consejo Directivo de la Cámara por períodos de tres años. Las sesiones requieren quórum de cuatro consejeros y se realizan como mínimo una vez por trimestre."
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
                  El Consejo Superior sesiona como mínimo una vez por trimestre.
                  Sus sesiones son confidenciales, requieren quórum de cuatro
                  consejeros y se adoptan por mayoría simple, con voto dirimente
                  del presidente en caso de empate. Todo consta en el Libro de
                  Actas.
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

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Comisiones"
            title="Seis comisiones especializadas"
            subtitle="Cada comisión tiene dos miembros y ejerce las competencias que le asigna el Estatuto. Sus decisiones pueden revisarse ante el Consejo Superior."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {COMISIONES.map((comision, index) => (
                <Grid key={comision.nombre} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Stack
                    component={motion.article}
                    sx={{
                      height: "100%",
                      p: 3,
                      backgroundColor: brand.paper,
                      border: `1px solid ${brand.line}`,
                      borderTop: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontSize: "1.6rem",
                        fontWeight: 600,
                        color: brand.skyMid,
                        lineHeight: 1,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1.8, color: brand.primaryDark, fontSize: "1.02rem" }}>
                      {comision.nombre}
                    </Typography>
                    <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.86rem", lineHeight: 1.7 }}>
                      {comision.funcion}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 6 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Marco normativo"
                title="Reglas claras para una gestión predecible"
                subtitle="El Estatuto y el Reglamento de Arbitraje establecen las competencias del Consejo y el régimen de adopción de decisiones."
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
        primaryLabel="Ver equipo de trabajo"
        primaryTo="/quienes-somos/equipo"
        secondaryLabel="Ver reglamentos"
        secondaryTo="/arbitraje/reglamentos"
      />
    </>
  );
}
