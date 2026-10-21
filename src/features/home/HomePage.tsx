import PageMeta from "../../components/common/PageMeta";
import CtaBand from "../../components/common/CtaBand";
import HeroHome from "./sections/HeroHome";
import ServiciosSection from "./sections/ServiciosSection";
import QueEsSection from "./sections/QueEsSection";
import MateriasSection from "./sections/MateriasSection";
import DocumentosSection from "./sections/DocumentosSection";
import EventosSection from "./sections/EventosSection";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Inicio"
        description="Corte Superior de Arbitraje de Huancayo: administración de arbitrajes y juntas de prevención y resolución de disputas con independencia, transparencia y excelencia técnica."
      />

      <HeroHome />
      <ServiciosSection />
      <QueEsSection />
      <MateriasSection />
      <DocumentosSection />
      <EventosSection />
      <CtaBand />
    </>
  );
}
