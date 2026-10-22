import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import DocumentCard from "../../components/common/DocumentCard";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
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
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <SectionHeading
                kicker="Documentos oficiales"
                title="Reglas claras para todas las partes"
                subtitle="El Reglamento de Arbitraje V1 regula la solicitud, la designación de árbitros, las actuaciones procesales, los plazos y el laudo. El Estatuto define los órganos de gobierno y el Código de Ética los deberes de los profesionales."
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  borderTop: `2px solid ${brand.gold}`,
                  pt: 2,
                }}
              >
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.86rem" }}>
                  Versiones y vigencia
                </Typography>
                <Typography sx={{ mt: 0.7, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}>
                  Se publican el Reglamento V1 (21.09.2026), el Estatuto
                  (21.09.2026) y el Código de Ética V2 (23.09.2026). Los
                  documentos de la JPRD son preliminares y no forman parte de
                  esta sección normativa.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {documentos.map((documento) => (
              <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <DocumentCard documento={documento} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 5 }}>
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
                Normativa legal
              </Typography>

              <Typography
                variant="h2"
                sx={{ color: brand.primaryDeep, fontSize: { xs: "1.9rem", md: "2.4rem" } }}
              >
                Normativa legal aplicable
              </Typography>

              <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.94rem", lineHeight: 1.78 }}>
                El arbitraje administrado por la Corte se rige por la Ley de
                Arbitraje y por las normas que resulten aplicables según la
                naturaleza de la controversia.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                {NORMAS.map((norma, index) => (
                  <Box
                    key={norma.norma}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "34px 1fr",
                      gap: 1.6,
                      py: 1.8,
                      borderBottom: `1px solid ${brand.line}`,
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
                      <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                        {norma.norma}
                      </Typography>
                      <Typography sx={{ mt: 0.3, color: brand.muted, fontSize: "0.82rem", lineHeight: 1.55 }}>
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
