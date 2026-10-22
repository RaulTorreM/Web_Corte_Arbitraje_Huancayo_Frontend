import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { SITE, PASOS_ARBITRAJE, REQUISITOS } from "../../data/site";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";

const CANALES = [
  {
    icon: LaptopMacOutlinedIcon,
    title: "Sistema de Arbitraje (en implementación)",
    text: "El canal virtual está en implementación. Mientras tanto, presenta tu solicitud por mesa de partes o correo institucional.",
    action: "Consultar disponibilidad",
    href: "/contacto",
    external: false,
  },
  {
    icon: PlaceOutlinedIcon,
    title: "Mesa de partes",
    text: "Atención presencial en la sede institucional, en horario de oficina.",
    action: "Ver dirección",
    href: "/contacto",
    external: false,
  },
  {
    icon: MailOutlinedIcon,
    title: "Correo institucional",
    text: "Para consultas previas o coordinación de la presentación documentaria.",
    action: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
    external: true,
  },
];

const CHECKLIST_RAPIDO = [
  "Convenio arbitral que designa a la Corte.",
  "Identificación de las partes y sus representantes.",
  "Descripción de la controversia y estimación de la cuantía.",
  "Propuesta de designación de árbitro.",
  "Comprobante de pago de S/ 800 o US$ 425.",
];

