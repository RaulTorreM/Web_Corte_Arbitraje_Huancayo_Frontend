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
  portada?: string;
  /** El archivo todavía no está publicado en /public. */
  disponible?: boolean;
};

export const CATEGORIA_LABEL: Record<DocumentoCategoria, string> = {
  institucional: "Institucional",
  arbitraje: "Arbitraje",
  jprd: "JPRD",
  certificacion: "Certificaciones",
};

/**
 * Biblioteca normativa. Los documentos disponibles se publican en PDF. Los
 * apéndices y formatos que aún no tienen archivo fuente se mantienen como
 * pendientes ("Próximamente") hasta que la institución los entregue.
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
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "/documentos/ESTATUTO_CSA_ 5-11-26.pdf",
    portada: "/documentos/portadas/estatuto.webp",
  },
  {
    id: "d-02",
    titulo: "Reglamento de Arbitraje",
    descripcion:
      "Reglas aplicables a los procedimientos administrados por la Corte, desde la solicitud hasta el laudo.",
    categoria: "arbitraje",
    tipo: "Reglamento",
    version: "V1",
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "PDF",
    url: "/documentos/REGLAMENTO_CSA_5-11-26.pdf",
    portada: "/documentos/portadas/reglamento-arbitraje.webp",
  },
  {
    id: "d-03",
    titulo: "Código de Ética",
    descripcion:
      "Principios, deberes de independencia e imparcialidad, régimen de denuncias y sanciones.",
    categoria: "institucional",
    tipo: "Código",
    version: "V2",
    estado: "En revisión",
    fecha: "2026-09-23",
    peso: "PDF",
    url: "/documentos/CÓDIGO DE ÉTICA_CSA_5-11-26.pdf",
    portada: "/documentos/portadas/codigo-etica.webp",
  },
  
];

export const documentosPorCategoria = (
  categoria: DocumentoCategoria
): Documento[] => DOCUMENTOS.filter((d) => d.categoria === categoria);

/**
 * PDF oficial de la Licencia de Funcionamiento de la Cámara de Comercio y
 * Producción de Huancayo. Copia el archivo en:
 * public/documentos/licencia-funcionamiento-camara.pdf
 * La página de Certificaciones lo detecta y lo muestra automáticamente.
 */
export const LICENCIA_FUNCIONAMIENTO_URL =
  "/documentos/licencia-funcionamiento-camara.pdf";

/**
 * Los tres documentos que se publican en /documentos, en el orden pedido por
 * la institución: Reglamento, Estatuto y Código de Ética.
 */
export const DOCUMENTOS_INSTITUCIONALES: Documento[] = [
  "d-02",
  "d-01",
  "d-03",
]
  .map((id) => DOCUMENTOS.find((doc) => doc.id === id))
  .filter((doc): doc is Documento => Boolean(doc));
