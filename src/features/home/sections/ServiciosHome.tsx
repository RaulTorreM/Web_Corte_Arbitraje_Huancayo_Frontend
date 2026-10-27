import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../../theme/brand";
import { MEDIA } from "../../../data/media";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../../utils/animations";

type Servicio = {
  title: string;
  concept: string;
  text: string;
  to: string;
  cta: string;
  image: { src: string; alt: string };
};

const SERVICIOS: Servicio[] = [
  {
    title: "Arbitraje",
    concept:
      "El arbitraje es un mecanismo alternativo de resolución de conflictos (MARC) mediante el cual dos o más partes deciden, de común acuerdo, someter una controversia presente o futura a la decisión de uno o varios terceros imparciales e independientes, denominados árbitros.",
    // text: "La Corte administra el procedimiento: requisitos, designación del tribunal, plazos y expediente. El tribunal arbitral decide la controversia.",
    text: "",
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
    // text: "Mecanismo previsto en el Estatuto para obras, bienes y servicios, con decisiones durante la ejecución y no al final del contrato.",
    text: "",
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
    // text: "Las partes exponen su posición y negocian con asistencia del conciliador; si llegan a un acuerdo, este se eleva a escritura pública.",
    text: "",
    to: "/conciliacion",
    cta: "Conocer la conciliación",
    image: {
      src: MEDIA.servicioConciliacion.src,
      alt: MEDIA.servicioConciliacion.alt,
    },
  },
];

/**
 * Una sola franja editorial con los tres servicios. Sin tarjetas ni sombras:
 * la continuidad la dan el fondo, el filete dorado y las separaciones.
 */
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
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          sx={{
            mb: { xs: 4, md: 5 },
            pt: { xs: 2.5, md: 3 },
            borderTop: `1px solid ${brand.lineStrong}`,
          }}
        >
          <Typography
            component={motion.h2}
            variants={fadeUp}
            variant="h2"
            sx={{
              color: brand.primaryDeep,
              maxWidth: 820,
              fontSize: {
                xs: "2rem",
                md: "clamp(2.3rem, 3.5vw, 3rem)",
              },
              lineHeight: 1.14,
              letterSpacing: "-0.035em",
              textWrap: "balance",
            }}
          >
            Mecanismos alternativos de Resolución de Conflictos
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
            Brindamos servicios especializados en:
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: brand.whiteSoft,
            borderTop: `2px solid ${brand.gold}`,
            borderBottom: `1px solid ${brand.line}`,
          }}
        >
          <Grid container spacing={0}>
            {SERVICIOS.map((servicio, index) => (
              <Grid key={servicio.title} size={{ xs: 12, md: 4 }}>
                <Box
                  component={motion.article}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    p: { xs: 2.5, md: 3 },
                    pt: { xs: index === 0 ? 2.5 : 3.5, md: 3 },
                    borderTop: {
                      xs: index === 0 ? 0 : `1px solid ${brand.line}`,
                      md: 0,
                    },
                    borderLeft: {
                      md: index === 0 ? 0 : `1px solid ${brand.line}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      overflow: "hidden",
                      aspectRatio: "5 / 3",
                      backgroundColor: brand.primaryDeep,
                      "& img": { transition: "transform 450ms ease" },
                      "&:hover img": { transform: "scale(1.035)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={servicio.image.src}
                      alt={servicio.image.alt}
                      loading="lazy"
                      decoding="async"
                      sx={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      mt: 2.4,
                      color: brand.primaryDeep,
                      fontFamily: fonts.display,
                      fontWeight: 600,
                      fontSize: {
                        xs: "1.3rem",
                        md: "clamp(1.2rem, 1.7vw, 1.45rem)",
                      },
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                      textWrap: "balance",
                    }}
                  >
                    {servicio.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      color: brand.ink,
                      fontSize: "0.9rem",
                      lineHeight: 1.8,
                      textWrap: "pretty",
                      minHeight: 160
                    }}
                  >
                    {servicio.concept}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      pt: 1.8,
                      borderTop: `1px solid ${brand.line}`,
                      color: brand.muted,
                      fontSize: "0.83rem",
                      lineHeight: 1.75,
                      textWrap: "pretty",
                    }}
                  >
                    {servicio.text}
                  </Typography>

                  <Box sx={{ mt: "auto", pt: 2 }}>
                    <Button
                      component={RouterLink}
                      to={servicio.to}
                      variant="text"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
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
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
