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
  "El nombre exacto de la Corte que administrará el procedimiento.",
  "El número de árbitros o la modalidad del tribunal.",
  "La sede, el idioma y el derecho aplicable.",
];

const ADAPTACION = [
  {
    elemento: "Institución",
    recomendacion: "Nombre completo de la Corte, sin abreviaturas ambiguas.",
  },
  {
    elemento: "Número de árbitros",
    recomendacion: "“Un árbitro único” o “tres árbitros”. Si se omite, aplica árbitro único.",
  },
  {
    elemento: "Sede",
    recomendacion: "Ciudad y país, por ejemplo “Huancayo, Perú”.",
  },
  {
    elemento: "Idioma",
    recomendacion: "“Castellano”, salvo necesidad de arbitraje bilingüe.",
  },
  {
    elemento: "Derecho aplicable",
    recomendacion: "“Derecho peruano” o el que corresponda al contrato.",
  },
  {
    elemento: "Exclusiones",
    recomendacion: "Arbitraje de emergencia, si las partes no lo desean.",
  },
];

const ERRORES = [
  {
    title: "“Arbitraje de derecho” sin institución",
    text: "La cláusula queda incompleta. Debe indicarse quién administra el arbitraje o, al menos, las reglas que se aplicarán.",
  },
  {
    title: "Nombre mal escrito o inexistente",
    text: "Un nombre incorrecto de la Corte genera incidentes de competencia y puede retrasar el inicio del caso.",
  },
  {
    title: "Doble cláusula contradictoria",
    text: "Una cláusula que remite a la Corte y otra a los tribunales ordinarios crea inseguridad sobre la vía elegida.",
  },
  {
    title: "Cláusulas dispersas en varios documentos",
    text: "Si hay una cláusula en el contrato marco y otra en la orden de compra, debe revisarse su relación antes de firmar.",
  },
  {
    title: "No prever la sede",
    text: "A falta de acuerdo, la sede y las reglas aplicables pueden ser fijadas por el Consejo, lo que puede no convenir a las partes.",
  },
  {
    title: "Asumir que el arbitraje de emergencia siempre aplica",
    text: "Puede excluirse expresamente o no aplicar a convenios celebrados antes de su incorporación al reglamento.",
  },
];

const CHECKLIST = [
  "El nombre de la institución es exacto.",
  "Se indica el número de árbitros.",
  "Se define sede e idioma.",
  "Se define el derecho aplicable.",
  "No hay otra cláusula de solución de controversias incompatible.",
  "La cláusula está en el contrato principal y en los documentos vinculados.",
  "El área legal revisó el alcance de las materias.",
];

const CLAUSULA_RECOMENDADA = `Todas las controversias que deriven del presente contrato o convenio serán resueltas definitivamente mediante arbitraje de acuerdo con el Reglamento del Centro Nacional e Internacional de Arbitraje de la Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín, a cuyas normas, administración y decisión se someten las partes en forma incondicional, declarando conocerlas y aceptarlas en su integridad.`;

const CLAUSULA_GENERAL = `Todo litigio o controversia que surja de la celebración de un acto jurídico será resuelto mediante arbitraje de conformidad con los Reglamentos Arbitrales de la Corte de Arbitraje de la Cámara de Comercio de Huancayo, a cuyas normas, administración y decisión se someten las partes en forma incondicional, declarando conocerlas y aceptarlas en su integridad.`;

const CLAUSULA_DETALLADA = `Toda controversia, disputa o reclamo que surja entre las partes con ocasión del presente contrato, incluyendo su existencia, validez, interpretación, alcance, ejecución, incumplimiento, resolución o nulidad, será sometida a arbitraje institucional administrado por la Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín, de conformidad con su Reglamento vigente al momento de presentar la solicitud arbitral. El tribunal estará conformado por [un árbitro único / tres árbitros]. La sede del arbitraje será [Huancayo, Perú]. El idioma será el [castellano]. El laudo será definitivo, vinculante e inapelable.`;

