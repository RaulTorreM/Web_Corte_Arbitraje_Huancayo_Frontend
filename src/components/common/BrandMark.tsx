import { Box, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/brand/logo-corte.png";
import { brand, fonts } from "../../theme/brand";

type BrandMarkProps = {
  light?: boolean;
  compact?: boolean;
  onClick?: () => void;
};

export default function BrandMark({
  light = false,
  compact = false,
  onClick,
}: BrandMarkProps) {
  return (
    <Stack
      component={RouterLink}
      to="/"
      onClick={onClick}
      direction="row"
      spacing={1.4}
      sx={{
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Sello de la Corte Superior de Arbitraje de Huancayo"
        sx={{
          width: compact ? 44 : { xs: 46, md: 56 },
          height: compact ? 44 : { xs: 46, md: 56 },
          objectFit: "contain",
          display: "block",
          filter: "drop-shadow(0 4px 10px rgba(18,35,61,0.18))",
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: compact ? "0.52rem" : "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.19em",
            color: light ? brand.goldSoft : brand.goldDeep,
            textTransform: "uppercase",
            mb: 0.45,
          }}
        >
          Corte Superior
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.display,
            fontSize: compact ? "0.95rem" : { xs: "1rem", md: "1.12rem" },
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: light ? brand.white : brand.primaryDark,
            whiteSpace: "nowrap",
          }}
        >
          de Arbitraje
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: compact ? "0.55rem" : "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: light ? "rgba(255,255,255,0.62)" : brand.muted,
            textTransform: "uppercase",
            mt: 0.4,
          }}
        >
          de Huancayo
        </Typography>
      </Box>
    </Stack>
  );
}
