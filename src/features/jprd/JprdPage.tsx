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
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import SectionLabel from "../../components/common/SectionLabel";
import SectionTitle from "../../components/common/SectionTitle";
import FramedImage from "../../components/common/FramedImage";
import DocumentCard from "../../components/common/DocumentCard";
import CtaBand from "../../components/common/CtaBand";
import { Stagger } from "../../components/common/Reveal";
import { fadeUp, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { documentosPorCategoria } from "../../data/documentos";

const BENEFICIOS = [
  {
    icon: BoltOutlinedIcon,
    title: "Decisiones oportunas",
    text: "El adjudicador resuelve durante la ejecución, sin esperar el final del contrato.",
  },
  {
    icon: ConstructionOutlinedIcon,
    title: "Continuidad del proyecto",
    text: "Se evita la paralización de la obra o del servicio mientras se resuelve la discrepancia.",
  },
  {
    icon: HandshakeOutlinedIcon,
    title: "Enfoque preventivo",
    text: "La Junta puede emitir opiniones para prevenir conflictos antes de que escalen.",
  },
  {
    icon: SavingsOutlinedIcon,
    title: "Ahorro de tiempo y costos",
    text: "Un mecanismo ágil frente a un procedimiento arbitral o judicial prolongado.",
  },
];

const PASOS_JPRD = [
  {
    title: "Incorpora la cláusula",
    text: "Incluye en el contrato la cláusula modelo que somete las disputas a la JPRD de la Corte.",
  },
  {
    title: "Designa al adjudicador",
    text: "Las partes designan al adjudicador o tribunal de adjudicación conforme al reglamento.",
  },
  {
    title: "Presenta la consulta",
    text: "La parte interesada presenta la consulta o disputa con los antecedentes y su posición técnica.",
  },
  {
    title: "Recibe la decisión",
    text: "El adjudicador emite una decisión motivada y oportuna para mantener la continuidad contractual.",
  },
];

export default function JprdPage() {
  const documentos = documentosPorCategoria("jprd").slice(0, 4);

  return (
    <>
      <PageMeta
        title="JPRD"
        description="Junta de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo: prevención y solución temprana de controversias contractuales."
      />

      <PageHero
        kicker="Prevención y resolución temprana"
        title="Junta de Prevención y Resolución de Disputas"
        subtitle="Un mecanismo ágil para resolver desacuerdos durante la ejecución del contrato y preservar la continuidad del proyecto."
        crumbs={[{ label: "JPRD" }]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      >
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {["Prevención", "Decisiones oportunas", "Continuidad contractual"].map((item) => (
            <Box
              key={item}
              sx={{
                px: 1.6,
                py: 0.6,
                border: "1px solid rgba(255,255,255,0.24)",
                color: "rgba(255,255,255,0.78)",
                fontSize: "0.72rem",
                fontWeight: 600,
              }}
            >
              {item}
            </Box>
          ))}
        </Stack>
      </PageHero>

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
                <Box component={motion.div} variants={fadeUp}>
                  <SectionLabel>¿Qué es la JPRD?</SectionLabel>
                  <SectionTitle>
                    Resolver a tiempo para seguir construyendo
                  </SectionTitle>
                </Box>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 2.6, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.85 }}
                >
                  La Junta de Prevención y Resolución de Disputas es un mecanismo
                  que acompaña la ejecución del contrato. Un adjudicador o un
                  tribunal de adjudicación conoce las diferencias técnicas o
                  contractuales y emite decisiones oportunas, motivadas y
                  vinculantes para las partes.
                </Typography>

                <Typography
                  component={motion.p}
                  variants={fadeUp}
                  sx={{ mt: 1.7, color: brand.muted, fontSize: "0.98rem", lineHeight: 1.85 }}
                >
                  Su finalidad es prevenir que un desacuerdo se convierta en un
                  conflicto mayor, evitar la paralización de la obra o del
                  servicio y preservar la relación contractual.
                </Typography>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  spacing={1.3}
                  sx={{ mt: 3 }}
                >
                  {[
                    "Aplicable a contratos de obra, bienes y servicios.",
                    "Decisiones durante la ejecución, no al final del contrato.",
                    "Adjudicadores con experiencia técnica y legal.",
                  ].map((item) => (
                    <Stack key={item} direction="row" spacing={1.3} sx={{ alignItems: "flex-start" }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: "1.1rem", color: brand.goldDeep, mt: "2px" }}
                      />
                      <Typography sx={{ color: brand.ink, fontSize: "0.9rem", lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack
                  component={motion.div}
                  variants={fadeUp}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 4 }}
                >
                  <Button
                    component={RouterLink}
                    to="/jprd/clausula"
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                  >
                    Ver cláusula modelo
                  </Button>

                  <Button component={RouterLink} to="/jprd/reglamento" variant="outlined">
                    Reglamento
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FramedImage
                src="/images/ARBITRAJE_IMG_02-03.jpg"
                alt="Sala de reuniones de la Corte Superior de Arbitraje de Huancayo"
                side="right"
                maxWidth={500}
                ratio="4 / 3.2"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.skySoft,
          borderTop: `1px solid ${brand.skyMid}`,
          borderBottom: `1px solid ${brand.skyMid}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Beneficios"
            title="Por qué incorporar una JPRD"
            subtitle="La prevención temprana reduce la conflictividad y protege el valor del contrato."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {BENEFICIOS.map((beneficio) => {
                const Icon = beneficio.icon;

                return (
                  <Grid key={beneficio.title} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Stack
                      component={motion.article}
                      variants={fadeUp}
                      sx={{
                        height: "100%",
                        p: 3,
                        backgroundColor: brand.white,
                        border: `1px solid ${brand.skyMid}`,
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 34px rgba(18,35,61,0.10)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: brand.primaryDark,
                          color: brand.goldSoft,
                          mb: 2.2,
                        }}
                      >
                        <Icon sx={{ fontSize: "1.35rem" }} />
                      </Box>

                      <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1.02rem" }}>
                        {beneficio.title}
                      </Typography>

                      <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                        {beneficio.text}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Cómo funciona"
            title="Cuatro pasos para activar la Junta"
            centered
          />

          <Grid container spacing={{ xs: 3, md: 2.5 }}>
            {PASOS_JPRD.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  component={motion.article}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  sx={{
                    height: "100%",
                    p: 3,
                    backgroundColor: brand.white,
                    border: `1px solid ${brand.line}`,
                    borderTop: `3px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: brand.skyMid,
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Typography variant="h4" sx={{ mt: 2, color: brand.primaryDark, fontSize: "1.02rem" }}>
                    {paso.title}
                  </Typography>

                  <Typography sx={{ mt: 1.1, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {paso.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-end", mb: 5 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Documentos"
                title="Reglamento, ética y aranceles"
                subtitle="Consulta las reglas que rigen la actuación de la Junta y de los adjudicadores."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Button
                component={RouterLink}
                to="/jprd/reglamento"
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
                sx={{ float: { md: "right" } }}
              >
                Ver todos los documentos
              </Button>
            </Grid>
          </Grid>

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {documentos.map((documento) => (
                <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 3 }}>
                  <DocumentCard documento={documento} />
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <CtaBand
        title="¿Tu contrato necesita una JPRD?"
        subtitle="Incorporar la cláusula desde el inicio evita conflictos costosos durante la ejecución."
        secondaryLabel="Ver nómina de adjudicadores"
        secondaryTo="/jprd/adjudicadores"
      />
    </>
  );
}
