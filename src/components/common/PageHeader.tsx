import type { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";
import { brand } from "../../theme/brand";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

/**
 * Cabecera simple para páginas internas: ruta de navegación, título e
 * introducción breve. Sin imagen ni hero.
 */
export default function PageHeader({
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: brand.paper,
        borderBottom: `1px solid ${brand.line}`,
      }}
    >
      <Container sx={{ pt: { xs: 2.5, md: 3 }, pb: { xs: 4, md: 5 } }}>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            maxWidth: 900,
            color: brand.primaryDeep,
            fontSize: {
              xs: "clamp(2.1rem, 8.4vw, 2.9rem)",
              md: "clamp(2.8rem, 4.5vw, 4rem)",
            },
            textWrap: "balance",
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              mt: 1.8,
              maxWidth: 720,
              color: brand.muted,
              fontSize: { xs: "0.96rem", md: "1.04rem" },
              lineHeight: 1.72,
              textWrap: "pretty",
            }}
          >
            {subtitle}
          </Typography>
        )}

        {children && <Box sx={{ mt: 2.8 }}>{children}</Box>}
      </Container>
    </Box>
  );
}
