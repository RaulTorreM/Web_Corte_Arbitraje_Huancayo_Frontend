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
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
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

const ESTRUCTURA = [
  {
    titulo: "I. Disposiciones generales",
    detalle: "Objeto, definiciones, relación con el Reglamento de Arbitraje y carácter institucional del servicio.",
  },
  {
    titulo: "II. Constitución de la junta",
    detalle: "Uno o tres miembros, designación desde el Registro, requisitos, independencia y reemplazos.",
  },
  {
    titulo: "III. Reglas de actuación",
    detalle: "Instalación, calendario, visitas, confidencialidad, comunicaciones y medios electrónicos.",
  },
  {
    titulo: "IV. Prevención de disputas",
    detalle: "Alertas tempranas, recomendaciones no vinculantes e informes periódicos.",
  },
  {
    titulo: "V. Procedimiento de disputa",
    detalle: "Notificación, posiciones, audiencia, decisión, corrección y escalamiento.",
  },
  {
    titulo: "VI. Costos",
    detalle: "Honorarios, gastos de la Corte, traslados, distribución entre las partes y provisión.",
  },
  {
    titulo: "VII. Disposiciones finales",
    detalle: "Confidencialidad, responsabilidad, vigencia y régimen transitorio.",
  },
];

export default function JprdReglamentoPage() {
  const documentos = documentosPorCategoria("jprd");

  return (
    <>
      <PageMeta
        title="Reglamento JPRD (preliminar)"
        description="Estructura del futuro reglamento de Juntas de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Documento preliminar — en proceso de aprobación"
        title="Reglamento de la JPRD"
        subtitle="El reglamento que regirá las Juntas de Prevención y Resolución de Disputas se encuentra en elaboración. Esta página describe su estructura prevista y los criterios que se están considerando, para conocimiento de las partes y de los profesionales interesados."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Reglamento preliminar" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice
        title="Documento preliminar — no vigente"
        text="El reglamento de la JPRD no ha sido aprobado. Esta sección es un documento de trabajo y no debe citarse como norma aplicable. Cuando el Consejo lo apruebe, se publicará el PDF firmado y se reemplazará esta etiqueta."
      />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Documentos preliminares"
                title="Estructura prevista del reglamento"
                subtitle="El documento en elaboración desarrollará la instalación de la Junta, la designación de adjudicadores, la presentación de consultas y disputas, y el régimen de decisiones."
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
                  Documento de trabajo
                </Typography>
                <Typography sx={{ color: brand.primary, fontSize: "0.82rem", mt: 0.6, lineHeight: 1.65 }}>
                  Los documentos de esta sección son borradores. No han sido
                  aprobados por el Consejo Superior ni publicados como normativa
                  vigente. Las observaciones pueden enviarse a la Secretaría.
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
            title="Criterios que se están considerando"
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
                kicker="Contenido previsto"
                title="Siete capítulos en elaboración"
                subtitle="La estructura aún no es definitiva. Los plazos, el efecto de las decisiones y el costo son puntos abiertos que el Consejo deberá aprobar."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={1.2}>
                {ESTRUCTURA.map((norma, index) => (
                  <Stack
                    key={norma.titulo}
                    direction="row"
                    spacing={2}
                    sx={{
                      p: 2,
                      alignItems: "flex-start",
                      backgroundColor: brand.paper,
                      border: `1px solid ${brand.line}`,
                      borderLeft: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Fraunces", Georgia, serif',
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: brand.skyMid,
                        minWidth: 28,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Box>
                      <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.86rem" }}>
                        {norma.titulo}
                      </Typography>
                      <Typography sx={{ color: brand.muted, fontSize: "0.78rem", mt: 0.25, lineHeight: 1.6 }}>
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
        title="¿Quieres opinar sobre el reglamento?"
        subtitle="Las observaciones de usuarios, árbitros, adjudicadores, entidades públicas y empresas serán recibidas por la Secretaría y puestas en conocimiento del Consejo."
        primaryLabel="Enviar observaciones"
        primaryTo="/contacto"
        secondaryLabel="Ver aranceles preliminares"
        secondaryTo="/jprd/aranceles"
      />
    </>
  );
}