export default function InicioArbitrajePage() {
  return (
    <>
      <PageMeta
        title="Inicio de arbitraje"
        description="Requisitos, documentos, tasas y plazos para presentar una solicitud de arbitraje ante la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Presenta tu solicitud"
        title="Cómo iniciar un arbitraje"
        subtitle="El arbitraje comienza el día en que la Corte recibe la solicitud. Antes de presentarla, verifica que tu convenio arbitral remite a esta institución y reúne los documentos que exige el artículo 5 del Reglamento."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Inicio de arbitraje" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
          <Button
            href="#guia-requisitos"
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
          >
            Ver guía de requisitos
          </Button>
          <Button component={RouterLink} to="/arbitraje/costos" variant="outlined">
            Calcular el costo
          </Button>
        </Stack>
      </PageHero>

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 7 }}>
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
                Antes de comenzar
              </Typography>

              <Typography variant="h2" sx={{ color: brand.primaryDeep, maxWidth: 620 }}>
                Un proceso ordenado desde el primer documento
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
                La solicitud debe presentarse por escrito con los datos de las
                partes, la controversia, el convenio arbitral, la propuesta de
                designación y el comprobante de pago del derecho de presentación:
                S/ 800 en arbitrajes nacionales o US$ 425 en internacionales. La
                Secretaría califica la solicitud y, si falta información, otorga
                plazo para subsanarla.
              </Typography>

              <Stack sx={{ mt: 3, borderTop: `1px solid ${brand.line}` }}>
                {CHECKLIST_RAPIDO.map((item, index) => (
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
                  to="/contacto"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                >
                  Consultar antes de presentar
                </Button>
                <Button href="#guia-requisitos" variant="outlined">
                  Ver los ocho requisitos
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 2 }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                  Antes de presentar
                </Typography>

                <Stack sx={{ mt: 1.2 }}>
                  <Box sx={{ py: 1.4, borderTop: `1px solid ${brand.line}` }}>
                    <Typography sx={{ color: brand.muted, fontSize: "0.78rem", lineHeight: 1.55 }}>
                      Verifica que el convenio arbitral identifique a la Corte con
                      su nombre completo y que la controversia sea arbitrable.
                    </Typography>
                  </Box>

                  <Box sx={{ py: 1.4, borderTop: `1px solid ${brand.line}` }}>
                    <Typography sx={{ color: brand.muted, fontSize: "0.78rem", lineHeight: 1.55 }}>
                      El sistema virtual está en implementación. La mesa de partes
                      y el correo institucional siguen disponibles.
                    </Typography>
                  </Box>

                  <Box sx={{ py: 1.4, borderTop: `1px solid ${brand.line}` }}>
                    <Typography sx={{ color: brand.muted, fontSize: "0.78rem", lineHeight: 1.55 }}>
                      Los pagos se realizan únicamente por los canales oficiales
                      informados por la Corte. No compartas datos financieros por
                      canales no verificados.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="El recorrido"
            title="El proceso en ocho etapas"
            subtitle="Desde la solicitud hasta el laudo. La respuesta del demandado y la aceptación de los árbitros tienen un plazo de cinco días."
          />

          <Grid container spacing={{ xs: 0, md: 5 }}>
            {PASOS_ARBITRAJE.map((paso, index) => (
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
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                      {paso.title}
                    </Typography>
                    <Typography sx={{ mt: 0.35, color: brand.muted, fontSize: "0.84rem", lineHeight: 1.6 }}>
                      {paso.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        id="guia-requisitos"
        sx={{
          py: { xs: 7, md: 10 },
          backgroundColor: brand.whiteSoft,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              alignItems: { xs: "flex-start", sm: "flex-end" },
              justifyContent: "space-between",
              mb: 4,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  mb: 1.2,
                }}
              >
                Documento de trabajo
              </Typography>

              <Typography variant="h2" sx={{ color: brand.primaryDeep, fontSize: { xs: "1.9rem", md: "2.4rem" } }}>
                Guía de requisitos
              </Typography>

              <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.9rem", maxWidth: 580 }}>
                Revisa la lista antes de presentar tu solicitud. Puedes imprimirla
                o guardarla como PDF desde el navegador.
              </Typography>
            </Box>

            <Button
              onClick={() => window.print()}
              variant="outlined"
              startIcon={<PrintOutlinedIcon sx={{ fontSize: 17 }} />}
              className="no-print"
              sx={{ flexShrink: 0 }}
            >
              Imprimir o guardar como PDF
            </Button>
          </Stack>

          <Box
            sx={{
              backgroundColor: brand.white,
              borderTop: `2px solid ${brand.primary}`,
              px: { xs: 2.5, md: 4 },
              py: { xs: 3, md: 4 },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              sx={{
                justifyContent: "space-between",
                pb: 2,
                borderBottom: `1px solid ${brand.line}`,
              }}
            >
              <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                Corte Superior de Arbitraje de Huancayo
              </Typography>
              <Typography sx={{ color: brand.muted, fontSize: "0.74rem" }}>
                Artículo 5 del Reglamento de Arbitraje
              </Typography>
            </Stack>

            <Stack sx={{ mt: 2 }}>
              {REQUISITOS.map((requisito, index) => (
                <Box
                  key={requisito}
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
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography sx={{ color: brand.ink, fontSize: "0.88rem", lineHeight: 1.62 }}>
                    {requisito}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.82rem" }}>
                  Derecho de presentación
                </Typography>
                <Typography sx={{ mt: 0.4, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.6 }}>
                  S/ 800 en arbitrajes nacionales. US$ 425 en arbitrajes
                  internacionales.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.82rem" }}>
                  Presentación
                </Typography>
                <Typography sx={{ mt: 0.4, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Mesa de partes de la sede institucional o correo
                  institucional. El sistema virtual está en implementación.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Typography sx={{ mt: 2, color: brand.muted, fontSize: "0.74rem", lineHeight: 1.6 }}>
            Esta guía es un resumen operativo. No reemplaza el Reglamento de
            Arbitraje ni la calificación que realiza la Secretaría General.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Canales de atención"
            title="Elige cómo presentar tu solicitud"
            subtitle="El sistema virtual está en implementación. La mesa de partes y el correo institucional siguen disponibles."
          />

          <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
            {CANALES.map((canal) => {
              const Icon = canal.icon;

              return (
                <Grid
                  key={canal.title}
                  container
                  spacing={{ xs: 1, md: 3 }}
                  sx={{
                    py: 2.2,
                    borderBottom: `1px solid ${brand.line}`,
                    alignItems: "center",
                  }}
                >
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                      <Icon sx={{ color: brand.goldDeep, fontSize: 19 }} />
                      <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                        {canal.title}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <Typography sx={{ color: brand.muted, fontSize: "0.83rem", lineHeight: 1.6 }}>
                      {canal.text}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
                      {canal.external ? (
                        <Button
                          href={canal.href}
                          size="small"
                          variant="text"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                          sx={{ px: 0 }}
                        >
                          {canal.action}
                        </Button>
                      ) : (
                        <Button
                          component={RouterLink}
                          to={canal.href}
                          size="small"
                          variant="text"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                          sx={{ px: 0 }}
                        >
                          {canal.action}
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="¿Listo para presentar tu solicitud?"
        subtitle="Solicita una orientación previa con la Secretaría General o revisa la tabla de costos antes de presentar tu solicitud."
        primaryLabel="Solicitar orientación"
        primaryTo="/contacto"
        secondaryLabel="Ver costos"
        secondaryTo="/arbitraje/costos"
      />
    </>
  );
}
