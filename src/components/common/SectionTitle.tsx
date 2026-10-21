import type { ReactNode } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import { fadeUp } from "../../utils/animations";

type SectionTitleProps = {
  children: ReactNode;
  centered?: boolean;
  light?: boolean;
  maxWidth?: number | string;
};

export default function SectionTitle({
  children,
  centered = false,
  light = false,
  maxWidth = 760,
}: SectionTitleProps) {
  return (
    <Typography
      component={motion.h2}
      variants={fadeUp}
      variant="h2"
      sx={{
        color: light ? brand.white : brand.primaryDark,
        maxWidth,
        mx: centered ? "auto" : 0,
        textAlign: centered ? "center" : "left",
        m: 0,
      }}
    >
      {children}
    </Typography>
  );
}
