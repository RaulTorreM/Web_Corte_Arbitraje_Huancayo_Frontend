import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { brand } from "../../theme/brand";

export type Crumb = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  light?: boolean;
};

export default function Breadcrumbs({
  items,
  light = true,
}: BreadcrumbsProps) {
  const baseColor = light ? "rgba(255,255,255,0.62)" : brand.muted;
  const hoverColor = light ? brand.goldSoft : brand.goldInk;
  const currentColor = light ? brand.goldSoft : brand.primary;

  return (
    <Box
      component="nav"
      aria-label="Ruta de navegación"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <Typography
        component={RouterLink}
        to="/"
        sx={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: baseColor,
          textDecoration: "none",
          transition: "color 0.18s ease",
          "&:hover": { color: hoverColor },
        }}
      >
        Inicio
      </Typography>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Box
            key={`${item.label}-${index}`}
            sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}
          >
            <ChevronRightIcon
              sx={{
                fontSize: "0.9rem",
                color: light ? "rgba(255,255,255,0.35)" : brand.lineStrong,
              }}
            />

            {item.to && !isLast ? (
              <Typography
                component={RouterLink}
                to={item.to}
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: baseColor,
                  textDecoration: "none",
                  "&:hover": { color: hoverColor },
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: currentColor,
                }}
              >
                {item.label}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
