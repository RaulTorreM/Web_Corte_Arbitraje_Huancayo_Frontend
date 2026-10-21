import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import ClauseBlock from "../../components/common/ClauseBlock";
import CtaBand from "../../components/common/CtaBand";
import { viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";

const ELEMENTOS = [
  "La voluntad de someter las disputas de ejecución a la JPRD.",
  "La Corte que administrará la Junta.",
  "El número de adjudicadores y su forma de designación.",
  "La sede y el idioma del procedimiento.",
];

const DIFERENCIAS = [
  {
    icon: HandshakeOutlinedIcon,
    title: "JPRD",
    subtitle: "Durante la ejecución",
    items: [
      "Interviene mientras el contrato está vigente.",
      "Emiten decisiones oportunas y motivadas.",
      "Busca preservar la continuidad del proyecto.",
    ],
  },
  {
    icon: GavelOutlinedIcon,
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
        title="Cláusula modelo JPRD"
        description="Cláusula modelo para incorporar la Junta de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo en contratos de obra, bienes y servicios."
      />

      <PageHero
        kicker="Prevención desde el contrato"
        title="Cláusula modelo JPRD"
        subtitle="Incorporar la Junta desde el inicio permite resolver desacuerdos durante la ejecución y evitar conflictos mayores."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Cláusula modelo" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Antes de ejecutar"
                title="Una Junta prevista en el contrato"
                subtitle="La cláusula debe identificar con claridad la institución, la conformación de la Junta y la sede del procedimiento. Una redacción precisa evita demoras cuando surge la primera discrepancia."
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
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: brand.skySoft,
                  border: `1px solid ${brand.skyMid}`,
                  borderTop: `3px solid ${brand.gold}`,
                }}
              >
                <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.9rem", mb: 1.8 }}>
                  La cláusula debe contener:
                </Typography>

                <Stack spacing={1.4}>
                  {ELEMENTOS.map((elemento) => (
                    <Stack key={elemento} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: "1.05rem", color: brand.goldDeep, mt: "2px", flexShrink: 0 }}
                      />
                      <Typography sx={{ color: brand.primary, fontSize: "0.84rem", lineHeight: 1.6 }}>
                        {elemento}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4.5, md: 6 } }}>
            <ClauseBlock
              title="Cláusula modelo de JPRD"
              description="Elige un adjudicador único o una Junta de tres integrantes y elimina la opción que no corresponda."
              clause={CLAUSULA}
              note="La JPRD no reemplaza al arbitraje: ambos mecanismos pueden coexistir en un mismo contrato para atender distintas etapas o materias."
            />
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 4 }}>
            {DIFERENCIAS.map((item, index) => {
              const Icon = item.icon;
              const dark = index === 0;

              return (
                <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                  <Box
                    component={motion.article}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    sx={{
                      height: "100%",
                      p: { xs: 3, md: 3.5 },
                      backgroundColor: dark ? brand.primaryDark : brand.paper,
                      color: dark ? brand.white : brand.ink,
                      border: `1px solid ${dark ? brand.primaryDark : brand.line}`,
                      borderTop: `3px solid ${brand.gold}`,
                    }}
                  >
                    <Stack direction="row" spacing={1.6} sx={{ alignItems: "center", mb: 1.2 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: dark ? "rgba(186,153,7,0.16)" : brand.skySoft,
                          color: dark ? brand.goldSoft : brand.primary,
                        }}
                      >
                        <Icon />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: fonts.display,
                            fontSize: "1.3rem",
                            fontWeight: 600,
                            color: dark ? brand.white : brand.primaryDark,
                            lineHeight: 1.2,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: dark ? brand.goldSoft : brand.goldDeep,
                            fontSize: "0.68rem",
                            fontWeight: 750,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack spacing={1.2} sx={{ mt: 2 }}>
                      {item.items.map((texto) => (
                        <Stack key={texto} direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                          <Box
                            sx={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              backgroundColor: dark ? brand.goldSoft : brand.goldDeep,
                              mt: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              color: dark ? "rgba(255,255,255,0.74)" : brand.muted,
                              fontSize: "0.86rem",
                              lineHeight: 1.65,
                            }}
                          >
                            {texto}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4.5, alignItems: { sm: "center" } }}
          >
            <Button
              component={RouterLink}
              to="/jprd/adjudicadores"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
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
        title="Prevenir cuesta menos que litigar"
        subtitle="Incorpora la JPRD en tus contratos y protege la continuidad de tus proyectos."
        secondaryLabel="Ver reglamento"
        secondaryTo="/jprd/reglamento"
      />
    </>
  );
}
