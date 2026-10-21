import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { brand, fonts } from "../../../theme/brand";
import { SITE, STATS } from "../../../data/site";
import { ease, fadeUp, staggerContainer } from "../../../utils/animations";
import CountUp from "../../../components/common/CountUp";
import seal from "../../../assets/brand/logo-corte.png";

export default function HeroHome() {
  return (
    <>
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: brand.primaryDeep,
          color: brand.white,
          pb: { xs: 11, md: 14 },
          pt: { xs: 6, md: 9 },
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(900px 520px at 8% 0%, rgba(157,196,239,0.20), transparent 62%),
              radial-gradient(700px 460px at 92% 88%, rgba(186,153,7,0.14), transparent 62%),
              linear-gradient(120deg, ${brand.primaryDeep} 0%, ${brand.primaryDark} 58%, #1F3B66 100%)`,
          }}
        />

        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 78%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 78%)",
          }}
        />

        <Typography
          aria-hidden
          sx={{
            position: "absolute",
            right: "-2%",
            bottom: "-1.5rem",
            fontFamily: fonts.display,
            fontSize: { xs: "5rem", md: "11rem" },
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.025)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          Arbitraje
        </Typography>

        <Container sx={{ position: "relative" }}>
          <Grid container spacing={{ xs: 6, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center", mb: 2.5 }}
                >
                  <Box sx={{ width: 36, height: 3, backgroundColor: brand.gold }} />
                  <Typography
                    sx={{
                      color: brand.goldSoft,
                      fontSize: { xs: "0.64rem", sm: "0.72rem" },
                      fontWeight: 750,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Corte Superior de Arbitraje
                  </Typography>
                </Stack>

                <Typography
                  component={motion.h1}
                  variants={fadeUp}
                  sx={{
                    fontFamily: fonts.display,
                    fontSize: { xs: "2.55rem", sm: "3.2rem", md: "3.75rem", lg: "4.15rem" },
                    fontWeight: 600,
                    lineHeight: 1.04,
                    letterSpacing: "-0.025em",
                    maxWidth: 720,
                  }}
                >
                  Arbitraje institucional con{" "}
                  <Box
                    component="span"
                    sx={{
                      color: brand.goldSoft,
                      fontStyle: "italic",
                      position: "relative",
                    }}
                  >
                    reglas claras
                  </Box>
                  , desde Huancayo para todo el Perú.
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{
                    mt: 3,
                    maxWidth: 590,
                    color: "rgba(255,255,255,0.76)",
                    fontSize: { xs: "0.98rem", md: "1.08rem" },
                    lineHeight: 1.8,
                  }}
                >
                  {SITE.legalName} organiza y administra arbitrajes bajo un
                  reglamento único, con plazos definidos, tarifas públicas y un
                  registro de árbitros acreditados.
                </Typography>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 4.2 }}
                >
                  <Button
                    component={RouterLink}
                    to="/arbitraje/inicio"
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                    sx={{
                      px: 3,
                      py: 1.15,
                      backgroundColor: brand.goldSoft,
                      color: brand.primaryDeep,
                      border: `1px solid ${brand.gold}`,
                      "&:hover": {
                        backgroundColor: brand.goldBright,
                        color: brand.primaryDeep,
                      },
                    }}
                  >
                    Iniciar un arbitraje
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/arbitraje/costos"
                    variant="outlined"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                    sx={{
                      px: 2.8,
                      py: 1.15,
                      color: brand.white,
                      borderColor: "rgba(255,255,255,0.38)",
                      "&:hover": {
                        borderColor: brand.goldSoft,
                        color: brand.goldSoft,
                        backgroundColor: "rgba(255,255,255,0.04)",
                      },
                    }}
                  >
                    Calcular el costo
                  </Button>
                </Stack>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  direction="row"
                  spacing={1.2}
                  sx={{
                    mt: 4.5,
                    pt: 3,
                    alignItems: "flex-start",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                    maxWidth: 620,
                  }}
                >
                  <VerifiedOutlinedIcon
                    sx={{ color: brand.goldSoft, fontSize: "1.2rem", mt: "1px" }}
                  />
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.62)",
                      fontSize: "0.8rem",
                      lineHeight: 1.6,
                    }}
                  >
                    La Corte organiza y administra el arbitraje. La decisión de
                    la controversia corresponde al tribunal arbitral.
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease }}
                sx={{
                  position: "relative",
                  maxWidth: 460,
                  mx: { xs: "auto", md: "auto" },
                  mt: { xs: 1, md: 0 },
                  pl: { xs: 2, md: 2.5 },
                  pb: { xs: 2, md: 2.5 },
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "92%",
                    height: "92%",
                    border: `1px solid ${brand.gold}`,
                    opacity: 0.65,
                  }}
                />

                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 30px 70px rgba(0,0,0,0.38)",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/ARBITRAJE_IMG_02-01.jpg"
                    alt="Sede de la Corte Superior de Arbitraje de Huancayo"
                    sx={{
                      display: "block",
                      width: "100%",
                      aspectRatio: "1 / 1.02",
                      objectFit: "cover",
                      objectPosition: "center 58%",
                    }}
                  />

                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(18,35,61,0.88) 0%, rgba(18,35,61,0.16) 48%, rgba(18,35,61,0.05) 100%)",
                    }}
                  />

                  <Stack
                    direction="row"
                    spacing={1.1}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      alignItems: "center",
                      backgroundColor: "rgba(18,35,61,0.72)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      px: 1.4,
                      py: 0.7,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: brand.goldSoft,
                      }}
                    />
                    <Typography
                      sx={{
                        color: brand.white,
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Sede institucional
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      position: "absolute",
                      left: 18,
                      right: 18,
                      bottom: 18,
                      p: 2,
                      backgroundColor: "rgba(18,35,61,0.82)",
                      backdropFilter: "blur(10px)",
                      borderLeft: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.1}
                      sx={{ alignItems: "flex-start" }}
                    >
                      <PlaceOutlinedIcon
                        sx={{ color: brand.goldSoft, fontSize: "1.05rem", mt: "2px" }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            color: brand.white,
                            fontSize: "0.8rem",
                            fontWeight: 650,
                            lineHeight: 1.4,
                          }}
                        >
                          Huancayo, Junín
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.62)",
                            fontSize: "0.72rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {SITE.contact.address}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>

                <Box
                  component="img"
                  src={seal}
                  alt=""
                  aria-hidden
                  sx={{
                    position: "absolute",
                    left: { xs: -14, md: -40 },
                    top: { xs: -26, md: -32 },
                    width: { xs: 98, md: 124 },
                    filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.35))",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ position: "relative", zIndex: 2, mt: { xs: -5, md: -6 } }}>
        <Container>
          <Grid container spacing={0}>
            {STATS.map((stat, index) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: 0.08 * index, ease }}
                  sx={{
                    height: "100%",
                    minHeight: { xs: 112, md: 136 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: brand.white,
                    border: `1px solid ${brand.line}`,
                    borderLeft: index === 0 ? `3px solid ${brand.gold}` : `1px solid ${brand.line}`,
                    px: { xs: 2, md: 3 },
                    py: { xs: 2.5, md: 3 },
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 16px 34px rgba(18,35,61,0.10)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: { xs: "2rem", md: "2.55rem" },
                      fontWeight: 600,
                      color: brand.primaryDark,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      color: brand.muted,
                      fontSize: { xs: "0.66rem", md: "0.72rem" },
                      fontWeight: 650,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      lineHeight: 1.5,
                      maxWidth: 180,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
