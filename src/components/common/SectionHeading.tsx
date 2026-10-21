import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import { fadeUpFast, staggerContainer, viewportOnce } from "../../utils/animations";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
  light?: boolean;
  maxWidth?: number | string;
  sx?: Record<string, unknown>;
};

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  centered = false,
  light = false,
  maxWidth = 780,
  sx,
}: SectionHeadingProps) {
  return (
    <Box
      component={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      sx={{
        mb: { xs: 4.5, md: 6 },
        maxWidth,
        mx: centered ? "auto" : 0,
        textAlign: centered ? "center" : "left",
        ...sx,
      }}
    >
      <SectionLabel centered={centered} light={light}>
        {kicker}
      </SectionLabel>

      <SectionTitle centered={centered} light={light} maxWidth="100%">
        {title}
      </SectionTitle>

      {subtitle && (
        <Typography
          component={motion.p}
          variants={fadeUpFast}
          sx={{
            color: light ? "rgba(255,255,255,0.74)" : brand.muted,
            mt: 2.2,
            mb: 0,
            fontSize: { xs: "0.98rem", md: "1.05rem" },
            lineHeight: 1.8,
            maxWidth: 680,
            mx: centered ? "auto" : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
