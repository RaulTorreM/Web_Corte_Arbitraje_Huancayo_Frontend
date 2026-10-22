export type Registro = {
  id: string;
  expediente: string;
  materia: string;
  anio: number;
  resumen: string;
  url: string;
};

/**
 * Registros de demostración. No corresponden a expedientes reales.
 * El banco de laudos se publicará con datos anonimizados cuando la
 * institución habilite el repositorio oficial.
 */

//FALTAN DATOS REALES!
export const LAUDOS: Registro[] = [
  {
    id: "l-01",
    expediente: "L-2025-014",
    materia: "Contratación pública",
    anio: 2025,
    resumen:
      "Laudo final sobre ampliación de plazo y mayores gastos generales. Datos de demostración.",
    url: "#",
  },
  {
    id: "l-02",
    expediente: "L-2025-021",
    materia: "Comercial",
    anio: 2025,
    resumen:
      "Laudo parcial sobre competencia arbitral y alcance del convenio. Datos de demostración.",
    url: "#",
  },
  {
    id: "l-03",
    expediente: "L-2025-033",
    materia: "Construcción",
    anio: 2025,
    resumen:
      "Laudo final sobre valorización de partidas adicionales. Datos de demostración.",
    url: "#",
  },
  {
    id: "l-04",
    expediente: "L-2024-058",
    materia: "Laboral",
    anio: 2024,
    resumen:
      "Laudo final sobre beneficios sociales y desnaturalización. Datos de demostración.",
    url: "#",
  },
  {
    id: "l-05",
    expediente: "L-2024-071",
    materia: "Inmobiliario",
    anio: 2024,
    resumen:
      "Laudo final sobre resolución de contrato y devolución de arras. Datos de demostración.",
    url: "#",
  },
];

/**
 * La JPRD se encuentra en implementación y no registra decisiones
 * publicables. Se mantiene el estado vacío hasta que exista reglamento
 * aprobado y decisiones efectivamente emitidas.
 */
export const DECISIONES: Registro[] = [];
