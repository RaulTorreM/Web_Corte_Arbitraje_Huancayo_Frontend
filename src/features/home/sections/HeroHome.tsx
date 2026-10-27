import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../../theme/brand";
import { MEDIA } from "../../../data/media";
import { ease } from "../../../utils/animations";

/**
 * Portada del sitio: fotografía horizontal de la sede con un velo navy que
 * garantiza el contraste del texto blanco. La imagen es el LCP de la página,
 * por eso se declara como <img> con fetchPriority alto y no como fondo CSS.
 */
export default function HeroHome() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        minHeight: { xs: 460, sm: 540, md: 620 },
        overflow: "hidden",
        backgroundColor: brand.primaryDeep,
      }}
    >
      <Box
        component="img"
        src={MEDIA.heroSede.src}
        alt={MEDIA.heroSede.alt}
        fetchPriority="high"
        decoding="async"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: { xs: "center", md: "center 42%" },
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(180deg, rgba(7,25,43,0.76) 0%, rgba(7,25,43,0.88) 100%)",
            md: "linear-gradient(180deg, rgba(7,25,43,0.58) 0%, rgba(7,25,43,0.76) 100%)",
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: { xs: 8, md: 10 },
          pb: { xs: 7, sm: 9, md: 12 },
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              width: 54,
              height: 3,
              mb: { xs: 3, md: 4 },
              borderRadius: 2,
              backgroundColor: brand.gold ?? "#BA9907",
            }}
          />

          <Typography
            component="h1"
            variant="h1"
            sx={{
              color: brand.white,
              maxWidth: 900,
              mx: "auto",
              fontSize: {
                xs: "clamp(2.1rem, 7.5vw, 3rem)",
                sm: "clamp(3rem, 5.5vw, 3.8rem)",
                md: "clamp(3.5rem, 4.8vw, 4.3rem)",
              },
              fontWeight: 600,
              lineHeight: 1.13,
              letterSpacing: { xs: "-0.03em", md: "-0.04em" },
              textWrap: "balance",
              textShadow: "0 2px 24px rgba(0,0,0,0.25)",
            }}
          >
            Garantizamos la resolución eficiente de sus conflictos
          </Typography>

          <Typography
            sx={{
              mt: { xs: 2, md: 2.5 },
              maxWidth: 720,
              color: "rgba(255,255,255,0.84)",
              fontSize: { xs: "0.98rem", md: "1.1rem" },
              lineHeight: 1.7,
              textAlign: "center",
              textWrap: "pretty",
            }}
          >
            Uniendo la celeridad que su empresa necesita con la imparcialidad
            que la justicia exige.
          </Typography>

          {/* <Typography
            sx={{
              mt: { xs: 2.5, md: 3 },
              maxWidth: { xs: "100%", md: 600 },
              color: "rgba(255,255,255,0.86)",
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.72,
              textWrap: "pretty",
            }}
          >
            Administramos arbitrajes con reglas públicas, plazos definidos y
            tarifas conocidas, y desarrollamos nuevos mecanismos de prevención y
            resolución de disputas.
          </Typography> */}

          {/* <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.2}
            sx={{ mt: { xs: 3, md: 4 }, maxWidth: { xs: 320, sm: "none" } }}
          >
            <Button
              component={RouterLink}
              to="/arbitraje/inicio"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
            >
              Iniciar un arbitraje
            </Button>
            <Button
              component={RouterLink}
              to="/arbitraje/costos"
              variant="outlined"
              sx={{
                color: brand.white,
                borderColor: "rgba(255,255,255,0.5)",
                "&:hover": {
                  borderWidth: 1,
                  borderColor: brand.goldSoft,
                  backgroundColor: "rgba(233,223,202,0.14)",
                  color: brand.white,
                },
              }}
            >
              Ver costos y tarifas
            </Button>
          </Stack> */}
        </motion.div>
      </Container>
    </Box>
  );
}