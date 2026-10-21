import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import PersonCard from "../../components/common/PersonCard";
import { Stagger } from "../../components/common/Reveal";
import { fadeUp, viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { EQUIPO } from "../../data/directivos";

const PROCESOS = [
  {
    icon: InboxOutlinedIcon,
    title: "Recepción y calificación",
    text: "Revisamos la solicitud, verificamos la cláusula arbitral y confirmamos el cumplimiento de los requisitos formales.",
  },
  {
    icon: FolderOpenOutlinedIcon,
    title: "Administración del expediente",
    text: "Gestionamos notificaciones, plazos, audiencias y el flujo documentario con trazabilidad permanente.",
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: "Atención y seguimiento",
    text: "Orientamos a las partes y a los profesionales sobre el estado del procedimiento y los siguientes pasos.",
  },
];

export default function EquipoPage() {
  return (
    <>
      <PageMeta
        title="Equipo de trabajo"
        description="Secretaría General, Secretaría del Consejo y secretarios arbitrales: quiénes conducen la operación diaria de los casos."
      />

      <PageHero
        kicker="Nuestro equipo"
        title="El equipo que hace funcionar el arbitraje"
        subtitle="Detrás de cada expediente hay un equipo técnico que recibe la solicitud, liquida los gastos, controla los plazos y notifica las decisiones. No resuelve la controversia: asegura que el proceso avance conforme al reglamento."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Equipo de trabajo" },
        ]}
        image="/images/ARBITRAJE_IMG_04.png"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 11 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Secretaría y áreas de apoyo"
            title="Profesionales al servicio de la institución"
            subtitle="La Secretaría General conduce la operación diaria; la Secretaría del Consejo coordina las sesiones y verifica el cumplimiento de sus decisiones."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {EQUIPO.map((persona) => (
                <Grid key={persona.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <PersonCard persona={persona} />
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
          backgroundColor: brand.skySoft,
          borderTop: `1px solid ${brand.skyMid}`,
          borderBottom: `1px solid ${brand.skyMid}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Cómo trabajamos"
            title="Acompañamiento en cada etapa"
            subtitle="Nuestro proceso interno está diseñado para que las partes sepan qué esperar y cuándo."
            centered
          />

          <Stagger>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {PROCESOS.map((proceso, index) => {
                const Icon = proceso.icon;

                return (
                  <Grid key={proceso.title} size={{ xs: 12, md: 4 }}>
                    <Stack
                      component={motion.article}
                      variants={fadeUp}
                      sx={{
                        height: "100%",
                        p: { xs: 3, md: 3.5 },
                        backgroundColor: brand.white,
                        border: `1px solid ${brand.skyMid}`,
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 34px rgba(18,35,61,0.10)",
                        },
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center", justifyContent: "space-between", mb: 2.5 }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: brand.primaryDark,
                            color: brand.goldSoft,
                          }}
                        >
                          <Icon />
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: '"Fraunces", Georgia, serif',
                            fontSize: "1.35rem",
                            color: brand.skyMid,
                            fontWeight: 600,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </Typography>
                      </Stack>

                      <Typography variant="h4" sx={{ color: brand.primaryDark, fontSize: "1.1rem" }}>
                        {proceso.title}
                      </Typography>

                      <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.88rem", lineHeight: 1.72 }}>
                        {proceso.text}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Stagger>

          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mt: 5,
              p: { xs: 2.5, md: 3 },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              backgroundColor: brand.white,
              border: `1px solid ${brand.line}`,
              borderLeft: `4px solid ${brand.gold}`,
            }}
          >
            <Box>
              <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.95rem" }}>
                ¿Necesitas orientación sobre tu caso?
              </Typography>
              <Typography sx={{ color: brand.muted, fontSize: "0.86rem", mt: 0.5 }}>
                La Secretaría General atiende consultas de lunes a viernes en horario de oficina.
              </Typography>
            </Box>

            <Typography
              sx={{
                color: brand.primary,
                fontSize: "0.88rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Av. Giráldez N.° 634, Huancayo
            </Typography>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="Hablemos de tu controversia"
        subtitle="Nuestro equipo puede orientarte sobre la vía procesal, los plazos y los requisitos para presentar una solicitud."
        primaryLabel="Ir a contacto"
        primaryTo="/contacto"
        secondaryLabel="Conocer el Consejo"
        secondaryTo="/quienes-somos/consejo"
      />
    </>
  );
}
