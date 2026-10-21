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
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import SectionLabel from "../../components/common/SectionLabel";
import SectionTitle from "../../components/common/SectionTitle";
import FramedImage from "../../components/common/FramedImage";
import { Stagger } from "../../components/common/Reveal";
import { fadeUp, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { VALORES } from "../../data/site";

const ESTRUCTURA = [
  {
    icon: GroupsOutlinedIcon,
    title: "Consejo Superior de Arbitraje",
    text: "Máximo órgano de gobierno administrativo, no jurisdiccional. Hasta siete consejeros con sus suplentes, por períodos de tres años.",
    to: "/quienes-somos/consejo",
  },
  {
    icon: BadgeOutlinedIcon,
    title: "Comisiones especializadas",
    text: "Registro y Designación, Confirmación, Recusación y Remoción, Ética, Arbitraje de Emergencia y Buenas Prácticas.",
    to: "/quienes-somos/consejo",
  },
  {
    icon: WorkspacePremiumOutlinedIcon,
    title: "Secretaría General",
    text: "Conduce la operación diaria de los casos, liquida gastos, notifica y designa secretarios arbitrales.",
    to: "/quienes-somos/equipo",
  },
  {
    icon: BadgeOutlinedIcon,
    title: "Certificaciones",
    text: "Sistemas de gestión en implementación. No se presentan como certificaciones obtenidas hasta contar con el documento que las acredite.",
    to: "/quienes-somos/certificaciones",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <PageMeta
        title="Quiénes somos"
        description="Conoce la naturaleza, finalidad y órganos de gobierno de la Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín."
      />

      <PageHero
        kicker="La institución"
        title="Una institución arbitral al servicio de la región"
        subtitle="Somos el órgano de la Cámara de Comercio y Producción de Huancayo y de la Región Junín encargado de organizar y administrar arbitrajes. No resolvemos las controversias: aseguramos que se tramiten bajo reglas claras, plazos ciertos y árbitros idóneos."
        crumbs={[{ label: "Quiénes somos" }]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                <Box component={motion.div} variants={fadeUp}>
                  <SectionLabel>Quiénes somos</SectionLabel>
                  <SectionTitle>
                    Administramos el arbitraje, no la controversia
                  </SectionTitle>
                </Box>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 2.6, color: brand.muted, fontSize: "0.99rem", lineHeight: 1.85 }}
                >
                  La Corte Superior de Arbitraje es el órgano de la Cámara de
                  Comercio y Producción de Huancayo y de la Región Junín encargado
                  de organizar y administrar arbitrajes. No resolvemos las
                  controversias: aseguramos que se tramiten bajo reglas claras,
                  plazos ciertos y árbitros idóneos.
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 1.8, color: brand.muted, fontSize: "0.99rem", lineHeight: 1.85 }}
                >
                  Su actuación se rige por el Estatuto y por los principios de
                  independencia, neutralidad, transparencia, confidencialidad y
                  celeridad. Desde Huancayo, acompaña a empresas, entidades
                  públicas y profesionales de la región Junín en la administración
                  ordenada de sus controversias patrimoniales disponibles.
                </Typography>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  spacing={1.4}
                  sx={{ mt: 3.5 }}
                >
                  {[
                    "Reglamento único y público para arbitrajes nacionales e internacionales.",
                    "Laudo en 40 días desde el cierre, prorrogable por 10.",
                    "Tarifas públicas y registro de árbitros con vigencia de tres años.",
                    "Doble instancia administrativa ante el Consejo Superior.",
                  ].map((item) => (
                    <Stack key={item} direction="row" spacing={1.4} sx={{ alignItems: "flex-start" }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: "1.15rem", color: brand.goldDeep, mt: "2px" }}
                      />
                      <Typography sx={{ color: brand.ink, fontSize: "0.9rem", lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                sx={{ position: "relative", maxWidth: 420, mx: "auto" }}
              >
                <FramedImage
                  src="/images/ARBITRAJE_IMG_02.png"
                  alt="Representantes de la Corte Superior de Arbitraje de Huancayo"
                  side="right"
                  maxWidth={420}
                  ratio="4 / 3.3"
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: -14,
                    bottom: -16,
                    width: 78,
                    height: 78,
                    border: `1px solid ${brand.gold}`,
                    zIndex: 0,
                  }}
                />
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
          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                component={motion.article}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  backgroundColor: brand.primaryDark,
                  color: brand.white,
                  borderTop: `3px solid ${brand.gold}`,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(186,153,7,0.16)",
                    color: brand.goldSoft,
                    border: "1px solid rgba(186,153,7,0.35)",
                    mb: 2.5,
                  }}
                >
                  <FlagOutlinedIcon />
                </Box>

                <Typography
                  variant="h3"
                  sx={{ color: brand.white, fontSize: "1.65rem", mb: 1.8 }}
                >
                  Nuestra misión
                </Typography>

                <Typography sx={{ color: "rgba(255,255,255,0.74)", fontSize: "0.96rem", lineHeight: 1.85 }}>
                  Como institución organizadora y administradora, nuestra misión
                  es salvaguardar la correcta aplicación de los reglamentos y
                  prestar los servicios de administración necesarios para la
                  organización y funcionamiento del arbitraje.
                  <Box component="span" sx={{ display: "block", mt: 1, fontSize: "0.78rem", color: "rgba(255,255,255,0.55)" }}>
                    Estatuto, Art. 2
                  </Box>
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                component={motion.article}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.08 }}
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  backgroundColor: brand.white,
                  border: `1px solid ${brand.line}`,
                  borderTop: `3px solid ${brand.gold}`,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: brand.skySoft,
                    color: brand.primary,
                    border: `1px solid ${brand.skyMid}`,
                    mb: 2.5,
                  }}
                >
                  <VisibilityOutlinedIcon />
                </Box>

                <Typography
                  variant="h3"
                  sx={{ color: brand.primaryDark, fontSize: "1.65rem", mb: 1.8 }}
                >
                  Nuestra finalidad
                </Typography>

                <Typography sx={{ color: brand.muted, fontSize: "0.96rem", lineHeight: 1.85 }}>
                  Contribuir a la solución de controversias mediante el desarrollo
                  y fomento del arbitraje institucional, realizando las acciones
                  necesarias para su generalización, agilización, perfeccionamiento
                  y divulgación como mecanismo alternativo de solución de
                  controversias.
                  <Box component="span" sx={{ display: "block", mt: 1, fontSize: "0.78rem", color: brand.muted }}>
                    Estatuto, Art. 1
                  </Box>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Nuestros principios"
            title="Lo que guía cada actuación"
            subtitle="Principios que orientan la conducta de nuestros órganos de gobierno, árbitros, adjudicadores y equipo administrativo."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {VALORES.map((valor, index) => (
                <Grid key={valor.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Stack
                    component={motion.article}
                    variants={fadeUp}
                    sx={{
                      height: "100%",
                      p: 3,
                      backgroundColor: brand.paper,
                      border: `1px solid ${brand.line}`,
                      transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: brand.sky,
                        boxShadow: "0 14px 32px rgba(18,35,61,0.09)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        fontSize: "1.9rem",
                        fontWeight: 600,
                        color: brand.skyMid,
                        lineHeight: 1,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{ mt: 2, color: brand.primaryDark, fontSize: "1.08rem" }}
                    >
                      {valor.title}
                    </Typography>

                    <Typography sx={{ mt: 1.1, color: brand.muted, fontSize: "0.86rem", lineHeight: 1.7 }}>
                      {valor.text}
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
          py: { xs: 8, md: 10 },
          backgroundColor: brand.skySoft,
          borderTop: `1px solid ${brand.skyMid}`,
          borderBottom: `1px solid ${brand.skyMid}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Organización"
            title="Nuestra estructura institucional"
            subtitle="Conoce a las personas y los órganos que hacen posible el funcionamiento de la Corte."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {ESTRUCTURA.map((item) => {
                const Icon = item.icon;

                return (
                  <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Stack
                      component={motion.article}
                      variants={fadeUp}
                      sx={{
                        height: "100%",
                        p: 3.2,
                        backgroundColor: brand.white,
                        border: `1px solid ${brand.skyMid}`,
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 34px rgba(18,35,61,0.10)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: brand.primaryDark,
                          color: brand.goldSoft,
                          mb: 2.2,
                        }}
                      >
                        <Icon />
                      </Box>

                      <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1.14rem" }}>
                        {item.title}
                      </Typography>

                      <Typography sx={{ mt: 1.2, mb: 2.5, color: brand.muted, fontSize: "0.88rem", lineHeight: 1.7, flex: 1 }}>
                        {item.text}
                      </Typography>

                      <Button
                        component={RouterLink}
                        to={item.to}
                        variant="text"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: "0.95rem" }} />}
                        sx={{ alignSelf: "flex-start", px: 0.4, fontSize: "0.8rem" }}
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
        title="¿Quieres conocer más sobre nuestra labor?"
        subtitle="Conversa con la Secretaría General y recibe orientación sobre los mecanismos que administramos."
        primaryLabel="Ver documentos institucionales"
        primaryTo="/documentos"
        secondaryLabel="Contactar a la Corte"
        secondaryTo="/contacto"
      />
    </>
  );
}
