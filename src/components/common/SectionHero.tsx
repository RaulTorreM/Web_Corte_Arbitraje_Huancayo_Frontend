import type { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import type { MediaAsset } from "../../data/media";
import { ease } from "../../utils/animations";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type SectionHeroProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
  crumbs: Crumb[];
  image: MediaAsset;
  imageAlt?: string;
  imagePosition?: string;
  imageInset?: false | "strong" | "soft";
  align?: "left" | "center";
  children?: ReactNode;
};

/**
 * Hero de las páginas de sección (Arbitraje, JPRD y Conciliación). Replica el
 * lenguaje del HeroHome: imagen horizontal, velo navy, título y subtítulo.
 * La ruta de navegación se superpone al inicio de la fotografía.
 */
export default function SectionHero({
  title,
  subtitle,
  kicker,
  crumbs,
  image,
  imageAlt,
  imagePosition = "center",
  imageInset = false,
  align = "left",
  children,
}: SectionHeroProps) {
  const centered = align === "center";

  const insetStyles =
    imageInset === "strong"
      ? {
          left: { xs: 0, sm: "6%", md: "12%" },
          width: { xs: "100%", sm: "88%", md: "76%" },
          mask: {
            xs: "none",
            sm: "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
            md: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          },
        }
      : imageInset === "soft"
        ? {
            left: { xs: 0, sm: "2%", md: "3%" },
            width: { xs: "100%", sm: "96%", md: "94%" },
            mask: {
              xs: "none",
              sm: "linear-gradient(90deg, transparent 0%, #000 2%, #000 98%, transparent 100%)",
              md: "linear-gradient(90deg, transparent 0%, #000 3%, #000 97%, transparent 100%)",
            },
          }
        : null;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: centered ? "center" : "flex-end",
        minHeight: { xs: 380, sm: 420, md: 480 },
        overflow: "hidden",
        backgroundColor: brand.primaryDeep,
      }}
    >
      {imageInset && (
        <Box
          component="img"
          src={image.src}
          alt=""
          aria-hidden="true"
          decoding="async"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: imagePosition,
            filter: "blur(12px) brightness(0.95)",
            transform: "scale(1.03)",
            display: { xs: "none", sm: "block" },
          }}
        />
      )}

      <Box
        component="img"
        src={image.src}
        alt={imageAlt ?? image.alt}
        fetchPriority="high"
        decoding="async"
        sx={{
          position: "absolute",
          top: 0,
          left: insetStyles?.left ?? 0,
          width: insetStyles?.width ?? "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: imagePosition,
          maskImage: insetStyles?.mask,
          WebkitMaskImage: insetStyles?.mask,
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          background: centered
            ? "linear-gradient(180deg, rgba(9,35,84,0.64) 0%, rgba(9,35,84,0.32) 48%, rgba(9,35,84,0.72) 100%)"
            : {
                xs: "linear-gradient(180deg, rgba(9,35,84,0.76) 0%, rgba(9,35,84,0.92) 100%)",
                md: "linear-gradient(100deg, rgba(9,35,84,0.94) 0%, rgba(9,35,84,0.74) 55%, rgba(9,35,84,0.42) 100%)",
              },
        }}
      />

      <Container
        sx={{
          position: "absolute",
          top: { xs: 2.2, md: 2.8 },
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <Breadcrumbs items={crumbs} light />
      </Container>

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          pt: centered ? { xs: 6, md: 7 } : { xs: 3, md: 3.5 },
          pb: centered ? { xs: 6, md: 7 } : { xs: 4, md: 5 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          style={centered ? { width: "100%", textAlign: "center" } : undefined}
        >
          {kicker && (
            <Typography
              sx={{
                mb: 1.5,
                color: brand.goldSoft,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {kicker}
            </Typography>
          )}

          <Typography
            component="h1"
            variant="h1"
            sx={{
              maxWidth: 900,
              mx: centered ? "auto" : 0,
              color: brand.white,
              fontSize: {
                xs: "clamp(2rem, 8vw, 2.7rem)",
                md: "clamp(2.5rem, 4.2vw, 3.4rem)",
              },
              textAlign: centered ? "center" : "left",
              textWrap: "balance",
              textShadow: centered
                ? "0 2px 24px rgba(9,35,84,0.85), 0 1px 3px rgba(9,35,84,0.65)"
                : undefined,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              sx={{
                mt: 2,
                maxWidth: 640,
                mx: centered ? "auto" : 0,
                color: "rgba(255,255,255,0.84)",
                fontSize: { xs: "0.98rem", md: "1.06rem" },
                lineHeight: 1.72,
                textAlign: centered ? "center" : "left",
                textWrap: "pretty",
                textShadow: centered
                  ? "0 2px 18px rgba(9,35,84,0.8), 0 1px 2px rgba(9,35,84,0.55)"
                  : undefined,
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
