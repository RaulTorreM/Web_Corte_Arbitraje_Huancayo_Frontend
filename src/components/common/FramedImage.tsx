import { Box } from "@mui/material";
import { brand } from "../../theme/brand";

type FramedImageProps = {
  src: string;
  alt: string;
  side?: "left" | "right";
  maxWidth?: number;
  ratio?: string;
};

export default function FramedImage({
  src,
  alt,
  maxWidth = 560,
  ratio = "4 / 3",
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
          objectFit: "cover",
          backgroundColor: brand.paperAlt,
        }}
      />
    </Box>
  );
}
