import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import EventCard from "./EventCard";
import { brand } from "../../theme/brand";
import { EVENTOS } from "../../data/eventos";
import { MEDIA } from "../../data/media";

type Filtro = "proximos" | "realizados" | "todos";

const FILTROS: { value: Filtro; label: string }[] = [
  { value: "proximos", label: "Próximas" },
  { value: "realizados", label: "Realizadas" },
  { value: "todos", label: "Todas" },
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
        subtitle="Seminarios, talleres y conversatorios para profesionales, empresas y entidades públicas."
        crumbs={[{ label: "Capacitaciones" }]}
        image={MEDIA.capacitaciones}
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Agenda académica"
            title="Capacitaciones en arbitraje y contratación pública"
            subtitle="Consulta las próximas actividades y las ya realizadas."
            sx={{ mb: 0 }}
          />

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
          <Box sx={{ maxWidth: 680 }}>
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
              Capacitación para tu institución
            </Typography>

            <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.96rem", lineHeight: 1.78 }}>
              Consulta por contenidos y modalidades para tu equipo.
            </Typography>

            <Button
              component={RouterLink}
              to="/contacto"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
              sx={{ mt: 2.5 }}
            >
              Solicitar información
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
