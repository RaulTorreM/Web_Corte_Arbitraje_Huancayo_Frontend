import { Box, Container, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { brand } from "../../theme/brand";
import type { NavChild } from "../../data/navigation";

type SectionSubnavProps = {
  items: NavChild[];
  ariaLabel: string;
};

export default function SectionSubnav({
  items,
  ariaLabel,
}: SectionSubnavProps) {
  const { pathname } = useLocation();

  return (
    <Box
      component="nav"
      aria-label={ariaLabel}
      sx={{
        backgroundColor: brand.white,
        borderBottom: `1px solid ${brand.line}`,
        boxShadow: "0 4px 14px rgba(18,35,61,0.035)",
      }}
    >
      <Container>
        <Stack
          direction="row"
          spacing={{ xs: 2.2, md: 3.4 }}
          sx={{
            minHeight: 54,
            alignItems: "stretch",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {items.map((item) => {
            const active = pathname === item.to;

            return (
              <Box
                key={item.to}
                component={RouterLink}
                to={item.to}
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  flexShrink: 0,
                  color: active ? brand.primaryDark : brand.muted,
                  fontSize: { xs: "0.78rem", md: "0.82rem" },
                  fontWeight: active ? 750 : 500,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 3,
                    backgroundColor: brand.gold,
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.25s ease",
                  },
                  "&:hover": {
                    color: brand.primary,
                    "&::after": { transform: "scaleX(1)" },
                  },
                }}
              >
                {item.label}
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
