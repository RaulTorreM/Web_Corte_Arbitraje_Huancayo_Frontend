import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand } from "../../../theme/brand";
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from "../../../utils/animations";
import SectionLabel from "../../../components/common/SectionLabel";
import SectionTitle from "../../../components/common/SectionTitle";
import FramedImage from "../../../components/common/FramedImage";

const BENEFICIOS = [
  {
    icon: BoltOutlinedIcon,
    title: "Celeridad",
    text: "Plazos definidos y seguimiento permanente para resolver en menos tiempo.",
  },
  {
    icon: LockOutlinedIcon,
    title: "Confidencialidad",
    text: "Las actuaciones y el laudo son reservados, salvo las excepciones legales para ejecutar o impugnar el laudo.",
  },
  {
    icon: GavelOutlinedIcon,
    title: "Decisión vinculante",
    text: "El laudo pone fin a la controversia y es de obligatorio cumplimiento.",
  },
];

export default function QueEsSection() {
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
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", pb: { xs: 4, md: 3 } }}>
              <FramedImage
                src="/images/ARBITRAJE_IMG_02-03.jpg"
                alt="Sala de audiencias de la Corte Superior de Arbitraje de Huancayo"
                side="left"
                maxWidth={520}
                ratio="4 / 3.15"
              />

              <Stack
                direction="row"
                spacing={1.4}
                sx={{
                  position: { xs: "relative", md: "absolute" },
                  right: { md: -18 },
                  bottom: { md: -18 },
                  mt: { xs: 2.5, md: 0 },
                  ml: { xs: 2.5, md: 0 },
                  alignItems: "center",
                  backgroundColor: brand.white,
                  border: `1px solid ${brand.line}`,
                  borderLeft: `4px solid ${brand.gold}`,
                  boxShadow: "0 16px 36px rgba(18,35,61,0.13)",
                  px: 2.2,
                  py: 1.6,
                  width: "fit-content",
                  maxWidth: 300,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: brand.skySoft,
                    color: brand.primary,
                    flexShrink: 0,
                  }}
                >
                  <GavelOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: brand.primaryDark,
                      fontWeight: 750,
                      fontSize: "0.8rem",
                      lineHeight: 1.35,
                    }}
                  >
                    El laudo pone fin a la controversia
                  </Typography>
                  <Typography
                    sx={{ color: brand.muted, fontSize: "0.7rem", mt: 0.3 }}
                  >
                    Decisión vinculante y ejecutable
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Box variants={fadeRight} component={motion.div}>
                <SectionLabel>El arbitraje</SectionLabel>

                <SectionTitle>
                  Una vía rápida, especializada y definitiva
                </SectionTitle>
              </Box>

              <Typography
                component={motion.p}
                variants={fadeRight}
                sx={{
                  mt: 2.6,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.82,
                }}
              >
                El arbitraje es un mecanismo alternativo de solución de
                controversias en el que las partes confían la decisión a un
                árbitro o a un tribunal arbitral. Su decisión, el laudo, tiene
                carácter vinculante y pone fin al conflicto.
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeRight}
                sx={{
                  mt: 1.8,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.82,
                }}
              >
                La Corte Superior de Arbitraje organiza y administra el
                procedimiento: recibe la solicitud, designa o confirma árbitros,
                controla los plazos y notifica el laudo. La decisión de la
                controversia corresponde al tribunal arbitral.
              </Typography>

              <Stack spacing={2.4} sx={{ mt: 4 }}>
                {BENEFICIOS.map((beneficio) => {
                  const Icon = beneficio.icon;

                  return (
                    <Stack
                      key={beneficio.title}
                      component={motion.div}
                      variants={fadeLeft}
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "flex-start" }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: brand.skySoft,
                          color: brand.primary,
                          border: `1px solid ${brand.skyMid}`,
                        }}
                      >
                        <Icon sx={{ fontSize: "1.25rem" }} />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: brand.primaryDark,
                            fontWeight: 750,
                            fontSize: "0.9rem",
                            mb: 0.3,
                          }}
                        >
                          {beneficio.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: brand.muted,
                            fontSize: "0.86rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {beneficio.text}
                        </Typography>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>

              <Stack
                component={motion.div}
                variants={fadeRight}
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 4.5, alignItems: { sm: "center" } }}
              >
                <Button
                  component={RouterLink}
                  to="/arbitraje"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                >
                  Ver el proceso arbitral
                </Button>

                <Button
                  component={RouterLink}
                  to="/arbitraje/clausula"
                  variant="text"
                  sx={{ color: brand.primary, px: 1.5 }}
                >
                  Cláusula modelo
                </Button>
              </Stack>

              <Typography
                sx={{
                  mt: 3,
                  pt: 2.5,
                  borderTop: `1px solid ${brand.line}`,
                  color: brand.muted,
                  fontSize: "0.72rem",
                  lineHeight: 1.6,
                }}
              >
                Marco legal: Decreto Legislativo N.° 1071, Ley de Arbitraje.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
