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
import { motion } from "framer-motion";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import { viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { ARANCELES_JPRD } from "../../data/tarifas";

const NOTAS = [
  "Los montos son referenciales y se calculan sobre la cuantía de la disputa.",
  "La UIT aplicable es la vigente a la fecha de presentación de la consulta o disputa.",
  "Los gastos administrativos no incluyen honorarios de peritos ni gastos de traslado.",
  "La Corte puede ajustar los montos en juntas de especial complejidad mediante decisión motivada.",
];

export default function JprdArancelesPage() {
  return (
    <>
      <PageMeta
        title="Tabla de aranceles JPRD"
        description="Aranceles de la Junta de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Transparencia económica"
        title="Tabla de aranceles"
        subtitle="Honorarios del adjudicador y gastos administrativos aplicables a los procedimientos de la JPRD."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Tabla de aranceles" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Aranceles referenciales"
                title="Costos claros para una decisión oportuna"
                subtitle="La Junta cobra un honorario por la actuación del adjudicador y un gasto administrativo por la gestión del expediente. La liquidación definitiva la emite la Secretaría General."
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
                    ¿Necesitas una estimación?
                  </Typography>
                  <Typography sx={{ color: brand.muted, fontSize: "0.82rem", mt: 0.5, lineHeight: 1.6 }}>
                    Escríbenos con los datos de tu contrato y la cuantía de la
                    disputa para orientarte sobre el costo.
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
            <Box
              sx={{
                px: { xs: 2.5, md: 3.5 },
                py: 2.5,
                borderBottom: `1px solid ${brand.line}`,
              }}
            >
              <Typography variant="h3" sx={{ color: brand.primaryDark, fontSize: { xs: "1.3rem", md: "1.55rem" } }}>
                Honorarios y gastos de la JPRD
              </Typography>
              <Typography sx={{ mt: 0.8, color: brand.muted, fontSize: "0.86rem" }}>
                Montos expresados en soles, calculados sobre la UIT vigente.
              </Typography>
            </Box>

            <TableContainer>
              <Table aria-label="Tabla de aranceles de la JPRD">
                <TableHead>
                  <TableRow>
                    <TableCell>Rango de cuantía</TableCell>
                    <TableCell align="right">Honorario del adjudicador</TableCell>
                    <TableCell align="right">Gasto administrativo</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {ARANCELES_JPRD.map((row) => {
                    const convenir = row.honorario === "A convenir";

                    return (
                      <TableRow
                        key={row.rango}
                        sx={{
                          "&:nth-of-type(odd)": { backgroundColor: "rgba(234,242,251,0.35)" },
                          "&:hover": { backgroundColor: "rgba(157,196,239,0.16)" },
                        }}
                      >
                        <TableCell sx={{ color: brand.primaryDark, fontWeight: 650, fontSize: "0.86rem" }}>
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
                        <TableCell align="right" sx={{ color: brand.muted, fontSize: "0.86rem" }}>
                          {row.gasto}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ px: { xs: 2.5, md: 3.5 }, py: 2.2 }}>
              <Typography sx={{ color: brand.muted, fontSize: "0.74rem", lineHeight: 1.6 }}>
                Los valores son referenciales. La Junta puede requerir el pago de
                gastos adicionales por pericias, diligencias o desplazamientos,
                previa comunicación a las partes.
              </Typography>
            </Box>
          </Box>

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
              <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.92rem" }}>
                Consideraciones importantes
              </Typography>
            </Stack>

            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {NOTAS.map((nota) => (
                <Grid key={nota} size={{ xs: 12, md: 6 }}>
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
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
                    <Typography sx={{ color: brand.primary, fontSize: "0.83rem", lineHeight: 1.65 }}>
                      {nota}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4, alignItems: { sm: "center" } }}
          >
            <Button
              component={RouterLink}
              to="/contacto"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            >
              Solicitar orientación
            </Button>

            <Button component={RouterLink} to="/jprd/reglamento" variant="outlined">
              Ver reglamento
            </Button>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="Una Junta bien implementada protege tu contrato"
        subtitle="Revisa la cláusula modelo y los requisitos para conformar la Junta desde el inicio de la ejecución."
        secondaryLabel="Ver cláusula JPRD"
        secondaryTo="/jprd/clausula"
      />
    </>
  );
}
