import { Box } from "@mui/material";
import { brand } from "../../theme/brand";
import type { MediaAsset } from "../../data/media";

type FramedImageProps = {
  src: string;
  alt: string;
  side?: "left" | "right";
  maxWidth?: number;
  ratio?: string;
  fit?: MediaAsset["fit"];
};

export default function FramedImage({
  src,
  alt,
  maxWidth = 560,
  ratio = "4 / 3",
  fit = "contain",
}: FramedImageProps) {
  return (
    <Box
      sx={{
        maxWidth,
        pt: 1.5,
        borderTop: `2px solid ${brand.gold}`,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          display: "block",
          width: "100%",
          aspectRatio: ratio,
          objectFit: fit,
          backgroundColor: fit === "contain" ? brand.paperAlt : "transparent",
          p: fit === "contain" ? { xs: 4, md: 5 } : 0,
        }}
      />
    </Box>
  );
}
