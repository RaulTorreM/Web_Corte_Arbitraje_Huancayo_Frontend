import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";

type CtaBandProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  showPrimary?: boolean;
  secondaryLabel?: string;
  secondaryTo?: string;
};

// Se deja el componente disponible, pero desactivado en todas las páginas.
// Para volver a mostrarlo, cambia este valor a true.
const CTA_BAND_ENABLED = false;

export default function CtaBand({
  title = "Conversemos antes de presentar tu caso",
  subtitle = "La Secretaría General revisa los requisitos, la cláusula arbitral y el paso que corresponde. Si ya tienes un expediente, indícanos el número de caso al escribirnos.",
  primaryLabel = "Cómo iniciar un arbitraje",
  primaryTo = "/arbitraje/inicio",
  showPrimary = true,
  secondaryLabel = "Ver canales de atención",
  secondaryTo = "/contacto",
}: CtaBandProps) {
  if (!CTA_BAND_ENABLED) return null;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: brand.primaryDeep,
        color: brand.white,
        borderTop: `2px solid ${brand.gold}`,
        py: { xs: 7, md: 9 },
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              spacing={2}
            >
              <Typography
                component={motion.h2}
                variants={fadeUp}
                variant="h2"
                sx={{
                  color: brand.white,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  maxWidth: 640,
                }}
              >
                {title}
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  maxWidth: 600,
                  fontSize: "0.98rem",
                  lineHeight: 1.72,
                }}
              >
                {subtitle}
              </Typography>

              <Stack
                component={motion.div}
                variants={fadeUp}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2.5 }}
                sx={{ pt: 0.5 }}
              >
                <Box
                  component="a"
                  href={SITE.contact.phoneHref}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    color: brand.goldSoft,
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    "&:hover": { color: brand.white },
                  }}
                >
                  <PhoneOutlinedIcon sx={{ fontSize: 17 }} />
                  {SITE.contact.phone}
                </Box>
                <Box
                  component="a"
                  href={`mailto:${SITE.contact.email}`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    "&:hover": { color: brand.white },
                  }}
                >
                  <MailOutlinedIcon sx={{ fontSize: 17 }} />
                  {SITE.contact.email}
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack
              component={motion.div}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              spacing={1.2}
              sx={{ alignItems: { xs: "stretch", md: "flex-end" } }}
            >
              {showPrimary && (
                <Button
                  component={RouterLink}
                  to={primaryTo}
                  variant="contained"
                  color="secondary"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                  sx={{ width: { xs: "100%", md: "auto" } }}
                >
                  {primaryLabel}
                </Button>
              )}

              <Button
                component={RouterLink}
                to={secondaryTo}
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                sx={{
                  width: { xs: "100%", md: "auto" },
                  color: brand.white,
                  borderColor: "rgba(255,255,255,0.38)",
                  "&:hover": {
                    borderColor: brand.goldSoft,
                    backgroundColor: brand.goldSoft,
                    color: brand.primaryDeep,
                  },
                }}
              >
                {secondaryLabel}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
