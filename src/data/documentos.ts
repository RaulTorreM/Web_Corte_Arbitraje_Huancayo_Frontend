export type DocumentoCategoria =
  | "institucional"
  | "arbitraje"
  | "jprd"
  | "certificacion";

export type Documento = {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: DocumentoCategoria;
  tipo: string;
  version?: string;
  estado?: "Vigente" | "En aprobación" | "En revisión";
  fecha: string;
  peso: string;
  url: string;
};

export const CATEGORIA_LABEL: Record<DocumentoCategoria, string> = {
  institucional: "Institucional",
  arbitraje: "Arbitraje",
  jprd: "JPRD",
  certificacion: "Certificaciones",
};

/**
 * Biblioteca normativa. Las URLs se mantienen en "#" mientras la
 * institución no entregue los PDFs definitivos. No inventar enlaces.
 */
export const DOCUMENTOS: Documento[] = [
  {
    id: "d-01",
    titulo: "Estatuto de la Corte Superior de Arbitraje",
    descripcion:
      "Naturaleza, finalidad, órganos de gobierno, comisiones y régimen de adopción de decisiones.",
    categoria: "institucional",
    tipo: "Estatuto",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "#",
  },
  {
    id: "d-02",
    titulo: "Reglamento de Arbitraje",
    descripcion:
      "Reglas aplicables a los procedimientos administrados por la Corte, desde la solicitud hasta el laudo.",
    categoria: "arbitraje",
    tipo: "Reglamento",
    version: "V1",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "#",
  },
  {
    id: "d-03",
    titulo: "Código de Ética",
    descripcion:
      "Principios, deberes de independencia e imparcialidad, régimen de denuncias y sanciones.",
    categoria: "institucional",
    tipo: "Código",
    version: "V2",
    estado: "Vigente",
    fecha: "2026-09-23",
    peso: "PDF",
    url: "#",
  },
  {
    id: "d-04",
    titulo: "Reglas del Arbitraje Acelerado",
    descripcion:
      "Apéndice para controversias hasta el límite del rubro D o cuando las partes lo acuerden.",
    categoria: "arbitraje",
    tipo: "Apéndice",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "#",
  },
  {
    id: "d-05",
    titulo: "Reglas del Arbitraje Social",
    descripcion:
      "Trámite simplificado y tarifa fija para conflictos de menor cuantía.",
    categoria: "arbitraje",
    tipo: "Apéndice",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "#",
  },
  {
    id: "d-06",
    titulo: "Reglas del Árbitro de Emergencia",
    descripcion:
      "Procedimiento para medidas cautelares urgentes antes de la constitución del tribunal.",
    categoria: "arbitraje",
    tipo: "Apéndice",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "#",
  },
  {
    id: "d-07",
    titulo: "Tabla de Gastos Arbitrales (Anexos 1 al 4)",
    descripcion:
      "Tasa administrativa, honorarios por cuantía, tasas de trámite y aranceles de emergencia.",
    categoria: "arbitraje",
    tipo: "Tarifas",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "#",
  },
  {
    id: "d-08",
    titulo: "Cláusula arbitral modelo",
    descripcion:
      "Texto recomendado para incorporar la competencia de la Corte en contratos comerciales.",
    categoria: "arbitraje",
    tipo: "Formato",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "#",
  },
  {
    id: "d-09",
    titulo: "Formato de solicitud de arbitraje",
    descripcion:
      "Modelo con los requisitos del artículo 5 del Reglamento para presentar una solicitud.",
    categoria: "arbitraje",
    tipo: "Formato",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "#",
  },
  {
    id: "d-10",
    titulo: "Declaración de independencia e imparcialidad",
    descripcion:
      "Formato que suscribe el árbitro al aceptar el cargo y durante el procedimiento.",
    categoria: "arbitraje",
    tipo: "Formato",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "#",
  },
  {
    id: "d-11",
    titulo: "Postulación al Registro de Árbitros",
    descripcion:
      "Requisitos y formato para postular o renovar la inscripción en el Registro.",
    categoria: "arbitraje",
    tipo: "Formato",
    version: "1.0",
    estado: "Vigente",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "#",
  },
  {
    id: "d-12",
    titulo: "Reglamento de la JPRD",
    descripcion:
      "Documento preliminar. La JPRD se encuentra en implementación y no cuenta aún con reglamento aprobado.",
    categoria: "jprd",
    tipo: "Reglamento",
    version: "Preliminar",
    estado: "En aprobación",
    fecha: "2026-10-21",
    peso: "—",
    url: "#",
  },
  {
    id: "d-13",
    titulo: "Propuesta de aranceles de la JPRD",
    descripcion:
      "Estructura tarifaria preliminar, no vigente, sujeta a aprobación del Consejo Superior.",
    categoria: "jprd",
    tipo: "Aranceles",
    version: "Preliminar",
    estado: "En aprobación",
    fecha: "2026-10-21",
    peso: "—",
    url: "#",
  },
  {
    id: "d-14",
    titulo: "Cláusula modelo JPRD",
    descripcion:
      "Propuesta de redacción para incorporar una Junta de Prevención y Resolución de Disputas.",
    categoria: "jprd",
    tipo: "Formato",
    version: "Preliminar",
    estado: "En aprobación",
    fecha: "2026-10-21",
    peso: "—",
    url: "#",
  },
];

export const documentosPorCategoria = (
  categoria: DocumentoCategoria
): Documento[] => DOCUMENTOS.filter((d) => d.categoria === categoria);
