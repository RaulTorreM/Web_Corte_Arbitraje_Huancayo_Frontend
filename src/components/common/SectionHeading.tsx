import type { ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
  light?: boolean;
  stacked?: boolean;
  maxWidth?: number | string;
  sx?: Record<string, unknown>;
};

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  centered = false,
  light = false,
  stacked = false,
  maxWidth = 820,
  sx,
}: SectionHeadingProps) {
  const titleColor = light ? brand.white : brand.primaryDeep;
  const subtitleColor = light ? "rgba(255,255,255,0.72)" : brand.muted;
  const ruleColor = light ? "rgba(255,255,255,0.24)" : brand.lineStrong;
  const kickerColor = light ? "rgba(255,255,255,0.62)" : brand.goldDeep;

  if (centered) {
    return (
      <Box
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        sx={{
          mb: { xs: 4, md: 5.5 },
          pt: 2.5,
          maxWidth,
          mx: "auto",
          textAlign: "center",
          borderTop: `1px solid ${ruleColor}`,
          ...sx,
        }}
      >
        <Typography
          component={motion.p}
          variants={fadeUp}
          sx={{
            mb: 1.2,
            color: kickerColor,
            fontSize: "0.64rem",
            fontWeight: 700,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
          }}
        >
          {kicker}
        </Typography>

        <Typography
          component={motion.h2}
          variants={fadeUp}
          variant="h2"
          sx={{ color: titleColor, maxWidth: 760, mx: "auto" }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            component={motion.p}
            variants={fadeUp}
            sx={{
              mt: 2,
              mx: "auto",
              maxWidth: 620,
              color: subtitleColor,
              fontSize: "0.98rem",
              lineHeight: 1.72,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <Box
      component={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      sx={{
        mb: { xs: 4, md: 5.5 },
        pt: { xs: 2, md: 2.5 },
        borderTop: `1px solid ${ruleColor}`,
        ...sx,
      }}
    >
      <Grid container spacing={{ xs: 2, md: 5 }} sx={{ alignItems: "end" }}>
        <Grid size={{ xs: 12, md: stacked ? 12 : subtitle ? 7.5 : 10 }}>
          <Typography
            component={motion.p}
            variants={fadeUp}
            sx={{
              mb: 1.2,
              color: kickerColor,
              fontSize: "0.64rem",
              fontWeight: 700,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
            }}
          >
            {kicker}
          </Typography>

          <Typography
            component={motion.h2}
            variants={fadeUp}
            variant="h2"
            sx={{ color: titleColor, maxWidth }}
          >
            {title}
          </Typography>
        </Grid>

        {subtitle && (
          <Grid size={{ xs: 12, md: stacked ? 12 : 4.5 }}>
            <Typography
              component={motion.p}
              variants={fadeUp}
              sx={{
                mt: stacked ? 1.6 : 0,
                color: subtitleColor,
                fontSize: "0.95rem",
                lineHeight: 1.72,
                maxWidth: stacked ? 680 : 430,
                ml: stacked ? 0 : { md: "auto" },
              }}
            >
              {subtitle}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
