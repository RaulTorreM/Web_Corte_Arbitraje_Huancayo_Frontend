import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/common/ScrollToTop";

const HomePage = lazy(() => import("../features/home/HomePage"));
const QuienesSomosPage = lazy(
  () => import("../features/nosotros/QuienesSomosPage")
);
const ConsejoPage = lazy(() => import("../features/nosotros/ConsejoPage"));
const EquipoPage = lazy(() => import("../features/nosotros/EquipoPage"));
const CertificacionesPage = lazy(
  () => import("../features/nosotros/CertificacionesPage")
);
const ArbitrajePage = lazy(
  () => import("../features/arbitraje/ArbitrajePage")
);
const CostosPage = lazy(() => import("../features/arbitraje/CostosPage"));
const ReglamentosPage = lazy(
  () => import("../features/arbitraje/ReglamentosPage")
);
const ArbitrosPage = lazy(
  () => import("../features/arbitraje/ArbitrosPage")
);
const ClausulaPage = lazy(
  () => import("../features/arbitraje/ClausulaPage")
);
const InicioArbitrajePage = lazy(
  () => import("../features/arbitraje/InicioArbitrajePage")
);
const LaudosPage = lazy(() => import("../features/arbitraje/LaudosPage"));
const JprdPage = lazy(() => import("../features/jprd/JprdPage"));
const JprdReglamentoPage = lazy(
  () => import("../features/jprd/JprdReglamentoPage")
);
const AdjudicadoresPage = lazy(
  () => import("../features/jprd/AdjudicadoresPage")
);
const JprdArancelesPage = lazy(
  () => import("../features/jprd/JprdArancelesPage")
);
const JprdClausulaPage = lazy(
  () => import("../features/jprd/JprdClausulaPage")
);
const JprdDecisionesPage = lazy(
  () => import("../features/jprd/JprdDecisionesPage")
);
const DocumentosPage = lazy(
  () => import("../features/documentos/DocumentosPage")
);
const CapacitacionesPage = lazy(
  () => import("../features/capacitaciones/CapacitacionesPage")
);
const ContactoPage = lazy(
  () => import("../features/contacto/ContactoPage")
);
const DenunciasPage = lazy(
  () => import("../features/denuncias/DenunciasPage")
);
const ReclamacionesPage = lazy(
  () => import("../features/reclamaciones/ReclamacionesPage")
);
const NotFoundPage = lazy(
  () => import("../features/not-found/NotFoundPage")
);

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="quienes-somos">
            <Route index element={<QuienesSomosPage />} />
            <Route path="consejo" element={<ConsejoPage />} />
            <Route path="equipo" element={<EquipoPage />} />
            <Route path="certificaciones" element={<CertificacionesPage />} />
          </Route>

          <Route path="arbitraje">
            <Route index element={<ArbitrajePage />} />
            <Route path="costos" element={<CostosPage />} />
            <Route path="reglamentos" element={<ReglamentosPage />} />
            <Route path="arbitros" element={<ArbitrosPage />} />
            <Route path="clausula" element={<ClausulaPage />} />
            <Route path="inicio" element={<InicioArbitrajePage />} />
            <Route path="laudos" element={<LaudosPage />} />
          </Route>

          <Route path="jprd">
            <Route index element={<JprdPage />} />
            <Route path="reglamento" element={<JprdReglamentoPage />} />
            <Route path="adjudicadores" element={<AdjudicadoresPage />} />
            <Route path="aranceles" element={<JprdArancelesPage />} />
            <Route path="clausula" element={<JprdClausulaPage />} />
            <Route path="decisiones" element={<JprdDecisionesPage />} />
          </Route>

          <Route path="documentos" element={<DocumentosPage />} />
          <Route path="capacitaciones" element={<CapacitacionesPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="denuncias" element={<DenunciasPage />} />
          <Route
            path="libro-de-reclamaciones"
            element={<ReclamacionesPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
