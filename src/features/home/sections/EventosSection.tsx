import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand } from "../../../theme/brand";
import { PROXIMOS_EVENTOS } from "../../../data/eventos";
import SectionHeading from "../../../components/common/SectionHeading";
import { Stagger } from "../../../components/common/Reveal";
import EventCard from "../../capacitaciones/EventCard";

export default function EventosSection() {
  const eventos = PROXIMOS_EVENTOS.slice(0, 3);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: brand.white,
        borderTop: `1px solid ${brand.line}`,
        borderBottom: `1px solid ${brand.line}`,
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
            mb: { xs: 4.5, md: 6 },
          }}
        >
          <SectionHeading
            kicker="Capacitaciones"
            title="Conocimiento que fortalece el arbitraje"
            subtitle="Talleres, seminarios y conversatorios para profesionales, empresas y entidades públicas."
            sx={{ mb: 0 }}
          />

          <Button
            component={RouterLink}
            to="/capacitaciones"
            variant="outlined"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            sx={{ flexShrink: 0 }}
          >
            Ver agenda completa
          </Button>
        </Stack>

        <Stagger>
          <Grid container spacing={{ xs: 3, md: 3 }}>
            {eventos.map((evento) => (
              <Grid key={evento.id} size={{ xs: 12, md: 4 }}>
                <EventCard evento={evento} />
              </Grid>
            ))}
          </Grid>
        </Stagger>
      </Container>
    </Box>
  );
}
