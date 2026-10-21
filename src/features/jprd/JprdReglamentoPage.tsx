import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import DocumentCard from "../../components/common/DocumentCard";
import CtaBand from "../../components/common/CtaBand";
import { Stagger } from "../../components/common/Reveal";
import { viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { documentosPorCategoria } from "../../data/documentos";

const PRINCIPIOS = [
  {
    icon: GavelOutlinedIcon,
    title: "Independencia",
    text: "El adjudicador actúa con autonomía frente a las partes y frente a cualquier interés externo.",
  },
  {
    icon: BalanceOutlinedIcon,
    title: "Imparcialidad",
    text: "Se garantiza igualdad de trato y la oportunidad de presentar la posición técnica de cada parte.",
  },
  {
    icon: LockOutlinedIcon,
    title: "Confidencialidad",
    text: "La información del procedimiento se mantiene reservada y se usa únicamente para la decisión.",
  },
  {
    icon: BoltOutlinedIcon,
    title: "Oportunidad",
    text: "Las decisiones se emiten en plazos breves para no afectar la ejecución contractual.",
  },
];

const NORMAS = [
  { norma: "Ley N.° 30225", detalle: "Ley de Contrataciones del Estado" },
  { norma: "Reglamento de la Ley N.° 30225", detalle: "Reglas de la Junta de Prevención y Resolución de Disputas" },
  { norma: "Directiva interna de la JPRD", detalle: "Procedimiento administrado por la Corte" },
];

export default function JprdReglamentoPage() {
  const documentos = documentosPorCategoria("jprd");

  return (
    <>
      <PageMeta
        title="Reglamento y ética de la JPRD"
        description="Reglamento, código de ética, aranceles y cláusula modelo de la Junta de Prevención y Resolución de Disputas."
      />

      <PageHero
        kicker="Marco normativo de la JPRD"
        title="Reglamento y ética"
        subtitle="Reglas claras para la actuación de los adjudicadores y el desarrollo ordenado de la Junta."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Reglamento y ética" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Documentos oficiales"
                title="Un procedimiento regulado y transparente"
                subtitle="El reglamento desarrolla la instalación de la Junta, la designación de adjudicadores, la presentación de consultas y disputas, y el régimen de decisiones."
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
                  p: 2.5,
                  backgroundColor: brand.skySoft,
                  border: `1px solid ${brand.skyMid}`,
                  borderLeft: `4px solid ${brand.gold}`,
                }}
              >
                <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.88rem" }}>
                  Versión vigente
                </Typography>
                <Typography sx={{ color: brand.primary, fontSize: "0.82rem", mt: 0.6, lineHeight: 1.65 }}>
                  Los documentos publicados corresponden a la versión aprobada
                  por el Consejo Directivo. Cualquier modificación se comunica en
                  esta misma sección.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Stagger amount={0.08}>
            <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ mt: 3 }}>
              {documentos.map((documento) => (
                <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 3 }}>
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
          <SectionHeading
            kicker="Principios"
            title="La conducta que esperamos de un adjudicador"
            centered
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {PRINCIPIOS.map((principio, index) => {
              const Icon = principio.icon;

              return (
                <Grid key={principio.title} size={{ xs: 12, sm: 6 }}>
                  <Stack
                    component={motion.article}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    direction="row"
                    spacing={2.2}
                    sx={{
                      height: "100%",
                      p: 2.8,
                      backgroundColor: brand.white,
                      border: `1px solid ${brand.line}`,
                      borderLeft: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: brand.skySoft,
                        color: brand.primary,
                      }}
                    >
                      <Icon />
                    </Box>

                    <Box>
                      <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.92rem" }}>
                        {principio.title}
                      </Typography>
                      <Typography sx={{ mt: 0.6, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                        {principio.text}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Normativa aplicable"
                title="Base legal de la Junta"
                subtitle="La JPRD se desarrolla en el marco de la normativa de contrataciones del Estado y del reglamento interno de la Corte."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={1.5}>
                {NORMAS.map((norma, index) => (
                  <Stack
                    key={norma.norma}
                    direction="row"
                    spacing={2}
                    sx={{
                      p: 2.3,
                      alignItems: "center",
                      backgroundColor: brand.paper,
                      border: `1px solid ${brand.line}`,
                      borderLeft: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: brand.skyMid,
                        minWidth: 28,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Box>
                      <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.88rem" }}>
                        {norma.norma}
                      </Typography>
                      <Typography sx={{ color: brand.muted, fontSize: "0.8rem", mt: 0.25 }}>
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
        title="¿Tienes dudas sobre el reglamento de la JPRD?"
        subtitle="La Secretaría General puede orientarte sobre la aplicación de las reglas en tu contrato."
        secondaryLabel="Contactar a la Corte"
        secondaryTo="/contacto"
      />
    </>
  );
}
