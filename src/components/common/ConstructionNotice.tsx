import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { brand, fonts } from "../../theme/brand";
import { isUnderConstruction } from "../../data/construction";

export default function ConstructionNotice() {
  const { pathname } = useLocation();

  if (!isUnderConstruction(pathname)) return null;

  return (
    <Box
      component="section"
      aria-labelledby="construccion-title"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: brand.primaryDeep,
        color: brand.white,
        borderTop: `2px solid ${brand.gold}`,
        borderBottom: `1px solid ${brand.line}`,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
        `,
        backgroundSize: { xs: "28px 28px", md: "42px 42px" },
      }}
    >
      <Typography
        aria-hidden="true"
        sx={{
          position: "absolute",
          right: { xs: -24, md: 40 },
          bottom: { xs: -44, md: -92 },
          color: "rgba(255,255,255,0.035)",
          fontFamily: fonts.display,
          fontSize: { xs: "18rem", md: "30rem" },
          fontWeight: 600,
          lineHeight: 0.72,
          userSelect: "none",
        }}
      >
        C
      </Typography>

      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 7, md: 10 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ alignItems: "center", mb: { xs: 2.5, md: 3.5 } }}
            >
              <Box
                aria-hidden="true"
                sx={{ width: 44, height: 2, backgroundColor: brand.gold }}
              />
              <Typography
                sx={{
                  color: brand.goldSoft,
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Centro de Conciliación
              </Typography>
            </Stack>

            <Typography
              id="construccion-title"
              component="h2"
              sx={{
                maxWidth: 780,
                fontFamily: fonts.display,
                fontSize: {
                  xs: "clamp(2.2rem, 9vw, 3rem)",
                  md: "clamp(3rem, 4.4vw, 4.1rem)",
                },
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                textWrap: "balance",
              }}
            >
              Este espacio está en construcción
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2.5, md: 3 },
                maxWidth: 640,
                color: "rgba(255,255,255,0.72)",
                fontSize: { xs: "0.95rem", md: "1.02rem" },
                lineHeight: 1.78,
                textWrap: "pretty",
              }}
            >
              Estamos preparando la información y los servicios del Centro de
              Conciliación. Próximamente encontrarás aquí el reglamento, los
              costos y el procedimiento para iniciar una conciliación.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                border: "1px solid rgba(255,255,255,0.22)",
                borderLeft: `3px solid ${brand.gold}`,
                backgroundColor: "rgba(255,255,255,0.035)",
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  color: brand.goldSoft,
                  fontSize: "0.64rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Aviso institucional
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  fontFamily: fonts.display,
                  fontSize: { xs: "1.65rem", md: "1.9rem" },
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Próximamente
              </Typography>

              <Box
                aria-hidden="true"
                sx={{
                  mt: 2.2,
                  width: "100%",
                  height: 1,
                  backgroundColor: "rgba(255,255,255,0.22)",
                }}
              />

              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.78rem",
                  lineHeight: 1.65,
                }}
              >
                Centro de Conciliación
                <br />
                Corte Superior de Arbitraje de Huancayo
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
