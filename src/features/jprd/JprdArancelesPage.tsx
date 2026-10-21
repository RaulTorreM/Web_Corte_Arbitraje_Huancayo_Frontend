import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import {
  ARANCELES_JPRD_JUNTA,
  ARANCELES_JPRD_UNICO,
  TASAS_JPRD,
} from "../../data/tarifas";

const PRINCIPIOS = [
  {
    title: "Costo predecible",
    text: "Tarifa fija por tramo del monto del contrato, conocida desde la constitución de la Junta.",
  },
  {
    title: "Reparto equitativo",
    text: "Las partes comparten los honorarios de la junta, salvo pacto distinto.",
  },
  {
    title: "Pago por etapas",
    text: "Constitución, prevención y decisión. Cada componente se devenga en un momento distinto.",
  },
  {
    title: "Reembolso controlado",
    text: "Si el procedimiento no se realiza, se devuelve el componente no devengado.",
  },
];

const NOTAS = [
  "Propuesta preliminar. No constituye tarifa oficial hasta su aprobación por el Consejo Superior.",
  "Montos en soles y sin IGV.",
  "El monto del contrato determina el tramo aplicable.",
  "El adjudicador único y la junta de tres integrantes tienen estructuras distintas.",
  "Los gastos de traslado, pericias y diligencias adicionales se comunican previamente a las partes.",
];

const celda = { fontSize: "0.82rem", py: 1.1, px: 1.2 };

