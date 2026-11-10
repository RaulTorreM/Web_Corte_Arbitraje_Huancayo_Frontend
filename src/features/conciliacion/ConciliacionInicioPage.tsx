import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import ConstructionNotice from "../../components/common/ConstructionNotice";
import { CONCILIACION_SUBNAV } from "../../data/navigation";
import { MEDIA } from "../../data/media";

export default function ConciliacionInicioPage() {
  return (
    <>
      <PageMeta
        title="Inicio de conciliación"
        description="Inicio de conciliación · Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín."
      />

      <PageHero
        kicker="Conciliación"
        title="Inicio de conciliación"
        crumbs={[
          { label: "Conciliación", to: "/conciliacion" },
          { label: "Inicio" },
        ]}
        image={MEDIA.conciliacion}
      />

      <SectionSubnav
        items={CONCILIACION_SUBNAV}
        ariaLabel="Secciones de conciliación"
      />

      <ConstructionNotice />
    </>
  );
}
