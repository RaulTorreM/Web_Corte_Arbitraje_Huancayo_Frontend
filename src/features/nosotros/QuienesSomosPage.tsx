import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import FramedImage from "../../components/common/FramedImage";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { VALORES } from "../../data/site";

const ESTRUCTURA = [
  {
    title: "Consejo Superior de Arbitraje",
    text: "Máximo órgano de gobierno administrativo, no jurisdiccional. Hasta siete consejeros con sus suplentes, por períodos de tres años.",
    to: "/quienes-somos/consejo",
  },
  {
    title: "Comisiones especializadas",
    text: "Registro y Designación, Confirmación, Recusación y Remoción, Ética, Arbitraje de Emergencia y Buenas Prácticas.",
    to: "/quienes-somos/consejo",
  },
  {
    title: "Secretaría General",
    text: "Conduce la operación diaria de los casos, liquida gastos, notifica y designa secretarios arbitrales.",
    to: "/quienes-somos/equipo",
  },
  {
    title: "Certificaciones",
    text: "Sistemas de gestión en implementación. No se presentan como certificaciones obtenidas hasta contar con el documento que las acredite.",
    to: "/quienes-somos/certificaciones",
  },
];

const HECHOS = [
  "Reglamento único y público para arbitrajes nacionales e internacionales.",
  "Laudo en 40 días desde el cierre, prorrogable por 10.",
  "Tarifas públicas y registro de árbitros con vigencia de tres años.",
  "Doble instancia administrativa ante el Consejo Superior.",
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
        title="Administramos el arbitraje, no la controversia"
        subtitle="Somos el órgano de la Cámara de Comercio y Producción de Huancayo y de la Región Junín encargado de organizar y administrar arbitrajes. No resolvemos las controversias: aseguramos que se tramiten bajo reglas claras, plazos ciertos y árbitros idóneos."
        crumbs={[{ label: "Quiénes somos" }]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <Typography
                  component={motion.h2}
                  variants={fadeUp}
                  variant="h2"
                  sx={{ color: brand.primaryDeep, maxWidth: 620 }}
                >
                  Una institución arbitral al servicio de la región
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 2.2, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.78, maxWidth: 620 }}
                >
                  La Corte es el órgano de la Cámara de Comercio y Producción de
                  Huancayo y de la Región Junín encargado de organizar y administrar
                  arbitrajes. Su actuación se rige por el Estatuto y por los principios
                  de independencia, neutralidad, transparencia, confidencialidad y
                  celeridad.
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 1.6, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.78, maxWidth: 620 }}
                >
                  Desde Huancayo, acompaña a empresas, entidades públicas y
                  profesionales de la región Junín en la administración ordenada de
                  sus controversias patrimoniales disponibles.
                </Typography>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  sx={{ mt: 3.5, borderTop: `1px solid ${brand.line}` }}
                >
                  {HECHOS.map((item, index) => (
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
                          fontSize: "0.9rem",
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
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <FramedImage
                src="/images/ARBITRAJE_IMG_02.png"
                alt="Representantes de la Corte Superior de Arbitraje de Huancayo"
                maxWidth={460}
                ratio="4 / 5"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderTop: `2px solid ${brand.primary}`, pt: 2 }}>
                <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.5rem" }}>
                  Nuestra misión
                </Typography>
                <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.92rem", lineHeight: 1.75 }}>
                  Salvaguardar la correcta aplicación de los reglamentos y prestar
                  los servicios de administración necesarios para la organización y
                  funcionamiento del arbitraje.
                </Typography>
                <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.74rem" }}>
                  Estatuto, Art. 2
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 2 }}>
                <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.5rem" }}>
                  Nuestra finalidad
                </Typography>
                <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.92rem", lineHeight: 1.75 }}>
                  Contribuir a la solución de controversias mediante el desarrollo y
                  fomento del arbitraje institucional, realizando las acciones
                  necesarias para su generalización, agilización, perfeccionamiento y
                  divulgación.
                </Typography>
                <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.74rem" }}>
                  Estatuto, Art. 1
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Principios"
            title="Lo que guía cada actuación"
            subtitle="Principios que orientan la conducta de los órganos de gobierno, árbitros, adjudicadores y equipo administrativo."
          />

          <Grid container spacing={0}>
            {VALORES.map((valor, index) => (
              <Grid key={valor.title} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    gap: 1.6,
                    py: 2,
                    pr: { sm: 3 },
                    borderTop: `1px solid ${brand.line}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Box>
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                      {valor.title}
                    </Typography>
                    <Typography sx={{ mt: 0.4, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.62 }}>
                      {valor.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Organización"
            title="Nuestra estructura institucional"
            subtitle="Conoce a las personas y los órganos que hacen posible el funcionamiento de la Corte."
          />

          <Box sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
            {ESTRUCTURA.map((item) => (
              <Box
                key={item.title}
                component={RouterLink}
                to={item.to}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr 24px", md: "240px 1fr 24px" },
                  gap: { xs: 0.8, md: 3 },
                  alignItems: "center",
                  py: 2.4,
                  borderBottom: `1px solid ${brand.line}`,
                  textDecoration: "none",
                  "&:hover .estructura-title": { color: brand.goldDeep },
                  "&:hover .estructura-arrow": { color: brand.primary, transform: "translateX(3px)" },
                }}
              >
                <Typography
                  className="estructura-title"
                  sx={{
                    color: brand.primaryDeep,
                    fontFamily: fonts.display,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    transition: "color 0.18s ease",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: brand.muted, fontSize: "0.86rem", lineHeight: 1.6 }}>
                  {item.text}
                </Typography>
                <ArrowForwardIcon
                  className="estructura-arrow"
                  sx={{ fontSize: 18, color: brand.lineStrong, transition: "all 0.18s ease" }}
                />
              </Box>
            ))}
          </Box>
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
