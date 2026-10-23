import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import FramedImage from "../../components/common/FramedImage";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { PASOS_ARBITRAJE } from "../../data/site";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { MEDIA } from "../../data/media";

/**
 * El orden va de menor a mayor complejidad: primero las modalidades que se
 * eligen por cuantía y trámite, después los supuestos específicos y el apoyo
 * a arbitrajes ad hoc. Los textos se conservan sin cambios; solo cambia el
 * orden de presentación.
 */
const MODALIDADES_PRINCIPALES = [
  {
    nombre: "Arbitraje social",
    text: "Para conflictos de menor cuantía, con tarifa fija y trámite simplificado. Árbitro único designado directamente por la Corte.",
  },
  {
    nombre: "Arbitraje acelerado",
    text: "Para controversias hasta el límite del rubro D o cuando las partes lo acuerden. Siempre a cargo de un árbitro único, con laudo en cuatro meses.",
  },
  {
    nombre: "Arbitraje ordinario",
    text: "Para controversias de mayor cuantía o complejidad. Tribunal de uno o tres árbitros, según el convenio; si el convenio no precisa el número, se designa un árbitro único. Aplica desde el rubro D de la tabla.",
  },
];

const MODALIDADES_ESPECIFICAS = [
  {
    nombre: "Arbitraje de emergencia",
    text: "Para medidas cautelares urgentes antes de la constitución del tribunal, limitadas a cartas fianza u otras garantías, salvo que el Consejo amplíe los supuestos por Directiva. Árbitro designado en dos días y decisión en cinco días.",
  },
  {
    nombre: "Arbitraje internacional",
    text: "Mismas reglas, con consideración de nacionalidad, residencia e idioma del árbitro. Derecho de presentación: US$ 425.",
  },
  {
    nombre: "Arbitraje ad hoc con secretaría",
    text: "La Corte puede actuar como secretaría arbitral, autoridad nominadora o autoridad decisora de recusaciones, con aplicación supletoria de sus reglas.",
  },
];

const ENLACES = [
  { title: "Costos y tarifas", to: "/arbitraje/costos" },
  { title: "Reglamentos", to: "/arbitraje/reglamentos" },
  { title: "Nómina de árbitros", to: "/arbitraje/arbitros" },
  { title: "Cláusula arbitral", to: "/arbitraje/clausula" },
  { title: "Banco de laudos", to: "/arbitraje/laudos" },
];

