import { Box } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import { brand } from "../../theme/brand";
import { CONCILIACION_SUBNAV } from "../../data/navigation";
import { MEDIA } from "../../data/media";

export default function ConciliacionPage() {
  return (
    <>
      <PageMeta
        title="Conciliación"
        description="Conciliación · Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín."
      />

      <PageHero
        kicker="Conciliación"
        title="Conciliación"
        crumbs={[{ label: "Conciliación" }]}
        image={MEDIA.conciliacion}
      />

      <SectionSubnav
        items={CONCILIACION_SUBNAV}
        ariaLabel="Secciones de conciliación"
      />

      <Box
        component="section"
        sx={{
          minHeight: { xs: 260, md: 380 },
          backgroundColor: brand.whiteSoft,
          borderBottom: `1px solid ${brand.line}`,
        }}
      />
    </>
  );
}
