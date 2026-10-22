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
        position: "sticky",
        top: { xs: 68, md: 78 },
        zIndex: 1000,
        backgroundColor: "rgba(233,223,202,0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${brand.line}`,
      }}
    >
      <Container>
        <Stack
          direction="row"
          spacing={{ xs: 2.2, md: 3.2 }}
          sx={{
            minHeight: 52,
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
                aria-current={active ? "page" : undefined}
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  flexShrink: 0,
                  color: active ? brand.primaryDeep : brand.muted,
                  fontSize: "0.78rem",
                  fontWeight: active ? 700 : 500,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.18s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -1,
                    height: 2,
                    backgroundColor: brand.gold,
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.2s ease",
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
