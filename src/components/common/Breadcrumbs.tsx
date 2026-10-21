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
  return (
    <Box
      component="nav"
      aria-label="Ruta de navegación"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 0.6,
        mb: 3,
      }}
    >
      <Typography
        component={RouterLink}
        to="/"
        sx={{
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: light ? "rgba(255,255,255,0.58)" : brand.muted,
          textDecoration: "none",
          transition: "color 0.2s ease",
          "&:hover": {
            color: light ? brand.goldSoft : brand.goldDeep,
          },
        }}
      >
        Inicio
      </Typography>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Box
            key={`${item.label}-${index}`}
            sx={{ display: "inline-flex", alignItems: "center", gap: 0.6 }}
          >
            <ChevronRightIcon
              sx={{
                fontSize: "0.95rem",
                color: light ? "rgba(255,255,255,0.35)" : brand.line,
              }}
            />

            {item.to && !isLast ? (
              <Typography
                component={RouterLink}
                to={item.to}
                sx={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: light ? "rgba(255,255,255,0.58)" : brand.muted,
                  textDecoration: "none",
                  "&:hover": {
                    color: light ? brand.goldSoft : brand.goldDeep,
                  },
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: light ? brand.goldSoft : brand.primary,
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
