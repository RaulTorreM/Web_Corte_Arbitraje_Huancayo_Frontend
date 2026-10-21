export type Materia = {
  title: string;
  text: string;
  icon:
    | "gavel"
    | "contract"
    | "payments"
    | "construction"
    | "business"
    | "balance";
};

export const MATERIAS: Materia[] = [
  {
    title: "Contrataciones del Estado",
    text: "Controversias derivadas de contratos públicos, procesos de selección y ejecución de obras.",
    icon: "contract",
  },
  {
    title: "Incumplimiento contractual",
    text: "Incumplimientos, resolución de contratos, penalidades y responsabilidad civil.",
    icon: "gavel",
  },
  {
    title: "Obligaciones de dar suma de dinero",
    text: "Deudas comerciales, pagos pendientes y obligaciones exigibles entre empresas.",
    icon: "payments",
  },
  {
    title: "Derecho de la construcción",
    text: "Valorizaciones, ampliaciones de plazo, vicios ocultos y controversias técnicas de obra.",
    icon: "construction",
  },
  {
    title: "Controversias societarias",
    text: "Conflictos entre socios, gobiernos corporativos y cumplimiento de acuerdos.",
    icon: "business",
  },
  {
    title: "Derechos patrimoniales disponibles",
    text: "Materias de libre disposición de las partes que no sean de competencia judicial exclusiva.",
    icon: "balance",
  },
];
