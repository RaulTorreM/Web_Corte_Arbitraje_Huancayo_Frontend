/**
 * Identidad de la Corte Superior de Arbitraje de Huancayo.
 *
 * El sistema parte del sello institucional, pero lo usa con moderación:
 * papel cálido, tinta azul profunda y dorado como acento. El dorado no
 * funciona como color de fondo ni como decoración; marca reglas, estados
 * y el detalle que guía la lectura.
 */
export const brand = {
  primary: "#17324F",
  primaryDark: "#0F2438",
  primaryDeep: "#0A1B2B",
  primaryLight: "#43617F",

  sky: "#A9C1D6",
  skySoft: "#E8EEF2",
  skyMid: "#D3DFE8",

  gold: "#B08A2E",
  goldSoft: "#E7D8AE",
  goldDeep: "#725311",
  goldBright: "#C9A84C",

  paper: "#F4F0E7",
  paperAlt: "#EAE4D8",
  paperDeep: "#DED6C6",
  white: "#FFFFFF",
  whiteSoft: "#FBF8F2",

  ink: "#17212C",
  muted: "#5A6470",
  line: "#D7D0C3",
  lineStrong: "#B8AF9E",

  accent: "#8D3B2D",
  accentSoft: "#F1E0DA",
} as const;

export const fonts = {
  display: '"Source Serif 4", Georgia, serif',
  body: '"Public Sans", "Segoe UI", Roboto, sans-serif',
} as const;
