import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import ProfessionalDirectory from "../../components/common/ProfessionalDirectory";
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";
import { ADJUDICADORES } from "../../data/arbitros";
import { MEDIA } from "../../data/media";

export default function AdjudicadoresPage() {
  return (
    <>
      <PageMeta
        title="Registro de adjudicadores (borrador)"
        description="Registro de Adjudicadores para Juntas de Prevención y Resolución de Disputas de la Corte Superior de Arbitraje de Huancayo. Página en borrador."
      />

      <PageHero
        kicker="Registro en conformación"
        title="Registro de adjudicadores"
        subtitle="El Estatuto incorpora la figura del adjudicador y el Registro correspondiente. La JPRD está en borrador, por lo que la nómina es referencial y no existe aún un procedimiento aprobado para administrar juntas."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Registro de adjudicadores" },
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
          <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-end" }}>
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
                startIcon={<DownloadOutlinedIcon sx={{ fontSize: 17 }} />}
                sx={{ width: { xs: "100%", sm: "fit-content" }, ml: { md: "auto" }, display: "flex" }}
              >
                Requisitos de postulación
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4, md: 5 } }}>
            <ProfessionalDirectory
              profesionales={ADJUDICADORES}
              searchPlaceholder="Buscar por nombre o especialidad"
            />
          </Box>

          <Stack
            direction="row"
            spacing={1.4}
            sx={{
              mt: 4,
              py: 2.2,
              alignItems: "flex-start",
              // borderTop: `1px solid ${brand.line}`,
              // borderBottom: `1px solid ${brand.line}`,
            }}
          >
            {/* <Box sx={{ width: 5, height: 5, backgroundColor: brand.goldDeep, mt: "8px", flexShrink: 0 }} />
            <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
              <Box component="strong" sx={{ color: brand.primaryDeep }}>
                Registro de Adjudicadores:
              </Box>{" "}
              la inscripción tendrá vigencia de tres años y deberá renovarse. La
              postulación o renovación nacional cuesta S/ 850 por año; la
              internacional, US$ 425. La nómina de esta página es referencial y no
              reemplaza el Registro oficial.
            </Typography> */}
          </Stack>

          <Grid container spacing={{ xs: 3, md: 5 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                  Junta unipersonal o colegiada
                </Typography>
                <Typography sx={{ mt: 0.6, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.65 }}>
                  Las partes pueden optar por un adjudicador único o por una Junta
                  integrada por tres miembros, según la complejidad del contrato y
                  lo acordado en la cláusula.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                  Deber de revelación
                </Typography>
                <Typography sx={{ mt: 0.6, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.65 }}>
                  Antes de aceptar el cargo, el adjudicador debe informar cualquier
                  circunstancia que pueda afectar su independencia o imparcialidad.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaBand
        title="¿Quieres postular al Registro?"
        subtitle="Esta página es un borrador. Podemos registrar tu interés y orientarte sobre los requisitos previstos."
        primaryLabel="Registrar mi interés"
        primaryTo="/contacto"
        secondaryLabel="Ver cláusula modelo"
        secondaryTo="/jprd/clausula"
      />
    </>
  );
}
