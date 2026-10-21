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
  side = "left",
  maxWidth = 560,
  ratio = "4 / 3",
}: FramedImageProps) {
  const isLeft = side === "left";

  return (
    <Box
      sx={{
        position: "relative",
        pl: isLeft ? { xs: 1.5, md: 2.5 } : 0,
        pr: isLeft ? 0 : { xs: 1.5, md: 2.5 },
        maxWidth,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 18,
          left: isLeft ? 0 : "auto",
          right: isLeft ? "auto" : 0,
          width: "88%",
          height: "calc(100% - 18px)",
          border: `1px solid ${brand.gold}`,
          opacity: 0.55,
          pointerEvents: "none",
        },
        "&:hover .framed-image": {
          transform: "scale(1.015)",
          filter: "grayscale(0%)",
        },
      }}
    >
      <Box
        className="framed-image"
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "block",
          width: "100%",
          aspectRatio: ratio,
          objectFit: "cover",
          backgroundColor: brand.paperAlt,
          filter: "grayscale(8%)",
          boxShadow: "0 18px 44px rgba(18,35,61,0.14)",
          transition: "transform 0.5s ease, filter 0.5s ease",
        }}
      />
    </Box>
  );
}