export default function ClausulaPage() {
  return (
    <>
      <PageMeta
        title="Cláusula arbitral modelo"
        description="Cláusulas modelo para someter controversias a la Corte Superior de Arbitraje de la Cámara de Comercio de Huancayo, con recomendaciones y errores frecuentes."
      />

      <PageHero
        kicker="Prevención y seguridad jurídica"
        title="La cláusula que evita un arbitraje mal encaminado"
        subtitle="Todo empieza por el convenio arbitral. Una cláusula imprecisa puede dejar tu controversia fuera del arbitraje o remitirla a una institución que no elegiste. Usa uno de nuestros modelos y adáptalo con tu abogado."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Cláusula arbitral" },
        ]}
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Antes de firmar"
                title="Incorpora el arbitraje desde el contrato"
                subtitle="La cláusula arbitral puede incluirse en el contrato original o incorporarse mediante un convenio posterior. En ambos casos debe constar por escrito y expresar la voluntad inequívoca de las partes."
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
              title="Cláusula modelo 1 — Recomendada"
              description="Texto completo para someter las controversias al Reglamento de la Corte. Es la redacción que recomendamos para contratos nuevos."
              clause={CLAUSULA_RECOMENDADA}
              note="No modifiques el nombre de la institución ni la sede sin verificar previamente su conformidad con el reglamento vigente."
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <ClauseBlock
              title="Cláusula modelo 2 — Referencia general"
              description="Alternativa breve para actos jurídicos o contratos que no identifican una materia específica."
              clause={CLAUSULA_GENERAL}
            />
          </Box>
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
            kicker="Cómo adaptarla"
            title="Siete decisiones antes de firmar"
            subtitle="Cada elemento debe quedar claro en el texto. Si falta alguno, el reglamento suple el vacío, pero puede no coincidir con lo que las partes esperaban."
          />

          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {ADAPTACION.map((item) => (
              <Grid key={item.elemento} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ height: "100%", p: 2.5, backgroundColor: brand.white, border: `1px solid ${brand.line}` }}>
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.88rem" }}>
                    {item.elemento}
                  </Typography>
                  <Typography sx={{ mt: 0.8, color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
                    {item.recomendacion}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4 }}>
            <ClauseBlock
              title="Cláusula con detalles (plantilla editable)"
              description="Reemplaza los corchetes por la opción que corresponda. Este texto permite precisar la materia, el número de árbitros, la sede y el idioma."
              clause={CLAUSULA_DETALLADA}
              note="El laudo es definitivo, vinculante e inapelable, sin perjuicio del recurso de anulación previsto por ley."
            />
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Errores frecuentes"
            title="Lo que conviene evitar"
            subtitle="Una cláusula defectuosa no siempre se corrige con el reglamento: puede abrir un incidente de competencia antes de que el caso empiece."
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {ERRORES.map((error, index) => (
              <Grid key={error.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  component={motion.article}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  sx={{ height: "100%", p: 3, backgroundColor: brand.paper, border: `1px solid ${brand.line}` }}
                >
                  <WarningAmberOutlinedIcon sx={{ color: brand.goldDeep, fontSize: "1.6rem" }} />

                  <Typography variant="h4" sx={{ mt: 1.6, color: brand.primaryDark, fontSize: "1rem" }}>
                    {error.title}
                  </Typography>

                  <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {error.text}
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
          backgroundColor: brand.skySoft,
          borderTop: `1px solid ${brand.skyMid}`,
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "start" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Checklist"
                title="Antes de firmar"
                subtitle="Una revisión rápida puede evitar años de discusión sobre quién debe resolver la controversia."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={1.3}>
                {CHECKLIST.map((item) => (
                  <Stack key={item} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: "1.1rem", color: brand.primary, mt: "2px", flexShrink: 0 }}
                    />
                    <Typography sx={{ color: brand.primary, fontSize: "0.88rem", lineHeight: 1.65 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 3.5, alignItems: { sm: "center" } }}
              >
                <Button
                  component={RouterLink}
                  to="/arbitraje/inicio"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                >
                  Cómo iniciar un arbitraje
                </Button>

                <Button component={RouterLink} to="/contacto" variant="outlined">
                  Validar mi cláusula
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="Llévate la cláusula lista para tu contrato"
        subtitle="El formato en Word estará disponible cuando la institución publique la biblioteca normativa. Mientras tanto, podemos revisar tu cláusula contigo."
        secondaryLabel="Validar mi cláusula"
        secondaryTo="/contacto"
      />
    </>
  );
}
