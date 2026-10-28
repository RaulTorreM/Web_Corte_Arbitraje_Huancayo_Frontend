import { Box, Container, Grid } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
// import CtaBand from "../../components/common/CtaBand";
import SectionHeading from "../../components/common/SectionHeading";
import PersonCard from "../../components/common/PersonCard";
import { Stagger } from "../../components/common/Reveal";
import { brand } from "../../theme/brand";
import { EQUIPO } from "../../data/directivos";
import { QUIENES_SUBNAV } from "../../data/navigation";

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
        subtitle="El equipo técnico que conduce la operación diaria de los casos."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Equipo de trabajo" },
        ]}
      />

      <SectionSubnav
        items={QUIENES_SUBNAV}
        ariaLabel="Secciones de Quiénes somos"
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

      {/* <CtaBand
        title="Hablemos de tu controversia"
        subtitle="Nuestro equipo puede orientarte sobre la vía procesal, los plazos y los requisitos para presentar una solicitud."
        primaryLabel="Ir a contacto"
        primaryTo="/contacto"
        secondaryLabel="Conocer el Consejo"
        secondaryTo="/quienes-somos/consejo"
      /> */}
    </>
  );
}
