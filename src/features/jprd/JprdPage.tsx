import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import FramedImage from "../../components/common/FramedImage";
import DocumentCard from "../../components/common/DocumentCard";
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { documentosPorCategoria } from "../../data/documentos";
import { MEDIA } from "../../data/media";

const BENEFICIOS = [
  {
    title: "Decisiones oportunas",
    text: "El adjudicador resuelve durante la ejecución, sin esperar el final del contrato.",
  },
  {
    title: "Continuidad del proyecto",
    text: "Se evita la paralización de la obra o del servicio mientras se resuelve la discrepancia.",
  },
  {
    title: "Enfoque preventivo",
    text: "La Junta puede emitir opiniones para prevenir conflictos antes de que escalen.",
  },
  {
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
        title="JPRD (borrador)"
        description="La Junta de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo. Reglamento y aranceles en borrador."
      />

      <PageHero
        kicker="Prevención y resolución temprana"
        title="Junta de Prevención y Resolución de Disputas"
        subtitle="Servicio anunciado en el Estatuto para prevenir y resolver desacuerdos durante la ejecución contractual. Esta página es un borrador y aún no cuenta con reglamento ni aranceles aprobados."
        crumbs={[{ label: "JPRD" }]}
        image={MEDIA.jprd}
      >
        <Typography sx={{ color: brand.accent, fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.6 }}>
          Página Borrador
        </Typography>
      </PageHero>

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice />

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

              <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
                El Estatuto menciona a los adjudicadores en el Registro, la
                designación directa y residual, y el régimen de recusación y
                remoción (artículos 21 y 22).
              </Typography>

              <Stack sx={{ mt: 3, borderTop: `1px solid ${brand.line}` }}>
                {[
                  "Figura prevista para contratos de obra, bienes y servicios.",
                  "Decisiones durante la ejecución, no al final del contrato.",
                  "Adjudicadores con experiencia técnica y legal.",
                ].map((item, index) => (
                  <Box
                    key={item}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "30px 1fr",
                      gap: 1.2,
                      py: 1.2,
                      borderBottom: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.goldDeep,
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                      }}
                    >
                      0{index + 1}
                    </Typography>
                    <Typography sx={{ color: brand.ink, fontSize: "0.88rem", lineHeight: 1.55 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>

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
          <SectionHeading
            kicker="Beneficios esperados"
            title="Qué busca la propuesta de JPRD"
            subtitle="Ventajas del mecanismo una vez aprobado e implementado. No describen un servicio actualmente disponible."
          />

          <Grid container spacing={{ xs: 0, md: 5 }}>
            {BENEFICIOS.map((beneficio, index) => (
              <Grid key={beneficio.title} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    gap: 1.6,
                    py: 1.8,
                    borderTop: `1px solid ${brand.line}`,
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
                      {beneficio.title}
                    </Typography>
                    <Typography sx={{ mt: 0.35, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.62 }}>
                      {beneficio.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Cómo funcionará"
            title="Cuatro pasos previstos"
            subtitle="Secuencia propuesta, sujeta a la aprobación del reglamento de la JPRD."
          />

          <Grid container spacing={{ xs: 0, md: 5 }}>
            {PASOS_JPRD.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    gap: 1.6,
                    py: 1.8,
                    borderTop: `1px solid ${brand.line}`,
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
                      {paso.title}
                    </Typography>
                    <Typography sx={{ mt: 0.35, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.62 }}>
                      {paso.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
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

      <CtaBand
        title="¿Tu contrato necesita una JPRD?"
        subtitle="Esta página es un borrador. Podemos orientarte sobre la propuesta y su eventual incorporación contractual."
        primaryLabel="Consultar con la Corte"
        primaryTo="/contacto"
        secondaryLabel="Ver registro de adjudicadores"
        secondaryTo="/jprd/adjudicadores"
      />
    </>
  );
}
