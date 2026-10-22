import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import EventCard from "./EventCard";
import { brand, fonts } from "../../theme/brand";
import { EVENTOS } from "../../data/eventos";

type Filtro = "proximos" | "realizados" | "todos";

const FILTROS: { value: Filtro; label: string }[] = [
  { value: "proximos", label: "Próximas" },
  { value: "realizados", label: "Realizadas" },
  { value: "todos", label: "Todas" },
];

const DATOS = [
  {
    value: "Abierta",
    label: "Agenda referencial sujeta a confirmación",
  },
  {
    value: "A medida",
    label: "Programas para instituciones y empresas",
  },
  {
    value: "3",
    label: "Modalidades: presencial, virtual e híbrida",
  },
];

const FAQS = [
  {
    question: "¿Cómo puedo inscribirme en una actividad?",
    answer:
      "Puedes solicitar tu inscripción a través del formulario de contacto o escribiendo al correo institucional. La Secretaría General confirmará la disponibilidad de cupos y los datos de pago cuando corresponda.",
  },
  {
    question: "¿Se entrega certificado de participación?",
    answer:
      "Las actividades que así lo indiquen en su convocatoria otorgan un certificado digital de participación, siempre que se cumpla con la asistencia mínima establecida.",
  },
  {
    question: "¿Puedo solicitar una capacitación para mi institución?",
    answer:
      "Sí. Diseñamos programas a medida para empresas, entidades públicas y estudios profesionales, con contenidos adaptados a sus necesidades y modalidad presencial, virtual o híbrida.",
  },
  {
    question: "¿Las actividades tienen costo?",
    answer:
      "Algunas actividades son gratuitas y otras tienen una tarifa de inscripción. La información de cada programa se comunica en la convocatoria correspondiente.",
  },
];

const BENEFICIOS = [
  "Contenidos actualizados con enfoque práctico.",
  "Docentes y especialistas con experiencia arbitral.",
  "Modalidades presencial, virtual e híbrida.",
  "Programas a medida para instituciones y empresas.",
];

export default function CapacitacionesPage() {
  const [filtro, setFiltro] = useState<Filtro>("proximos");

  const filtrados = EVENTOS.filter((evento) => {
    if (filtro === "todos") return true;
    if (filtro === "proximos") return evento.estado === "proximo";
    return evento.estado === "realizado";
  });

  return (
    <>
      <PageMeta
        title="Capacitaciones"
        description="Seminarios, talleres y programas de capacitación en arbitraje y juntas de prevención y resolución de disputas. Agenda referencial."
      />

      <PageHero
        kicker="Formación especializada"
        title="Capacitaciones"
        subtitle="Seminarios, talleres y conversatorios para fortalecer las competencias de profesionales, empresas y entidades públicas. La agenda publicada es referencial y se confirma en cada convocatoria."
        crumbs={[{ label: "Capacitaciones" }]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Agenda académica"
                title="Conocimiento aplicado a la solución de conflictos"
                subtitle="Nuestros programas combinan análisis normativo, casos prácticos y espacios de discusión con especialistas en arbitraje y contratación pública."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                {DATOS.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "110px 1fr",
                      gap: 1.5,
                      py: 1.4,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.primaryDeep,
                        fontSize: "1.15rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography sx={{ color: brand.muted, fontSize: "0.78rem", lineHeight: 1.55 }}>
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 5, md: 7 }, borderBottom: `1px solid ${brand.lineStrong}` }}>
            <Tabs
              value={filtro}
              onChange={(_event, value: Filtro) => setFiltro(value)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="Filtrar actividades"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: brand.gold,
                  height: 2,
                },
                "& .MuiTab-root": {
                  minHeight: 48,
                  px: { xs: 1.2, md: 2 },
                  color: brand.muted,
                  fontSize: { xs: "0.76rem", md: "0.82rem" },
                  textTransform: "none",
                },
                "& .Mui-selected": {
                  color: brand.primaryDeep,
                  fontWeight: 700,
                },
              }}
            >
              {FILTROS.map((item) => {
                const count =
                  item.value === "todos"
                    ? EVENTOS.length
                    : EVENTOS.filter((e) =>
                        item.value === "proximos"
                          ? e.estado === "proximo"
                          : e.estado === "realizado"
                      ).length;

                return (
                  <Tab
                    key={item.value}
                    value={item.value}
                    label={`${item.label} (${count})`}
                  />
                );
              })}
            </Tabs>
          </Box>

          <Typography sx={{ mt: 2, mb: 1, color: brand.muted, fontSize: "0.78rem", lineHeight: 1.6 }}>
            Agenda de demostración. Las fechas, cupos y sedes se confirman en la
            convocatoria oficial de cada actividad.
          </Typography>

          <Stack>
            {filtrados.map((evento) => (
              <EventCard key={evento.id} evento={evento} />
            ))}
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
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
                Programas a medida
              </Typography>

              <Typography variant="h2" sx={{ color: brand.primaryDeep }}>
                Capacitación diseñada para tu institución
              </Typography>

              <Typography sx={{ mt: 2.2, color: brand.muted, fontSize: "0.96rem", lineHeight: 1.78 }}>
                Diseñamos programas cerrados para empresas, entidades públicas y
                estudios profesionales. Definimos contenidos, duración y
                modalidad según tus objetivos y el perfil de tu equipo.
              </Typography>

              <Button
                component={RouterLink}
                to="/contacto"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                sx={{ mt: 3 }}
              >
                Solicitar una propuesta
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                {BENEFICIOS.map((beneficio) => (
                  <Typography
                    key={beneficio}
                    sx={{
                      py: 1.4,
                      borderBottom: `1px solid ${brand.line}`,
                      color: brand.muted,
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {beneficio}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <SectionHeading
                kicker="Preguntas frecuentes"
                title="Resolvemos tus dudas"
                subtitle="Si no encuentras lo que buscas, escríbenos y te responderemos a la brevedad."
                stacked
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              {FAQS.map((faq, index) => (
                <Accordion
                  key={faq.question}
                  disableGutters
                  elevation={0}
                  sx={{
                    backgroundColor: "transparent",
                    borderTop: `1px solid ${brand.line}`,
                    borderBottom: index === FAQS.length - 1 ? `1px solid ${brand.line}` : "none",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: brand.goldDeep }} />}
                    aria-controls={`faq-${index}-content`}
                    id={`faq-${index}-header`}
                    sx={{ px: 0, py: 0.4 }}
                  >
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 600, fontSize: "0.92rem" }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 0, pb: 2.2, pt: 0 }}>
                    <Typography sx={{ color: brand.muted, fontSize: "0.86rem", lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="Inscríbete en nuestra próxima actividad"
        subtitle="Consulta la agenda referencial y solicita información sobre la convocatoria vigente."
        showPrimary={false}
        secondaryLabel="Solicitar información"
        secondaryTo="/contacto"
      />
    </>
  );
}
