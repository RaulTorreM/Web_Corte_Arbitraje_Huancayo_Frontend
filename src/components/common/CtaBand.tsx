import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { brand, fonts } from "../../theme/brand";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";
import seal from "../../assets/brand/logo-corte.png";

type CtaBandProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  showPrimary?: boolean;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CtaBand({
  title = "¿Listo para iniciar un arbitraje?",
  subtitle = "Nuestro equipo te orienta en cada etapa del proceso. Revisa los requisitos y conversa con la Secretaría General.",
  primaryLabel = "Cómo iniciar un arbitraje",
  primaryTo = "/arbitraje/inicio",
  showPrimary = true,
  secondaryLabel = "Hablar con la Corte",
  secondaryTo = "/contacto",
}: CtaBandProps) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: brand.primaryDark,
        color: brand.white,
        py: { xs: 7, md: 9 },
        borderTop: `3px solid ${brand.gold}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(700px 360px at 85% 20%, rgba(157,196,239,0.16), transparent 65%)",
        }}
      />

      <Box
        aria-hidden
        component="img"
        src={seal}
        alt=""
        sx={{
          position: "absolute",
          right: { xs: "-30%", md: "2%" },
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: 380, md: 300 },
          opacity: 0.09,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative" }}>
        <Stack
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ maxWidth: 700 }}>
            <Typography
              component={motion.p}
              variants={fadeUp}
              sx={{
                color: brand.goldSoft,
                fontSize: "0.72rem",
                fontWeight: 750,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Corte Superior de Arbitraje
            </Typography>

            <Typography
              component={motion.h2}
              variants={fadeUp}
              variant="h2"
              sx={{
                color: brand.white,
                fontFamily: fonts.display,
                fontSize: { xs: "1.9rem", md: "2.4rem" },
              }}
            >
              {title}
            </Typography>

            <Typography
              component={motion.p}
              variants={fadeUp}
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 620,
                fontSize: "0.98rem",
                lineHeight: 1.75,
              }}
            >
              {subtitle}
            </Typography>
          </Box>

          <Stack
            component={motion.div}
            variants={fadeUp}
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ flexShrink: 0, width: { xs: "100%", sm: "auto" } }}
          >
            {showPrimary && (
              <Button
                component={RouterLink}
                to={primaryTo}
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                sx={{ px: 3 }}
              >
                {primaryLabel}
              </Button>
            )}

            <Button
              component={RouterLink}
              to={secondaryTo}
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
              sx={{
                color: brand.white,
                borderColor: "rgba(255,255,255,0.42)",
                "&:hover": {
                  borderColor: brand.goldSoft,
                  color: brand.goldSoft,
                  backgroundColor: "rgba(255,255,255,0.04)",
                },
              }}
            >
              {secondaryLabel}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
