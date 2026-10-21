export type Registro = {
  id: string;
  expediente: string;
  materia: string;
  anio: number;
  resumen: string;
  url: string;
};

const MATERIAS = [
  "Contrataciones del Estado",
  "Incumplimiento contractual",
  "Obligaciones de dar suma de dinero",
  "Derecho de la construcción",
  "Controversias societarias",
  "Derecho administrativo",
];

const resumen = (materia: string) =>
  `Decisión recaída en una controversia sobre ${materia.toLowerCase()}, con análisis de los hechos, la normativa aplicable y las pretensiones de las partes.`;

export const LAUDOS: Registro[] = [
  {
    id: "l-01",
    expediente: "CSA-2025-014",
    materia: "Contrataciones del Estado",
    anio: 2025,
    resumen: resumen(MATERIAS[0]),
    url: "#",
  },
  {
    id: "l-02",
    expediente: "CSA-2025-009",
    materia: "Derecho de la construcción",
    anio: 2025,
    resumen: resumen(MATERIAS[3]),
    url: "#",
  },
  {
    id: "l-03",
    expediente: "CSA-2024-031",
    materia: "Incumplimiento contractual",
    anio: 2024,
    resumen: resumen(MATERIAS[1]),
    url: "#",
  },
  {
    id: "l-04",
    expediente: "CSA-2024-018",
    materia: "Obligaciones de dar suma de dinero",
    anio: 2024,
    resumen: resumen(MATERIAS[2]),
    url: "#",
  },
  {
    id: "l-05",
    expediente: "CSA-2024-006",
    materia: "Controversias societarias",
    anio: 2024,
    resumen: resumen(MATERIAS[4]),
    url: "#",
  },
  {
    id: "l-06",
    expediente: "CSA-2023-027",
    materia: "Contrataciones del Estado",
    anio: 2023,
    resumen: resumen(MATERIAS[0]),
    url: "#",
  },
  {
    id: "l-07",
    expediente: "CSA-2023-012",
    materia: "Derecho administrativo",
    anio: 2023,
    resumen: resumen(MATERIAS[5]),
    url: "#",
  },
  {
    id: "l-08",
    expediente: "CSA-2022-021",
    materia: "Incumplimiento contractual",
    anio: 2022,
    resumen: resumen(MATERIAS[1]),
    url: "#",
  },
];

export const DECISIONES: Registro[] = [
  {
    id: "jr-01",
    expediente: "JPRD-2025-007",
    materia: "Derecho de la construcción",
    anio: 2025,
    resumen: resumen(MATERIAS[3]),
    url: "#",
  },
  {
    id: "jr-02",
    expediente: "JPRD-2025-003",
    materia: "Contrataciones del Estado",
    anio: 2025,
    resumen: resumen(MATERIAS[0]),
    url: "#",
  },
  {
    id: "jr-03",
    expediente: "JPRD-2024-011",
    materia: "Incumplimiento contractual",
    anio: 2024,
    resumen: resumen(MATERIAS[1]),
    url: "#",
  },
  {
    id: "jr-04",
    expediente: "JPRD-2024-005",
    materia: "Derecho administrativo",
    anio: 2024,
    resumen: resumen(MATERIAS[5]),
    url: "#",
  },
  {
    id: "jr-05",
    expediente: "JPRD-2023-009",
    materia: "Derecho de la construcción",
    anio: 2023,
    resumen: resumen(MATERIAS[3]),
    url: "#",
  },
  {
    id: "jr-06",
    expediente: "JPRD-2023-002",
    materia: "Contrataciones del Estado",
    anio: 2023,
    resumen: resumen(MATERIAS[0]),
    url: "#",
  },
];

export const ANIOS = (registros: Registro[]) =>
  Array.from(new Set(registros.map((r) => r.anio))).sort((a, b) => b - a);
