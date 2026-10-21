import type { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand, fonts } from "../../theme/brand";
import { ease } from "../../utils/animations";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import seal from "../../assets/brand/logo-corte.png";

type PageHeroProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  image?: string;
  children?: ReactNode;
};

export default function PageHero({
  kicker,
  title,
  subtitle,
  crumbs,
  image,
  children,
}: PageHeroProps) {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: brand.primaryDeep,
        color: brand.white,
        borderBottom: `3px solid ${brand.gold}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(900px 420px at 12% 0%, rgba(157,196,239,0.18), transparent 65%),
            radial-gradient(700px 380px at 92% 100%, rgba(186,153,7,0.12), transparent 60%)`,
        }}
      />

      {image && (
        <Box
          aria-hidden
          component="img"
          src={image}
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: "100%", md: "46%" },
            height: "100%",
            objectFit: "cover",
            opacity: { xs: 0.12, md: 0.24 },
            filter: "grayscale(35%)",
            maskImage: {
              xs: "linear-gradient(to bottom, transparent, black 45%, transparent)",
              md: "linear-gradient(to right, transparent, black 55%)",
            },
            WebkitMaskImage: {
              xs: "linear-gradient(to bottom, transparent, black 45%, transparent)",
              md: "linear-gradient(to right, transparent, black 55%)",
            },
          }}
        />
      )}

      <Box
        aria-hidden
        component="img"
        src={seal}
        alt=""
        sx={{
          position: "absolute",
          right: { xs: "-18%", md: "-4%" },
          bottom: { xs: "-45%", md: "-35%" },
          width: { xs: 420, md: 520 },
          opacity: 0.06,
          display: { xs: "none", sm: "block" },
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", py: { xs: 6.5, md: 9 } }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Breadcrumbs items={crumbs} />
        </motion.div>

        <Box
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          sx={{ maxWidth: 930 }}
        >
          <Box
            component={motion.div}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease },
              },
            }}
            sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
          >
            <Box sx={{ width: 34, height: 3, backgroundColor: brand.gold }} />
            <Typography
              sx={{
                color: brand.goldSoft,
                fontSize: "0.72rem",
                fontWeight: 750,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {kicker}
            </Typography>
          </Box>

          <Typography
            component={motion.h1}
            variant="h1"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease },
              },
            }}
            sx={{
              fontFamily: fonts.display,
              fontSize: { xs: "2.3rem", sm: "2.9rem", md: "3.5rem" },
              maxWidth: 880,
              color: brand.white,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              component={motion.p}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.08, ease },
                },
              }}
              sx={{
                mt: 2.5,
                maxWidth: 720,
                color: "rgba(255,255,255,0.74)",
                fontSize: { xs: "0.98rem", md: "1.06rem" },
                lineHeight: 1.8,
              }}
            >
              {subtitle}
            </Typography>
          )}

          {children && (
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.14, ease },
                },
              }}
              sx={{ mt: 3.5 }}
            >
              {children}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
