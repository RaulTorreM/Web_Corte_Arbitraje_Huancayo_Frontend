/**
 * Tabla de Gastos Arbitrales (Anexos 1 al 4) y propuesta de aranceles JPRD.
 *
 * Los montos no incluyen IGV. La liquidación definitiva corresponde a la
 * Secretaría General. Los rubros marcados "En revisión" no deben usarse
 * para calcular costos hasta que el Consejo valide la versión oficial.
 */

export type TarifaAnexo1Row = {
  rubro: string;
  cuantia: string;
  admin: string;
  tribunal: string;
  unico: string;
  modalidad: "social" | "acelerado" | "ordinario";
};

export const ANEXO_1: TarifaAnexo1Row[] = [
  {
    rubro: "Z(a)",
    cuantia: "0 – 15,000",
    admin: "S/ 500",
    tribunal: "No aplica",
    unico: "S/ 2,500",
    modalidad: "social",
  },
  {
    rubro: "Z(b)",
    cuantia: "15,001 – 75,000",
    admin: "S/ 1,500",
    tribunal: "No aplica",
    unico: "S/ 5,500",
    modalidad: "social",
  },
  {
    rubro: "A",
    cuantia: "75,001 – 145,000",
    admin: "S/ 3,000",
    tribunal: "S/ 15,000",
    unico: "S/ 7,000",
    modalidad: "acelerado",
  },
  {
    rubro: "B",
    cuantia: "145,001 – 290,000",
    admin: "S/ 5,000",
    tribunal: "S/ 21,000",
    unico: "S/ 9,500",
    modalidad: "acelerado",
  },
  {
    rubro: "C",
    cuantia: "290,001 – 870,000",
    admin: "S/ 7,000",
    tribunal: "S/ 30,000",
    unico: "S/ 12,500",
    modalidad: "acelerado",
  },
  {
    rubro: "D",
    cuantia: "870,001 – 1,450,000",
    admin: "S/ 10,232",
    tribunal: "S/ 38,292",
    unico: "S/ 15,317",
    modalidad: "ordinario",
  },
  {
    rubro: "E",
    cuantia: "1,450,001 – 2,050,000",
    admin: "S/ 15,232",
    tribunal: "S/ 46,092",
    unico: "S/ 18,437",
    modalidad: "ordinario",
  },
  {
    rubro: "F",
    cuantia: "2,050,001 – 2,900,000",
    admin: "S/ 17,232",
    tribunal: "S/ 57,142",
    unico: "S/ 22,857",
    modalidad: "ordinario",
  },
  {
    rubro: "G",
    cuantia: "2,900,001 – 14,500,000",
    admin: "En revisión",
    tribunal: "En revisión",
    unico: "En revisión",
    modalidad: "ordinario",
  },
  {
    rubro: "H",
    cuantia: "14,500,001 – 80,000,000",
    admin: "S/ 55,100 + 0.30% del exceso",
    tribunal: "S/ 149,942 + 0.70% del exceso",
    unico: "S/ 59,977 + 0.23% del exceso",
    modalidad: "ordinario",
  },
  {
    rubro: "I",
    cuantia: "80,000,001 – 160,000,000",
    admin: "En revisión",
    tribunal: "En revisión",
    unico: "En revisión",
    modalidad: "ordinario",
  },
  {
    rubro: "J",
    cuantia: "160,000,001 – 320,000,000",
    admin: "En revisión",
    tribunal: "En revisión",
    unico: "En revisión",
    modalidad: "ordinario",
  },
  {
    rubro: "K",
    cuantia: "320,000,001 – 640,000,000",
    admin: "En revisión",
    tribunal: "En revisión",
    unico: "En revisión",
    modalidad: "ordinario",
  },
  {
    rubro: "L",
    cuantia: "640,000,001 a más",
    admin: "S/ 900,000",
    tribunal: "S/ 2,700,000",
    unico: "S/ 900,000",
    modalidad: "ordinario",
  },
];

export type TasaAnexo3 = {
  n: number;
  concepto: string;
  monto: string;
};

export const ANEXO_3: TasaAnexo3[] = [
  { n: 1, concepto: "Solicitud de arbitraje nacional", monto: "S/ 800.00" },
  { n: 2, concepto: "Solicitud de arbitraje internacional", monto: "US$ 425.00" },
  { n: 3, concepto: "Solicitud de medida cautelar dentro del proceso", monto: "S/ 800.00" },
  { n: 4, concepto: "Solicitud de desistimiento", monto: "S/ 800.00" },
  { n: 5, concepto: "Revisión extraordinaria de decisión de comisión", monto: "S/ 7,000.00" },
  {
    n: 6,
    concepto: "Postulación o renovación al Registro de Árbitros (nacional, por año)",
    monto: "S/ 850.00",
  },
  {
    n: 7,
    concepto: "Inscripción al Registro tras aprobación (nacional, por año)",
    monto: "S/ 850.00",
  },
  {
    n: 8,
    concepto: "Postulación o renovación al Registro (internacional, por año)",
    monto: "US$ 425.00",
  },
  { n: 9, concepto: "Designación de árbitro", monto: "S/ 800.00" },
  { n: 10, concepto: "Recusación y/o remoción (por árbitro)", monto: "S/ 800.00" },
  { n: 12, concepto: "Copia simple por hoja", monto: "S/ 1.00" },
  { n: 13, concepto: "Copia digital por hoja", monto: "S/ 2.00" },
  { n: 14, concepto: "Copia certificada por hoja", monto: "S/ 3.00" },
  { n: 15, concepto: "Copia simple de plano por hoja", monto: "S/ 10.00" },
  { n: 16, concepto: "Copia simple o digital de plano por hoja", monto: "S/ 20.00" },
  { n: 17, concepto: "Copia certificada de plano por hoja", monto: "S/ 30.00" },
  { n: 18, concepto: "Notificación física en Junín", monto: "S/ 10.00" },
  { n: 19, concepto: "Notificación física fuera de Junín", monto: "S/ 20.00" },
  { n: 20, concepto: "Notificación física fuera del Perú", monto: "S/ 50.00" },
];

