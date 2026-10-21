import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PageMeta from "../../components/common/PageMeta";
import { brand, fonts } from "../../theme/brand";
import { ease } from "../../utils/animations";
import seal from "../../assets/brand/logo-corte.png";

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Página no encontrada"
        description="La página que buscas no existe o cambió de ubicación."
      />

      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "72vh", md: "76vh" },
          display: "flex",
          alignItems: "center",
          backgroundColor: brand.paper,
          borderBottom: `3px solid ${brand.gold}`,
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: fonts.display,
            fontSize: { xs: "18rem", md: "30rem" },
            lineHeight: 1,
            fontWeight: 700,
            color: "rgba(45,73,121,0.05)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          404
        </Box>

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            spacing={2.5}
            sx={{ alignItems: "center", textAlign: "center", py: 10 }}
          >
            <Box
              component="img"
              src={seal}
              alt="Sello de la Corte Superior de Arbitraje de Huancayo"
              sx={{ width: { xs: 74, md: 88 }, height: "auto", mb: 1 }}
            />

            <Typography
              sx={{
                color: brand.goldDeep,
                fontSize: "0.72rem",
                fontWeight: 750,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Error 404
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: brand.primaryDark,
                fontSize: { xs: "2.2rem", md: "3.2rem" },
                maxWidth: 720,
              }}
            >
              La página que buscas no está aquí
            </Typography>

            <Typography
              sx={{
                color: brand.muted,
                fontSize: "0.98rem",
                lineHeight: 1.8,
                maxWidth: 560,
              }}
            >
              Es posible que el enlace haya cambiado o que la dirección esté
              incompleta. Puedes volver al inicio o explorar las secciones
              principales del sitio.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ pt: 1 }}
            >
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                startIcon={<HomeOutlinedIcon />}
              >
                Volver al inicio
              </Button>

              <Button
                component={RouterLink}
                to="/contacto"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
              >
                Ir a contacto
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
