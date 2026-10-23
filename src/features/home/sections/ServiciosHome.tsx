
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../../theme/brand";
import { MEDIA } from "../../../data/media";
import FramedImage from "../../../components/common/FramedImage";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../../utils/animations";

type Servicio = {
  title: string;
  concept: string;
  text: string;
  status?: string;
  to: string;
  cta: string;
  image: { src: string; alt: string };
};

const SERVICIOS: Servicio[] = [
  {
    title: "Arbitraje",
    concept:
      "El arbitraje es un mecanismo alternativo de resolución de conflictos (MARC) mediante el cual dos o más partes deciden, de común acuerdo, someter una controversia presente o futura a la decisión de uno o varios terceros imparciales e independientes, denominados árbitros.",
    text: "La Corte administra el procedimiento: requisitos, designación del tribunal, plazos y expediente. El tribunal arbitral decide la controversia.",
    to: "/arbitraje",
    cta: "Conocer el arbitraje",
    image: {
      src: MEDIA.servicioArbitraje.src,
      alt: MEDIA.servicioArbitraje.alt,
    },
  },
  {
    title: "JPRD",
    concept:
      "Las Juntas de Prevención y Resolución de Disputas acompañan la ejecución del contrato y buscan resolver los desacuerdos en su origen, antes de que escalen a un arbitraje.",
    text: "Mecanismo previsto en el Estatuto para obras, bienes y servicios, con decisiones durante la ejecución y no al final del contrato.",
    status: "-",
    to: "/jprd",
    cta: "Conocer las JPRD",
    image: {
      src: MEDIA.servicioJprd.src,
      alt: MEDIA.servicioJprd.alt,
    },
  },
  {
    title: "Centro de conciliación",
    concept:
      "La conciliación es un medio alternativo de solución de conflictos en el que las partes, con la ayuda de un conciliador imparcial, buscan un acuerdo voluntario para poner fin a su controversia.",
    text: "Las partes exponen su posición y negocian con asistencia del conciliador; si llegan a un acuerdo, este se eleva a escritura pública.",
    status: "-",
    to: "/conciliacion",
    cta: "Conocer la conciliación",
    image: {
      src: MEDIA.servicioConciliacion.src,
      alt: MEDIA.servicioConciliacion.alt,
    },
  },
];

