import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand, fonts } from "../../../theme/brand";
import SectionHeading from "../../../components/common/SectionHeading";

const MECANISMOS = [
  {
    status: "Servicio vigente",
    statusColor: brand.primary,
    title: "Arbitraje institucional",
    text: "Para controversias patrimoniales disponibles, con árbitro único o tribunal arbitral y la administración de la Corte.",
    items: [
      "Reglamento único y plazos definidos",
      "Nómina de árbitros y banco de laudos",
      "Tarifas públicas por cuantía",
    ],
    to: "/arbitraje",
    label: "Ver arbitraje",
  },
  {
    status: "...",
    statusColor: brand.accent,
    title: "JPRD",
    text: "Junta de Prevención y Resolución de Disputas. Su reglamento, aranceles y cláusula modelo son preliminares.",
    items: [
      "Orientada a prevención de disputas",
      "Registro de adjudicadores",
      "Documentos aún no vigentes",
    ],
    to: "/jprd",
    label: "Ver JPRD",
  },
];

export default function MecanismosSection() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
      <Container>
        <SectionHeading
          kicker="Mecanismos"
          title="Dos mecanismos, una misma sede institucional"
          subtitle="El arbitraje resuelve una controversia existente. La JPRD busca prevenirla o resolverla en una etapa temprana. No son vías intercambiables."
        />

        <Grid container spacing={{ xs: 3, md: 5 }}>
          {MECANISMOS.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 6 }}>
              <Stack
                sx={{
                  height: "100%",
                  pt: 2.2,
                  borderTop: `2px solid ${item.statusColor}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fonts.body,
                    color: item.statusColor,
                    fontSize: "0.64rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    mb: 1.3,
                  }}
                >
                  {item.status}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{ color: brand.primaryDeep, fontSize: { xs: "1.6rem", md: "1.9rem" } }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    color: brand.muted,
                    fontSize: "0.94rem",
                    lineHeight: 1.7,
                    maxWidth: 520,
                  }}
                >
                  {item.text}
                </Typography>

                <Stack sx={{ mt: 2.5, mb: 2.5 }}>
                  {item.items.map((text) => (
                    <Typography
                      key={text}
                      sx={{
                        py: 1,
                        borderTop: `1px solid ${brand.line}`,
                        color: brand.ink,
                        fontSize: "0.85rem",
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                </Stack>

                <Button
                  component={RouterLink}
                  to={item.to}
                  variant="text"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                  sx={{ px: 0, mt: "auto", alignSelf: "flex-start" }}
                >
                  {item.label}
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
