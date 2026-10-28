import type { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import type { MediaAsset } from "../../data/media";
import { ease } from "../../utils/animations";

type SectionHeroProps = {
  title: string;
  subtitle?: string;
  image: MediaAsset;
  imageAlt?: string;
  children?: ReactNode;
};

/**
 * Hero de las páginas de sección (Arbitraje, JPRD y Conciliación). Replica el
 * lenguaje del HeroHome: imagen horizontal, velo navy, título y subtítulo.
 * Siempre lleva la ruta de navegación en la parte superior.
 */
export default function SectionHero({
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: SectionHeroProps) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        minHeight: { xs: 320, sm: 360, md: 420 },
        overflow: "hidden",
        backgroundColor: brand.primaryDeep,
      }}
    >
      <Box
        component="img"
        src={image.src}
        alt={imageAlt ?? image.alt}
        fetchPriority="high"
        decoding="async"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(180deg, rgba(9,35,84,0.76) 0%, rgba(9,35,84,0.92) 100%)",
            md: "linear-gradient(100deg, rgba(9,35,84,0.94) 0%, rgba(9,35,84,0.74) 55%, rgba(9,35,84,0.42) 100%)",
          },
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          pt: { xs: 3, md: 3.5 },
          pb: { xs: 4, md: 5 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={{
              maxWidth: 900,
              color: brand.white,
              fontSize: {
                xs: "clamp(2rem, 8vw, 2.7rem)",
                md: "clamp(2.5rem, 4.2vw, 3.4rem)",
              },
              textWrap: "balance",
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              sx={{
                mt: 2,
                maxWidth: 640,
                color: "rgba(255,255,255,0.84)",
                fontSize: { xs: "0.98rem", md: "1.06rem" },
                lineHeight: 1.72,
                textWrap: "pretty",
              }}
            >
              {subtitle}
            </Typography>
          )}

          {children && (
            <Box
              sx={{
                mt: 3,
                "& .MuiTypography-root": { color: brand.goldSoft },
              }}
            >
              {children}
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
}
