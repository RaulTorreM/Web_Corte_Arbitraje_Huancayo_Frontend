import PageMeta from "../../components/common/PageMeta";
import CtaBand from "../../components/common/CtaBand";
import HeroHome from "./sections/HeroHome";
import QueEsSection from "./sections/QueEsSection";
import MecanismosSection from "./sections/MecanismosSection";
import RutaSection from "./sections/RutaSection";
import DocumentosSection from "./sections/DocumentosSection";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Inicio"
        description="La Corte Superior de Arbitraje de Huancayo administra arbitrajes con reglas claras, plazos definidos y tarifas públicas. Conoce cómo iniciar un caso."
      />

      <HeroHome />
      <QueEsSection />
      <MecanismosSection />
      <RutaSection />
      <DocumentosSection />
      <CtaBand />
    </>
  );
}