export default function ArbitrajePage() {
  return (
    <>
      <PageMeta
        title="Arbitraje"
        description="Arbitraje administrado con reglamento único, plazos definidos y tarifas públicas. Conoce las modalidades, el proceso y cómo iniciar tu caso."
      />

      <PageHero
        kicker="Mecanismo de solución de controversias"
        title="Arbitraje administrado, de principio a fin"
        subtitle="La Corte organiza y administra el arbitraje: recibe la solicitud, designa o confirma árbitros, controla los plazos, liquida los gastos y notifica el laudo. La decisión de la controversia corresponde al tribunal arbitral."
        crumbs={[{ label: "Arbitraje" }]}
        image={MEDIA.arbitraje}
      >
        <Typography sx={{ color: brand.muted, fontSize: "0.8rem", lineHeight: 1.6 }}>
          Decreto Legislativo N.° 1071 · Laudo vinculante · Confidencialidad
        </Typography>
      </PageHero>

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <FramedImage
                src={MEDIA.arbitraje.src}
                alt={MEDIA.arbitraje.alt}
                fit={MEDIA.arbitraje.fit}
                maxWidth={460}
                ratio="4 / 5"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Presentación
              </Typography>

              <Typography
                variant="h2"
                sx={{ color: brand.primaryDeep, maxWidth: 620 }}
              >
                Un arbitraje administrado con reglas claras
              </Typography>

              <Typography
                sx={{
                  mt: 2.2,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.78,
                  maxWidth: 620,
                }}
              >
                El arbitraje es un mecanismo alternativo de solución de
                controversias mediante el cual las partes someten, de manera
                voluntaria, sus conflictos a la decisión de un árbitro único o de
                un tribunal arbitral.
              </Typography>

              <Typography
                sx={{
                  mt: 1.6,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.78,
                  maxWidth: 620,
                }}
              >
                La Corte administra el procedimiento, designa o confirma árbitros
                cuando corresponde, controla plazos y garantiza el debido proceso.
                El laudo que pone fin al arbitraje es definitivo, vinculante e
                inapelable, sin perjuicio del recurso de anulación previsto por ley.
              </Typography>

              <Stack sx={{ mt: 3, borderTop: `1px solid ${brand.line}` }}>
                {[
                  "Administración integral del expediente arbitral.",
                  "Designación de árbitros del Registro mediante selección aleatoria y, en lo posible, rotativa; los árbitros externos deben ser confirmados.",
                  "Control de plazos y notificaciones oportunas.",
                ].map((item, index) => (
                  <Box
                    key={item}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "30px 1fr",
                      gap: 1.2,
                      py: 1.2,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.goldDeep,
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                      }}
                    >
                      0{index + 1}
                    </Typography>
                    <Typography sx={{ color: brand.ink, fontSize: "0.88rem", lineHeight: 1.55 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 3 }}>
                <Button
                  component={RouterLink}
                  to="/arbitraje/inicio"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                >
                  Iniciar un arbitraje
                </Button>
                <Button component={RouterLink} to="/arbitraje/costos" variant="outlined">
                  Ver costos
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Box
            sx={{
              pt: { xs: 2, md: 2.5 },
              borderTop: `1px solid ${brand.lineStrong}`,
              mb: { xs: 4, md: 5.5 },
            }}
          >
            <Grid container spacing={{ xs: 2, md: 5 }} sx={{ alignItems: "end" }}>
              <Grid size={{ xs: 12, md: 7.5 }}>
                <Typography
                  sx={{
                    mb: 1.2,
                    color: brand.goldDeep,
                    fontSize: "0.64rem",
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  Modalidades
                </Typography>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{ color: brand.primaryDeep, maxWidth: 820 }}
                >
                  Un reglamento, distintas formas de arbitrar
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4.5 }}>
                <Typography
                  sx={{
                    color: brand.muted,
                    fontSize: "0.95rem",
                    lineHeight: 1.72,
                    maxWidth: 430,
                    ml: { md: "auto" },
                  }}
                >
                  La cuantía, la complejidad y el acuerdo de las partes determinan
                  la modalidad aplicable.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box component="section" sx={{ mb: { xs: 5, md: 6.5 } }}>
            <Stack
              direction="row"
              spacing={1.4}
              sx={{ alignItems: "flex-start", mb: 2.2 }}
            >
              <Box
                sx={{
                  width: 26,
                  height: 2,
                  mt: "0.45em",
                  backgroundColor: brand.gold,
                  flexShrink: 0,
                }}
              />
              <Typography
                component="h3"
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Según la cuantía y el trámite
              </Typography>
            </Stack>

            <Box
              component="ol"
              role="list"
              sx={{
                listStyle: "none",
                m: 0,
                p: 0,
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  lg: "repeat(3, minmax(0, 1fr))",
                },
                columnGap: { sm: 4, lg: 5 },
              }}
            >
              {MODALIDADES_PRINCIPALES.map((modalidad, index) => (
                <Box
                  component="li"
                  key={modalidad.nombre}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    columnGap: 1.5,
                    pt: 2.4,
                    pb: 2.8,
                    borderTop: `2px solid ${brand.primary}`,
                    "&:nth-of-type(3)": {
                      gridColumn: { sm: "span 2", lg: "span 1" },
                    },
                  }}
                >
                  <Typography
                    aria-hidden="true"
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.gold,
                      fontSize: "2.05rem",
                      lineHeight: 0.95,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Box>
                    <Typography
                      component="h4"
                      sx={{
                        color: brand.primaryDeep,
                        fontFamily: fonts.display,
                        fontWeight: 600,
                        fontSize: "1.13rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {modalidad.nombre}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: brand.muted,
                        fontSize: "0.94rem",
                        lineHeight: 1.7,
                        maxWidth: "58ch",
                        textWrap: "pretty",
                      }}
                    >
                      {modalidad.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box component="section">
            <Stack
              direction="row"
              spacing={1.4}
              sx={{ alignItems: "flex-start", mb: 2.2 }}
            >
              <Box
                sx={{
                  width: 26,
                  height: 2,
                  mt: "0.45em",
                  backgroundColor: brand.lineStrong,
                  flexShrink: 0,
                }}
              />
              <Typography
                component="h3"
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Supuestos específicos y servicios
              </Typography>
            </Stack>

            <Box
              component="ol"
              start={4}
              role="list"
              sx={{
                listStyle: "none",
                m: 0,
                p: 0,
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  lg: "repeat(3, minmax(0, 1fr))",
                },
                columnGap: { sm: 4, lg: 5 },
              }}
            >
              {MODALIDADES_ESPECIFICAS.map((modalidad, index) => (
                <Box
                  component="li"
                  key={modalidad.nombre}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr",
                    columnGap: 1.2,
                    pt: 1.8,
                    pb: 2,
                    borderTop: `1px solid ${brand.line}`,
                    "&:nth-of-type(3)": {
                      gridColumn: { sm: "span 2", lg: "span 1" },
                    },
                  }}
                >
                  <Typography
                    aria-hidden="true"
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "1.4rem",
                      lineHeight: 1.1,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(index + 4).padStart(2, "0")}
                  </Typography>
                  <Box>
                    <Typography
                      component="h4"
                      sx={{
                        color: brand.primaryDeep,
                        fontWeight: 700,
                        fontSize: "0.98rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {modalidad.nombre}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.6,
                        color: brand.muted,
                        fontSize: "0.91rem",
                        lineHeight: 1.68,
                        maxWidth: "56ch",
                        textWrap: "pretty",
                      }}
                    >
                      {modalidad.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 10 },
          backgroundColor: brand.whiteSoft,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  position: { md: "sticky" },
                  top: { md: "calc(var(--header-h) + var(--subnav-h))" },
                  pt: { xs: 2, md: 2.5 },
                  borderTop: `1px solid ${brand.lineStrong}`,
                }}
              >
                <Typography
                  sx={{
                    mb: 1.2,
                    color: brand.goldDeep,
                    fontSize: "0.64rem",
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  El procedimiento
                </Typography>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{ color: brand.primaryDeep, maxWidth: 380 }}
                >
                  El proceso en ocho etapas
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    color: brand.muted,
                    fontSize: "0.95rem",
                    lineHeight: 1.72,
                    maxWidth: 380,
                    textWrap: "pretty",
                  }}
                >
                  Un recorrido ordenado, desde la solicitud hasta el laudo. El
                  cómputo de cada plazo se rige por el Reglamento.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/arbitraje/inicio"
                  variant="text"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                  sx={{ mt: 3, px: 0 }}
                >
                  Ver requisitos y guía de inicio
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                component="ol"
                role="list"
                sx={{
                  listStyle: "none",
                  m: 0,
                  p: 0,
                  borderTop: `1px solid ${brand.lineStrong}`,
                }}
              >
                {PASOS_ARBITRAJE.map((paso, index) => (
                  <Box
                    component="li"
                    key={paso.title}
                    sx={{
                      position: "relative",
                      display: "grid",
                      gridTemplateColumns: { xs: "44px 1fr", sm: "64px 1fr" },
                      columnGap: { xs: 1.5, sm: 2.5 },
                      py: { xs: 2.2, md: 2.6 },
                      borderBottom: `1px solid ${brand.line}`,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: { xs: 44, sm: 64 },
                        width: "1px",
                        backgroundColor: brand.line,
                      },
                    }}
                  >
                    <Typography
                      aria-hidden="true"
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.goldDeep,
                        fontSize: { xs: "1.35rem", md: "1.6rem" },
                        lineHeight: 1.1,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          color: brand.primaryDeep,
                          fontFamily: fonts.display,
                          fontWeight: 600,
                          fontSize: { xs: "1.04rem", md: "1.14rem" },
                          lineHeight: 1.3,
                        }}
                      >
                        {paso.title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.6,
                          color: brand.muted,
                          fontSize: { xs: "0.94rem", md: "0.96rem" },
                          lineHeight: 1.7,
                          maxWidth: 600,
                          textWrap: "pretty",
                        }}
                      >
                        {paso.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 5, md: 6 }, backgroundColor: brand.paper }}>
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 3 }}
            sx={{
              alignItems: { md: "center" },
              justifyContent: "space-between",
              pt: 2,
              borderTop: `1px solid ${brand.lineStrong}`,
            }}
          >
            <Typography
              sx={{
                color: brand.goldDeep,
                fontSize: "0.66rem",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              También en arbitraje
            </Typography>

            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: { xs: 1.2, md: 2.5 } }}
            >
              {ENLACES.map((enlace) => (
                <Typography
                  key={enlace.to}
                  component={RouterLink}
                  to={enlace.to}
                  sx={{
                    color: brand.muted,
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    "&:hover": { color: brand.primary },
                  }}
                >
                  {enlace.title}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="¿Tu contrato ya tiene una cláusula arbitral?"
        subtitle="Verifica la redacción y presenta tu solicitud. La Secretaría General te acompañará en cada etapa."
        primaryLabel="Revisar mi cláusula"
        primaryTo="/arbitraje/clausula"
        secondaryLabel="Ver costos"
        secondaryTo="/arbitraje/costos"
      />
    </>
  );
}
