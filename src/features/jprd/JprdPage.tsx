import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import FramedImage from "../../components/common/FramedImage";
import DocumentCard from "../../components/common/DocumentCard";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { documentosPorCategoria } from "../../data/documentos";
import { MEDIA } from "../../data/media";

export default function JprdPage() {
  const documentos = documentosPorCategoria("jprd").slice(0, 4);

  return (
    <>
      <PageMeta
        title="JPRD (borrador)"
        description="La Junta de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo. Reglamento y aranceles en borrador."
      />

      <PageHero
        kicker="Prevención y resolución temprana"
        title="Junta de Prevención y Resolución de Disputas"
        subtitle="Servicio anunciado en el Estatuto para prevenir y resolver desacuerdos durante la ejecución contractual. Esta página es un borrador y aún no cuenta con reglamento ni aranceles aprobados."
        crumbs={[{ label: "JPRD" }]}
        image={MEDIA.jprd}
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
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
                ¿Qué es la JPRD?
              </Typography>

              <Typography variant="h2" sx={{ color: brand.primaryDeep, maxWidth: 620 }}>
                Resolver a tiempo para seguir construyendo
              </Typography>

              <Typography
                sx={{
                  mt: 2.2,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.78,
                  maxWidth: 620,
                }}
              >
                La Junta de Prevención y Resolución de Disputas es un mecanismo
                previsto para acompañar la ejecución del contrato. El Estatuto
                incorpora la figura del adjudicador y faculta al Consejo a proponer
                progresivamente su creación; mientras no se apruebe su reglamento,
                no existe un procedimiento aplicable.
              </Typography>

              <Typography
                sx={{
                  mt: 1.6,
                  color: brand.muted,
                  fontSize: "0.98rem",
                  lineHeight: 1.78,
                  maxWidth: 620,
                }}
              >
                La propuesta busca prevenir que un desacuerdo se convierta en un
                conflicto mayor, evitar la paralización de la obra o del servicio y
                preservar la relación contractual. Su puesta en marcha depende de la
                aprobación del reglamento y de la designación de los adjudicadores.
              </Typography>

              <Box sx={{ mt: 2.4, pl: 2, borderLeft: `2px solid ${brand.gold}` }}>
                <Typography
                  sx={{
                    color: brand.muted,
                    fontFamily: fonts.display,
                    fontSize: "0.92rem",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  “El Consejo Superior de Arbitraje podrá proponer progresivamente
                  la creación de nuevas comisiones u órganos permanentes y sus
                  reglamentos aplicables sobre Junta de Prevención y Resolución de
                  Disputas, Dispute Boards, Arbitraje Inmobiliario, Tribunales
                  Arbitrales Permanentes, y otros.”
                </Typography>
                <Typography sx={{ mt: 0.8, color: brand.muted, fontSize: "0.72rem" }}>
                  Estatuto, Tercera Disposición Final.
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 3 }}>
                <Button
                  component={RouterLink}
                  to="/jprd/clausula"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                >
                  Ver cláusula modelo
                </Button>
                <Button component={RouterLink} to="/jprd/reglamento" variant="outlined">
                  Reglamento
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <FramedImage
                src={MEDIA.jprd.src}
                alt={MEDIA.jprd.alt}
                fit={MEDIA.jprd.fit}
                maxWidth={460}
                ratio="4 / 5"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-end", mb: 4 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <SectionHeading
                kicker="Documentos en borrador"
                title="Reglamento, ética y aranceles"
                subtitle="Documentos en proceso de aprobación. No son normativa vigente y no deben citarse como reglas aplicables."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Button
                component={RouterLink}
                to="/jprd/reglamento"
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                sx={{ width: { xs: "100%", sm: "fit-content" }, ml: { md: "auto" }, display: "flex" }}
              >
                Ver todos los documentos
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {documentos.map((documento) => (
              <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <DocumentCard documento={documento} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </>
  );
}
