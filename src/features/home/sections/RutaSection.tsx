import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand, fonts } from "../../../theme/brand";
import SectionHeading from "../../../components/common/SectionHeading";

const PASOS = [
  {
    number: "01",
    title: "Reúne los requisitos",
    text: "Datos de las partes, contrato, convenio arbitral y comprobante del derecho de presentación.",
  },
  {
    number: "02",
    title: "Presenta la solicitud",
    text: "La Secretaría revisa la documentación y confirma que el caso puede ser admitido.",
  },
  {
    number: "03",
    title: "La Corte califica y notifica",
    text: "Se corre traslado a la otra parte y se habilita la etapa de respuesta y designación.",
  },
  {
    number: "04",
    title: "Se constituye el tribunal",
    text: "Los árbitros aceptan el cargo. Desde ahí, el tribunal conduce el procedimiento y emite el laudo.",
  },
];

export default function RutaSection() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
      <Container>
        <SectionHeading
          kicker="Ruta de inicio"
          title="Del primer documento a la constitución del tribunal"
          subtitle="Cuatro hitos para entender qué ocurre antes de que el caso pase al tribunal arbitral. El detalle completo está en la guía de inicio."
        />

        <Grid container spacing={0}>
          {PASOS.map((paso, index) => (
            <Grid key={paso.number} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Stack
                sx={{
                  height: "100%",
                  pt: 2,
                  pr: { xs: 0, lg: 3 },
                  borderTop: `1px solid ${brand.lineStrong}`,
                  borderLeft: {
                    xs: 0,
                    sm: index === 0 || index === 2 ? 0 : `1px solid ${brand.line}`,
                    lg: index === 0 ? 0 : `1px solid ${brand.line}`,
                  },
                  pl: {
                    xs: 0,
                    sm: index === 0 || index === 2 ? 0 : 2.5,
                    lg: index === 0 ? 0 : 2.5,
                  },
                  pb: { xs: 3, lg: 0 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    color: brand.goldDeep,
                    fontSize: "1.5rem",
                    lineHeight: 1,
                  }}
                >
                  {paso.number}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ mt: 1.6, color: brand.primaryDeep, fontSize: "1.05rem" }}
                >
                  {paso.title}
                </Typography>

                <Typography sx={{ mt: 0.8, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.65 }}>
                  {paso.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Button
          component={RouterLink}
          to="/arbitraje/inicio"
          variant="text"
          endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
          sx={{ mt: 3.5, px: 0 }}
        >
          Ver requisitos y etapas del arbitraje
        </Button>
      </Container>
    </Box>
  );
}
