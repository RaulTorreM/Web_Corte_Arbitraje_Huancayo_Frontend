import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../../theme/brand";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/animations";

const PRINCIPIOS = [
  "Imparcialidad",
  "Independencia",
  "Integridad",
  "Celeridad",
  "Transparencia",
];

/**
 * Cierre del inicio en fondo claro. La declaración va en serif a tamaño
 * editorial y los cinco principios se leen como un registro compacto, sin
 * descripciones, para no alargar la página.
 */
export default function QuienesHome() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 9 },
        backgroundColor: brand.whiteSoft,
        borderTop: `2px solid ${brand.gold}`,
      }}
    >
      <Container>
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
                sx={{ color: brand.primaryDeep, maxWidth: 520 }}
              >
                ¿Quiénes somos?
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  mt: 2.5,
                  maxWidth: 660,
                  color: brand.primaryDeep,
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
                  color: brand.muted,
                  fontSize: "0.96rem",
                  lineHeight: 1.75,
                  textWrap: "pretty",
                }}
              >
                Contamos con una nómina de profesionales altamente cualificados
                que actúan bajo estrictos principios de imparcialidad,
                independencia, integridad, celeridad y transparencia.
              </Typography>

              <Stack component={motion.div} variants={fadeUp} sx={{ mt: 3.5 }}>
                <Button
                  component={RouterLink}
                  to="/quienes-somos"
                  variant="contained"
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
                borderTop: `1px solid ${brand.lineStrong}`,
              }}
            >
              {PRINCIPIOS.map((principio, index) => (
                <Box
                  key={principio}
                  component={motion.li}
                  variants={fadeUp}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "46px minmax(0, 1fr)",
                    columnGap: 1.5,
                    alignItems: "center",
                    py: { xs: 1.6, md: 1.9 },
                    borderBottom: `1px solid ${brand.line}`,
                  }}
                >
                  <Typography
                    aria-hidden="true"
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldInk,
                      fontSize: "0.95rem",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: 1.4,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography
                    sx={{
                      color: brand.primaryDeep,
                      fontFamily: fonts.display,
                      fontWeight: 600,
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                      lineHeight: 1.2,
                      letterSpacing: "-0.012em",
                    }}
                  >
                    {principio}
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
