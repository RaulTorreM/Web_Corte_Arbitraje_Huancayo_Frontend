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
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import { viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { SITE, PASOS_ARBITRAJE, REQUISITOS } from "../../data/site";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";

const CANALES = [
  {
    icon: LaptopMacOutlinedIcon,
    title: "Sistema de Arbitraje (en implementación)",
    text: "El canal virtual está en implementación. Mientras tanto, presenta tu solicitud por mesa de partes o correo institucional.",
    action: "Consultar disponibilidad",
    href: "/contacto",
    external: false,
  },
  {
    icon: BusinessOutlinedIcon,
    title: "Mesa de partes",
    text: "Atención presencial en la sede institucional, en horario de oficina.",
    action: "Ver dirección",
    href: "/contacto",
    external: false,
  },
  {
    icon: MailOutlinedIcon,
    title: "Correo institucional",
    text: "Para consultas previas o coordinación de la presentación documentaria.",
    action: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
    external: true,
  },
];

export default function InicioArbitrajePage() {
  return (
    <>
      <PageMeta
        title="Inicio de arbitraje"
        description="Requisitos, documentos, tasas y plazos para presentar una solicitud de arbitraje ante la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Presenta tu solicitud"
        title="Cómo iniciar un arbitraje"
        subtitle="El arbitraje comienza el día en que la Corte recibe la solicitud. Antes de presentarla, verifica que tu convenio arbitral remite a esta institución y reúne los documentos que exige el artículo 5 del Reglamento."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Inicio de arbitraje" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                <Typography
                  component={motion.p}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  sx={{
                    color: brand.goldDeep,
                    fontSize: "0.72rem",
                    fontWeight: 750,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  Antes de comenzar
                </Typography>

                <Typography
                  component={motion.h2}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  variant="h2"
                  sx={{ color: brand.primaryDark }}
                >
                  Un proceso ordenado desde el primer documento
                </Typography>

                <Typography
                  component={motion.p}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  sx={{ mt: 2.5, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.85 }}
                >
                  La solicitud debe presentarse por escrito con los datos de las
                  partes, la controversia, el convenio arbitral, la propuesta de
                  designación y el comprobante de pago del derecho de
                  presentación: S/ 800 en arbitrajes nacionales o US$ 425 en
                  internacionales. La Secretaría califica la solicitud y, si
                  falta información, otorga plazo para subsanarla.
                </Typography>

                <Stack
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 3.5 }}
                >
                  <Button
                    component={RouterLink}
                    to="/contacto"
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                  >
                    Consultar antes de presentar
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/arbitraje/costos"
                    variant="outlined"
                  >
                    Calcular el costo
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.65 }}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: brand.skySoft,
                  border: `1px solid ${brand.skyMid}`,
                  borderTop: `4px solid ${brand.gold}`,
                }}
              >
                <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.98rem", mb: 2.2 }}>
                  Checklist rápido
                </Typography>

                <Stack spacing={1.6}>
                  {[
                    "Convenio arbitral que designa a la Corte.",
                    "Identificación de las partes y sus representantes.",
                    "Descripción de la controversia y estimación de la cuantía.",
                    "Propuesta de designación de árbitro.",
                    "Comprobante de pago de S/ 800 o US$ 425.",
                  ].map((item) => (
                    <Stack key={item} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: "1.1rem", color: brand.goldDeep, mt: "1px", flexShrink: 0 }}
                      />
                      <Typography sx={{ color: brand.primary, fontSize: "0.86rem", lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
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
            kicker="El recorrido"
            title="El proceso en 8 etapas"
            subtitle="Desde la solicitud hasta el laudo. La respuesta del demandado y la aceptación de los árbitros tienen un plazo de cinco días."
            centered
          />

          <Grid container spacing={{ xs: 3, md: 2.5 }}>
            {PASOS_ARBITRAJE.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  component={motion.article}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
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
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: brand.skyMid,
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Typography variant="h4" sx={{ mt: 2, color: brand.primaryDark, fontSize: "1.02rem", lineHeight: 1.4 }}>
                    {paso.title}
                  </Typography>

                  <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {paso.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionHeading
                kicker="Documentación"
                title="Requisitos de la solicitud"
                subtitle="La presentación incompleta puede generar observaciones y extender el plazo de calificación."
                sx={{ mb: 3 }}
              />

              <Stack spacing={1.5}>
                {REQUISITOS.map((requisito, index) => (
                  <Stack
                    key={requisito}
                    direction="row"
                    spacing={1.8}
                    sx={{
                      p: 2,
                      alignItems: "flex-start",
                      backgroundColor: brand.paper,
                      border: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: brand.goldDeep,
                        minWidth: 22,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Typography sx={{ color: brand.ink, fontSize: "0.87rem", lineHeight: 1.6 }}>
                      {requisito}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <SectionHeading
                kicker="Canales de atención"
                title="Elige cómo presentar tu solicitud"
                subtitle="El sistema virtual está en implementación. La mesa de partes y el correo institucional siguen disponibles."
                sx={{ mb: 3 }}
              />

              <Stack spacing={2}>
                {CANALES.map((canal, index) => {
                  const Icon = canal.icon;

                  return (
                    <Stack
                      key={canal.title}
                      component={motion.div}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.5, delay: index * 0.07 }}
                      direction="row"
                      spacing={2}
                      sx={{
                        p: 2.4,
                        alignItems: "flex-start",
                        backgroundColor: index === 0 ? brand.primaryDark : brand.white,
                        border: `1px solid ${index === 0 ? brand.primaryDark : brand.line}`,
                        borderLeft: `4px solid ${brand.gold}`,
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor:
                            index === 0 ? "rgba(186,153,7,0.16)" : brand.skySoft,
                          color: index === 0 ? brand.goldSoft : brand.primary,
                          flexShrink: 0,
                        }}
                      >
                        <Icon />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: index === 0 ? brand.white : brand.primaryDark,
                            fontWeight: 750,
                            fontSize: "0.9rem",
                          }}
                        >
                          {canal.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: index === 0 ? "rgba(255,255,255,0.68)" : brand.muted,
                            fontSize: "0.83rem",
                            mt: 0.4,
                            lineHeight: 1.6,
                          }}
                        >
                          {canal.text}
                        </Typography>

                        {canal.external ? (
                          <Button
                            href={canal.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            variant="text"
                            endIcon={<ArrowForwardIcon sx={{ fontSize: "0.9rem" }} />}
                            sx={{
                              mt: 0.8,
                              px: 0.3,
                              fontSize: "0.76rem",
                              color: index === 0 ? brand.goldSoft : brand.primary,
                              "&:hover": {
                                backgroundColor: "transparent",
                                color: index === 0 ? brand.white : brand.goldDeep,
                              },
                            }}
                          >
                            {canal.action}
                          </Button>
                        ) : (
                          <Button
                            component={RouterLink}
                            to={canal.href}
                            size="small"
                            variant="text"
                            endIcon={<ArrowForwardIcon sx={{ fontSize: "0.9rem" }} />}
                            sx={{
                              mt: 0.8,
                              px: 0.3,
                              fontSize: "0.76rem",
                              color: index === 0 ? brand.goldSoft : brand.primary,
                              "&:hover": {
                                backgroundColor: "transparent",
                                color: index === 0 ? brand.white : brand.goldDeep,
                              },
                            }}
                          >
                            {canal.action}
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>

              <Stack
                direction="row"
                spacing={1.3}
                sx={{
                  mt: 2.5,
                  p: 2,
                  alignItems: "flex-start",
                  backgroundColor: brand.skySoft,
                  border: `1px solid ${brand.skyMid}`,
                }}
              >
                <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.05rem", mt: "1px" }} />
                <Typography sx={{ color: brand.primary, fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Los pagos se realizan únicamente por los canales oficiales
                  informados por la Corte. No compartas datos financieros por
                  canales no verificados.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="¿Listo para presentar tu solicitud?"
        subtitle="Solicita una orientación previa con la Secretaría General o revisa la tabla de costos antes de presentar tu solicitud."
        primaryLabel="Solicitar orientación"
        primaryTo="/contacto"
        secondaryLabel="Ver costos"
        secondaryTo="/arbitraje/costos"
      />
    </>
  );
}
