import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../../theme/brand";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/animations";
import FramedImage from "../../../components/common/FramedImage";

const PUNTOS = [
  {
    title: "Administramos el procedimiento",
    text: "Recibimos la solicitud, verificamos los requisitos, notificamos a las partes y damos soporte a la Secretaría arbitral.",
  },
  {
    title: "El tribunal decide la controversia",
    text: "Los árbitros designados resuelven el fondo del caso. La Corte no sustituye su criterio ni garantiza un resultado.",
  },
  {
    title: "Todo queda por escrito",
    text: "Reglamento, tarifas, plazos y criterios de designación son públicos y verificables.",
  },
];

export default function QueEsSection() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}
    >
      <Container>
        <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <FramedImage
              src="/images/ARBITRAJE_IMG_02-02.jpg"
              alt="Sede de la Corte Superior de Arbitraje en Huancayo"
              ratio="4 / 5"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  fontFamily: fonts.body,
                  color: brand.goldDeep,
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                La Corte en dos minutos
              </Typography>

              <Typography
                component={motion.h2}
                variants={fadeUp}
                variant="h2"
                sx={{ color: brand.primaryDeep, maxWidth: 620 }}
              >
                Una institución que ordena el proceso, no que decide por las partes.
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  mt: 2.2,
                  maxWidth: 620,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.75,
                }}
              >
                La Corte es la sede institucional del arbitraje. Su trabajo es
                garantizar que el caso avance con reglas claras, plazos
                previsibles y un expediente ordenado.
              </Typography>

              <Stack
                component={motion.div}
                variants={staggerContainer}
                sx={{ mt: 3.5, borderTop: `1px solid ${brand.line}` }}
              >
                {PUNTOS.map((punto, index) => (
                  <Box
                    key={punto.title}
                    component={motion.div}
                    variants={fadeUp}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "34px 1fr",
                      gap: 1.6,
                      py: 2,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.goldDeep,
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                      }}
                    >
                      0{index + 1}
                    </Typography>
                    <Box>
                      <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.94rem" }}>
                        {punto.title}
                      </Typography>
                      <Typography sx={{ mt: 0.5, color: brand.muted, fontSize: "0.86rem", lineHeight: 1.62 }}>
                        {punto.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Button
                component={RouterLink}
                to="/quienes-somos"
                variant="text"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                sx={{ mt: 2.5, px: 0 }}
              >
                Conocer la Corte
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
