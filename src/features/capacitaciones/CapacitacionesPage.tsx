import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import EventCard from "./EventCard";
import EventEvidenceDialog from "./EventEvidenceDialog";
import { EVENTOS, type Evento } from "../../data/eventos";
import { brand } from "../../theme/brand";

export default function CapacitacionesPage() {
  const [gallery, setGallery] = useState<Evento | null>(null);

  return (
    <>
      <PageMeta
        title="Capacitaciones y eventos"
        description="Encuentro de árbitros y adjudicadores y Congreso Macrorregional de Conciliación Extrajudicial realizados por la Corte Superior de Arbitraje de Huancayo, con sus programas y documentación oficial."
      />

      <PageHero
        kicker="Actividades realizadas"
        title="Capacitaciones y eventos"
        subtitle="Encuentros y congresos organizados por la Corte. Programas y documentación oficial."
        crumbs={[{ label: "Capacitaciones y eventos" }]}
      />

      <Box
        component="section"
        sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}
      >
        <Container>
          <Typography
            sx={{
              maxWidth: 760,
              mb: { xs: 4, md: 5 },
              color: brand.muted,
              fontSize: { xs: "0.96rem", md: "1.02rem" },
              lineHeight: 1.8,
              textWrap: "pretty",
            }}
          >
            Memoria de las actividades académicas realizadas por la Corte. Cada
            registro conserva su programa y su documentación oficial.
          </Typography>

          {EVENTOS.map((evento, index) => (
            <EventCard
              key={evento.id}
              evento={evento}
              first={index === 0}
              onOpenEvidence={() => setGallery(evento)}
            />
          ))}
        </Container>
      </Box>

      <Box
        component="section"
        sx={{ backgroundColor: brand.paper, py: { xs: 6, md: 8 } }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2.5, md: 4 }}
            sx={{
              pt: 2.5,
              borderTop: `1px solid ${brand.lineStrong}`,
              alignItems: { md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              {/* <Typography
                component="h2"
                sx={{
                  color: brand.primaryDeep,
                  fontFamily: fonts.display,
                  fontSize: { xs: "1.45rem", md: "1.7rem" },
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Constancias de participación
              </Typography>
              <Typography
                sx={{
                  mt: 0.8,
                  maxWidth: 620,
                  color: brand.muted,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Para acreditar tu participación en estas actividades, contacta
                a la Secretaría General.
              </Typography> */}
            </Box>

            {/* <Button
              component={RouterLink}
              to="/contacto"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
              sx={{ flexShrink: 0, width: { xs: "100%", sm: "auto" } }}
            >
              Contactar a la Secretaría
            </Button> */}
          </Stack>
        </Container>
      </Box>

      {gallery && (
        <EventEvidenceDialog
          evento={gallery}
          onClose={() => setGallery(null)}
        />
      )}
    </>
  );
}