export const ANEXO_4 = [
  { concepto: "Solicitud de árbitro de emergencia", monto: "S/ 7,000.00" },
  { concepto: "Honorarios del árbitro de emergencia", monto: "S/ 20,000.00" },
] as const;

export const NOTAS_TARIFAS = [
  "Los montos de los Anexos 1, 3 y 4 no incluyen IGV.",
  "El derecho de presentación es de S/ 800 en arbitrajes nacionales y US$ 425 en internacionales; no está incluido en la tabla del Anexo 1.",
  "La cuantía indeterminada se calcula al 6.2% del monto del contrato original por cada pretensión. La suma de las pretensiones indeterminadas no puede superar el monto del contrato.",
  "No se consideran para el cálculo las pretensiones sobre costos y costas, ni las accesorias, subordinadas o alternativas.",
  "La liquidación definitiva es emitida por la Secretaría General luego de calificar la solicitud y determinar la cuantía.",
  "Los rubros G, I, J y K se encuentran en revisión y no se muestran como montos aplicables. La versión publicada no debe usarse para calcular una liquidación.",
  "No incluye gastos de peritos, testigos, actuaciones fuera de la sede, tramitación posterior al laudo ni ejecución del laudo.",
] as const;

export const EJEMPLOS_COSTO = [
  {
    titulo: "Arbitraje ordinario · cuantía S/ 1,200,000",
    detalle:
      "Rubro D. Tasa administrativa S/ 10,232 + honorarios de árbitro único S/ 15,317 = S/ 25,549 sin IGV. Con tribunal: S/ 10,232 + S/ 38,292 = S/ 48,524.",
  },
  {
    titulo: "Arbitraje acelerado · cuantía S/ 200,000",
    detalle:
      "Rubro B. Tasa administrativa S/ 5,000 + árbitro único S/ 9,500 = S/ 14,500 sin IGV. Si el convenio exige tribunal: S/ 5,000 + S/ 21,000 = S/ 26,000.",
  },
  {
    titulo: "Arbitraje social · cuantía S/ 12,000",
    detalle:
      "Rubro Z(a). Tasa administrativa S/ 500 + honorarios de árbitro único S/ 2,500 = S/ 3,000 sin IGV, más el derecho de presentación de S/ 800.",
  },
  {
    titulo: "Cuantía indeterminada",
    detalle:
      "Contrato original de S/ 2,000,000 con dos pretensiones indeterminadas: 6.2% × 2,000,000 = S/ 124,000 por cada una. Base resultante: S/ 248,000 (rubro B): tasa S/ 5,000 + árbitro único S/ 9,500 = S/ 14,500 sin IGV.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* JPRD: propuesta preliminar, no vigente                              */
/* ------------------------------------------------------------------ */

export type TarifaJprdRow = {
  rango: string;
  constitucion: string;
  prevencion: string;
  decision: string;
};

export const ARANCELES_JPRD_UNICO: TarifaJprdRow[] = [
  { rango: "Hasta S/ 5,000,000", constitucion: "S/ 3,500", prevencion: "S/ 1,200", decision: "S/ 4,000" },
  { rango: "S/ 5,000,001 – 20,000,000", constitucion: "S/ 5,000", prevencion: "S/ 1,800", decision: "S/ 6,000" },
  { rango: "S/ 20,000,001 – 50,000,000", constitucion: "S/ 7,500", prevencion: "S/ 2,500", decision: "S/ 9,000" },
  { rango: "Más de S/ 50,000,000", constitucion: "S/ 11,000", prevencion: "S/ 3,500", decision: "S/ 13,000" },
];

export const ARANCELES_JPRD_JUNTA: TarifaJprdRow[] = [
  { rango: "Hasta S/ 20,000,000", constitucion: "S/ 9,000", prevencion: "S/ 3,000", decision: "S/ 10,500" },
  { rango: "S/ 20,000,001 – 50,000,000", constitucion: "S/ 13,500", prevencion: "S/ 4,500", decision: "S/ 16,500" },
  { rango: "Más de S/ 50,000,000", constitucion: "S/ 19,500", prevencion: "S/ 6,000", decision: "S/ 24,000" },
];

export const TASAS_JPRD = [
  { concepto: "Constitución y administración del expediente", monto: "S/ 1,500" },
  { concepto: "Reunión o visita adicional", monto: "S/ 600" },
  { concepto: "Solicitud de recusación (por adjudicador)", monto: "S/ 800" },
  { concepto: "Copias y notificaciones", monto: "Según Anexo 3" },
] as const;

/* Compatibilidad con la vista JPRD: aranceles en formato simple. */
export type TarifaRow = {
  rango: string;
  honorario: string;
  gasto: string;
};

export const ARANCELES_JPRD: TarifaRow[] = [
  { rango: "Hasta S/ 5,000,000", honorario: "S/ 3,500", gasto: "S/ 1,200" },
  { rango: "S/ 5,000,001 – 20,000,000", honorario: "S/ 5,000", gasto: "S/ 1,800" },
  { rango: "S/ 20,000,001 – 50,000,000", honorario: "S/ 7,500", gasto: "S/ 2,500" },
  { rango: "Más de S/ 50,000,000", honorario: "S/ 11,000", gasto: "S/ 3,500" },
];
