export type Profesional = {
  id: string;
  nombre: string;
  profesion: string;
  especialidades: string[];
  rna: boolean;
  tipo: "arbitro" | "adjudicador";
  rol?: "presidente" | "integrante";
};

/**
 * Nómina de demostración. No es el Registro oficial.
 * Reemplazar por la nómina aprobada cuando la institución publique
 * el listado definitivo o se conecte la API.
 *
 * El Registro de Árbitros y el de Adjudicadores tienen vigencia de tres
 * años; la inscripción no equivale a una designación en un caso concreto.
 */



//FALTAN DATOS REALES!
export const PROFESIONALES: Profesional[] = [
  {
    id: "a-01",
    nombre: "María Elena Quispe Rojas",
    profesion: "Abogada",
    especialidades: ["Contratación pública", "Derecho administrativo"],
    rna: false,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-02",
    nombre: "Carlos Alberto Unsihuay León",
    profesion: "Ingeniero civil",
    especialidades: ["Construcción", "JPRD", "Dispute boards"],
    rna: false,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-03",
    nombre: "Patricia Salomé Andrade Vílchez",
    profesion: "Abogada",
    especialidades: ["Comercial", "Societario"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-04",
    nombre: "Jorge Luis Matos Paredes",
    profesion: "Ingeniero civil",
    especialidades: ["Valorizaciones", "Peritajes", "Ampliaciones de plazo"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-05",
    nombre: "Rosa Amelia Cárdenas Yupanqui",
    profesion: "Abogada",
    especialidades: ["Laboral", "Seguridad social", "Arbitraje social"],
    rna: false,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-06",
    nombre: "Fernando Chávez Gutiérrez",
    profesion: "Abogado",
    especialidades: ["Contrataciones del Estado", "Arbitraje de emergencia"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-07",
    nombre: "Lucía Fernanda Torres Baldeón",
    profesion: "Abogada",
    especialidades: ["Arbitraje internacional", "Comercial"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-08",
    nombre: "Renzo Sebastián Aliaga Torres",
    profesion: "Abogado",
    especialidades: ["Arbitraje social", "Consumo"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "j-01",
    nombre: "Carlos Alberto Unsihuay León",
    profesion: "Ingeniero civil",
    especialidades: ["Obra civil", "FIDIC"],
    rna: false,
    tipo: "adjudicador",
    rol: "presidente",
  },
  {
    id: "j-02",
    nombre: "Jorge Luis Matos Paredes",
    profesion: "Ingeniero civil",
    especialidades: ["Valorizaciones"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-03",
    nombre: "Silvia Paucar Orihuela",
    profesion: "Arquitecta",
    especialidades: ["Arquitectura", "Acabados"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-04",
    nombre: "Fernando Chávez Gutiérrez",
    profesion: "Abogado",
    especialidades: ["Contratación pública"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-05",
    nombre: "Marco Antonio Zevallos Ríos",
    profesion: "Ingeniero civil",
    especialidades: ["Mecánica de suelos"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-06",
    nombre: "Ana Lucía Bermúdez Sáenz",
    profesion: "Ingeniera de proyectos",
    especialidades: ["Gestión de proyectos"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
];

export const ARBITROS = PROFESIONALES.filter((p) => p.tipo === "arbitro");
export const ADJUDICADORES = PROFESIONALES.filter((p) => p.tipo === "adjudicador");

export const PROFESIONES = Array.from(
  new Set(PROFESIONALES.map((p) => p.profesion))
).sort((a, b) => a.localeCompare(b, "es"));

export const ESPECIALIDADES = Array.from(
  new Set(PROFESIONALES.flatMap((p) => p.especialidades))
).sort((a, b) => a.localeCompare(b, "es"));
