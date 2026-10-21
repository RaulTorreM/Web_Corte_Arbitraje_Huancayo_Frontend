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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import SectionLabel from "../../components/common/SectionLabel";
import SectionTitle from "../../components/common/SectionTitle";
import FramedImage from "../../components/common/FramedImage";
import CtaBand from "../../components/common/CtaBand";
import { Stagger } from "../../components/common/Reveal";
import { fadeUp, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { FUNCIONES, PASOS_ARBITRAJE } from "../../data/site";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";

const ENLACES = [
  {
    icon: PaidOutlinedIcon,
    title: "Costos y tarifas",
    text: "Conoce los honorarios y gastos aplicables según la cuantía.",
    to: "/arbitraje/costos",
  },
  {
    icon: MenuBookOutlinedIcon,
    title: "Reglamentos",
    text: "Consulta las reglas que rigen el procedimiento arbitral.",
    to: "/arbitraje/reglamentos",
  },
  {
    icon: GroupsOutlinedIcon,
    title: "Registro de árbitros",
    text: "Consulta los requisitos, la vigencia y la nómina de profesionales acreditados.",
    to: "/arbitraje/arbitros",
  },
  {
    icon: DescriptionOutlinedIcon,
    title: "Cláusula arbitral",
    text: "Incorpora la cláusula modelo en tus contratos.",
    to: "/arbitraje/clausula",
  },
];

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
      >
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {["Decreto Legislativo N.° 1071", "Laudo vinculante", "Confidencialidad"].map(
            (item) => (
              <Box
                key={item}
                sx={{
                  px: 1.6,
                  py: 0.6,
                  border: "1px solid rgba(255,255,255,0.24)",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                }}
              >
                {item}
              </Box>
            )
          )}
        </Stack>
      </PageHero>

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FramedImage
                src="/images/ARBITRAJE_IMG_02.png"
                alt="Representantes de la Corte Superior de Arbitraje de Huancayo"
                side="left"
                maxWidth={480}
                ratio="4 / 3.4"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <Box component={motion.div} variants={fadeUp}>
                  <SectionLabel>Presentación</SectionLabel>
                  <SectionTitle>
                    Un arbitraje administrado con reglas claras
                  </SectionTitle>
                </Box>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 2.6, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.85 }}
                >
                  El arbitraje es un mecanismo alternativo de solución de
                  controversias mediante el cual las partes someten, de manera
                  voluntaria, sus conflictos a la decisión de un árbitro único o
                  de un tribunal arbitral.
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 1.7, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.85 }}
                >
                  La Corte Superior de Arbitraje administra el procedimiento,
                  designa o confirma árbitros cuando corresponde, controla plazos
                  y garantiza el debido proceso. El laudo que pone fin al
                  arbitraje es definitivo, vinculante e inapelable, sin perjuicio
                  del recurso de anulación previsto por ley.
                </Typography>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  spacing={1.3}
                  sx={{ mt: 3 }}
                >
                  {[
                    "Administración integral del expediente arbitral.",
                    "Designación de árbitros conforme al reglamento.",
                    "Control de plazos y notificaciones oportunas.",
                  ].map((item) => (
                    <Stack key={item} direction="row" spacing={1.3} sx={{ alignItems: "flex-start" }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: "1.1rem", color: brand.goldDeep, mt: "2px" }}
                      />
                      <Typography sx={{ color: brand.ink, fontSize: "0.9rem", lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 4 }}
                >
                  <Button
                    component={RouterLink}
                    to="/arbitraje/inicio"
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                  >
                    Iniciar un arbitraje
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/arbitraje/costos"
                    variant="outlined"
                  >
                    Ver costos
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Modalidades"
            title="Un reglamento, distintas formas de arbitrar"
            subtitle="La cuantía, la complejidad y el acuerdo de las partes determinan la modalidad aplicable."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {MODALIDADES.map((modalidad) => (
                <Grid key={modalidad.nombre} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Stack
                    component={motion.article}
                    variants={fadeUp}
                    sx={{
                      height: "100%",
                      p: 3,
                      backgroundColor: brand.white,
                      border: `1px solid ${brand.line}`,
                      borderTop: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1.05rem" }}>
                      {modalidad.nombre}
                    </Typography>
                    <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.86rem", lineHeight: 1.7 }}>
                      {modalidad.text}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 8, md: 11 },
          backgroundColor: brand.primaryDark,
          color: brand.white,
          borderTop: `3px solid ${brand.gold}`,
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px 400px at 90% 0%, rgba(157,196,239,0.14), transparent 65%)",
          }}
        />

        <Container sx={{ position: "relative" }}>
          <SectionHeading
            kicker="Nuestras funciones"
            title="Lo que hacemos por el arbitraje"
            subtitle="La Corte actúa como institución administradora y garantiza la independencia del tribunal y la regularidad del procedimiento."
            light
            centered
          />

          <Stagger>
            <Grid container spacing={0}>
              {FUNCIONES.map((funcion, index) => (
                <Grid key={funcion} size={{ xs: 12, md: 6 }}>
                  <Stack
                    component={motion.div}
                    variants={fadeUp}
                    direction="row"
                    spacing={2.2}
                    sx={{
                      height: "100%",
                      py: 2.8,
                      px: { xs: 0, md: 2.5 },
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      borderRight: {
                        md: index % 2 === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        color: brand.goldSoft,
                        lineHeight: 1.1,
                        minWidth: 32,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.76)",
                        fontSize: "0.93rem",
                        lineHeight: 1.75,
                      }}
                    >
                      {funcion}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="El procedimiento"
            title="El proceso en 8 etapas"
            subtitle="Un recorrido ordenado, desde la solicitud hasta el laudo. El cómputo de cada plazo se rige por el Reglamento."
            centered
          />

          <Grid container spacing={{ xs: 3, md: 2.5 }}>
            {PASOS_ARBITRAJE.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  component={motion.article}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  sx={{
                    position: "relative",
                    height: "100%",
                    p: 3,
                    backgroundColor: brand.white,
                    border: `1px solid ${brand.line}`,
                    borderTop: `3px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: "2.1rem",
                      fontWeight: 600,
                      color: brand.skyMid,
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{ mt: 2, color: brand.primaryDark, fontSize: "1.02rem", lineHeight: 1.4 }}
                  >
                    {paso.title}
                  </Typography>

                  <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {paso.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4, alignItems: { sm: "center" }, justifyContent: "center" }}
          >
            <Typography sx={{ color: brand.muted, fontSize: "0.88rem" }}>
              ¿Listo para presentar tu solicitud?
            </Typography>

            <Button
              component={RouterLink}
              to="/arbitraje/inicio"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            >
              Iniciar un arbitraje
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.white,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Explora la sección"
            title="Todo lo que necesitas para arbitrar"
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {ENLACES.map((enlace) => {
                const Icon = enlace.icon;

                return (
                  <Grid key={enlace.to} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Stack
                      component={motion.article}
                      variants={fadeUp}
                      sx={{
                        height: "100%",
                        p: 3,
                        backgroundColor: brand.paper,
                        border: `1px solid ${brand.line}`,
                        transition:
                          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          borderColor: brand.gold,
                          boxShadow: "0 16px 34px rgba(18,35,61,0.09)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: brand.skySoft,
                          color: brand.primary,
                          mb: 2,
                        }}
                      >
                        <Icon />
                      </Box>

                      <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1.02rem" }}>
                        {enlace.title}
                      </Typography>

                      <Typography sx={{ mt: 1, mb: 2, color: brand.muted, fontSize: "0.84rem", lineHeight: 1.65, flex: 1 }}>
                        {enlace.text}
                      </Typography>

                      <Button
                        component={RouterLink}
                        to={enlace.to}
                        size="small"
                        variant="text"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: "0.95rem" }} />}
                        sx={{ alignSelf: "flex-start", px: 0.3, fontSize: "0.78rem" }}
                      >
                        Ver más
                      </Button>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Stagger>
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
