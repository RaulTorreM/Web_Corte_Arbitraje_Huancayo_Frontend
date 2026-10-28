import { Box, Container, Typography } from "@mui/material";
import { brand, fonts } from "../../../theme/brand";

/**
 * Cierre editorial del inicio: una declaración institucional centrada, sin
 * listas ni bloques adicionales.
 */
export default function FraseHome() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: brand.whiteSoft,
        borderTop: `2px solid ${brand.gold}`,
        textAlign: "center",
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Box
            aria-hidden="true"
            sx={{
              width: 54,
              height: 3,
              mx: "auto",
              mb: { xs: 3, md: 4 },
              backgroundColor: brand.gold,
            }}
          />

          <Typography
            component="h2"
            sx={{
              color: brand.primaryDeep,
              fontFamily: fonts.display,
              fontWeight: 600,
              fontSize: {
                xs: "1.9rem",
                md: "clamp(2.4rem, 3.6vw, 3.2rem)",
              },
              lineHeight: 1.18,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            }}
          >
            Promovemos la seguridad jurídica y el desarrollo económico de la
            región Junín.
          </Typography>

          {/* <Typography
            sx={{
              mt: 2.2,
              maxWidth: 620,
              mx: "auto",
              color: brand.muted,
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              lineHeight: 1.7,
              textWrap: "pretty",
            }}
          >
            A través de la administración transparente de medios de solución de
            conflictos.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.2}
            sx={{ mt: 3.5, justifyContent: "center" }}
          >
            <Button
              component={RouterLink}
              to="/quienes-somos"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
              sx={{ width: { xs: "100%", sm: "fit-content" }, mx: { sm: "auto" } }}
            >
              Conocer la Corte
            </Button>
          </Stack> */}
        </Box>
      </Container>
    </Box>
  );
}
