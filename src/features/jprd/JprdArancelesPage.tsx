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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
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

const celda = { fontSize: "0.8rem", py: 1.1, px: 1.2 };

function TablaHonorarios({
  titulo,
  data,
  ariaLabel,
}: {
  titulo: string;
  data: { rango: string; constitucion: string; prevencion: string; decision: string }[];
  ariaLabel: string;
}) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem", mb: 1.2 }}>
        {titulo}
      </Typography>

      <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}`, overflowX: "auto" }}>
        <Table aria-label={ariaLabel} sx={{ minWidth: 680 }}>
          <TableHead>
            <TableRow>
              {["Monto del contrato (S/)", "Constitución (S/)", "Prevención mensual (S/)", "Decisión (S/)"].map(
                (header) => (
                  <TableCell key={header} align={header.startsWith("Monto") ? "left" : "right"}>
                    {header}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => (
              <TableRow key={row.rango}>
                <TableCell sx={{ ...celda, color: brand.primaryDeep, fontWeight: 700 }}>
                  {row.rango}
                </TableCell>
                <TableCell align="right" sx={{ ...celda, color: brand.primary }}>
                  {row.constitucion}
                </TableCell>
                <TableCell align="right" sx={{ ...celda, color: brand.primary }}>
                  {row.prevencion}
                </TableCell>
                <TableCell align="right" sx={{ ...celda, color: brand.primary }}>
                  {row.decision}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

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
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice
        title="Propuesta preliminar — no vigente"
        text="La JPRD no tiene aranceles aprobados. Los montos de esta página son una propuesta de trabajo y no deben usarse para calcular una contraprestación ni para suscribir un contrato."
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Principios de la propuesta"
            title="Una tarifa predecible y compartida"
            subtitle="La propuesta busca que las partes conozcan el costo antes de constituir la Junta y que el pago acompañe el avance del servicio."
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {PRINCIPIOS.map((principio, index) => (
              <Grid key={principio.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ height: "100%", pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "0.85rem",
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography sx={{ mt: 1.2, color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                    {principio.title}
                  </Typography>
                  <Typography sx={{ mt: 0.6, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.62 }}>
                    {principio.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Honorarios propuestos"
            title="Adjudicador único y junta de tres"
            subtitle="Los tramos se determinan por el monto del contrato. Los valores no incluyen IGV."
          />

          <TablaHonorarios
            titulo="Adjudicador único"
            data={ARANCELES_JPRD_UNICO}
            ariaLabel="Propuesta de honorarios del adjudicador único"
          />

          <TablaHonorarios
            titulo="Junta de tres integrantes"
            data={ARANCELES_JPRD_JUNTA}
            ariaLabel="Propuesta de honorarios de la junta de tres integrantes"
          />

          <Box sx={{ mt: 5 }}>
            <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem", mb: 1.2 }}>
              Tasas administrativas propuestas
            </Typography>

            <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}`, overflowX: "auto" }}>
              <Table aria-label="Propuesta de tasas administrativas JPRD">
                <TableHead>
                  <TableRow>
                    <TableCell>Concepto</TableCell>
                    <TableCell align="right">Monto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {TASAS_JPRD.map((tasa) => (
                    <TableRow key={tasa.concepto}>
                      <TableCell sx={{ ...celda, color: brand.primaryDeep }}>
                        {tasa.concepto}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: brand.primary, fontWeight: 700 }}>
                        {tasa.monto}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading kicker="Condiciones" title="Antes de usar estas cifras" />

          <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
            {NOTAS.map((nota) => (
              <Typography
                key={nota}
                sx={{
                  py: 1.2,
                  borderBottom: `1px solid ${brand.line}`,
                  color: brand.muted,
                  fontSize: "0.83rem",
                  lineHeight: 1.62,
                }}
              >
                {nota}
              </Typography>
            ))}
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contacto"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
            >
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
