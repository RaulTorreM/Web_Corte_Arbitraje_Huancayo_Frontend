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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import ClauseBlock from "../../components/common/ClauseBlock";
import CtaBand from "../../components/common/CtaBand";
import { viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";

const ELEMENTOS = [
  "La voluntad inequívoca de someter las controversias a arbitraje.",
  "La institución que administrará el procedimiento.",
  "El número de árbitros o la modalidad del tribunal.",
  "La sede del arbitraje y el idioma del procedimiento.",
];

const ERRORES = [
  {
    title: "Cláusula ambigua",
    text: "Redacciones imprecisas sobre la materia o la institución pueden generar nullidades o disputas sobre la competencia.",
  },
  {
    title: "Doble vía de solución",
    text: "Someter la misma controversia a arbitraje y a la jurisdicción ordinaria genera inseguridad jurídica.",
  },
  {
    title: "Institución inexistente",
    text: "Verifica que el nombre de la Corte y su sede coincidan exactamente con la institución que administrará el arbitraje.",
  },
];

const CLAUSULA = `Toda controversia derivada de la celebración, ejecución, interpretación, resolución o terminación del presente contrato será resuelta de manera definitiva mediante arbitraje institucional administrado por la Corte Superior de Arbitraje de Huancayo, a la cual las partes se someten libre y expresamente.

El arbitraje será resuelto por un árbitro único / un tribunal arbitral integrado por tres árbitros, conforme al Reglamento de Arbitraje vigente de la Corte. La sede del arbitraje será la ciudad de Huancayo y el idioma del procedimiento será el español.

Las partes renuncian expresamente a la jurisdicción de los jueces y tribunales ordinarios para la solución de cualquier controversia derivada del presente contrato, sin perjuicio de las acciones de anulación que correspondan conforme a ley.`;

export default function ClausulaPage() {
  return (
    <>
      <PageMeta
        title="Cláusula arbitral"
        description="Cláusula modelo para someter controversias a la Corte Superior de Arbitraje de Huancayo y recomendaciones para su redacción."
      />

      <PageHero
        kicker="Prevención y seguridad jurídica"
        title="Cláusula arbitral"
        subtitle="La cláusula es la puerta de entrada al arbitraje. Una redacción precisa evita disputas sobre la competencia y protege la voluntad de las partes."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Cláusula arbitral" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Antes de firmar"
                title="Incorpora el arbitraje desde el contrato"
                subtitle="La cláusula arbitral puede incluirse en el contrato original o incorporarse mediante un convenio posterior. En ambos casos debe constar por escrito."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: brand.skySoft,
                  border: `1px solid ${brand.skyMid}`,
                  borderTop: `3px solid ${brand.gold}`,
                }}
              >
                <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.92rem", mb: 1.8 }}>
                  Una cláusula completa debe contener:
                </Typography>

                <Stack spacing={1.4}>
                  {ELEMENTOS.map((elemento) => (
                    <Stack key={elemento} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: "1.05rem", color: brand.goldDeep, mt: "2px", flexShrink: 0 }}
                      />
                      <Typography sx={{ color: brand.primary, fontSize: "0.84rem", lineHeight: 1.6 }}>
                        {elemento}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4.5, md: 6 } }}>
            <ClauseBlock
              title="Cláusula modelo de arbitraje"
              description="Adapta el texto a tu contrato. Elige un árbitro único o un tribunal de tres integrantes y elimina la opción que no corresponda."
              clause={CLAUSULA}
              note="Recomendación: no modifiques el nombre de la institución ni la sede sin verificar previamente su conformidad con el reglamento vigente."
            />
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 4 }}>
            {ERRORES.map((error, index) => (
              <Grid key={error.title} size={{ xs: 12, md: 4 }}>
                <Box
                  component={motion.article}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  sx={{ height: "100%", p: 3, backgroundColor: brand.paper, border: `1px solid ${brand.line}` }}
                >
                  <WarningAmberOutlinedIcon sx={{ color: brand.goldDeep, fontSize: "1.6rem" }} />

                  <Typography variant="h4" sx={{ mt: 1.6, color: brand.primaryDark, fontSize: "1.04rem" }}>
                    {error.title}
                  </Typography>

                  <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.86rem", lineHeight: 1.7 }}>
                    {error.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4.5, alignItems: { sm: "center" } }}
          >
            <Button
              component={RouterLink}
              to="/arbitraje/inicio"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            >
              Cómo iniciar un arbitraje
            </Button>

            <Typography sx={{ color: brand.muted, fontSize: "0.84rem" }}>
              ¿Tienes una cláusula en revisión?{" "}
              <Box
                component={RouterLink}
                to="/contacto"
                sx={{ color: brand.primary, fontWeight: 700, textDecoration: "none", "&:hover": { color: brand.goldDeep } }}
              >
                Conversa con la Corte
              </Box>
            </Typography>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="Una buena cláusula evita un mal conflicto"
        subtitle="Nuestro equipo puede orientarte sobre la redacción más adecuada para tu contrato."
        secondaryLabel="Solicitar orientación"
        secondaryTo="/contacto"
      />
    </>
  );
}
