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
      spacing={compact ? 0.9 : { xs: 0.9, sm: 1, md: 1.15 }}
      sx={{
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Sello de la Corte Superior de Arbitraje de Huancayo"
        sx={{
          width: compact ? 44 : { xs: 46, sm: 54, md: 62 },
          height: compact ? 44 : { xs: 46, sm: 54, md: 62 },
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: compact ? "0.53rem" : { xs: "0.55rem", md: "0.6rem" },
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "0.17em",
            color: light ? brand.goldSoft : brand.goldDeep,
            textTransform: "uppercase",
            mb: compact ? 0.35 : { xs: 0.3, md: 0.4 },
          }}
        >
          Corte Superior
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.display,
            fontSize: compact ? "1.02rem" : { xs: "1.06rem", md: "1.24rem" },
            fontWeight: 600,
            lineHeight: 1.05,
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
            fontSize: compact ? "0.53rem" : { xs: "0.55rem", md: "0.6rem" },
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "0.15em",
            color: light ? "rgba(255,255,255,0.66)" : brand.muted,
            textTransform: "uppercase",
            mt: compact ? 0.35 : { xs: 0.3, md: 0.4 },
          }}
        >
          Huancayo · Junín
        </Typography>
      </Box>
    </Stack>
  );
}
