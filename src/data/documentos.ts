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
    url: "/documentos/estatuto-corte-superior-arbitraje.pdf",
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
    url: "/documentos/reglamento-arbitraje-v1.pdf",
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
    url: "/documentos/codigo-etica-v2.pdf",
    portada: "/documentos/portadas/codigo-etica.webp",
  },
  {
    id: "d-15",
    titulo: "Reglas del Código de Ética",
    descripcion:
      "Apéndice del Estatuto que desarrolla la aplicación, independencia, imparcialidad, deberes y sanciones.",
    categoria: "institucional",
    tipo: "Apéndice",
    version: "1.0",
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "/documentos/reglas-codigo-etica.docx",
    disponible: false,
  },
  {
    id: "d-04",
    titulo: "Reglas del Arbitraje Acelerado",
    descripcion:
      "Apéndice para controversias hasta el límite del rubro D o cuando las partes lo acuerden.",
    categoria: "arbitraje",
    tipo: "Apéndice",
    version: "1.0",
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "/documentos/reglas-arbitraje-acelerado.docx",
    disponible: false,
  },
  {
    id: "d-05",
    titulo: "Reglas del Arbitraje Social",
    descripcion:
      "Trámite simplificado y tarifa fija para conflictos de menor cuantía.",
    categoria: "arbitraje",
    tipo: "Apéndice",
    version: "1.0",
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "/documentos/reglas-arbitraje-social.docx",
    disponible: false,
  },
  {
    id: "d-06",
    titulo: "Reglas del Árbitro de Emergencia",
    descripcion:
      "Procedimiento para medidas cautelares urgentes antes de la constitución del tribunal.",
    categoria: "arbitraje",
    tipo: "Apéndice",
    version: "1.0",
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "/documentos/reglas-arbitro-emergencia.docx",
    disponible: false,
  },
  {
    id: "d-07",
    titulo: "Tabla de Gastos Arbitrales (Anexos 1 al 4)",
    descripcion:
      "Tasa administrativa, honorarios por cuantía, tasas de trámite y aranceles de emergencia.",
    categoria: "arbitraje",
    tipo: "Tarifas",
    version: "1.0",
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "/documentos/tabla-gastos-arbitrales.docx",
    disponible: false,
  },
  {
    id: "d-08",
    titulo: "Cláusula arbitral modelo",
    descripcion:
      "Texto recomendado para incorporar la competencia de la Corte en contratos comerciales.",
    categoria: "arbitraje",
    tipo: "Formato",
    version: "1.0",
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "/documentos/clausula-arbitral-modelo.docx",
    disponible: false,
  },
  {
    id: "d-09",
    titulo: "Formato de solicitud de arbitraje",
    descripcion:
      "Modelo con los requisitos del artículo 5 del Reglamento para presentar una solicitud.",
    categoria: "arbitraje",
    tipo: "Formato",
    version: "1.0",
    estado: "En revisión",
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
    estado: "En revisión",
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
    estado: "En revisión",
    fecha: "2026-09-21",
    peso: "DOCX",
    url: "#",
  },
  {
    id: "d-12",
    titulo: "Reglamento de la JPRD",
    descripcion:
      "Documento en borrador. La JPRD no cuenta aún con reglamento aprobado.",
    categoria: "jprd",
    tipo: "Reglamento",
    version: "Borrador",
    estado: "En aprobación",
    fecha: "2026-10-21",
    peso: "—",
    url: "#",
  },
  {
    id: "d-13",
    titulo: "Propuesta de aranceles de la JPRD",
    descripcion:
      "Estructura tarifaria en borrador, no vigente, sujeta a aprobación del Consejo Superior.",
    categoria: "jprd",
    tipo: "Aranceles",
    version: "Borrador",
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
    version: "Borrador",
    estado: "En aprobación",
    fecha: "2026-10-21",
    peso: "—",
    url: "#",
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
