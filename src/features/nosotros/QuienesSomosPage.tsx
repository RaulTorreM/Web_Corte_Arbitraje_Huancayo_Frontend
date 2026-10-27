import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import PageMeta from "../../components/common/PageMeta";
// import PageHero from "../../components/common/PageHero";
// import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import FramedImage from "../../components/common/FramedImage";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { VALORES } from "../../data/site";
import { MEDIA } from "../../data/media";

const ESTRUCTURA = [
  {
    title: "Consejo Directivo",
    text: "Órgano de gobierno de la Cámara de Comercio de Huancayo, encargado de conducir su gestión institucional y representar a los agremiados.",
    to: "/quienes-somos/consejo-directivo",
  },
  {
    title: "Consejo Superior de Arbitraje",
    text: "Máximo órgano de gobierno administrativo, no jurisdiccional. Hasta siete consejeros con sus suplentes, por períodos de tres años.",
    to: "/quienes-somos/consejo",
  },
  {
    title: "Comisiones especializadas",
    text: "Registro y Designación, Confirmación, Recusación y Remoción, Ética, Arbitraje de Emergencia y Buenas Prácticas.",
    to: "/quienes-somos/consejo#comisiones",
  },
  {
    title: "Equipo de Trabajo",
    text: "Conduce la operación diaria de los casos, liquida gastos, notifica y designa secretarios arbitrales.",
    to: "/quienes-somos/equipo",
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
        description="Conoce la naturaleza, la misión, la visión y los órganos de gobierno de la Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín."
      />

      {/* <PageHero
        kicker="La institución"
        title="Un centro especializado en arbitraje"
        subtitle="Somos el órgano de la Cámara de Comercio y Producción de Huancayo y de la Región Junín encargado de organizar y administrar arbitrajes. No resolvemos las controversias: aseguramos que se tramiten bajo reglas claras, plazos ciertos y árbitros idóneos."
        crumbs={[{ label: "Quiénes somos" }]}
        image={MEDIA.sede}
      /> */}

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
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
                  Un espacio especializado para la solución de controversias
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 2.2, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.78, maxWidth: 620, textWrap: "pretty" }}
                >
                  La Corte Superior de Arbitraje de la Cámara de Comercio y Producción
                  de Huancayo y de la Región Junín es el órgano encargado de organizar
                  y administrar arbitrajes. Su labor contribuye al adecuado desarrollo
                  de los procedimientos arbitrales.
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 1.6, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.78, maxWidth: 620, textWrap: "pretty" }}
                >
                  Su actuación se rige por el Estatuto y por los principios de
                  imparcialidad, independencia, transparencia, confidencialidad,
                  diligencia y probidad, con respeto al debido proceso. Procura
                  brindar a las partes un espacio técnico y confiable para la
                  solución de sus controversias.
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 1.6, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.78, maxWidth: 620, textWrap: "pretty" }}
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
                          color: brand.goldInk,
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

            <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
              <FramedImage
                src={MEDIA.sede.src}
                alt={MEDIA.sede.alt}
                fit={MEDIA.sede.fit}
                maxWidth={460}
                ratio="4 / 5"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>


      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 10 },
          backgroundColor: brand.paper,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 6, md: 8 }}
            sx={{ alignItems: "start" }}
          >

            {/* Columna izquierda: misión y visión */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "stretch",
              }}
            >
              <Typography
                sx={{
                  color: brand.goldInk,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  mb: 1.5,
                  pt: 2,
                  borderTop: `1px solid ${brand.lineStrong}`,
                }}
              >
                Propósito institucional
              </Typography>

              <Stack
                spacing={0}
                sx={{
                  flex: 1,
                  mt: 1.5,
                  justifyContent: "space-between",
                }}
              >
                {/* Misión */}
                <Box
                  sx={{
                    py: { xs: 1, md: 2.5 },
                    borderTop: `2px solid ${brand.primary}`,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: brand.primaryDeep,
                      fontSize: { xs: "1.45rem", md: "1.6rem" },
                      fontWeight: 600,
                    }}
                  >
                    Nuestra misión
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      color: brand.muted,
                      fontSize: "0.93rem",
                      lineHeight: 1.9,
                      textWrap: "pretty",
                    }}
                  >
                    Salvaguardar la correcta aplicación de los reglamentos y prestar
                    los servicios de administración necesarios para la organización
                    y funcionamiento del arbitraje.
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.8,
                      color: brand.goldInk,
                      fontSize: "0.76rem",
                    }}
                  >
                    Estatuto, Art. 2
                  </Typography>
                </Box>

                {/* Visión */}
                <Box
                  sx={{
                    mt: { xs: 4, md: 0 },
                    py: { xs: 1, md: 2.5 },
                    borderTop: `2px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: brand.primaryDeep,
                      fontSize: { xs: "1.45rem", md: "1.6rem" },
                      fontWeight: 600,
                    }}
                  >
                    Nuestra visión
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      color: brand.muted,
                      fontSize: "0.93rem",
                      lineHeight: 1.9,
                      textWrap: "pretty",
                    }}
                  >
                    Consolidar el arbitraje institucional como un mecanismo de
                    referencia para la solución de controversias en la región Junín,
                    mediante la generalización, agilización, perfeccionamiento y
                    divulgación de nuestros servicios.
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.8,
                      color: brand.goldInk,
                      fontSize: "0.76rem",
                    }}
                  >
                    Basada en el Estatuto, Art. 1
                  </Typography>
                </Box>
              </Stack>
            </Grid>



            {/* Columna derecha: principios */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  color: brand.goldInk,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  pt: 2,
                  borderTop: `1px solid ${brand.lineStrong}`,
                }}
              >
                Principios
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  mt: 3,
                  color: brand.primaryDeep,
                  fontSize: { xs: "1.9rem", md: "2.3rem" },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  maxWidth: 540,
                  textWrap: "balance",
                }}
              >
                Lo que guía cada actuación
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: brand.muted,
                  fontSize: "0.92rem",
                  lineHeight: 1.8,
                  maxWidth: 580,
                  textWrap: "pretty",
                }}
              >
                Principios que orientan la conducta de los órganos de
                gobierno, árbitros, adjudicadores y equipo administrativo.
              </Typography>

              <Grid
                container
                columnSpacing={{ xs: 0, md: 3.5 }}
                sx={{
                  mt: 3.5,
                  borderTop: `1px solid ${brand.lineStrong}`,
                }}
              >
                {VALORES.map((valor, index) => (
                  <Grid
                    key={valor.title}
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      pt: 2.5,
                      pb: 2.5,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 1.2,
                        mb: 1.2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: brand.goldInk,
                          fontFamily: fonts.display,
                          fontSize: "0.85rem",
                          flexShrink: 0,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>

                      <Typography
                        sx={{
                          color: brand.primaryDeep,
                          fontSize: "0.94rem",
                          fontWeight: 700,
                          lineHeight: 1.45,
                        }}
                      >
                        {valor.title}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: brand.muted,
                        fontSize: "0.85rem",
                        lineHeight: 1.75,
                        textWrap: "pretty",
                      }}
                    >
                      {valor.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

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
                  gridTemplateAreas: {
                    xs: '"title arrow" "text text"',
                    md: '"title text arrow"',
                  },
                  gap: { xs: 0.8, md: 3 },
                  alignItems: "center",
                  py: 2.4,
                  borderBottom: `1px solid ${brand.line}`,
                  textDecoration: "none",
                  "&:hover .estructura-title": { color: brand.goldInk },
                  "&:hover .estructura-arrow": { color: brand.primary, transform: "translateX(3px)" },
                }}
              >
                <Typography
                  className="estructura-title"
                  sx={{
                    gridArea: "title",
                    color: brand.primaryDeep,
                    fontFamily: fonts.display,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    transition: "color 0.18s ease",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ gridArea: "text", color: brand.muted, fontSize: "0.86rem", lineHeight: 1.6 }}>
                  {item.text}
                </Typography>
                <ArrowForwardIcon
                  className="estructura-arrow"
                  sx={{ gridArea: "arrow", fontSize: 18, color: brand.lineStrong, transition: "all 0.18s ease" }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* <CtaBand
        title="¿Quieres conocer más sobre nuestra labor?"
        subtitle="Conversa con la Secretaría General y recibe orientación sobre los mecanismos que administramos."
        primaryLabel="Ver documentos institucionales"
        primaryTo="/documentos"
        secondaryLabel="Contactar a la Corte"
        secondaryTo="/contacto"
      /> */}
    </>
  );
}
