import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import ProfessionalDirectory from "../../components/common/ProfessionalDirectory";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { ARBITROS } from "../../data/arbitros";

export default function ArbitrosPage() {
  const presidentes = ARBITROS.filter((a) => a.rol === "presidente").length;
  const profesiones = new Set(ARBITROS.map((a) => a.profesion)).size;

  const resumen = [
    { value: ARBITROS.length, label: "Árbitros en la nómina de muestra" },
    { value: presidentes, label: "Habilitados como presidentes" },
    { value: 3, label: "Años de vigencia del Registro" },
    { value: profesiones, label: "Profesiones representadas" },
  ];

  return (
    <>
      <PageMeta
        title="Registro de árbitros"
        description="Registro de Árbitros de la Corte Superior de Arbitraje de Huancayo: requisitos, designación, vigencia y nómina referencial."
      />

      <PageHero
        kicker="Registro institucional"
        title="Árbitros acreditados, selección predecible"
        subtitle="El Registro de Árbitros tiene vigencia de tres años. La inscripción no equivale a una designación en un caso concreto: las partes pueden designar de común acuerdo y, a falta de acuerdo, la Corte aplica el procedimiento del Reglamento."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Registro de árbitros" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-end" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <SectionHeading
                kicker="Directorio institucional"
                title="Especialistas para cada controversia"
                subtitle="Nómina de demostración, organizada por profesión y especialidad. La designación se realiza conforme al Reglamento de Arbitraje y al Código de Ética."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Button
                component={RouterLink}
                to="/documentos"
                variant="outlined"
                startIcon={<DownloadOutlinedIcon />}
                sx={{ width: { xs: "100%", sm: "fit-content" }, float: { md: "right" } }}
              >
                Requisitos de postulación
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={0} sx={{ mt: { xs: 4, md: 5 }, mb: { xs: 4, md: 5 } }}>
            {resumen.map((item) => (
              <Grid key={item.label} size={{ xs: 6, md: 3 }}>
                <Box
                  sx={{
                    height: "100%",
                    px: 2.5,
                    py: 2.2,
                    backgroundColor: brand.paper,
                    border: `1px solid ${brand.line}`,
                    borderLeft: `3px solid ${brand.gold}`,
                    mr: { xs: -0.2, md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: { xs: "1.8rem", md: "2.1rem" },
                      fontWeight: 600,
                      color: brand.primaryDark,
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.9,
                      color: brand.muted,
                      fontSize: "0.7rem",
                      fontWeight: 650,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      lineHeight: 1.45,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <ProfessionalDirectory
            profesionales={ARBITROS}
            searchPlaceholder="Buscar por nombre o especialidad"
          />

          <Stack
            direction="row"
            spacing={1.4}
            sx={{
              mt: 4,
              p: 2.2,
              alignItems: "flex-start",
              backgroundColor: brand.skySoft,
              border: `1px solid ${brand.skyMid}`,
              borderLeft: `3px solid ${brand.gold}`,
            }}
          >
            <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.1rem", mt: "1px" }} />
            <Typography sx={{ color: brand.primary, fontSize: "0.82rem", lineHeight: 1.65 }}>
              <strong>Registro de Árbitros:</strong> la inscripción tiene vigencia
              de tres años y debe renovarse. La postulación o renovación nacional
              cuesta S/ 850 por año; la internacional, US$ 425. La nómina de esta
              página es referencial y no reemplaza el Registro oficial.
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ mt: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction="row"
                spacing={1.8}
                sx={{ p: 2.5, height: "100%", backgroundColor: brand.white, border: `1px solid ${brand.line}` }}
              >
                <GroupsOutlinedIcon sx={{ color: brand.goldDeep, mt: "2px" }} />
                <Box>
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.88rem" }}>
                    Designación de árbitros
                  </Typography>
                  <Typography sx={{ color: brand.muted, fontSize: "0.82rem", mt: 0.5, lineHeight: 1.65 }}>
                    Las partes pueden designar de común acuerdo al árbitro único
                    o a los integrantes del tribunal. A falta de acuerdo, la Corte
                    realiza la designación conforme al Reglamento. La solicitud de
                    designación tiene una tasa de S/ 800.
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction="row"
                spacing={1.8}
                sx={{ p: 2.5, height: "100%", backgroundColor: brand.white, border: `1px solid ${brand.line}` }}
              >
                <VerifiedOutlinedIcon sx={{ color: brand.goldDeep, mt: "2px" }} />
                <Box>
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.88rem" }}>
                    Idoneidad y ética
                  </Typography>
                  <Typography sx={{ color: brand.muted, fontSize: "0.82rem", mt: 0.5, lineHeight: 1.65 }}>
                    Todos los profesionales se someten al Código de Ética y al
                    deber de revelación de conflictos de interés. La recusación se
                    traslada por cinco días y se resuelve en un plazo de diez días
                    hábiles.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="¿Necesitas designar un árbitro?"
        subtitle="Revisa el reglamento y los requisitos para la designación, o consulta con la Secretaría General."
        primaryLabel="Cómo iniciar un arbitraje"
        primaryTo="/arbitraje/inicio"
        secondaryLabel="Ver reglamento"
        secondaryTo="/arbitraje/reglamentos"
      />
    </>
  );
}
