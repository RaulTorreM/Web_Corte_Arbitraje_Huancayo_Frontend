export type Evento = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  lugar: string;
  modalidad: "Presencial" | "Virtual" | "Híbrido";
  imagen: string;
  estado: "proximo" | "realizado";
  cupos?: string;
};

export const EVENTOS: Evento[] = [
  {
    id: "ev-01",
    titulo: "Seminario de actualización en arbitraje de contrataciones públicas",
    descripcion:
      "Análisis de las últimas resoluciones y criterios del Tribunal de Contrataciones del Estado aplicables al arbitraje.",
    fecha: "2026-11-12",
    hora: "5:00 p. m. – 8:00 p. m.",
    lugar: "Auditorio de la Cámara de Comercio de Huancayo",
    modalidad: "Híbrido",
    imagen: "/images/ARBITRAJE_IMG_02-04.jpg",
    estado: "proximo",
    cupos: "80 cupos",
  },
  {
    id: "ev-02",
    titulo: "Taller práctico: cómo redactar una cláusula arbitral eficaz",
    descripcion:
      "Ejercicios guiados para incorporar correctamente la cláusula arbitral y evitar nulidades o vacíos de competencia.",
    fecha: "2026-11-26",
    hora: "6:00 p. m. – 7:30 p. m.",
    lugar: "Plataforma virtual de la Corte",
    modalidad: "Virtual",
    imagen: "/images/ARBITRAJE_IMG_04.png",
    estado: "proximo",
    cupos: "150 cupos",
  },
  {
    id: "ev-03",
    titulo: "Jornada sobre juntas de prevención y resolución de disputas",
    descripcion:
      "Buenas prácticas de la JPRD en obras públicas, con casos reales de prevención y resolución temprana de conflictos.",
    fecha: "2026-12-10",
    hora: "9:00 a. m. – 1:00 p. m.",
    lugar: "Sede institucional, Av. Giráldez 634",
    modalidad: "Presencial",
    imagen: "/images/ARBITRAJE_IMG_02-03.jpg",
    estado: "proximo",
    cupos: "60 cupos",
  },
  {
    id: "ev-04",
    titulo: "Conversatorio: ética e independencia en el arbitraje",
    descripcion:
      "Panel con especialistas sobre conflictos de interés, deber de revelación y confianza en el sistema arbitral.",
    fecha: "2026-09-18",
    hora: "6:30 p. m. – 8:00 p. m.",
    lugar: "Auditorio de la Cámara de Comercio de Huancayo",
    modalidad: "Híbrido",
    imagen: "/images/ARBITRAJE_IMG_02-04.jpg",
    estado: "realizado",
  },
  {
    id: "ev-05",
    titulo: "Capacitación en contratación pública para empresas locales",
    descripcion:
      "Programa introductorio sobre elaboración de propuestas, ejecución contractual y mecanismos de solución de controversias.",
    fecha: "2026-07-04",
    hora: "4:00 p. m. – 7:00 p. m.",
    lugar: "Cámara de Comercio de Huancayo",
    modalidad: "Presencial",
    imagen: "/images/ARBITRAJE_IMG_02-04.jpg",
    estado: "realizado",
  },
];

export const PROXIMOS_EVENTOS = EVENTOS.filter((e) => e.estado === "proximo");

export const formatFecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
