import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import ClauseBlock from "../../components/common/ClauseBlock";
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { MEDIA } from "../../data/media";

const ELEMENTOS = [
  "La voluntad de someter las disputas de ejecución a la JPRD.",
  "La Corte que administrará la Junta.",
  "El número de adjudicadores y su forma de designación.",
  "La sede y el idioma del procedimiento.",
];

const DIFERENCIAS = [
  {
    title: "JPRD",
    subtitle: "Durante la ejecución",
    items: [
      "Interviene mientras el contrato está vigente.",
      "Emite decisiones oportunas y motivadas.",
      "Busca preservar la continuidad del proyecto.",
    ],
  },
  {
    title: "Arbitraje",
    subtitle: "Solución definitiva",
    items: [
      "Resuelve controversias no superadas o de mayor complejidad.",
      "Concluye con un laudo vinculante e inapelable.",
      "Se administra conforme al Reglamento de Arbitraje.",
    ],
  },
];

const CLAUSULA = `Las controversias que surjan durante la ejecución del presente contrato, incluidas las consultas sobre su interpretación y las disputas sobre su cumplimiento, serán sometidas a la Junta de Prevención y Resolución de Disputas administrada por la Corte Superior de Arbitraje de Huancayo.

La Junta estará integrada por un adjudicador único / tres adjudicadores designados conforme al Reglamento de la JPRD de la Corte. Las decisiones de la Junta serán vinculantes para las partes y se emitirán en los plazos establecidos en el reglamento.

La sede de la Junta será la ciudad de Huancayo y el idioma del procedimiento será el español. La intervención de la Junta no impide que las partes acudan a los mecanismos de solución de controversias previstos en la ley para los aspectos no resueltos.`;

export default function JprdClausulaPage() {
  return (
    <>
      <PageMeta
        title="Cláusula modelo JPRD (borrador)"
        description="Borrador de cláusula para incorporar la Junta de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo. Documento no vigente."
      />

      <PageHero
        kicker="Borrador sujeto a revisión legal"
        title="Cláusula modelo JPRD"
        subtitle="Propuesta de redacción para incorporar una Junta de Prevención y Resolución de Disputas. No debe utilizarse como cláusula definitiva hasta que el reglamento de la JPRD sea aprobado."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Cláusula modelo" },
        ]}
        image={MEDIA.jprd}
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice
        title="Página Borrador"
        text = "Esta sección es un borrador de trabajo. Los documentos, montos y perfiles que aparecen aquí necesitan ser reemplazados por datos reales."
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Antes de ejecutar"
                title="Una Junta prevista en el contrato"
                subtitle="La cláusula debe identificar con claridad la institución, la conformación de la Junta y la sede del procedimiento. Esta versión es un borrador y no reemplaza la revisión legal del contrato."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 2 }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.88rem" }}>
                  La cláusula debe contener:
                </Typography>

                <Stack sx={{ mt: 1.2 }}>
                  {ELEMENTOS.map((elemento) => (
                    <Typography
                      key={elemento}
                      sx={{
                        py: 0.95,
                        borderTop: `1px solid ${brand.line}`,
                        color: brand.muted,
                        fontSize: "0.82rem",
                        lineHeight: 1.55,
                      }}
                    >
                      {elemento}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4.5, md: 6 } }}>
            <ClauseBlock
              title="Borrador de cláusula JPRD"
              description="Elige un adjudicador único o una Junta de tres integrantes y elimina la opción que no corresponda. El texto está sujeto a la aprobación del reglamento."
              clause={CLAUSULA}
              note="La JPRD no reemplaza al arbitraje: ambos mecanismos pueden coexistir. La cláusula definitiva debe validarse cuando el reglamento sea aprobado."
            />
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Dos mecanismos"
            title="JPRD y arbitraje no compiten"
            subtitle="La Junta acompaña la ejecución; el arbitraje resuelve de forma definitiva lo que no pudo superarse."
          />

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {DIFERENCIAS.map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <Box sx={{ pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.primaryDeep,
                      fontSize: "1.45rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.4,
                      color: brand.goldDeep,
                      fontSize: "0.64rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Stack sx={{ mt: 1.6 }}>
                    {item.items.map((texto) => (
                      <Typography
                        key={texto}
                        sx={{
                          py: 0.9,
                          borderTop: `1px solid ${brand.line}`,
                          color: brand.muted,
                          fontSize: "0.85rem",
                          lineHeight: 1.62,
                        }}
                      >
                        {texto}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mt: 4 }}>
            <Button
              component={RouterLink}
              to="/jprd/adjudicadores"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
            >
              Ver adjudicadores
            </Button>

            <Button component={RouterLink} to="/contacto" variant="outlined">
              Consultar con la Corte
            </Button>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="..."
        subtitle="Si tu contrato ya contempla una junta o dispute board, podemos orientarte sobre su administración futura. La cláusula definitiva se publicará cuando el reglamento sea aprobado."
        primaryLabel="Consultar con la Corte"
        primaryTo="/contacto"
        secondaryLabel="Ver reglamento"
        secondaryTo="/jprd/reglamento"
      />
    </>
  );
}
