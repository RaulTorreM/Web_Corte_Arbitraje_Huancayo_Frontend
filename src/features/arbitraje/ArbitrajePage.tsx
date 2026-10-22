import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import FramedImage from "../../components/common/FramedImage";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { PASOS_ARBITRAJE } from "../../data/site";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";

const MODALIDADES = [
  {
    nombre: "Arbitraje ordinario",
    text: "Para controversias de mayor cuantía o complejidad. Tribunal de uno o tres árbitros, según el convenio. Aplica desde el rubro D de la tabla.",
  },
  {
    nombre: "Arbitraje acelerado",
    text: "Para controversias hasta el límite del rubro D o cuando las partes lo acuerden. Siempre a cargo de un árbitro único, con laudo en cuatro meses.",
  },
  {
    nombre: "Arbitraje social",
    text: "Para conflictos de menor cuantía, con tarifa fija y trámite simplificado. Árbitro único designado directamente por la Corte.",
  },
  {
    nombre: "Arbitraje de emergencia",
    text: "Para medidas cautelares urgentes antes de la constitución del tribunal. Árbitro designado en dos días y decisión en cinco días.",
  },
  {
    nombre: "Arbitraje internacional",
    text: "Mismas reglas, con consideración de nacionalidad, residencia e idioma del árbitro. Derecho de presentación: US$ 425.",
  },
  {
    nombre: "Arbitraje ad hoc con secretaría",
    text: "La Corte puede actuar como secretaría arbitral o autoridad nominadora, con aplicación supletoria de sus reglas.",
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
        image="/images/ARBITRAJE_IMG_02-04.jpg"
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
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
                src="/images/ARBITRAJE_IMG_02.png"
                alt="Representantes de la Corte Superior de Arbitraje de Huancayo"
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
                  "Designación de árbitros conforme al reglamento.",
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
          <SectionHeading
            kicker="Modalidades"
            title="Un reglamento, distintas formas de arbitrar"
            subtitle="La cuantía, la complejidad y el acuerdo de las partes determinan la modalidad aplicable."
          />

          <Grid container spacing={{ xs: 0, md: 5 }}>
            {MODALIDADES.map((modalidad, index) => (
              <Grid key={modalidad.nombre} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    gap: 1.6,
                    py: 2,
                    borderTop: `1px solid ${brand.line}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Box>
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.94rem" }}>
                      {modalidad.nombre}
                    </Typography>
                    <Typography sx={{ mt: 0.45, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.65 }}>
                      {modalidad.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
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
          <SectionHeading
            kicker="El procedimiento"
            title="El proceso en ocho etapas"
            subtitle="Un recorrido ordenado, desde la solicitud hasta el laudo. El cómputo de cada plazo se rige por el Reglamento."
          />

          <Grid container spacing={{ xs: 0, md: 5 }}>
            {PASOS_ARBITRAJE.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    gap: 1.6,
                    py: 1.8,
                    borderTop: `1px solid ${brand.line}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Box>
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                      {paso.title}
                    </Typography>
                    <Typography sx={{ mt: 0.35, color: brand.muted, fontSize: "0.84rem", lineHeight: 1.6 }}>
                      {paso.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Button
            component={RouterLink}
            to="/arbitraje/inicio"
            variant="text"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
            sx={{ mt: 3, px: 0 }}
          >
            Ver requisitos y guía de inicio
          </Button>
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
