import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import ProfessionalDirectory from "../../components/common/ProfessionalDirectory";
import CtaBand from "../../components/common/CtaBand";
import { brand } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { ARBITROS } from "../../data/arbitros";

export default function ArbitrosPage() {
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
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-end" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <SectionHeading
                kicker="Directorio institucional"
                title="Especialistas para cada controversia"
                subtitle="Nómina referencial, organizada por profesión y especialidad. La designación se realiza conforme al Reglamento de Arbitraje y al Código de Ética."
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
              profesionales={ARBITROS}
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
              borderTop: `1px solid ${brand.line}`,
              borderBottom: `1px solid ${brand.line}`,
            }}
          >
            <Box sx={{ width: 5, height: 5, backgroundColor: brand.goldDeep, mt: "8px", flexShrink: 0 }} />
            <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
              <Box component="strong" sx={{ color: brand.primaryDeep }}>
                Registro de Árbitros:
              </Box>{" "}
              la inscripción tiene vigencia de tres años y debe renovarse. La
              postulación o renovación nacional cuesta S/ 850 por año; la
              internacional, US$ 425. La nómina de esta página es referencial y no
              reemplaza el Registro oficial.
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 3, md: 5 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                  Designación de árbitros
                </Typography>
                <Typography sx={{ mt: 0.6, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.65 }}>
                  Las partes pueden designar de común acuerdo al árbitro único o a
                  los integrantes del tribunal. A falta de acuerdo, la Corte realiza
                  la designación conforme al Reglamento. La solicitud de designación
                  tiene una tasa de S/ 800.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ pt: 2, borderTop: `1px solid ${brand.lineStrong}` }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                  Idoneidad y ética
                </Typography>
                <Typography sx={{ mt: 0.6, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.65 }}>
                  Todos los profesionales se someten al Código de Ética y al deber
                  de revelación de conflictos de interés. La recusación se traslada
                  por cinco días y se resuelve en un plazo de diez días hábiles.
                </Typography>
              </Box>
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