export default function ServiciosHome() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 11 },
        backgroundColor: brand.paper,
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          sx={{
            mb: { xs: 4, md: 6 },
            pt: { xs: 2.5, md: 3 },
            borderTop: `1px solid ${brand.lineStrong}`,
          }}
        >
          <Box
            component={motion.div}
            variants={fadeUp}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 28,
                height: 2,
                flexShrink: 0,
                bgcolor: brand.gold ?? "#BA9907",
              }}
            />
            <Typography
              sx={{
                color: brand.muted,
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Centro de arbitraje
            </Typography>
          </Box>

          <Typography
            component={motion.h2}
            variants={fadeUp}
            variant="h2"
            sx={{
              color: brand.primaryDeep,
              maxWidth: 760,
              fontSize: {
                xs: "2rem",
                md: "clamp(2.3rem, 3.5vw, 3rem)",
              },
              lineHeight: 1.14,
              letterSpacing: "-0.035em",
              textWrap: "balance",
            }}
          >
            Mecanismos para resolver controversias
          </Typography>

          <Typography
            component={motion.p}
            variants={fadeUp}
            sx={{
              mt: 2,
              maxWidth: 680,
              color: brand.muted,
              fontSize: { xs: "0.94rem", md: "1rem" },
              lineHeight: 1.8,
              textWrap: "pretty",
            }}
          >
            Conoce los mecanismos que promovemos para gestionar desacuerdos
            mediante procedimientos claros, especializados y confiables.
          </Typography>
        </Box>

        {/* Servicios */}
        <Grid
          container
          spacing={{ xs: 2.5, md: 3 }}
          sx={{alignItems:"stretch"}}
        >
          {SERVICIOS.map((servicio, index) => (
            <Grid
              key={servicio.title}
              size={{ xs: 12, md: 4 }}
              sx={{ display: "flex" }}
            >
              <Box
                component={motion.article}
                variants={fadeUp}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  minWidth: 0,
                  bgcolor: "#FFFFFF",
                  border: `1px solid ${brand.line}`,
                  borderRadius: "3px",
                  overflow: "hidden",
                  transition:
                    "border-color 220ms ease, transform 220ms ease, box-shadow 220ms ease",
                  "&:hover": {
                    borderColor: brand.gold ?? "#BA9907",
                    transform: { xs: "none", md: "translateY(-4px)" },
                    boxShadow: {
                      xs: "none",
                      md: "0 12px 30px rgba(7,31,58,0.07)",
                    },
                  },
                }}
              >
                {/* Imagen uniforme */}
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 1.5, md: 1.7 },
                    pb: 0,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "5 / 3",
                      bgcolor: brand.primaryDeep,
                      "& img": {
                        transition: "transform 450ms ease",
                      },
                      "&:hover img": {
                        transform: "scale(1.035)",
                      },
                    }}
                  >
                    <FramedImage
                      src={servicio.image.src}
                      alt={servicio.image.alt}
                      fit="cover"
                      ratio="5 / 3"
                    />
                  </Box>

                  <Box
                    aria-hidden="true"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: { xs: 24, md: 26 },
                      width: 34,
                      height: 3,
                      bgcolor: brand.gold ?? "#BA9907",
                    }}
                  />
                </Box>

                {/* Contenido */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    p: { xs: 2.5, md: 2.7 },
                    pt: 2.3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 1,
                      minHeight: { md: 40 },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        color: brand.primaryDeep,
                        fontFamily: fonts.display,
                        fontWeight: 600,
                        fontSize: {
                          xs: "1.3rem",
                          md: "clamp(1.2rem, 1.7vw, 1.45rem)",
                        },
                        lineHeight: 1.3,
                        letterSpacing: "-0.02em",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {servicio.title}
                    </Typography>

                    <Typography
                      component="span"
                      sx={{
                        color: brand.muted,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        pt: 0.5,
                        flexShrink: 0,
                      }}
                    >
                      0{index + 1}
                    </Typography>
                  </Box>

                  {servicio.status && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.9,
                        mt: 1.2,
                        mb: 0.2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          bgcolor: brand.gold ?? "#BA9907",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          color: brand.accent,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.065em",
                          textTransform: "uppercase",
                          lineHeight: 1.5,
                        }}
                      >
                        {servicio.status}
                      </Typography>
                    </Box>
                  )}

                  <Typography
                    sx={{
                      mt: servicio.status ? 1.3 : 1.7,
                      color: brand.ink,
                      fontSize: "0.9rem",
                      lineHeight: 1.8,
                      textWrap: "pretty",
                    }}
                  >
                    {servicio.concept}
                  </Typography>

                  <Box
                    sx={{
                      mt: 2,
                      pt: 1.8,
                      borderTop: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        color: brand.muted,
                        fontSize: "0.83rem",
                        lineHeight: 1.75,
                        textWrap: "pretty",
                      }}
                    >
                      {servicio.text}
                    </Typography>
                  </Box>

                  {/* Enlace alineado al pie de cada tarjeta */}
                  <Box
                    sx={{
                      mt: "auto",
                      pt: 2.5,
                    }}
                  >
                    <Button
                      component={RouterLink}
                      to={servicio.to}
                      variant="text"
                      endIcon={
                        <ArrowForwardIcon sx={{ fontSize: 17 }} />
                      }
                      sx={{
                        px: 0,
                        py: 0.8,
                        minWidth: 0,
                        color: brand.primaryDeep,
                        fontWeight: 700,
                        fontSize: "0.83rem",
                        letterSpacing: "0.005em",
                        justifyContent: "flex-start",
                        borderRadius: 0,
                        "& .MuiButton-endIcon": {
                          ml: 1,
                          transition: "transform 200ms ease",
                        },
                        "&:hover": {
                          bgcolor: "transparent",
                          color: brand.accent,
                          "& .MuiButton-endIcon": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      {servicio.cta}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
