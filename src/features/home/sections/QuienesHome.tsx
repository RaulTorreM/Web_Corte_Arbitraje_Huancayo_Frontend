import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../../theme/brand";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/animations";

const HAIRLINE = "rgba(233,223,202,0.24)";

const PRINCIPIOS = [
  { number: "01", title: "Imparcialidad" },
  { number: "02", title: "Independencia" },
  { number: "03", title: "Integridad" },
  { number: "04", title: "Transparencia" },
];

/**
 * Cierre del inicio: manifiesto institucional sobre navy. La declaración va en
 * serif a tamaño editorial y los cuatro principios se leen como un registro
 * numerado. A la derecha, un campo de filetes diagonales en CSS aporta
 * profundidad sin cargar una imagen decorativa.
 */
export default function QuienesHome() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 7, md: 10 },
        backgroundColor: brand.primaryDeep,
        borderTop: `2px solid ${brand.gold}`,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(115deg, ${brand.gold} 0 1px, transparent 1px 104px)`,
          opacity: 0.16,
          display: { xs: "none", md: "block" },
          maskImage:
            "linear-gradient(90deg, transparent 46%, rgba(0,0,0,0.85) 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 46%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Box
                component={motion.span}
                variants={fadeUp}
                aria-hidden="true"
                sx={{
                  display: "block",
                  width: 54,
                  height: 3,
                  mb: 2.5,
                  backgroundColor: brand.gold,
                }}
              />

              <Typography
                component={motion.h2}
                variants={fadeUp}
                variant="h2"
                sx={{ color: brand.white, maxWidth: 520 }}
              >
                ¿Quiénes somos?
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  mt: 2.5,
                  maxWidth: 660,
                  color: "rgba(255,255,255,0.92)",
                  fontFamily: fonts.display,
                  fontWeight: 400,
                  fontSize: {
                    xs: "1.16rem",
                    md: "clamp(1.3rem, 1.9vw, 1.6rem)",
                  },
                  lineHeight: 1.55,
                  letterSpacing: "-0.01em",
                  textWrap: "pretty",
                }}
              >
                Somos el órgano especializado de la Cámara de Comercio y
                Producción de Huancayo y de la Región Junín, encargado de
                promover la seguridad jurídica y el desarrollo económico
                regional a través de la administración transparente de medios de
                solución de conflictos.
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  mt: 2.2,
                  maxWidth: 600,
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.96rem",
                  lineHeight: 1.75,
                  textWrap: "pretty",
                }}
              >
                Contamos con una nómina de profesionales altamente cualificados
                que actúan bajo estrictos principios de imparcialidad,
                independencia, integridad y transparencia.
              </Typography>

              <Stack component={motion.div} variants={fadeUp} sx={{ mt: 3.5 }}>
                <Button
                  component={RouterLink}
                  to="/quienes-somos"
                  variant="contained"
                  color="secondary"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                  sx={{ width: { xs: "100%", sm: "fit-content" } }}
                >
                  Conocer la Corte
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.ul}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              aria-label="Principios que rigen a los profesionales de la Corte"
              sx={{
                m: 0,
                mt: { xs: 0.5, md: 1.5 },
                p: 0,
                listStyle: "none",
                borderTop: { md: `1px solid ${HAIRLINE}` },
              }}
            >
              {PRINCIPIOS.map((principio) => (
                <Box
                  key={principio.title}
                  component={motion.li}
                  variants={fadeUp}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "46px minmax(0, 1fr)",
                    columnGap: 1.5,
                    alignItems: "baseline",
                    py: { xs: 1.5, md: 2.1 },
                    borderTop: { xs: `1px solid ${HAIRLINE}`, md: 0 },
                    borderBottom: `1px solid ${HAIRLINE}`,
                  }}
                >
                  <Typography
                    aria-hidden="true"
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.gold,
                      fontSize: "0.95rem",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: 1.4,
                    }}
                  >
                    {principio.number}
                  </Typography>
                  <Typography
                    sx={{
                      color: brand.white,
                      fontFamily: fonts.display,
                      fontWeight: 600,
                      fontSize: { xs: "1.25rem", md: "1.6rem" },
                      lineHeight: 1.2,
                      letterSpacing: "-0.012em",
                      textWrap: "balance",
                    }}
                  >
                    {principio.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
