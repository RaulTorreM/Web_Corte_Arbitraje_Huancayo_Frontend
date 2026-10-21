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

export const DOCUMENTOS: Documento[] = [
  {
    id: "d-01",
    titulo: "Estatuto de la Corte Superior de Arbitraje",
    descripcion:
      "Naturaleza, fines, órganos de gobierno y régimen de adopción de decisiones de la Corte.",
    categoria: "institucional",
    tipo: "Estatuto",
    fecha: "2025-01-15",
    peso: "482 KB",
    url: "#",
  },
  {
    id: "d-02",
    titulo: "Reglamento de organización y funciones",
    descripcion:
      "Competencias del Consejo Directivo, de la Secretaría General y de las áreas de apoyo.",
    categoria: "institucional",
    tipo: "Reglamento",
    fecha: "2025-01-15",
    peso: "356 KB",
    url: "#",
  },
  {
    id: "d-03",
    titulo: "Memoria institucional 2024",
    descripcion:
      "Resultados de gestión, estadísticas de casos y principales decisiones del periodo.",
    categoria: "institucional",
    tipo: "Memoria",
    fecha: "2025-03-30",
    peso: "2.1 MB",
    url: "#",
  },
  {
    id: "d-04",
    titulo: "Licencia de funcionamiento",
    descripcion:
      "Documento que acredita el funcionamiento del centro de arbitraje ante la autoridad competente.",
    categoria: "institucional",
    tipo: "Licencia",
    fecha: "2024-11-08",
    peso: "740 KB",
    url: "#",
  },
  {
    id: "d-05",
    titulo: "Reglamento de arbitraje",
    descripcion:
      "Reglas aplicables a los procedimientos administrados por la Corte, desde la solicitud hasta el laudo.",
    categoria: "arbitraje",
    tipo: "Reglamento",
    fecha: "2025-02-01",
    peso: "1.3 MB",
    url: "#",
  },
  {
    id: "d-06",
    titulo: "Reglamento de aranceles y pagos",
    descripcion:
      "Criterios de cálculo de honorarios arbitrales y gastos administrativos según la cuantía.",
    categoria: "arbitraje",
    tipo: "Reglamento",
    fecha: "2025-02-01",
    peso: "610 KB",
    url: "#",
  },
  {
    id: "d-07",
    titulo: "Código de ética del árbitro",
    descripcion:
      "Deberes de independencia, imparcialidad, confidencialidad y revelación de conflictos de interés.",
    categoria: "arbitraje",
    tipo: "Código",
    fecha: "2025-02-01",
    peso: "398 KB",
    url: "#",
  },
  {
    id: "d-08",
    titulo: "Directiva de inicio de arbitraje",
    descripcion:
      "Requisitos formales, documentación y pasos para presentar una solicitud de arbitraje.",
    categoria: "arbitraje",
    tipo: "Directiva",
    fecha: "2025-04-12",
    peso: "284 KB",
    url: "#",
  },
  {
    id: "d-09",
    titulo: "Cláusula arbitral modelo",
    descripcion:
      "Texto recomendado para incorporar la competencia de la Corte en contratos comerciales.",
    categoria: "arbitraje",
    tipo: "Formato",
    fecha: "2025-04-12",
    peso: "96 KB",
    url: "#",
  },
  {
    id: "d-10",
    titulo: "Reglamento de la JPRD",
    descripcion:
      "Reglas de la Junta de Prevención y Resolución de Disputas para controversias durante la ejecución contractual.",
    categoria: "jprd",
    tipo: "Reglamento",
    fecha: "2025-05-20",
    peso: "980 KB",
    url: "#",
  },
  {
    id: "d-11",
    titulo: "Código de ética de la JPRD",
    descripcion:
      "Estándares de conducta de los adjudicadores y reglas de abstención y confidencialidad.",
    categoria: "jprd",
    tipo: "Código",
    fecha: "2025-05-20",
    peso: "372 KB",
    url: "#",
  },
  {
    id: "d-12",
    titulo: "Tabla de aranceles JPRD",
    descripcion:
      "Honorarios y gastos aplicables a los procedimientos de la Junta de Prevención y Resolución de Disputas.",
    categoria: "jprd",
    tipo: "Aranceles",
    fecha: "2025-05-20",
    peso: "240 KB",
    url: "#",
  },
  {
    id: "d-13",
    titulo: "Cláusula modelo JPRD",
    descripcion:
      "Redacción sugerida para incorporar la intervención de la Junta en contratos de obra y servicios.",
    categoria: "jprd",
    tipo: "Formato",
    fecha: "2025-05-20",
    peso: "88 KB",
    url: "#",
  },
  {
    id: "d-14",
    titulo: "Certificado ISO 9001:2015",
    descripcion:
      "Sistema de gestión de la calidad aplicado a la administración de procedimientos arbitrales.",
    categoria: "certificacion",
    tipo: "Certificación",
    fecha: "2024-09-10",
    peso: "520 KB",
    url: "#",
  },
  {
    id: "d-15",
    titulo: "Certificado ISO 37001:2016",
    descripcion:
      "Sistema de gestión antisoborno que respalda la transparencia de la institución.",
    categoria: "certificacion",
    tipo: "Certificación",
    fecha: "2024-09-10",
    peso: "498 KB",
    url: "#",
  },
  {
    id: "d-16",
    titulo: "Política del sistema integrado de gestión",
    descripcion:
      "Compromisos de calidad, integridad y mejora continua asumidos por la Corte.",
    categoria: "certificacion",
    tipo: "Política",
    fecha: "2024-09-10",
    peso: "210 KB",
    url: "#",
  },
];

export const documentosPorCategoria = (
  categoria: DocumentoCategoria
): Documento[] => DOCUMENTOS.filter((d) => d.categoria === categoria);
