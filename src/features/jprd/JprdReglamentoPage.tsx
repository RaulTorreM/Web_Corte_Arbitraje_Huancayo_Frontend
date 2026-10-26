import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import DocumentCard from "../../components/common/DocumentCard";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { documentosPorCategoria } from "../../data/documentos";
import { MEDIA } from "../../data/media";

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
        title="Reglamento JPRD (borrador)"
        description="Estructura del futuro reglamento de Juntas de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Documento en borrador"
        title="Reglamento de la JPRD"
        subtitle="El reglamento que regirá las Juntas de Prevención y Resolución de Disputas se encuentra en elaboración. Esta página describe su estructura prevista y los criterios que se están considerando, para conocimiento de las partes y de los profesionales interesados."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Reglamento" },
        ]}
        image={MEDIA.jprd}
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Documentos en borrador"
            title="Estructura prevista del reglamento"
            subtitle="El documento en elaboración desarrollará la instalación de la Junta, la designación de adjudicadores, la presentación de consultas y disputas, y el régimen de decisiones."
            sx={{ mb: 3 }}
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {documentos.map((documento) => (
              <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <DocumentCard documento={documento} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Contenido previsto"
                title="Siete capítulos en elaboración"
                subtitle="La estructura aún no es definitiva. Los plazos, el efecto de las decisiones y el costo son puntos abiertos que el Consejo deberá aprobar."
                stacked
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                {ESTRUCTURA.map((norma, index) => (
                  <Box
                    key={norma.titulo}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "34px 1fr",
                      gap: 1.6,
                      py: 1.5,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.goldDeep,
                        fontSize: "0.86rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Box>
                      <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.86rem" }}>
                        {norma.titulo}
                      </Typography>
                      <Typography sx={{ mt: 0.25, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.55 }}>
                        {norma.detalle}
                      </Typography>
                    </Box>
                  </Box>
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
        secondaryLabel="Ver aranceles"
        secondaryTo="/jprd/aranceles"
      />
    </>
  );
}
