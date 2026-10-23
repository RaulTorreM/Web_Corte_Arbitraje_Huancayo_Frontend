import PageMeta from "../../components/common/PageMeta";
import HeroHome from "./sections/HeroHome";
import ServiciosHome from "./sections/ServiciosHome";
import QuienesHome from "./sections/QuienesHome";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Inicio"
        description="La Corte Superior de Arbitraje de Huancayo administra arbitrajes con reglas claras, plazos definidos y tarifas públicas. Conoce cómo iniciar un caso."
      />

      <HeroHome />
      <ServiciosHome />
      <QuienesHome />
    </>
  );
}
