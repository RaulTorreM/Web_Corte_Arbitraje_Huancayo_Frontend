/**
 * Identidad de la Corte Superior de Arbitraje de Huancayo.
 *
 * La paleta de relleno se deriva del sello institucional: el azul del anillo,
 * el azul cielo del campo y el blanco del disco, con carga azul en los fondos.
 * La tinta y las líneas conservan su tono original, y el dorado se mantiene
 * como único acento cálido para reglas, kickers y estados.
 */
export const brand = {
  // Anillo del sello: azul medio y azules profundos del trazo.
  primary: "#2D4B7A",
  primaryDark: "#234171",
  primaryDeep: "#092354",
  primaryLight: "#5B7FB0",

  // Campo del sello: el azul cielo que domina el disco.
  sky: "#9DC4EF",
  skySoft: "#E3EFFC",
  skyMid: "#C9DEF6",

  // Acento cálido. No proviene del sello; se mantiene como contrapunto.
  gold: "#f3bb39",
  goldSoft: "#E7D8AE",
  goldDeep: "#c0af1c",
  goldBright: "#C9A84C",

  // Fondos: blanco del sello con carga azul, del más cálido al más profundo.
  paper: "#EFF4FB",
  paperAlt: "#E1EBF7",
  paperDeep: "#CFDFF2",
  white: "#FFFFFF",
  whiteSoft: "#F7FAFE",

  // Tinta: conserva la tinta cálida original; el enfriamiento se reserva
  // para los fondos.
  ink: "#17212C",
  muted: "#5D5646",
  line: "#CFC0A5",
  lineStrong: "#8A7957",

  // Estado: reservado para avisos, no para la marca.
  accent: "#8D3B2D",
  accentSoft: "#F1E0DA",
} as const;

export const fonts = {
  display: '"Source Serif 4", Georgia, serif',
  body: '"Public Sans", "Segoe UI", Roboto, sans-serif',
} as const;
