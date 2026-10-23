import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import PersonCard from "../../components/common/PersonCard";
import { Stagger } from "../../components/common/Reveal";
import { brand, fonts } from "../../theme/brand";
import { CONSEJO } from "../../data/directivos";
import { MEDIA } from "../../data/media";

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

// const ELECCION_CONSEJO = [
//   "El Consejo Directivo de la Cámara nombra hasta siete consejeros titulares y sus suplentes por períodos de tres años, renovables de forma indefinida.",
//   "Cuatro consejeros se eligen de una planilla de doce personas propuestas por los consejeros cuyo período termina; tres se eligen de una relación de nueve ofrecidas por el Consejo Directivo.",
//   "En su primera sesión, el Consejo elige entre sus miembros titulares al presidente y al vicepresidente.",
//   "Las sesiones requieren quórum de cuatro consejeros y se realizan como mínimo una vez por trimestre.",
// ];

// const REQUISITOS_CONSEJO = [
//   "Presidente: abogado y/o ingeniero con al menos diez años de experiencia en arbitraje o medios alternativos de solución de controversias.",
//   "Vicepresidente: al menos cinco años de experiencia en arbitraje o medios alternativos de solución de controversias.",
//   "Título profesional y título de maestría; 120 horas académicas en arbitraje, contratación pública, derecho administrativo, junta de resolución de disputas o dispute board, o diez años de experiencia equivalente.",
//   "Composición con presencia de mujeres profesionales, de preferencia en un 30%; los miembros no deben figurar negativamente en centrales de riesgo.",
// ];

export default function ConsejoPage() {
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
        image={MEDIA.equipo}
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Integrantes"
            title="Experiencia y compromiso al servicio de la institución"
            subtitle="Un presidente, un vicepresidente y hasta cinco consejeros, con sus respectivos suplentes, nombrados por el Consejo Directivo de la Cámara por períodos de tres años. Las sesiones requieren quórum de cuatro consejeros y se realizan como mínimo una vez por trimestre."
          />

          <Stagger>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {CONSEJO.map((persona) => (
                <Grid key={persona.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <PersonCard persona={persona} />
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 6 }}>
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
                Funciones
              </Typography>

              <Typography variant="h2" sx={{ color: brand.primaryDeep, fontSize: { xs: "1.9rem", md: "2.5rem" } }}>
                Cómo funciona el Consejo
              </Typography>

              <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.94rem", lineHeight: 1.75 }}>
                Sesiona como mínimo una vez por trimestre. Sus sesiones son
                confidenciales, requieren quórum de cuatro consejeros y adoptan
                decisiones por mayoría simple, con voto dirimente del presidente en
                caso de empate. Todo consta en el Libro de Actas.
              </Typography>

              <Accordion sx={{ mt: 3 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                    Ver las ocho funciones del Consejo
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={1.1}>
                    {FUNCIONES_CONSEJO.map((funcion, index) => (
                      <Box
                        key={funcion}
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "26px 1fr",
                          gap: 1,
                          pb: 1,
                          borderBottom: `1px solid ${brand.line}`,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: fonts.display,
                            color: brand.goldDeep,
                            fontSize: "0.82rem",
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </Typography>
                        <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.6 }}>
                          {funcion}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid
              id="comisiones"
              size={{ xs: 12, md: 6 }}
              sx={{ scrollMarginTop: "calc(var(--header-h) + 12px)" }}
            >
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
                Comisiones
              </Typography>

              <Typography variant="h2" sx={{ color: brand.primaryDeep, fontSize: { xs: "1.9rem", md: "2.5rem" } }}>
                Seis comisiones especializadas
              </Typography>

              <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.94rem", lineHeight: 1.75 }}>
                Cada comisión tiene dos miembros y ejerce las competencias que le
                asigna el Estatuto. Sus decisiones pueden revisarse ante el Consejo
                Superior.
              </Typography>

              <Box sx={{ mt: 3, borderTop: `1px solid ${brand.lineStrong}` }}>
                {COMISIONES.map((comision) => (
                  <Box
                    key={comision.nombre}
                    sx={{
                      py: 1.5,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.88rem" }}>
                      {comision.nombre}
                    </Typography>
                    <Typography sx={{ mt: 0.3, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.55 }}>
                      {comision.funcion}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Gobierno y transparencia"
            title="Cómo se elige y qué se exige"
            subtitle="Reglas estatutarias de composición, elección y calificación de los miembros del Consejo Superior."
          />

          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ color: brand.goldDeep, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Elección y período
              </Typography>

              <Stack sx={{ mt: 1.5, borderTop: `1px solid ${brand.lineStrong}` }}>
                {ELECCION_CONSEJO.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      py: 1.4,
                      borderBottom: `1px solid ${brand.line}`,
                      color: brand.muted,
                      fontSize: "0.84rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ color: brand.goldDeep, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Requisitos
              </Typography>

              <Stack sx={{ mt: 1.5, borderTop: `1px solid ${brand.lineStrong}` }}>
                {REQUISITOS_CONSEJO.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      py: 1.4,
                      borderBottom: `1px solid ${brand.line}`,
                      color: brand.muted,
                      fontSize: "0.84rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Typography sx={{ mt: 3, color: brand.muted, fontSize: "0.78rem", lineHeight: 1.65 }}>
            Los consejeros y miembros de comisiones deben revelar si intervienen
            como representantes, peritos, asesores o abogados en un caso del Centro
            y abstenerse de participar en las decisiones sobre ese caso. Quienes sean
            designados árbitros deben inhibirse de las deliberaciones correspondientes.
          </Typography>
        </Container>
      </Box> */}

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
