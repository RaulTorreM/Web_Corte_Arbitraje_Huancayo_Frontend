export type NavChild = {
  label: string;
  to: string;
};

export type NavItem = {
  label: string;
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
      { label: "Presentación", to: "/quienes-somos" },
      { label: "Consejo Superior", to: "/quienes-somos/consejo" },
      { label: "Equipo de trabajo", to: "/quienes-somos/equipo" },
      { label: "Certificaciones", to: "/quienes-somos/certificaciones" },
    ],
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
      { label: "Presentación (en implementación)", to: "/jprd" },
      { label: "Reglamento (preliminar)", to: "/jprd/reglamento" },
      { label: "Registro de adjudicadores", to: "/jprd/adjudicadores" },
      { label: "Aranceles (preliminar)", to: "/jprd/aranceles" },
      { label: "Cláusula modelo (preliminar)", to: "/jprd/clausula" },
      { label: "Decisiones (en implementación)", to: "/jprd/decisiones" },
    ],
  },
  {
    label: "Documentos",
    to: "/documentos",
  },
  {
    label: "Capacitaciones",
    to: "/capacitaciones",
    highlight: true,
  },
  {
    label: "Contacto",
    to: "/contacto",
  },
];

export const ARBITRAJE_SUBNAV =
  NAV_ITEMS.find((item) => item.to === "/arbitraje")?.children ?? [];

export const JPRD_SUBNAV =
  NAV_ITEMS.find((item) => item.to === "/jprd")?.children ?? [];

export const UTILITY_LINKS = [
  { label: "Canal de denuncias", to: "/denuncias" },
  { label: "Libro de reclamaciones", to: "/libro-de-reclamaciones" },
] as const;
