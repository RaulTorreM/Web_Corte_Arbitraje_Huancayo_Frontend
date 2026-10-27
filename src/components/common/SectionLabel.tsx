import type { ReactNode } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import { fadeUpFast } from "../../utils/animations";

type SectionLabelProps = {
  children: ReactNode;
  centered?: boolean;
  light?: boolean;
};

export default function SectionLabel({
  children,
  centered = false,
  light = false,
}: SectionLabelProps) {
  return (
    <Typography
      component={motion.p}
      variants={fadeUpFast}
      sx={{
        color: light ? brand.goldSoft : brand.goldInk,
        fontWeight: 750,
        fontSize: "0.74rem",
        letterSpacing: "0.17em",
        textTransform: "uppercase",
        mb: 1.4,
        m: 0,
        textAlign: centered ? "center" : "left",
      }}
    >
      {children}
    </Typography>
  );
}
