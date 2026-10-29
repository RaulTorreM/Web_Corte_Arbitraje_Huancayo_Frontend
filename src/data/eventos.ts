export type EventoEvidencia = {
  src: string;
  alt: string;
  label: string;
};

export type Evento = {
  id: string;
  titulo: string;
  descripcion: string;
  fechaLabel: string;
  fechaLarga: string;
  modalidad?: string;
  lugar?: string;
  horas?: string;
  organiza: string;
  cover: string;
  coverAlt: string;
  coverLabel: string;
  coverFit?: "cover" | "contain";
  coverPosition?: string;
  evidencias: EventoEvidencia[];
  pdf?: {
    url: string;
    label: string;
  };
};

export const EVENTOS: Evento[] = [
  {
    id: "congreso-conciliacion-2026",
    titulo:
      "I Congreso Macrorregional del Centro del Perú: Conciliación Extrajudicial",
    descripcion:
      "Congreso macrorregional sobre conciliación extrajudicial, con una jornada virtual y una presencial. Incluyó 24 horas académicas y certificación.",
    fechaLabel: "25—26 SEP 2026",
    fechaLarga: "25 y 26 de septiembre de 2026",
    modalidad: "Virtual el 25 y presencial + virtual el 26",
    lugar: "Auditorio de la Cámara de Comercio de Huancayo, Junín",
    horas: "24 horas académicas",
    organiza:
      "Confianza Centro de Conciliación, Esderium, Cámara de Comercio de Huancayo y Corte Superior de Arbitraje.",
    cover: "/capacitaciones/congreso-conciliacion-2026/afiche-personas.jpg",
    coverAlt:
      "Afiche oficial del I Congreso Macrorregional del Centro del Perú: Conciliación Extrajudicial",
    coverLabel: "Afiche oficial",
    evidencias: [
      {
        src: "/capacitaciones/congreso-conciliacion-2026/afiche-personas.jpg",
        alt: "Afiche del congreso con las fechas, modalidad y organizadores",
        label: "Afiche oficial con fechas y modalidad",
      },
      {
        src: "/capacitaciones/congreso-conciliacion-2026/afiche-horizontal.jpg",
        alt: "Afiche horizontal del congreso con las instituciones organizadoras",
        label: "Afiche horizontal",
      },
      {
        src: "/capacitaciones/congreso-conciliacion-2026/afiche-vertical.jpg",
        alt: "Afiche vertical del congreso con las fechas y modalidad",
        label: "Afiche vertical",
      },
      {
        src: "/capacitaciones/congreso-conciliacion-2026/informacion-programa.jpg",
        alt: "Información general y programa académico del congreso",
        label: "Información general y programa académico",
      },
    ],
  },
  {
    id: "encuentro-arbitros-2025",
    titulo:
      "II Encuentro Nacional e Internacional de Árbitros y Adjudicadores",
    descripcion:
      "Encuentro nacional e internacional de árbitros y adjudicadores con paneles sobre inversión, contratación pública, JPRD, defensa legal del Estado y laudo arbitral.",
    fechaLabel: "05—06 DIC 2025",
    fechaLarga: "05 y 06 de diciembre de 2025",
    organiza:
      "Cámara de Comercio de Huancayo, Corte Superior de Arbitraje, MIAC-CAMACOL, USMP/CIAR e INAPROF.",
    cover: "/capacitaciones/encuentro-arbitros-2025/programa-01.jpg",
    coverAlt:
      "Programa oficial del II Encuentro Nacional e Internacional de Árbitros y Adjudicadores",
    coverLabel: "Programa oficial · 2 páginas",
    coverFit: "cover",
    coverPosition: "top",
    evidencias: [
      {
        src: "/capacitaciones/encuentro-arbitros-2025/programa-01.jpg",
        alt: "Programa del viernes 05 de diciembre de 2025",
        label: "Programa · viernes 05 de diciembre",
      },
      {
        src: "/capacitaciones/encuentro-arbitros-2025/programa-02.jpg",
        alt: "Programa del sábado 06 de diciembre de 2025",
        label: "Programa · sábado 06 de diciembre",
      },
    ],
    pdf: {
      url: "/capacitaciones/encuentro-arbitros-2025/programa.pdf",
      label: "Abrir programa PDF",
    },
  },
];
