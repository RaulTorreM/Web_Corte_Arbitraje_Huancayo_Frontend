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
import CtaBand from "../../components/common/CtaBand";
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

const celda = { fontSize: "0.8rem", py: 1.1, px: 1.2 };

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
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Qué incluye"
            title="Cuatro componentes del costo"
            subtitle="Los montos de los Anexos 1, 3 y 4 no incluyen IGV. La liquidación definitiva es emitida por la Secretaría General."
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {COMPONENTES.map((componente) => (
              <Grid key={componente.titulo} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ height: "100%", pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                  <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                    {componente.titulo}
                  </Typography>
                  <Typography sx={{ mt: 0.7, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.62 }}>
                    {componente.texto}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Anexo 1"
            title="Honorarios y tasa administrativa"
            subtitle="Cuantía en soles. La columna “tribunal” corresponde al honorario de cada integrante; el presidente percibe el monto que fije el reglamento."
          />

          <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}`, overflowX: "auto" }}>
            <Table aria-label="Anexo 1: honorarios y tasa administrativa" sx={{ minWidth: 760 }}>
              <TableHead>
                <TableRow>
                  {["Rubro", "Cuantía en controversia (S/)", "Tasa administrativa", "Honorarios tribunal", "Honorarios árbitro único"].map(
                    (header) => (
                      <TableCell
                        key={header}
                        align={header === "Rubro" ? "left" : "right"}
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
                      sx={{ "&:hover": { backgroundColor: "rgba(176,138,46,0.06)" } }}
                    >
                      <TableCell sx={{ ...celda, fontWeight: 700, color: brand.primaryDeep }}>
                        {row.rubro}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: brand.ink }}>
                        {row.cuantia}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: revision ? brand.accent : brand.primary }}>
                        {row.admin}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: revision ? brand.accent : brand.primary }}>
                        {row.tribunal}
                      </TableCell>
                      <TableCell align="right" sx={{ ...celda, color: revision ? brand.accent : brand.primary }}>
                        {row.unico}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack direction="row" spacing={1.2} sx={{ mt: 2, alignItems: "flex-start" }}>
            <InfoOutlinedIcon sx={{ color: brand.accent, fontSize: 17, mt: "2px" }} />
            <Typography sx={{ color: brand.muted, fontSize: "0.76rem", lineHeight: 1.6 }}>
              Los rubros G, I, J y K se encuentran en revisión y no se publican
              como montos aplicables. La tabla completa consta en el documento
              normativo; no uses esta versión para una liquidación definitiva.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading kicker="Cómo se calcula" title="Tres datos para estimar tu costo" />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {PASOS_COSTO.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ height: "100%", pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: "1.3rem",
                      color: brand.goldDeep,
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography sx={{ mt: 1.4, color: brand.primaryDeep, fontWeight: 700, fontSize: "0.94rem" }}>
                    {paso.title}
                  </Typography>
                  <Typography sx={{ mt: 0.7, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.65 }}>
                    {paso.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 5, pt: 2.2, borderTop: `1px solid ${brand.line}` }}>
            <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem", mb: 1.2 }}>
              Consideraciones importantes
            </Typography>

            <Stack spacing={0.9}>
              {NOTAS_TARIFAS.map((nota) => (
                <Typography
                  key={nota}
                  sx={{
                    py: 0.9,
                    borderTop: `1px solid ${brand.line}`,
                    color: brand.muted,
                    fontSize: "0.81rem",
                    lineHeight: 1.6,
                  }}
                >
                  {nota}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Tasas y trámites"
            title="Anexos 3 y 4"
            subtitle="Montos fijos por actuaciones y servicios administrativos, sin IGV."
          />

          <Grid container spacing={{ xs: 4, md: 5 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem", mb: 1.2 }}>
                Anexo 3 · Tasas administrativas
              </Typography>
              <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                <Table size="small" aria-label="Anexo 3: tasas administrativas">
                  <TableHead>
                    <TableRow>
                      <TableCell>N.°</TableCell>
                      <TableCell>Concepto</TableCell>
                      <TableCell align="right">Monto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ANEXO_3.map((tasa) => (
                      <TableRow key={tasa.n}>
                        <TableCell sx={celda}>{tasa.n}</TableCell>
                        <TableCell sx={{ ...celda, color: brand.primaryDeep }}>{tasa.concepto}</TableCell>
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
              <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem", mb: 1.2 }}>
                Anexo 4 · Arbitraje de emergencia
              </Typography>
              <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                <Table size="small" aria-label="Anexo 4: arbitraje de emergencia">
                  <TableHead>
                    <TableRow>
                      <TableCell>Concepto</TableCell>
                      <TableCell align="right">Monto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ANEXO_4.map((item) => (
                      <TableRow key={item.concepto}>
                        <TableCell sx={{ ...celda, color: brand.primaryDeep }}>{item.concepto}</TableCell>
                        <TableCell align="right" sx={{ ...celda, color: brand.primary, fontWeight: 700 }}>
                          {item.monto}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography sx={{ mt: 1.5, color: brand.muted, fontSize: "0.76rem", lineHeight: 1.6 }}>
                La solicitud de medida cautelar dentro del proceso tiene una
                tasa de S/ 800, según el Anexo 3.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Ejemplos"
            title="Estimaciones de referencia"
            subtitle="Los ejemplos no reemplazan la liquidación de la Secretaría General."
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {EJEMPLOS_COSTO.map((ejemplo) => (
              <Grid key={ejemplo.titulo} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ pt: 2, borderTop: `1px solid ${brand.line}` }}>
                  <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.88rem" }}>
                    {ejemplo.titulo}
                  </Typography>
                  <Typography sx={{ mt: 0.5, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.65 }}>
                    {ejemplo.detalle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contacto"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
            >
              Solicitar una liquidación
            </Button>
            <Button component={RouterLink} to="/arbitraje/reglamentos" variant="outlined">
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
