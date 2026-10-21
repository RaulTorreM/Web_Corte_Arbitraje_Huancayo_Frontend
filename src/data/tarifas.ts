export type TarifaRow = {
  rango: string;
  honorario: string;
  gasto: string;
};

export type TarifaTabla = {
  id: "arbitro-unico" | "tribunal" | "administrativos";
  label: string;
  titulo: string;
  descripcion: string;
  columnaHonorario: string;
  columnaGasto: string;
  rows: TarifaRow[];
};

export const TARIFAS: TarifaTabla[] = [
  {
    id: "arbitro-unico",
    label: "Árbitro único",
    titulo: "Honorarios del árbitro único",
    descripcion:
      "Montos referenciales en soles, calculados sobre la cuantía determinada de la controversia.",
    columnaHonorario: "Honorario del árbitro",
    columnaGasto: "Gasto administrativo",
    rows: [
      { rango: "Hasta 10 UIT", honorario: "S/ 2,400", gasto: "S/ 600" },
      { rango: "De 10 a 50 UIT", honorario: "S/ 4,800", gasto: "S/ 1,200" },
      { rango: "De 50 a 100 UIT", honorario: "S/ 7,600", gasto: "S/ 1,900" },
      { rango: "De 100 a 300 UIT", honorario: "S/ 12,400", gasto: "S/ 3,100" },
      { rango: "De 300 a 600 UIT", honorario: "S/ 19,800", gasto: "S/ 4,900" },
      { rango: "Más de 600 UIT", honorario: "A convenir", gasto: "A convenir" },
    ],
  },
  {
    id: "tribunal",
    label: "Tribunal arbitral",
    titulo: "Honorarios del tribunal arbitral",
    descripcion:
      "Cada integrante del tribunal percibe el honorario indicado. El presidente tiene un adicional del 20 %.",
    columnaHonorario: "Honorario por integrante",
    columnaGasto: "Gasto administrativo",
    rows: [
      { rango: "Hasta 10 UIT", honorario: "S/ 1,800", gasto: "S/ 600" },
      { rango: "De 10 a 50 UIT", honorario: "S/ 3,600", gasto: "S/ 1,200" },
      { rango: "De 50 a 100 UIT", honorario: "S/ 5,700", gasto: "S/ 1,900" },
      { rango: "De 100 a 300 UIT", honorario: "S/ 9,300", gasto: "S/ 3,100" },
      { rango: "De 300 a 600 UIT", honorario: "S/ 14,800", gasto: "S/ 4,900" },
      { rango: "Más de 600 UIT", honorario: "A convenir", gasto: "A convenir" },
    ],
  },
  {
    id: "administrativos",
    label: "Gastos administrativos",
    titulo: "Gastos administrativos de la Corte",
    descripcion:
      "Derechos destinados a la administración del expediente, notificaciones y secretaría arbitral.",
    columnaHonorario: "Derecho de administración",
    columnaGasto: "Gastos de secretaría",
    rows: [
      { rango: "Hasta 10 UIT", honorario: "S/ 600", gasto: "S/ 180" },
      { rango: "De 10 a 50 UIT", honorario: "S/ 1,200", gasto: "S/ 320" },
      { rango: "De 50 a 100 UIT", honorario: "S/ 1,900", gasto: "S/ 480" },
      { rango: "De 100 a 300 UIT", honorario: "S/ 3,100", gasto: "S/ 720" },
      { rango: "De 300 a 600 UIT", honorario: "S/ 4,900", gasto: "S/ 1,050" },
      { rango: "Más de 600 UIT", honorario: "A convenir", gasto: "A convenir" },
    ],
  },
];

export const NOTAS_TARIFAS = [
  "Los montos son referenciales y se calculan sobre la cuantía determinada al momento de la solicitud.",
  "La UIT aplicable es la vigente a la fecha de presentación de la solicitud de arbitraje.",
  "Los gastos administrativos no incluyen los honorarios de peritos, traductores ni gastos de sede.",
  "La Corte puede ajustar los montos en controversias de especial complejidad mediante resolución motivada.",
] as const;

export const ARANCELES_JPRD: TarifaRow[] = [
  { rango: "Hasta 5 UIT", honorario: "S/ 1,500", gasto: "S/ 400" },
  { rango: "De 5 a 20 UIT", honorario: "S/ 2,800", gasto: "S/ 700" },
  { rango: "De 20 a 50 UIT", honorario: "S/ 4,600", gasto: "S/ 1,100" },
  { rango: "De 50 a 100 UIT", honorario: "S/ 7,200", gasto: "S/ 1,600" },
  { rango: "Más de 100 UIT", honorario: "A convenir", gasto: "A convenir" },
];
