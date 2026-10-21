import { Box, CircularProgress, Typography } from "@mui/material";
import { brand } from "../../theme/brand";

export default function PageFallback() {
  return (
    <Box
      sx={{
        minHeight: "58vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        backgroundColor: brand.paper,
      }}
      role="status"
      aria-live="polite"
    >
      <CircularProgress
        size={30}
        thickness={3}
        sx={{ color: brand.gold }}
        aria-hidden
      />

      <Typography
        sx={{
          color: brand.muted,
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Cargando contenido
      </Typography>
    </Box>
  );
}
