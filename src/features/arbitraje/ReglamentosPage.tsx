import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import DocumentCard from "../../components/common/DocumentCard";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { DOCUMENTOS } from "../../data/documentos";
import { MEDIA } from "../../data/media";

const NORMAS = [
  {
    norma: "Reglamento de Arbitraje — V1",
    detalle:
      "Versión del 21.09.2026. Rige la solicitud, la designación, el proceso y el laudo; su texto está sujeto a revisión antes de la publicación definitiva.",
  },
  {
    norma: "Estatuto del Centro",
    detalle:
      "Versión del 21.09.2026. Naturaleza, órganos de gobierno y comisiones; su texto está sujeto a revisión antes de la publicación definitiva.",
  },
  {
    norma: "Código de Ética — V2",
    detalle:
      "Versión del 23.09.2026. Deberes, denuncias y régimen sancionador; su texto está sujeto a revisión antes de la publicación definitiva.",
  },
  {
    norma: "Tabla de Gastos Arbitrales",
    detalle:
      "Anexos 1 al 4: tasa administrativa, honorarios por cuantía, tasas de trámite y aranceles de emergencia.",
  },
  {
    norma: "Decreto Legislativo N.° 1071",
    detalle: "Ley de Arbitraje y normativa legal aplicable.",
  },
];

export default function ReglamentosPage() {
  const documentos = DOCUMENTOS.filter(
    (documento) =>
      documento.categoria === "institucional" ||
      documento.categoria === "arbitraje"
  );

  return (
    <>
      <PageMeta
        title="Reglamentos y directivas"
        description="Reglamento de Arbitraje V1, Estatuto, Código de Ética V2, apéndices y tabla de gastos de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Marco normativo"
        title="Marco normativo del arbitraje"
        subtitle="Un reglamento único y público, con apéndices para el arbitraje acelerado, social y de emergencia, y una tabla de gastos publicada."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Reglamentos y directivas" },
        ]}
        image={MEDIA.arbitraje}
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <SectionHeading
                kicker="Documentos normativos"
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
                  Se publican versiones de trabajo en DOCX del Reglamento V1
                  (21.09.2026), el Estatuto (21.09.2026) y el Código de Ética V2
                  (23.09.2026), junto con los apéndices y la tabla de gastos. Los
                  PDFs definitivos se incorporarán cuando estén firmados. Los
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

          <Typography sx={{ mt: 3, color: brand.muted, fontSize: "0.78rem", lineHeight: 1.65 }}>
            Los formatos de solicitud, declaración de independencia y postulación
            al Registro se publicarán cuando la institución entregue los archivos
            editables. Los documentos marcados “En revisión” son versiones de
            trabajo y no sustituyen los PDFs firmados.
          </Typography>
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
