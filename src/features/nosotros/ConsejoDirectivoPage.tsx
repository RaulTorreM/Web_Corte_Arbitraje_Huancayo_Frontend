import { Box, Container, Grid, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import PersonCard from "../../components/common/PersonCard";
// import CtaBand from "../../components/common/CtaBand";
import { Stagger } from "../../components/common/Reveal";
import { brand, fonts } from "../../theme/brand";
import { CONSEJO_DIRECTIVO } from "../../data/consejoDirectivo";
import { QUIENES_SUBNAV } from "../../data/navigation";
import { MEDIA } from "../../data/media";

export default function ConsejoDirectivoPage() {
  return (
    <>
      <PageMeta
        title="Consejo Directivo"
        description="Composición del Consejo Directivo de la Cámara de Comercio de Huancayo, órgano de gobierno de la institución."
      />

      <PageHero
        kicker="Organización institucional"
        title="Consejo Directivo"
        subtitle="Órgano de gobierno de la Cámara de Comercio de Huancayo."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Consejo Directivo" },
        ]}
        image={MEDIA.consejoDirectivo}
      />

      <SectionSubnav
        items={QUIENES_SUBNAV}
        ariaLabel="Secciones de Quiénes somos"
      />

      <Box
        component="section"
        sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}
      >
        <Container>
          <Box
            sx={{
              mb: { xs: 4, md: 5 },
              pt: { xs: 2, md: 2.5 },
              borderTop: `1px solid ${brand.lineStrong}`,
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: brand.primaryDeep,
                fontFamily: fonts.display,
                fontWeight: 600,
                fontSize: { xs: "2rem", md: "clamp(2.2rem, 3vw, 2.8rem)" },
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
                maxWidth: 760,
              }}
            >
              Quienes conducen la Cámara
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 620,
                color: brand.muted,
                fontSize: "0.95rem",
                lineHeight: 1.72,
                textWrap: "pretty",
              }}
            >
              Conoce a los miembros del Consejo Directivo de la Cámara de
              Comercio de Huancayo.
            </Typography>
          </Box>

          <Stagger>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {CONSEJO_DIRECTIVO.map((directivo, index) => (
                <Grid key={directivo.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <PersonCard
                    persona={{
                      nombre: directivo.nombre,
                      cargo: directivo.cargo,
                      bio: "",
                      foto: directivo.foto,
                      destacado: index === 0,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      {/* <CtaBand
        title="Conoce también el Consejo Superior de Arbitraje"
        subtitle="El Consejo Superior es la máxima autoridad institucional de gobierno administrativo de la Corte."
        primaryLabel="Ver Consejo Superior"
        primaryTo="/quienes-somos/consejo"
        secondaryLabel="Contactar a la Cámara"
        secondaryTo="/contacto"
      /> */}
    </>
  );
}
