import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import { viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { SITE } from "../../data/site";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { TARIFAS, NOTAS_TARIFAS, type TarifaTabla } from "../../data/tarifas";

type TarifaId = TarifaTabla["id"];

const PASOS_COSTO = [
  {
    title: "Determina la cuantía",
    text: "La cuantía se establece según el valor de las pretensiones al momento de presentar la solicitud.",
  },
  {
    title: "Ubica el rango",
    text: "Identifica el tramo de UIT que corresponde a tu controversia en la tabla vigente.",
  },
  {
    title: "Suma honorarios y gastos",
    text: "El costo total considera los honorarios arbitrales y los gastos administrativos de la Corte.",
  },
];

export default function CostosPage() {
  const [tab, setTab] = useState<TarifaId>("arbitro-unico");
  const tarifa = TARIFAS.find((item) => item.id === tab) ?? TARIFAS[0];

  return (
    <>
      <PageMeta
        title="Costos y tarifas"
        description="Honorarios arbitrales y gastos administrativos de la Corte Superior de Arbitraje de Huancayo, calculados según la cuantía de la controversia."
      />

      <PageHero
        kicker="Transparencia económica"
        title="Costos y tarifas"
        subtitle="Conoce cómo se calculan los honorarios arbitrales y los gastos administrativos antes de iniciar un procedimiento."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Costos y tarifas" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Tarifas referenciales"
                title="Una estructura clara, sin costos ocultos"
                subtitle="Los montos se expresan en soles y se calculan sobre la UIT vigente a la fecha de la solicitud. La liquidación definitiva es emitida por la Secretaría General."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack
                direction="row"
                spacing={1.8}
                sx={{
                  p: 2.5,
                  backgroundColor: brand.white,
                  border: `1px solid ${brand.line}`,
                  borderLeft: `4px solid ${brand.gold}`,
                }}
              >
                <PaymentsOutlinedIcon sx={{ color: brand.goldDeep, mt: "2px" }} />

                <Box>
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.88rem" }}>
                    ¿Necesitas una liquidación?
                  </Typography>
                  <Typography sx={{ color: brand.muted, fontSize: "0.82rem", mt: 0.5, lineHeight: 1.6 }}>
                    Escríbenos con los datos de tu controversia y te ayudaremos a
                    estimar el costo del procedimiento.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            sx={{
              mt: { xs: 4, md: 5 },
              backgroundColor: brand.white,
              border: `1px solid ${brand.line}`,
            }}
          >
            <Tabs
              value={tab}
              onChange={(_event, value: TarifaId) => setTab(value)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                px: { xs: 1, md: 2 },
                borderBottom: `1px solid ${brand.line}`,
                "& .MuiTabs-indicator": {
                  backgroundColor: brand.gold,
                  height: 3,
                },
                "& .MuiTab-root": {
                  minHeight: 58,
                  px: { xs: 1.6, md: 2.4 },
                  color: brand.muted,
                  fontSize: { xs: "0.78rem", md: "0.84rem" },
                },
                "& .Mui-selected": { color: brand.primaryDark },
              }}
            >
              {TARIFAS.map((item) => (
                <Tab key={item.id} value={item.id} label={item.label} />
              ))}
            </Tabs>

            <Box sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Typography
                variant="h3"
                sx={{ color: brand.primaryDark, fontSize: { xs: "1.35rem", md: "1.6rem" } }}
              >
                {tarifa.titulo}
              </Typography>

              <Typography sx={{ mt: 1, mb: 3, color: brand.muted, fontSize: "0.88rem", lineHeight: 1.65 }}>
                {tarifa.descripcion}
              </Typography>

              <TableContainer sx={{ border: `1px solid ${brand.line}` }}>
                <Table aria-label={tarifa.titulo}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Rango de cuantía</TableCell>
                      <TableCell align="right">{tarifa.columnaHonorario}</TableCell>
                      <TableCell align="right">{tarifa.columnaGasto}</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {tarifa.rows.map((row) => {
                      const convenir = row.honorario === "A convenir";

                      return (
                        <TableRow
                          key={row.rango}
                          sx={{
                            "&:nth-of-type(odd)": {
                              backgroundColor: "rgba(234,242,251,0.35)",
                            },
                            "&:hover": { backgroundColor: "rgba(157,196,239,0.16)" },
                          }}
                        >
                          <TableCell
                            sx={{
                              color: brand.primaryDark,
                              fontWeight: 650,
                              fontSize: "0.86rem",
                            }}
                          >
                            {row.rango}
                          </TableCell>

                          <TableCell
                            align="right"
                            sx={{
                              color: convenir ? brand.goldDeep : brand.primary,
                              fontWeight: 700,
                              fontSize: "0.88rem",
                            }}
                          >
                            {row.honorario}
                          </TableCell>

                          <TableCell
                            align="right"
                            sx={{ color: brand.muted, fontSize: "0.86rem" }}
                          >
                            {row.gasto}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.74rem", lineHeight: 1.6 }}>
                Los valores son referenciales. La Corte emite la liquidación
                definitiva luego de calificar la solicitud y determinar la cuantía.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.white,
          borderTop: `1px solid ${brand.line}`,
          borderBottom: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Cómo se calcula"
            title="Tres datos para estimar tu costo"
            centered
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {PASOS_COSTO.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, md: 4 }}>
                <Box
                  component={motion.article}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  sx={{ height: "100%", p: 3, backgroundColor: brand.paper, border: `1px solid ${brand.line}` }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: brand.skyMid,
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Typography variant="h4" sx={{ mt: 2, color: brand.primaryDark, fontSize: "1.05rem" }}>
                    {paso.title}
                  </Typography>

                  <Typography sx={{ mt: 1.1, color: brand.muted, fontSize: "0.87rem", lineHeight: 1.7 }}>
                    {paso.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              p: { xs: 2.5, md: 3 },
              backgroundColor: brand.skySoft,
              border: `1px solid ${brand.skyMid}`,
              borderLeft: `4px solid ${brand.gold}`,
            }}
          >
            <Stack direction="row" spacing={1.3} sx={{ alignItems: "flex-start", mb: 1.8 }}>
              <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.2rem", mt: "1px" }} />
              <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.92rem" }}>
                Consideraciones importantes
              </Typography>
            </Stack>

            <Stack spacing={1.2}>
              {NOTAS_TARIFAS.map((nota) => (
                <Stack key={nota} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: brand.goldDeep,
                      mt: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ color: brand.primary, fontSize: "0.84rem", lineHeight: 1.65 }}>
                    {nota}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4, alignItems: { sm: "center" } }}
          >
            <Button
              href={SITE.systemUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<OpenInNewIcon sx={{ fontSize: "1rem" }} />}
            >
              {SITE.systemLabel}
            </Button>

            <Button
              component={RouterLink}
              to="/contacto"
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            >
              Solicitar orientación
            </Button>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="¿Quieres revisar el reglamento de aranceles?"
        subtitle="Consulta el detalle normativo de los honorarios y gastos aplicables a los procedimientos administrados por la Corte."
        secondaryLabel="Ver reglamentos"
        secondaryTo="/arbitraje/reglamentos"
      />
    </>
  );
}
