/**
 * Rutas que muestran el aviso editorial de sección en construcción.
 * Para habilitar o retirar el aviso en una página, agrega o quita su ruta.
 */
export const UNDER_CONSTRUCTION_PATHS = [
  "/conciliacion",
  "/conciliacion/inicio",
  "/conciliacion/costos",
  "/conciliacion/reglamento",
] as const;

export const isUnderConstruction = (pathname: string) => {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return (UNDER_CONSTRUCTION_PATHS as readonly string[]).includes(normalized);
};
