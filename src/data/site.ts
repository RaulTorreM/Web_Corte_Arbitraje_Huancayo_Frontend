/**
 * Datos centrales del sitio. Cambia aquí el nombre y los datos de contacto;
 * el resto de las páginas los consume.
 *
 * Nota: la Corte organiza y administra arbitrajes; no resuelve las
 * controversias. Esa distinción debe mantenerse en todos los textos.
 */
export const SITE = {
  name: "Corte Superior de Arbitraje",
  shortName: "Corte de Arbitraje",
  legalName:
    "Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín",
  description:
    "Organizamos y administramos arbitrajes bajo un reglamento único, con plazos definidos, tarifas públicas y un registro de árbitros.",
  url: "https://arbitraje.camarahuancayo.com.pe",
  mainSiteUrl: "https://camarahuancayo.com.pe",
  mainSiteLabel: "Cámara de Comercio de Huancayo",

  contact: {
    // Datos de prueba: reemplazar por los canales oficiales de la Corte.
    address: "Av. Giráldez N° 634, Huancayo, Perú",
    phone: "999 999 999",
    phoneHref: "tel:+51999999999",
    // Teléfono fijo oficial. Déjalo vacío mientras no se confirme: la barra
    // de contacto del encabezado oculta el ítem automáticamente.
    phoneFixed: "" as string,
    whatsapp: "51999 999 999",
    email: "arbitraje2@camarahuancayo.org.pe",
    emailSecondary: "arbitraje2@camarahuancayo.org.pe",
    schedule: [
      "Lunes a viernes: 8:30 a. m. – 1:00 p. m.",
      "Lunes a viernes: 2:30 p. m. – 6:00 p. m.",
      "Sábados: 9:00 a. m. – 12:00 m.",
    ],
    mapQuery: "Cámara de Comercio de Huancayo",
  },

  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/camarahyo",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/camaradecomerciohyooficial/",
      icon: "instagram",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@cch_hyooficial",
      icon: "tiktok",
    },
  ],
} as const;

/**
 * Cifras normativas, no estadísticas históricas. Si la institución
 * publica una Memoria Anual, reemplazar por los datos del periodo.
 */
export const STATS = [
  { value: 7, suffix: "", label: "Consejeros titulares (máximo)" },
  { value: 6, suffix: "", label: "Comisiones especializadas" },
  { value: 40, suffix: "", label: "Días para el laudo" },
  { value: 3, suffix: "", label: "Años del período del Consejo" },
] as const;

export const VALORES = [
  {
    title: "Imparcialidad",
    text: "Actuación libre de favoritismos o prejuicios frente a las partes involucradas.",
  },
  {
    title: "Independencia",
    text: "Criterio autónomo y libre de presiones externas en todas las decisiones y actuaciones.",
  },
  {
    title: "Transparencia",
    text: "Claridad y accesibilidad en las reglas, procedimientos y costos del servicio.",
  },
  {
    title: "Confidencialidad",
    text: "Reserva absoluta sobre la información y los documentos debatidos durante el proceso.",
  },
  {
    title: "Diligencia",
    text: "Eficiencia y celeridad en la tramitación de los expedientes y cumplimiento de plazos.",
  },
  {
    title: "Probidad y Ética",
    text: "Conducta íntegra y honesta exigida tanto a los órganos del centro como a los árbitros y las partes.",
  },
] as const;

export const FUNCIONES = [
  "Proponer al Consejo Directivo de la Cámara las modificaciones a los reglamentos.",
  "Interpretar los alcances de los reglamentos y emitir directivas, notas prácticas y lineamientos.",
  "Absolver consultas generales de los usuarios sobre la administración del arbitraje.",
  "Resolver conflictos de competencia entre los órganos de la Corte.",
  "Resolver en última instancia los asuntos administrativos decididos por las comisiones.",
  "Nombrar al Secretario del Consejo, al Secretario General y a los secretarios arbitrales.",
  "Aprobar el presupuesto y monitorear la marcha de los casos arbitrales.",
  "Supervisar la capacitación de los árbitros y el cumplimiento del Código de Ética.",
] as const;

export const PASOS_ARBITRAJE = [
  {
    title: "Solicitud",
    text: "El demandante presenta la solicitud, el contrato, el convenio arbitral y el comprobante de pago.",
  },
  {
    title: "Admisión y notificación",
    text: "La Secretaría califica la solicitud y notifica al demandado para que ejerza su defensa.",
  },
  {
    title: "Respuesta",
    text: "El demandado responde, formula excepciones y designa árbitro en el plazo de cinco días.",
  },
  {
    title: "Constitución",
    text: "Los árbitros aceptan el cargo; se confirma la designación y se nombra al presidente del tribunal.",
  },
  {
    title: "Instalación",
    text: "Se fijan las reglas procesales, el calendario y la entrega del expediente al tribunal.",
  },
  {
    title: "Demanda y contestación",
    text: "Se presentan los escritos principales, la reconvención y las pruebas, con veinte días por actuación.",
  },
  {
    title: "Audiencias y cierre",
    text: "Se fijan los puntos controvertidos, se actúa la prueba y se reciben las conclusiones.",
  },
  {
    title: "Laudo",
    text: "El tribunal delibera y notifica el laudo en cuarenta días, prorrogables por diez.",
  },
] as const;

export const REQUISITOS = [
  "Información de contacto de las partes y de sus representantes.",
  "Descripción breve de la naturaleza y circunstancias de la controversia.",
  "Declaración preliminar de las reclamaciones y estimación de su valor, de ser posible.",
  "Contrato o acuerdo relevante y, en particular, el convenio arbitral.",
  "Referencia al convenio cuando las reclamaciones se formulen bajo más de uno.",
  "Designación del árbitro y sus datos, o propuesta sobre el número y la forma de designación.",
  "Propuesta de sede, idioma y normas aplicables.",
  "Comprobante de pago del derecho de presentación: S/ 800 (nacional) o US$ 425 (internacional).",
] as const;
