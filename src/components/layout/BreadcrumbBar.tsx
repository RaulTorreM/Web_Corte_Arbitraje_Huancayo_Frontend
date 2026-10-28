import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Breadcrumbs, { type Crumb } from "../common/Breadcrumbs";
import { NAV_ITEMS, UTILITY_LINKS } from "../../data/navigation";

const getCrumbs = (pathname: string): Crumb[] | null => {
  const current = pathname.replace(/\/+$/, "") || "/";

  if (current === "/") return null;

  for (const item of NAV_ITEMS) {
    if (item.to === current) {
      return [{ label: item.label }];
    }

    for (const child of item.children ?? []) {
      if (child.to === current) {
        return [
          { label: item.label, to: item.to },
          { label: child.label },
        ];
      }
    }
  }

  const utility = UTILITY_LINKS.find((link) => link.to === current);
  if (utility) return [{ label: utility.label }];

  return null;
};

/**
 * Ruta de navegación en el flujo de la página, con fondo transparente. Se
 * alimenta del árbol de navegación, no de cada vista.
 */
export default function BreadcrumbBar() {
  const { pathname } = useLocation();
  const crumbs = getCrumbs(pathname);

  if (!crumbs) return null;

  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <Container sx={{ py: 0.85 }}>
        <Breadcrumbs items={crumbs} light={false} />
      </Container>
    </Box>
  );
}
