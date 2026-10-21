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
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import EventCard from "./EventCard";
import { Stagger } from "../../components/common/Reveal";
import { viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { EVENTOS } from "../../data/eventos";

type Filtro = "proximos" | "realizados" | "todos";

const FILTROS: { value: Filtro; label: string }[] = [
  { value: "proximos", label: "Próximas" },
  { value: "realizados", label: "Realizadas" },
  { value: "todos", label: "Todas" },
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
      "Sí. Las actividades académicas otorgan un certificado digital de participación, siempre que se cumpla con la asistencia mínima establecida por la organización.",
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
        description="Seminarios, talleres y programas de capacitación en arbitraje y juntas de prevención y resolución de disputas."
      />

      <PageHero
        kicker="Formación especializada"
        title="Capacitaciones"
        subtitle="Seminarios, talleres y conversatorios para fortalecer las competencias de profesionales, empresas y entidades públicas."
        crumbs={[{ label: "Capacitaciones" }]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Agenda académica"
                title="Conocimiento aplicado a la solución de conflictos"
                subtitle="Nuestros programas combinan análisis normativo, casos prácticos y espacios de discusión con especialistas en arbitraje y contratación pública."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={2}>
                {[
                  { icon: SchoolOutlinedIcon, value: "5", label: "Actividades en agenda" },
                  { icon: GroupsOutlinedIcon, value: "290+", label: "Cupos disponibles" },
                  { icon: CalendarMonthOutlinedIcon, value: "3", label: "Modalidades de participación" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <Grid key={item.label} size={{ xs: 12, sm: 4, md: 12 }}>
                      <Stack
                        direction="row"
                        spacing={1.8}
                        sx={{
                          px: 2.2,
                          py: 1.8,
                          alignItems: "center",
                          backgroundColor: brand.paper,
                          border: `1px solid ${brand.line}`,
                          borderLeft: `3px solid ${brand.gold}`,
                        }}
                      >
                        <Icon sx={{ color: brand.primary, fontSize: "1.3rem" }} />
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: fonts.display,
                              fontSize: "1.35rem",
                              fontWeight: 600,
                              color: brand.primaryDark,
                              lineHeight: 1,
                            }}
                          >
                            {item.value}
                          </Typography>
                          <Typography sx={{ color: brand.muted, fontSize: "0.7rem", mt: 0.4 }}>
                            {item.label}
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: { xs: 4, md: 5 }, mb: 3, flexWrap: "wrap", gap: 1 }}
          >
            {FILTROS.map((item) => {
              const active = filtro === item.value;
              const count =
                item.value === "todos"
                  ? EVENTOS.length
                  : EVENTOS.filter((e) =>
                      item.value === "proximos"
                        ? e.estado === "proximo"
                        : e.estado === "realizado"
                    ).length;

              return (
                <Button
                  key={item.value}
                  onClick={() => setFiltro(item.value)}
                  variant={active ? "contained" : "outlined"}
                  size="small"
                  sx={{
                    px: 2,
                    py: 0.8,
                    fontSize: "0.8rem",
                    ...(active
                      ? {}
                      : {
                          borderColor: brand.line,
                          color: brand.muted,
                          "&:hover": {
                            borderColor: brand.primary,
                            color: brand.primary,
                          },
                        }),
                  }}
                >
                  {item.label} ({count})
                </Button>
              );
            })}
          </Stack>

          <Stagger amount={0.08}>
            <Grid container spacing={{ xs: 3, md: 3 }}>
              {filtrados.map((evento) => (
                <Grid key={evento.id} size={{ xs: 12, md: 4 }}>
                  <EventCard evento={evento} />
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
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  color: brand.goldSoft,
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Programas a medida
              </Typography>

              <Typography
                variant="h2"
                sx={{ color: brand.white, fontSize: { xs: "1.9rem", md: "2.4rem" } }}
              >
                Capacitación diseñada para tu institución
              </Typography>

              <Typography sx={{ mt: 2.2, color: "rgba(255,255,255,0.72)", fontSize: "0.96rem", lineHeight: 1.8 }}>
                Diseñamos programas cerrados para empresas, entidades públicas y
                estudios profesionales. Definimos contenidos, duración y
                modalidad según tus objetivos y el perfil de tu equipo.
              </Typography>

              <Button
                component={RouterLink}
                to="/contacto"
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                sx={{
                  mt: 3.5,
                  color: brand.white,
                  borderColor: "rgba(255,255,255,0.35)",
                  "&:hover": {
                    color: brand.goldSoft,
                    borderColor: brand.goldSoft,
                    backgroundColor: "rgba(255,255,255,0.04)",
                  },
                }}
              >
                Solicitar una propuesta
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1.6}>
                {BENEFICIOS.map((beneficio, index) => (
                  <Stack
                    key={beneficio}
                    component={motion.div}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    direction="row"
                    spacing={1.5}
                    sx={{
                      p: 2,
                      alignItems: "center",
                      backgroundColor: "rgba(255,255,255,0.045)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderLeft: `3px solid ${brand.gold}`,
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ color: brand.goldSoft, fontSize: "1.15rem" }} />
                    <Typography sx={{ color: "rgba(255,255,255,0.78)", fontSize: "0.88rem" }}>
                      {beneficio}
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
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <SectionHeading
                kicker="Preguntas frecuentes"
                title="Resolvemos tus dudas"
                subtitle="Si no encuentras lo que buscas, escríbenos y te responderemos a la brevedad."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              {FAQS.map((faq, index) => (
                <Accordion
                  key={faq.question}
                  disableGutters
                  sx={{
                    mb: 1.5,
                    backgroundColor: brand.white,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: brand.goldDeep }} />}
                    aria-controls={`faq-${index}-content`}
                    id={`faq-${index}-header`}
                    sx={{ px: 2.5, py: 0.5 }}
                  >
                    <Typography sx={{ color: brand.primaryDark, fontWeight: 650, fontSize: "0.92rem" }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
                    <Typography sx={{ color: brand.muted, fontSize: "0.88rem", lineHeight: 1.75 }}>
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
        subtitle="Amplía tus conocimientos en arbitraje y resolución de disputas con especialistas de la Corte."
        secondaryLabel="Solicitar información"
        secondaryTo="/contacto"
      />
    </>
  );
}
