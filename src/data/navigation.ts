export type NavChild = {
  label: string;
  to: string;
};

export type NavItem = {
  label: string;
  shortLabel?: string;
  to: string;
  children?: NavChild[];
  highlight?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Quiénes somos",
    to: "/quienes-somos",
    children: [
      { label: "Quiénes somos", to: "/quienes-somos" },
      { label: "Consejo Directivo", to: "/quienes-somos/consejo-directivo" },
      { label: "Consejo Superior", to: "/quienes-somos/consejo" },
      { label: "Equipo de trabajo", to: "/quienes-somos/equipo" },
      { label: "Certificaciones", to: "/quienes-somos/certificaciones" },
    ],
  },
  {
    label: "Documentos institucionales",
    shortLabel: "Documentos",
    to: "/documentos",
  },
  {
    label: "Arbitraje",
    to: "/arbitraje",
    children: [
      { label: "Presentación", to: "/arbitraje" },
      { label: "Costos y tarifas", to: "/arbitraje/costos" },
      { label: "Reglamentos y directivas", to: "/arbitraje/reglamentos" },
      { label: "Nómina de árbitros", to: "/arbitraje/arbitros" },
      { label: "Cláusula arbitral", to: "/arbitraje/clausula" },
      { label: "Inicio de arbitraje", to: "/arbitraje/inicio" },
      { label: "Banco de laudos", to: "/arbitraje/laudos" },
    ],
  },
  {
    label: "JPRD",
    to: "/jprd",
    children: [
      { label: "Presentación (borrador)", to: "/jprd" },
      { label: "Reglamento y directivas (borrador)", to: "/jprd/reglamento" },
      { label: "Nómina de adjudicadores", to: "/jprd/adjudicadores" },
      { label: "Tabla de aranceles JRD y JPRD (borrador)", to: "/jprd/aranceles" },
      { label: "Cláusula (borrador)", to: "/jprd/clausula" },
      { label: "Banco de decisiones (borrador)", to: "/jprd/decisiones" },
    ],
  },
  {
    label: "Centro de conciliación",
    shortLabel: "Conciliación",
    to: "/conciliacion",
    children: [
      { label: "Presentación", to: "/conciliacion" },
      { label: "Inicio de conciliación", to: "/conciliacion/inicio" },
      { label: "Costos y tarifas", to: "/conciliacion/costos" },
      { label: "Reglamento", to: "/conciliacion/reglamento" },
    ],
  },
  {
    label: "Capacitaciones y eventos",
    shortLabel: "Capacitaciones",
    to: "/capacitaciones",
    highlight: true,
  },
  {
    label: "Contáctanos",
    to: "/contacto",
  },
];

export const ARBITRAJE_SUBNAV =
  NAV_ITEMS.find((item) => item.to === "/arbitraje")?.children ?? [];

export const JPRD_SUBNAV =
  NAV_ITEMS.find((item) => item.to === "/jprd")?.children ?? [];

export const CONCILIACION_SUBNAV =
  NAV_ITEMS.find((item) => item.to === "/conciliacion")?.children ?? [];

export const UTILITY_LINKS = [
  { label: "Canal de denuncias", to: "/denuncias" },
  { label: "Libro de reclamaciones", to: "/libro-de-reclamaciones" },
] as const;
