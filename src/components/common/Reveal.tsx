import type { ReactNode } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { motion, type Variants } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../utils/animations";

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  sx?: SxProps<Theme>;
  id?: string;
};

export default function Reveal({
  children,
  variants = fadeUp,
  delay,
  sx,
  id,
}: RevealProps) {
  return (
    <Box
      id={id}
      component={motion.div}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      sx={sx}
    >
      {children}
    </Box>
  );
}

type StaggerProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
  id?: string;
  amount?: number;
};

export function Stagger({
  children,
  sx,
  id,
  amount = 0.18,
}: StaggerProps) {
  return (
    <Box
      id={id}
      component={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      sx={sx}
    >
      {children}
    </Box>
  );
}
