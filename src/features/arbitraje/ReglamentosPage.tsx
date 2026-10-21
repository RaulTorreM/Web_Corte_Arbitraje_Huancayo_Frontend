import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import DocumentCard from "../../components/common/DocumentCard";
import CtaBand from "../../components/common/CtaBand";
import { Stagger } from "../../components/common/Reveal";
import { viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { documentosPorCategoria } from "../../data/documentos";

const NORMAS = [
  {
    norma: "Reglamento de Arbitraje — V1",
    detalle: "Aprobado el 21.09.2026. Rige la solicitud, la designación, el proceso y el laudo.",
  },
  {
    norma: "Estatuto del Centro",
    detalle: "Aprobado el 21.09.2026. Naturaleza, órganos de gobierno y comisiones.",
  },
  {
    norma: "Código de Ética — V2",
    detalle: "Aprobado el 23.09.2026. Deberes, denuncias y régimen sancionador.",
  },
  {
    norma: "Tabla de Gastos Arbitrales",
    detalle: "Anexos 1 al 4: honorarios, tasas de trámite y arbitraje de emergencia.",
  },
  {
    norma: "Decreto Legislativo N.° 1071",
    detalle: "Ley de Arbitraje y normativa legal aplicable.",
  },
];

export default function ReglamentosPage() {
  const documentos = documentosPorCategoria("arbitraje");

  return (
    <>
      <PageMeta
        title="Reglamentos y directivas"
        description="Reglamento de Arbitraje V1, Estatuto, Código de Ética V2, apéndices y tabla de gastos de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Marco normativo"
        title="Normativa que rige nuestros arbitrajes"
        subtitle="Un reglamento único y público, con apéndices para el arbitraje acelerado, social y de emergencia, y una tabla de gastos aprobada por el Consejo."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Reglamentos y directivas" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Documentos oficiales"
                title="Reglas claras para todas las partes"
                subtitle="El Reglamento de Arbitraje V1 regula la solicitud, la designación de árbitros, las actuaciones procesales, los plazos y el laudo. El Estatuto define los órganos de gobierno y el Código de Ética los deberes de los profesionales."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack
                component={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                direction="row"
                spacing={1.8}
                sx={{
                  p: 2.5,
                  backgroundColor: brand.skySoft,
                  border: `1px solid ${brand.skyMid}`,
                  borderLeft: `4px solid ${brand.gold}`,
                }}
              >
                <MenuBookOutlinedIcon sx={{ color: brand.primary, mt: "2px" }} />

                <Box>
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.88rem" }}>
                    Versiones y vigencia
                  </Typography>
                  <Typography sx={{ color: brand.primary, fontSize: "0.82rem", mt: 0.5, lineHeight: 1.65 }}>
                    Se publican el Reglamento V1 (21.09.2026), el Estatuto
                    (21.09.2026) y el Código de Ética V2 (23.09.2026). Los
                    documentos de la JPRD son preliminares y no forman parte de
                    esta sección normativa.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Stagger amount={0.08}>
            <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ mt: 3 }}>
              {documentos.map((documento) => (
                <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <DocumentCard documento={documento} />
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
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
          borderBottom: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                spacing={2.2}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: brand.primaryDark,
                    color: brand.goldSoft,
                  }}
                >
                  <GavelOutlinedIcon />
                </Box>

                <Typography
                  variant="h2"
                  sx={{ color: brand.primaryDark, fontSize: { xs: "1.8rem", md: "2.2rem" } }}
                >
                  Normativa legal aplicable
                </Typography>

                <Typography sx={{ color: brand.muted, fontSize: "0.94rem", lineHeight: 1.8 }}>
                  El arbitraje administrado por la Corte se rige por la Ley de
                  Arbitraje y por las normas que resulten aplicables según la
                  naturaleza de la controversia.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={1.6}>
                {NORMAS.map((norma, index) => (
                  <Stack
                    key={norma.norma}
                    component={motion.div}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    direction="row"
                    spacing={2.2}
                    sx={{
                      p: 2.4,
                      alignItems: "center",
                      backgroundColor: brand.white,
                      border: `1px solid ${brand.line}`,
                      borderLeft: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: brand.skyMid,
                        minWidth: 28,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Box>
                      <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.9rem" }}>
                        {norma.norma}
                      </Typography>
                      <Typography sx={{ color: brand.muted, fontSize: "0.82rem", mt: 0.3 }}>
                        {norma.detalle}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="¿Tienes dudas sobre la aplicación de un reglamento?"
        subtitle="La Secretaría General puede orientarte sobre las reglas aplicables a tu procedimiento."
        primaryLabel="Contactar a la Corte"
        primaryTo="/contacto"
        secondaryLabel="Ver costos"
        secondaryTo="/arbitraje/costos"
      />
    </>
  );
}
