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
import { brand, fonts } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import {
  ANEXO_1,
  ANEXO_3,
  ANEXO_4,
  EJEMPLOS_COSTO,
  NOTAS_TARIFAS,
} from "../../data/tarifas";

const COMPONENTES = [
  {
    titulo: "Tasa administrativa",
    texto: "Gestión del caso, secretaría, notificaciones y administración del expediente.",
  },
  {
    titulo: "Honorarios arbitrales",
    texto: "Retribución del árbitro único o de cada integrante del tribunal arbitral.",
  },
  {
    titulo: "Derecho de presentación",
    texto: "S/ 800 en arbitrajes nacionales o US$ 425 en internacionales. No está incluido en la tabla.",
  },
  {
    titulo: "Gastos adicionales",
    texto: "Peritos, viajes, actuaciones fuera de la sede, copias y notificaciones físicas.",
  },
];

const PASOS_COSTO = [
  {
    title: "Determine la cuantía",
    text: "Sume las pretensiones cuantificables en dinero. Las pretensiones sobre costos y costas no se consideran.",
  },
  {
    title: "Calcule las indeterminadas",
    text: "Por cada pretensión no cuantificable se aplica el 6.2% del monto del contrato original, con el tope del contrato.",
  },
  {
    title: "Ubique el rubro y sume",
    text: "Identifique el rubro del Anexo 1 y sume la tasa administrativa y los honorarios de la opción elegida.",
  },
];

const celda = { fontSize: "0.82rem", py: 1.1, px: 1.2 };

