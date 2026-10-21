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
        description="Administramos arbitrajes nacionales e internacionales con reglas claras, plazos definidos y árbitros acreditados. Conoce nuestras tarifas y cómo iniciar tu caso."
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
