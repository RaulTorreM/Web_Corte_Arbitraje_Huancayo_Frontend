import type { ReactNode } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import type { MediaAsset } from "../../data/media";
import { ease } from "../../utils/animations";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type PageHeroProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  image?: MediaAsset;
  imageAlt?: string;
  children?: ReactNode;
};

export default function PageHero({
  kicker,
  title,
  subtitle,
  crumbs,
  image,
  imageAlt = "",
  children,
}: PageHeroProps) {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: brand.paper,
        borderBottom: `1px solid ${brand.line}`,
      }}
    >
      <Container sx={{ pt: { xs: 2.5, md: 3.5 }, pb: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
            mb: { xs: 4, md: 5.5 },
          }}
        >
          <Breadcrumbs items={crumbs} light={false} />
          <Typography
            sx={{
              color: brand.goldInk,
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {kicker}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-end" }}>
          <Grid size={{ xs: 12, md: image ? 7 : 9 }}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "clamp(2.15rem, 10vw, 3rem)",
                    md: "clamp(2.8rem, 4.7vw, 4.2rem)",
                  },
                  maxWidth: 820,
                  color: brand.primaryDeep,
                }}
              >
                {title}
              </Typography>

              {subtitle && (
                <Typography
                  sx={{
                    mt: 2.5,
                    maxWidth: 660,
                    color: brand.muted,
                    fontSize: { xs: "0.98rem", md: "1.06rem" },
                    lineHeight: 1.72,
                  }}
                >
                  {subtitle}
                </Typography>
              )}

              {children && <Box sx={{ mt: 3.5 }}>{children}</Box>}
            </motion.div>
          </Grid>

          {image && (
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
                sx={{
                  position: "relative",
                  borderTop: `2px solid ${brand.gold}`,
                  pt: 1.5,
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={imageAlt ?? image.alt}
                  fetchPriority="high"
                  sx={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: image.fit,
                    backgroundColor:
                      image.fit === "contain" ? brand.paperAlt : "transparent",
                    p: image.fit === "contain" ? { xs: 4, md: 5 } : 0,
                  }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