export default function CostosPage() {
  return (
    <>
      <PageMeta
        title="Costos y tarifas"
        description="Tabla de gastos arbitrales, tasas administrativas, honorarios por cuantía y ejemplos de cálculo de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Transparencia económica"
        title="Costos claros antes de empezar"
        subtitle="Los costos del arbitraje se componen de la tasa administrativa de la Corte y de los honorarios de los árbitros. Ambos se calculan sobre la cuantía de la controversia, según la tabla vigente al momento de presentar la solicitud."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Costos y tarifas" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Qué incluye"
            title="Cuatro componentes del costo"
            subtitle="Los montos de los Anexos 1, 3 y 4 no incluyen IGV. La liquidación definitiva es emitida por la Secretaría General."
            centered
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {COMPONENTES.map((componente, index) => (
              <Grid key={componente.titulo} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  component={motion.article}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  sx={{
                    height: "100%",
                    p: 2.8,
                    backgroundColor: brand.white,
                    border: `1px solid ${brand.line}`,
                    borderTop: `3px solid ${brand.gold}`,
                  }}
                >
                  <PaymentsOutlinedIcon sx={{ color: brand.goldDeep, fontSize: "1.5rem" }} />
                  <Typography variant="h4" sx={{ mt: 1.6, color: brand.primaryDark, fontSize: "1rem" }}>
                    {componente.titulo}
                  </Typography>
                  <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.84rem", lineHeight: 1.65 }}>
                    {componente.texto}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Anexo 1"
            title="Honorarios y tasa administrativa"
            subtitle="Cuantía en soles. La columna “tribunal” corresponde al honorario de cada integrante; el presidente percibe el monto que fije el reglamento."
          />

          <TableContainer sx={{ border: `1px solid ${brand.line}`, overflowX: "auto" }}>
            <Table aria-label="Anexo 1: honorarios y tasa administrativa" sx={{ minWidth: 760 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: brand.primaryDark }}>
                  {["Rubro", "Cuantía en controversia (S/)", "Tasa administrativa", "Honorarios tribunal", "Honorarios árbitro único"].map(
                    (header) => (
                      <TableCell
                        key={header}
                        align={header === "Rubro" ? "left" : "right"}
                        sx={{ color: brand.white, fontWeight: 700, fontSize: "0.78rem" }}
                      >
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {ANEXO_1.map((row) => {
                  const revision = row.admin === "En revisión";

                  return (
                    <TableRow
                      key={row.rubro}
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "rgba(234,242,251,0.35)" },
                        "&:hover": { backgroundColor: "rgba(157,196,239,0.16)" },
                      }}
                    >
                      <TableCell sx={{ ...celda, fontWeight: 750, color: brand.primaryDark }}>
                        {row.rubro}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: brand.primaryDark }}>
                        {row.cuantia}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: revision ? brand.goldDeep : brand.primary }}>
                        {row.admin}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: revision ? brand.goldDeep : brand.primary }}>
                        {row.tribunal}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: revision ? brand.goldDeep : brand.primary }}>
                        {row.unico}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack direction="row" spacing={1.3} sx={{ mt: 2, alignItems: "flex-start" }}>
            <InfoOutlinedIcon sx={{ color: brand.goldDeep, fontSize: "1.05rem", mt: "2px" }} />
            <Typography sx={{ color: brand.muted, fontSize: "0.76rem", lineHeight: 1.6 }}>
              Los rubros G, I, J y K se encuentran en revisión y no se publican
              como montos aplicables. La tabla completa consta en el documento
              normativo; no uses esta versión para una liquidación definitiva.
            </Typography>
          </Stack>
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
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Tasas y trámites"
            title="Anexos 3 y 4"
            subtitle="Montos fijos por actuaciones y servicios administrativos, sin IGV."
          />

          <Grid container spacing={{ xs: 4, md: 5 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1.05rem", mb: 1.5 }}>
                Anexo 3 · Tasas administrativas
              </Typography>
              <TableContainer sx={{ border: `1px solid ${brand.line}`, backgroundColor: brand.white }}>
                <Table size="small" aria-label="Anexo 3: tasas administrativas">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: brand.skySoft }}>
                      <TableCell sx={{ fontWeight: 750, fontSize: "0.76rem" }}>N.°</TableCell>
                      <TableCell sx={{ fontWeight: 750, fontSize: "0.76rem" }}>Concepto</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 750, fontSize: "0.76rem" }}>Monto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ANEXO_3.map((tasa) => (
                      <TableRow key={tasa.n} sx={{ "&:nth-of-type(odd)": { backgroundColor: "rgba(234,242,251,0.35)" } }}>
                        <TableCell sx={celda}>{tasa.n}</TableCell>
                        <TableCell sx={{ ...celda, color: brand.primaryDark }}>{tasa.concepto}</TableCell>
                        <TableCell align="right" sx={{ ...celda, color: brand.primary, fontWeight: 700 }}>
                          {tasa.monto}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1.05rem", mb: 1.5 }}>
                Anexo 4 · Arbitraje de emergencia
              </Typography>
              <TableContainer sx={{ border: `1px solid ${brand.line}`, backgroundColor: brand.white }}>
                <Table size="small" aria-label="Anexo 4: arbitraje de emergencia">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: brand.skySoft }}>
                      <TableCell sx={{ fontWeight: 750, fontSize: "0.76rem" }}>Concepto</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 750, fontSize: "0.76rem" }}>Monto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ANEXO_4.map((item) => (
                      <TableRow key={item.concepto}>
                        <TableCell sx={{ ...celda, color: brand.primaryDark }}>{item.concepto}</TableCell>
                        <TableCell align="right" sx={{ ...celda, color: brand.primary, fontWeight: 700 }}>
                          {item.monto}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.78rem", lineHeight: 1.6 }}>
                La solicitud de medida cautelar dentro del proceso tiene una
                tasa de S/ 800, según el Anexo 3.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Ejemplos"
            title="Estimaciones de referencia"
            subtitle="Los ejemplos no reemplazan la liquidación de la Secretaría General."
            centered
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {EJEMPLOS_COSTO.map((ejemplo) => (
              <Grid key={ejemplo.titulo} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    backgroundColor: brand.paper,
                    border: `1px solid ${brand.line}`,
                    borderLeft: `3px solid ${brand.gold}`,
                  }}
                >
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.92rem" }}>
                    {ejemplo.titulo}
                  </Typography>
                  <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {ejemplo.detalle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

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
              Solicitar una liquidación
            </Button>

            <Button
              component={RouterLink}
              to="/arbitraje/reglamentos"
              variant="outlined"
            >
              Ver la tabla normativa
            </Button>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="¿Quieres revisar el reglamento de aranceles?"
        subtitle="Consulta el detalle normativo de los honorarios y gastos aplicables a los procedimientos administrados por la Corte."
        primaryLabel="Ver reglamentos"
        primaryTo="/arbitraje/reglamentos"
        secondaryLabel="Hablar con la Corte"
        secondaryTo="/contacto"
      />
    </>
  );
}