export default function JprdArancelesPage() {
  return (
    <>
      <PageMeta
        title="Aranceles JPRD (propuesta preliminar)"
        description="Propuesta de aranceles para Juntas de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo. No vigente."
      />

      <PageHero
        kicker="Propuesta preliminar — no vigente"
        title="Aranceles de la JPRD"
        subtitle="La siguiente es una propuesta de estructura tarifaria, elaborada sobre la lógica de la Tabla de Gastos Arbitrales. No constituye tarifa oficial hasta su aprobación por el Consejo Superior."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Aranceles preliminares" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice
        title="Propuesta preliminar — no vigente"
        text="La JPRD no tiene aranceles aprobados. Los montos de esta página son una propuesta de trabajo y no deben usarse para calcular una contraprestación ni para suscribir un contrato."
      />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Principios de la propuesta"
            title="Una tarifa predecible y compartida"
            subtitle="La propuesta busca que las partes conozcan el costo antes de constituir la Junta y que el pago acompañe el avance del servicio."
            centered
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {PRINCIPIOS.map((principio) => (
              <Grid key={principio.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    height: "100%",
                    p: 2.8,
                    backgroundColor: brand.paper,
                    border: `1px solid ${brand.line}`,
                    borderTop: `3px solid ${brand.gold}`,
                  }}
                >
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.92rem" }}>
                    {principio.title}
                  </Typography>
                  <Typography sx={{ mt: 0.9, color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
                    {principio.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
          borderBottom: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Honorarios propuestos"
            title="Adjudicador único y junta de tres"
            subtitle="Los tramos se determinan por el monto del contrato. Los valores no incluyen IGV."
          />

          <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1rem", mb: 1.4 }}>
            Adjudicador único
          </Typography>

          <TableContainer sx={{ border: `1px solid ${brand.line}`, backgroundColor: brand.white }}>
            <Table aria-label="Propuesta de honorarios del adjudicador único" sx={{ minWidth: 680 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: brand.primaryDark }}>
                  {["Monto del contrato (S/)", "Constitución (S/)", "Prevención mensual (S/)", "Decisión (S/)"].map(
                    (header) => (
                      <TableCell key={header} align={header.startsWith("Monto") ? "left" : "right"} sx={{ color: brand.white, fontWeight: 700, fontSize: "0.78rem" }}>
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {ARANCELES_JPRD_UNICO.map((row) => (
                  <TableRow key={row.rango} sx={{ "&:nth-of-type(odd)": { backgroundColor: "rgba(234,242,251,0.35)" } }}>
                    <TableCell sx={{ ...celda, color: brand.primaryDark, fontWeight: 650 }}>{row.rango}</TableCell>
                    <TableCell align="right" sx={{ ...celda, color: brand.primary }}>{row.constitucion}</TableCell>
                    <TableCell align="right" sx={{ ...celda, color: brand.primary }}>{row.prevencion}</TableCell>
                    <TableCell align="right" sx={{ ...celda, color: brand.primary }}>{row.decision}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1rem", mt: 4, mb: 1.4 }}>
            Junta de tres integrantes
          </Typography>

          <TableContainer sx={{ border: `1px solid ${brand.line}`, backgroundColor: brand.white }}>
            <Table aria-label="Propuesta de honorarios de la junta de tres integrantes" sx={{ minWidth: 680 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: brand.skySoft }}>
                  {["Monto del contrato (S/)", "Constitución (S/)", "Prevención mensual (S/)", "Decisión (S/)"].map(
                    (header) => (
                      <TableCell key={header} align={header.startsWith("Monto") ? "left" : "right"} sx={{ fontWeight: 750, fontSize: "0.78rem" }}>
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {ARANCELES_JPRD_JUNTA.map((row) => (
                  <TableRow key={row.rango} sx={{ "&:nth-of-type(odd)": { backgroundColor: "rgba(234,242,251,0.35)" } }}>
                    <TableCell sx={{ ...celda, color: brand.primaryDark, fontWeight: 650 }}>{row.rango}</TableCell>
                    <TableCell align="right" sx={{ ...celda, color: brand.primary }}>{row.constitucion}</TableCell>
                    <TableCell align="right" sx={{ ...celda, color: brand.primary }}>{row.prevencion}</TableCell>
                    <TableCell align="right" sx={{ ...celda, color: brand.primary }}>{row.decision}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1rem", mt: 4, mb: 1.4 }}>
            Tasas administrativas propuestas
          </Typography>

          <TableContainer sx={{ border: `1px solid ${brand.line}`, backgroundColor: brand.white }}>
            <Table aria-label="Propuesta de tasas administrativas JPRD">
              <TableHead>
                <TableRow sx={{ backgroundColor: brand.skySoft }}>
                  <TableCell sx={{ fontWeight: 750, fontSize: "0.78rem" }}>Concepto</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 750, fontSize: "0.78rem" }}>Monto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TASAS_JPRD.map((tasa) => (
                  <TableRow key={tasa.concepto}>
                    <TableCell sx={{ ...celda, color: brand.primaryDark }}>{tasa.concepto}</TableCell>
                    <TableCell align="right" sx={{ ...celda, color: brand.primary, fontWeight: 700 }}>{tasa.monto}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              mt: 4,
              p: { xs: 2.5, md: 3 },
              backgroundColor: brand.skySoft,
              border: `1px solid ${brand.skyMid}`,
              borderLeft: `4px solid ${brand.gold}`,
            }}
          >
            <Stack direction="row" spacing={1.3} sx={{ alignItems: "flex-start", mb: 1.8 }}>
              <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.2rem", mt: "1px" }} />
              <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.9rem" }}>
                Condiciones de la propuesta
              </Typography>
            </Stack>

            <Stack spacing={1.1}>
              {NOTAS.map((nota) => (
                <Stack key={nota} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: brand.goldDeep, mt: "8px", flexShrink: 0 }} />
                  <Typography sx={{ color: brand.primary, fontSize: "0.82rem", lineHeight: 1.65 }}>
                    {nota}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4, alignItems: { sm: "center" } }}>
            <Button component={RouterLink} to="/contacto" variant="contained" endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}>
              Enviar observaciones
            </Button>

            <Button component={RouterLink} to="/jprd/reglamento" variant="outlined">
              Ver reglamento preliminar
            </Button>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="La JPRD se encuentra en implementación"
        subtitle="Los aranceles son una propuesta. Si tu contrato ya contempla una junta, conversemos sobre cómo podría administrarse cuando el servicio esté disponible."
        primaryLabel="Enviar observaciones"
        primaryTo="/contacto"
        secondaryLabel="Ver reglamento preliminar"
        secondaryTo="/jprd/reglamento"
      />
    </>
  );
}
