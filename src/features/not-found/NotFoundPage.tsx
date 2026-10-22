import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import { brand, fonts } from "../../theme/brand";

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
          minHeight: { xs: "68vh", md: "72vh" },
          display: "flex",
          alignItems: "center",
          backgroundColor: brand.paper,
          borderBottom: `1px solid ${brand.line}`,
        }}
      >
        <Container sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 1.8,
                }}
              >
                Error 404
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  color: brand.primaryDeep,
                  fontSize: { xs: "2.2rem", md: "3.3rem" },
                  maxWidth: 660,
                }}
              >
                Esta página no forma parte del expediente
              </Typography>

              <Typography
                sx={{
                  mt: 2.2,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.78,
                  maxWidth: 560,
                }}
              >
                Es posible que el enlace haya cambiado o que la dirección esté
                incompleta. Puedes volver al inicio o explorar las secciones
                principales del sitio.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 3.5 }}>
                <Button
                  component={RouterLink}
                  to="/"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                >
                  Volver al inicio
                </Button>

                <Button component={RouterLink} to="/contacto" variant="outlined">
                  Ir a contacto
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 2.5 }}>
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    color: brand.primaryDeep,
                    fontSize: { xs: "4.5rem", md: "6.5rem" },
                    lineHeight: 0.9,
                  }}
                >
                  404
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: brand.goldDeep,
                    fontSize: "0.64rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Folio no encontrado
                </Typography>

                <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.82rem", lineHeight: 1.6 }}>
                  La dirección solicitada no corresponde a ningún documento de
                  este sitio.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
