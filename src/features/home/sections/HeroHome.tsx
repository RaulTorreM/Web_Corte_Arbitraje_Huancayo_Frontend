import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../../theme/brand";
import { MEDIA } from "../../../data/media";
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
      <Container sx={{ pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 9 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
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
                procedimiento con reglas públicas y plazos definidos.
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
                {/* {["Reglamento único", "Tarifas públicas", "Nómina de árbitros"].map(
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
                )} */}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.figure}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
              sx={{
                m: 0,
                width: "100%",
                maxWidth: { sm: 560, md: "100%" },
              }}
            >
              <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 1.5 }}>
                <Box
                  sx={{
                    backgroundColor: brand.paperAlt,
                    border: `1px solid ${brand.line}`,
                    p: { xs: 2.5, md: 3 },
                  }}
                >
                  <Box
                    component="img"
                    src={MEDIA.hero.src}
                    alt={MEDIA.hero.alt}
                    fetchPriority="high"
                    width={320}
                    height={320}
                    sx={{
                      display: "block",
                      width: "100%",
                      aspectRatio: { xs: "4 / 3", md: "16 / 10" },
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Stack
                  component="figcaption"
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    mt: 1.5,
                    pt: 1.2,
                    borderTop: `1px solid ${brand.line}`,
                  }}
                >
           
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            pt: { xs: 2.5, md: 3 },
            borderTop: `1px solid ${brand.lineStrong}`,
          }}
        >
          <Grid container spacing={0}>
            {TRAMITES.map((item, index) => (
              <Grid key={item.to} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box
                  component={RouterLink}
                  to={item.to}
                  sx={{
                    display: "block",
                    height: "100%",
                    pb: { xs: 2, sm: 2.5, lg: 0 },
                    pr: { lg: index === 3 ? 0 : 2.5 },
                    pl: {
                      lg: index === 0 ? 0 : 2.5,
                      sm: index % 2 === 0 ? 0 : 2.2,
                    },
                    pt: {
                      xs: index === 0 ? 0 : 2,
                      sm: index < 2 ? 0 : 2.5,
                      lg: 0,
                    },
                    borderTop: {
                      xs: index === 0 ? 0 : `1px solid ${brand.line}`,
                      sm: index < 2 ? 0 : `1px solid ${brand.line}`,
                      lg: 0,
                    },
                    borderLeft: {
                      lg: index === 0 ? 0 : `1px solid ${brand.line}`,
                      sm: index % 2 === 0 ? 0 : `1px solid ${brand.line}`,
                    },
                    textDecoration: "none",
                    "&:hover .tramite-title": { color: brand.goldDeep },
                    "&:hover .tramite-arrow": {
                      color: brand.primary,
                      transform: "translateX(3px)",
                    },
                    "&:focus-visible": { outlineOffset: 4 },
                  }}
                >
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: "baseline" }}>
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        fontSize: "0.86rem",
                        color: brand.goldDeep,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.number}
                    </Typography>
                    <Typography
                      className="tramite-title"
                      sx={{
                        color: brand.primaryDeep,
                        fontSize: "0.94rem",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        transition: "color 0.18s ease",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 0.6, alignItems: "flex-start" }}
                  >
                    <Typography
                      sx={{
                        color: brand.muted,
                        fontSize: "0.78rem",
                        lineHeight: 1.55,
                        maxWidth: 210,
                      }}
                    >
                      {item.text}
                    </Typography>
                    <ArrowForwardIcon
                      className="tramite-arrow"
                      sx={{
                        fontSize: 16,
                        color: brand.lineStrong,
                        mt: "2px",
                        ml: "auto",
                        flexShrink: 0,
                        transition: "color 0.18s ease, transform 0.18s ease",
                      }}
                    />
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
