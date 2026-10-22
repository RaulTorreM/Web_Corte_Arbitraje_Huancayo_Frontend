import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../../theme/brand";
import { ease } from "../../../utils/animations";

const TRAMITES = [
  {
    number: "01",
    title: "Iniciar un arbitraje",
    text: "Requisitos, solicitud y derecho de presentación.",
    to: "/arbitraje/inicio",
  },
  {
    number: "02",
    title: "Costos y tarifas",
    text: "Honorarios, gastos y escala aplicable.",
    to: "/arbitraje/costos",
  },
  {
    number: "03",
    title: "Cláusula arbitral",
    text: "Modelo para incorporar en un contrato.",
    to: "/arbitraje/clausula",
  },
  {
    number: "04",
    title: "Canales de atención",
    text: "Teléfono, correo, WhatsApp y sede.",
    to: "/contacto",
  },
];

export default function HeroHome() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: brand.paper,
        borderBottom: `1px solid ${brand.line}`,
        overflow: "hidden",
      }}
    >
      <Container sx={{ py: { xs: 5, md: 8 }, pb: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  color: brand.primaryDeep,
                  maxWidth: 760,
                  fontSize: {
                    xs: "clamp(2.4rem, 10.5vw, 3.4rem)",
                    md: "clamp(3.1rem, 5.6vw, 4.9rem)",
                  },
                }}
              >
                El arbitraje, ordenado desde el primer documento.
              </Typography>

              <Typography
                sx={{
                  mt: { xs: 2.5, md: 3 },
                  maxWidth: 600,
                  color: brand.muted,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.72,
                }}
              >
                La Corte Superior de Arbitraje de Huancayo administra el
                procedimiento con reglas públicas, plazos definidos y una
                Secretaría que acompaña cada etapa.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.2}
                sx={{ mt: { xs: 3, md: 4 } }}
              >
                <Button
                  component={RouterLink}
                  to="/arbitraje/inicio"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                >
                  Iniciar un arbitraje
                </Button>
                <Button
                  component={RouterLink}
                  to="/arbitraje/costos"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                >
                  Consultar costos
                </Button>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  mt: 3.5,
                  pt: 2.5,
                  borderTop: `1px solid ${brand.line}`,
                  gap: { xs: 1.5, sm: 2.5 },
                  flexWrap: "wrap",
                }}
              >
                {["Reglamento único", "Tarifas públicas", "Nómina de árbitros"].map(
                  (item) => (
                    <Typography
                      key={item}
                      sx={{
                        color: brand.muted,
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              sx={{
                backgroundColor: brand.whiteSoft,
                borderTop: `2px solid ${brand.gold}`,
                borderBottom: `1px solid ${brand.line}`,
              }}
            >
              <Box
                sx={{
                  px: { xs: 2.2, md: 2.6 },
                  py: 1.7,
                  borderBottom: `1px solid ${brand.line}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fonts.body,
                    fontSize: "0.66rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: brand.goldDeep,
                  }}
                >
                  Índice de trámites
                </Typography>
              </Box>

              <Box>
                {TRAMITES.map((item) => (
                  <Box
                    key={item.to}
                    component={RouterLink}
                    to={item.to}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "40px 1fr 24px",
                      gap: 1.5,
                      alignItems: "start",
                      px: { xs: 2.2, md: 2.6 },
                      py: 2,
                      borderBottom: `1px solid ${brand.line}`,
                      textDecoration: "none",
                      transition: "background-color 0.18s ease",
                      "&:last-of-type": { borderBottom: 0 },
                      "&:hover": { backgroundColor: brand.paper },
                      "&:hover .tramite-arrow": {
                        color: brand.primary,
                        transform: "translateX(3px)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        fontSize: "1rem",
                        color: brand.goldDeep,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Box>
                      <Typography
                        sx={{
                          color: brand.primaryDeep,
                          fontSize: "0.98rem",
                          fontWeight: 700,
                          lineHeight: 1.35,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.35,
                          color: brand.muted,
                          fontSize: "0.8rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>

                    <ArrowForwardIcon
                      className="tramite-arrow"
                      sx={{
                        fontSize: 18,
                        color: brand.lineStrong,
                        mt: "3px",
                        transition: "color 0.18s ease, transform 0.18s ease",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
