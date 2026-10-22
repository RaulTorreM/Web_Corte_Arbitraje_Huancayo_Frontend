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
      spacing={compact ? 1 : 1.3}
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
          width: compact ? 38 : { xs: 42, md: 48 },
          height: compact ? 38 : { xs: 42, md: 48 },
          objectFit: "contain",
          display: "block",
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: compact ? "0.48rem" : "0.55rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
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
            fontSize: compact ? "0.92rem" : { xs: "0.98rem", md: "1.08rem" },
            fontWeight: 600,
            letterSpacing: "-0.012em",
            color: light ? brand.white : brand.primaryDark,
            whiteSpace: "nowrap",
          }}
        >
          de Arbitraje
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: compact ? "0.49rem" : "0.55rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: light ? "rgba(255,255,255,0.66)" : brand.muted,
            textTransform: "uppercase",
            mt: 0.45,
          }}
        >
          Huancayo · Junín
        </Typography>
      </Box>
    </Stack>
  );
}
