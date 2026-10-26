import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import ClauseBlock from "../../components/common/ClauseBlock";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
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
        title="Cláusulas arbitrales (temporales)"
        description="Redacciones de referencia provisionales para someter controversias a la Corte Superior de Arbitraje de Huancayo, con recomendaciones y errores frecuentes."
      />

      <PageHero
        kicker="Prevención y seguridad jurídica"
        title="La cláusula que evita un arbitraje mal encaminado"
        subtitle="Todo empieza por el convenio arbitral. Una cláusula imprecisa puede dejar tu controversia fuera del arbitraje o remitirla a una institución que no elegiste. Revisa las redacciones de referencia y adáptalas con tu abogado; su versión definitiva está pendiente de validación."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Cláusula arbitral" },
        ]}
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Antes de firmar"
                title="Incorpora el arbitraje desde el contrato"
                subtitle="La cláusula arbitral puede incluirse en el contrato original o incorporarse mediante un convenio posterior. En ambos casos debe constar por escrito y expresar la voluntad inequívoca de las partes."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 2 }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.88rem" }}>
                  Una cláusula completa debe contener:
                </Typography>

                <Box component="ul" sx={{ m: 0, mt: 1.2, p: 0, listStyle: "none" }}>
                  {ELEMENTOS.map((elemento) => (
                    <Typography
                      component="li"
                      key={elemento}
                      sx={{
                        py: 0.95,
                        borderTop: `1px solid ${brand.line}`,
                        color: brand.muted,
                        fontSize: "0.82rem",
                        lineHeight: 1.55,
                      }}
                    >
                      {elemento}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4.5, md: 6 } }}>
            <ClauseBlock
              title="Cláusula 1 (Temporal)"
              description="Texto completo para someter las controversias al Reglamento de la Corte. Redacción de referencia para contratos nuevos, pendiente de validación."
              clause={CLAUSULA_RECOMENDADA}
              note="No modifiques el nombre de la institución ni la sede sin verificar previamente su conformidad con el reglamento vigente."
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <ClauseBlock
              title="Cláusula 2 (Temporal)"
              description="Alternativa breve para actos jurídicos o contratos que no identifican una materia específica."
              clause={CLAUSULA_GENERAL}
            />
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Cómo adaptarla"
            title="Seis decisiones antes de firmar"
            subtitle="Cada elemento debe quedar claro en el texto. Si falta alguno, el reglamento suple el vacío, pero puede no coincidir con lo que las partes esperaban."
          />

          <Box
            component="ul"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
              columnGap: { sm: 4, lg: 5 },
              m: 0,
              p: 0,
              listStyle: "none",
            }}
          >
            {ADAPTACION.map((item, index) => (
              <Box
                component="li"
                key={item.elemento}
                sx={{
                  pt: 2.2,
                  pb: 2.8,
                  borderTop: `1px solid ${brand.line}`,
                }}
              >
                <Stack direction="row" spacing={1.4} sx={{ alignItems: "baseline" }}>
                  <Typography
                    aria-hidden="true"
                    sx={{
                      flexShrink: 0,
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "1.5rem",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: 1.1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography
                    component="h3"
                    sx={{
                      color: brand.primaryDeep,
                      fontFamily: fonts.display,
                      fontWeight: 600,
                      fontSize: "1.08rem",
                      lineHeight: 1.35,
                      textWrap: "balance",
                    }}
                  >
                    {item.elemento}
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    mt: 1,
                    color: brand.muted,
                    fontSize: "0.93rem",
                    lineHeight: 1.7,
                    maxWidth: "46ch",
                    textWrap: "pretty",
                  }}
                >
                  {item.recomendacion}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 4 }}>
            <ClauseBlock
              title="Cláusula 3 (Temporal)"
              description="Plantilla editable para precisar la materia, el número de árbitros, la sede y el idioma. Reemplaza los corchetes por la opción que corresponda."
              clause={CLAUSULA_DETALLADA}
              note="El laudo es definitivo, vinculante e inapelable, sin perjuicio del recurso de anulación previsto por ley."
            />
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Errores frecuentes"
            title="Lo que conviene evitar"
            subtitle="Una cláusula defectuosa no siempre se corrige con el reglamento: puede abrir un incidente de competencia antes de que el caso empiece."
          />

          <Box
            component="ul"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              columnGap: { md: 5 },
              borderTop: `2px solid ${brand.accent}`,
              m: 0,
              p: 0,
              listStyle: "none",
            }}
          >
            {ERRORES.map((error, index) => (
              <Box
                component="li"
                key={error.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "36px minmax(0, 1fr)",
                  columnGap: 1.5,
                  py: 2.2,
                  borderBottom: `1px solid ${brand.line}`,
                }}
              >
                <Typography
                  aria-hidden="true"
                  sx={{
                    fontFamily: fonts.display,
                    color: brand.accent,
                    fontSize: "1.05rem",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1.35,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>

                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      color: brand.primaryDeep,
                      fontWeight: 700,
                      fontSize: "0.98rem",
                      lineHeight: 1.45,
                      textWrap: "balance",
                    }}
                  >
                    {error.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.6,
                      color: brand.muted,
                      fontSize: "0.93rem",
                      lineHeight: 1.7,
                      maxWidth: "52ch",
                      textWrap: "pretty",
                    }}
                  >
                    {error.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Checklist"
                title="Antes de firmar"
                subtitle="Una revisión rápida puede evitar años de discusión sobre quién debe resolver la controversia."
                stacked
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="ul"
                sx={{
                  borderTop: `1px solid ${brand.lineStrong}`,
                  m: 0,
                  p: 0,
                  listStyle: "none",
                }}
              >
                {CHECKLIST.map((item) => (
                  <Typography
                    component="li"
                    key={item}
                    sx={{
                      py: 1.2,
                      borderBottom: `1px solid ${brand.line}`,
                      color: brand.muted,
                      fontSize: "0.85rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 3 }}>
                <Button
                  component={RouterLink}
                  to="/contacto"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                >
                  Validar mi cláusula
                </Button>
                <Button component={RouterLink} to="/arbitraje/inicio" variant="outlined">
                  Cómo iniciar un arbitraje
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="Valida tu cláusula antes de firmar"
        subtitle="El formato en Word estará disponible cuando la institución publique la biblioteca normativa. Mientras tanto, podemos revisar tu cláusula contigo."
        primaryLabel="Validar mi cláusula"
        primaryTo="/contacto"
        secondaryLabel="Cómo iniciar un arbitraje"
        secondaryTo="/arbitraje/inicio"
      />
    </>
  );
}
