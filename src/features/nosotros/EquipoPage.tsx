import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import PersonCard from "../../components/common/PersonCard";
import { Stagger } from "../../components/common/Reveal";
import { brand, fonts } from "../../theme/brand";
import { EQUIPO } from "../../data/directivos";
import { MEDIA } from "../../data/media";

const PROCESOS = [
  {
    title: "Recepción y calificación",
    text: "Revisamos la solicitud, verificamos la cláusula arbitral y confirmamos el cumplimiento de los requisitos formales.",
  },
  {
    title: "Administración del expediente",
    text: "Gestionamos notificaciones, plazos, audiencias y el flujo documentario con trazabilidad permanente.",
  },
  {
    title: "Atención y seguimiento",
    text: "Orientamos a las partes y a los profesionales sobre el estado del procedimiento y los siguientes pasos.",
  },
];

// const FUNCIONES_ORGANOS = [
//   {
//     title: "Secretaría General",
//     text: "Recibe y califica las solicitudes de arbitraje y de árbitro de emergencia; liquida los gastos y gestiona los cobros; emite constancias y certificaciones; supervisa los casos y elabora el Plan Operativo, el presupuesto y los reportes estadísticos trimestrales.",
//   },
//   {
//     title: "Secretaría del Consejo",
//     text: "Convoca las sesiones del Consejo y de las Comisiones, lleva el Registro de Actas, verifica el cumplimiento de las decisiones y puede actuar como secretario arbitral en casos complejos por encargo expreso.",
//   },
//   {
//     title: "Secretarios arbitrales",
//     text: "Asisten a los árbitros, elaboran proyectos de órdenes procesales y actas de audiencia, notifican las decisiones y emiten razones de secretaría, con deber de confidencialidad.",
//   },
// ];

// const REQUISITOS_EQUIPO = [
//   "Secretario General: abogado con conocimientos y experiencia en mecanismos alternativos de solución de controversias.",
//   "Secretario del Consejo: formación en derecho y experiencia en mecanismos alternativos de solución de controversias.",
//   "Secretarios arbitrales: abogados con al menos un año de experiencia en arbitraje y 120 horas de capacitación universitaria en arbitraje y contratación pública.",
// ];

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
        image={MEDIA.equipo}
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Secretaría y áreas de apoyo"
            title="Profesionales al servicio de la institución"
            subtitle="La Secretaría General conduce la operación diaria; la Secretaría del Consejo coordina las sesiones y verifica el cumplimiento de sus decisiones."
          />

          <Stagger>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {EQUIPO.map((persona) => (
                <Grid key={persona.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <PersonCard persona={persona} />
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      {/* <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Funciones por órgano"
            title="Quién hace qué"
            subtitle="El Estatuto distribuye las tareas entre la Secretaría General, la Secretaría del Consejo y los secretarios arbitrales."
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {FUNCIONES_ORGANOS.map((organo) => (
              <Grid key={organo.title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ height: "100%", pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                  <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                    {organo.title}
                  </Typography>
                  <Typography sx={{ mt: 0.7, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.65 }}>
                    {organo.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, pt: 2.2, borderTop: `1px solid ${brand.line}` }}>
            <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem", mb: 1.2 }}>
              Requisitos y deberes
            </Typography>

            <Stack spacing={0.9}>
              {REQUISITOS_EQUIPO.map((requisito) => (
                <Typography
                  key={requisito}
                  sx={{
                    py: 0.9,
                    borderTop: `1px solid ${brand.line}`,
                    color: brand.muted,
                    fontSize: "0.81rem",
                    lineHeight: 1.6,
                  }}
                >
                  {requisito}
                </Typography>
              ))}
            </Stack>

            <Typography sx={{ mt: 1.8, color: brand.muted, fontSize: "0.78rem", lineHeight: 1.65 }}>
              El personal de las secretarías no puede intervenir como representante,
              perito, asesor, abogado ni árbitro en los casos del Centro mientras se
              encuentre en ejercicio del cargo.
            </Typography>
          </Box>
        </Container>
      </Box> */}

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Cómo trabajamos"
            title="Acompañamiento en cada etapa"
            subtitle="El proceso interno está diseñado para que las partes sepan qué esperar y cuándo."
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {PROCESOS.map((proceso, index) => (
              <Grid key={proceso.title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ pt: 2, borderTop: `1px solid ${brand.lineStrong}`, height: "100%" }}>
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "1.15rem",
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Typography variant="h4" sx={{ mt: 1.5, color: brand.primaryDeep, fontSize: "1.05rem" }}>
                    {proceso.title}
                  </Typography>

                  <Typography sx={{ mt: 0.8, color: brand.muted, fontSize: "0.86rem", lineHeight: 1.65 }}>
                    {proceso.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mt: 5,
              py: 2.2,
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              borderTop: `1px solid ${brand.line}`,
              borderBottom: `1px solid ${brand.line}`,
            }}
          >
            <Box>
              <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                ¿Necesitas orientación sobre tu caso?
              </Typography>
              <Typography sx={{ color: brand.muted, fontSize: "0.84rem", mt: 0.4 }}>
                La Secretaría General atiende consultas de lunes a viernes en horario de oficina.
              </Typography>
            </Box>

            <Typography sx={{ color: brand.goldDeep, fontSize: "0.84rem", fontWeight: 700 }}>
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
