import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand } from "../../../theme/brand";
import SectionHeading from "../../../components/common/SectionHeading";
import { Stagger } from "../../../components/common/Reveal";
import { fadeUp } from "../../../utils/animations";

const SERVICIOS = [
  {
    id: "01",
    etiqueta: "Arbitraje",
    titulo: "Arbitraje institucional",
    texto:
      "La vía definitiva para resolver controversias patrimoniales disponibles, con árbitro único o tribunal arbitral y el respaldo de una institución especializada.",
    items: [
      "Laudo con carácter vinculante",
      "Administración integral del expediente",
      "Nómina de árbitros acreditados",
    ],
    to: "/arbitraje",
    cta: "Conocer el arbitraje",
    icon: GavelOutlinedIcon,
    dark: true,
  },
  {
    id: "02",
    etiqueta: "JPRD",
    titulo: "Junta de Prevención y Resolución de Disputas",
    texto:
      "Acompañamiento técnico durante la ejecución contractual para prevenir desacuerdos, emitir decisiones oportunas y preservar la continuidad del proyecto.",
    items: [
      "Decisiones durante la ejecución",
      "Continuidad de la obra o servicio",
      "Adjudicadores especializados",
    ],
    to: "/jprd",
    cta: "Conocer la JPRD",
    icon: HandshakeOutlinedIcon,
    dark: false,
  },
];

export default function ServiciosSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          sx={{ alignItems: "flex-end", mb: { xs: 5, md: 6.5 } }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeading
              kicker="Nuestros mecanismos"
              title={
                <>
                  Dos caminos, una misma
                  <br />
                  vocación de servicio
                </>
              }
              sx={{ mb: 0 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                color: brand.muted,
                fontSize: "0.98rem",
                lineHeight: 1.8,
                maxWidth: 420,
                ml: { md: "auto" },
              }}
            >
              Diseñamos mecanismos eficientes para que las partes resuelvan sus
              diferencias con celeridad, confidencialidad y seguridad jurídica.
            </Typography>
          </Grid>
        </Grid>

        <Stagger>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {SERVICIOS.map((servicio) => {
              const Icon = servicio.icon;
              const dark = servicio.dark;

              return (
                <Grid key={servicio.id} size={{ xs: 12, md: 6 }}>
                  <Stack
                    component={motion.article}
                    variants={fadeUp}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      p: { xs: 3, md: 4.5 },
                      backgroundColor: dark ? brand.primaryDark : brand.white,
                      color: dark ? brand.white : brand.ink,
                      border: `1px solid ${dark ? brand.primaryDark : brand.line}`,
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        borderColor: brand.gold,
                        boxShadow: "0 24px 50px rgba(18,35,61,0.16)",
                        "& .service-arrow": { transform: "translateX(5px)" },
                      },
                    }}
                  >
                    <Typography
                      aria-hidden
                      sx={{
                        position: "absolute",
                        right: 18,
                        top: -18,
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontSize: { xs: "5.5rem", md: "7rem" },
                        fontWeight: 600,
                        lineHeight: 1,
                        color: dark
                          ? "rgba(255,255,255,0.055)"
                          : "rgba(45,73,121,0.055)",
                        pointerEvents: "none",
                      }}
                    >
                      {servicio.id}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1.5}
                      sx={{ alignItems: "center", mb: 3 }}
                    >
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: dark
                            ? "rgba(186,153,7,0.16)"
                            : brand.skySoft,
                          color: dark ? brand.goldSoft : brand.primary,
                          border: `1px solid ${
                            dark ? "rgba(186,153,7,0.38)" : brand.skyMid
                          }`,
                        }}
                      >
                        <Icon sx={{ fontSize: "1.65rem" }} />
                      </Box>

                      <Typography
                        sx={{
                          color: dark ? brand.goldSoft : brand.goldDeep,
                          fontSize: "0.68rem",
                          fontWeight: 750,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                        }}
                      >
                        {servicio.id} — {servicio.etiqueta}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h3"
                      sx={{
                        maxWidth: 420,
                        color: dark ? brand.white : brand.primaryDark,
                        fontSize: { xs: "1.55rem", md: "1.8rem" },
                        lineHeight: 1.2,
                      }}
                    >
                      {servicio.titulo}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 2,
                        color: dark ? "rgba(255,255,255,0.7)" : brand.muted,
                        fontSize: "0.94rem",
                        lineHeight: 1.78,
                        maxWidth: 450,
                      }}
                    >
                      {servicio.texto}
                    </Typography>

                    <Stack spacing={1.2} sx={{ mt: 3, mb: 4 }}>
                      {servicio.items.map((item) => (
                        <Stack
                          key={item}
                          direction="row"
                          spacing={1.2}
                          sx={{ alignItems: "flex-start" }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{
                              fontSize: "1.05rem",
                              color: dark ? brand.goldSoft : brand.goldDeep,
                              mt: "1px",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              color: dark
                                ? "rgba(255,255,255,0.78)"
                                : brand.ink,
                              fontSize: "0.86rem",
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      component={RouterLink}
                      to={servicio.to}
                      variant={dark ? "outlined" : "text"}
                      endIcon={
                        <ArrowForwardIcon
                          className="service-arrow"
                          sx={{ fontSize: "1rem", transition: "transform 0.2s ease" }}
                        />
                      }
                      sx={{
                        mt: "auto",
                        alignSelf: "flex-start",
                        px: dark ? 2.2 : 0.4,
                        color: dark ? brand.white : brand.primary,
                        borderColor: dark
                          ? "rgba(255,255,255,0.35)"
                          : "transparent",
                        "&:hover": {
                          color: dark ? brand.goldSoft : brand.goldDeep,
                          borderColor: dark ? brand.goldSoft : "transparent",
                          backgroundColor: dark
                            ? "rgba(255,255,255,0.04)"
                            : "transparent",
                        },
                      }}
                    >
                      {servicio.cta}
                    </Button>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stagger>
      </Container>
    </Box>
  );
}
