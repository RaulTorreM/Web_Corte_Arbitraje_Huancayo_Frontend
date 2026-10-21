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
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { ADJUDICADORES } from "../../data/arbitros";

export default function AdjudicadoresPage() {
  const presidentes = ADJUDICADORES.filter((a) => a.rol === "presidente").length;
  const profesiones = new Set(ADJUDICADORES.map((a) => a.profesion)).size;

  const resumen = [
    { value: ADJUDICADORES.length, label: "Adjudicadores en la nómina de muestra" },
    { value: presidentes, label: "Habilitados como presidentes" },
    { value: 3, label: "Años de vigencia del Registro" },
    { value: profesiones, label: "Profesiones representadas" },
  ];

  return (
    <>
      <PageMeta
        title="Registro de adjudicadores (en implementación)"
        description="Registro de Adjudicadores para Juntas de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo. Servicio en implementación."
      />

      <PageHero
        kicker="Registro en conformación"
        title="Registro de adjudicadores"
        subtitle="El Estatuto incorpora la figura del adjudicador y el Registro correspondiente. La JPRD se encuentra en implementación, por lo que la nómina es referencial y no existe aún un procedimiento aprobado para administrar juntas."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Registro de adjudicadores" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice
        title="Registro en conformación"
        text="La JPRD no cuenta con reglamento aprobado. Los perfiles de esta página son datos de demostración y no deben presentarse como una nómina oficial ni como adjudicadores disponibles para designación."
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-end" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <SectionHeading
                kicker="Directorio referencial"
                title="Experiencia técnica y legal para la ejecución"
                subtitle="Nómina de demostración con profesionales de contratación pública, ingeniería, construcción y solución de controversias. No reemplaza el Registro oficial."
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
            profesionales={ADJUDICADORES}
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
              <strong>Registro de Adjudicadores:</strong> la inscripción tendrá
              vigencia de tres años y deberá renovarse. La postulación o
              renovación nacional cuesta S/ 850 por año; la internacional, US$ 425.
              La nómina de esta página es referencial y no reemplaza el Registro
              oficial.
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
                    Junta unipersonal o colegiada
                  </Typography>
                  <Typography sx={{ color: brand.muted, fontSize: "0.82rem", mt: 0.5, lineHeight: 1.65 }}>
                    Las partes pueden optar por un adjudicador único o por una
                    Junta integrada por tres miembros, según la complejidad del
                    contrato y lo acordado en la cláusula.
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
                    Deber de revelación
                  </Typography>
                  <Typography sx={{ color: brand.muted, fontSize: "0.82rem", mt: 0.5, lineHeight: 1.65 }}>
                    Antes de aceptar el cargo, el adjudicador debe informar
                    cualquier circunstancia que pueda afectar su independencia o
                    imparcialidad.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="¿Quieres postular al Registro?"
        subtitle="La JPRD se encuentra en implementación. Podemos registrar tu interés y orientarte sobre los requisitos previstos."
        primaryLabel="Registrar mi interés"
        primaryTo="/contacto"
        secondaryLabel="Ver cláusula preliminar"
        secondaryTo="/jprd/clausula"
      />
    </>
  );
}
