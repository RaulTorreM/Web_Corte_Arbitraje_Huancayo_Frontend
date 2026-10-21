import { Box, Button, Stack, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { brand } from "../../theme/brand";
import { ease } from "../../utils/animations";

type FormSuccessProps = {
  title: string;
  text: string;
  code?: string;
  onReset: () => void;
  resetLabel?: string;
};

export default function FormSuccess({
  title,
  text,
  code,
  onReset,
  resetLabel = "Enviar otra solicitud",
}: FormSuccessProps) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease }}
      sx={{
        px: { xs: 2.5, md: 5 },
        py: { xs: 5, md: 7 },
        textAlign: "center",
        backgroundColor: brand.white,
        border: `1px solid ${brand.line}`,
        borderTop: `4px solid ${brand.gold}`,
      }}
    >
      <Box
        sx={{
          width: 68,
          height: 68,
          mx: "auto",
          mb: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "rgba(186,153,7,0.12)",
          color: brand.goldDeep,
        }}
      >
        <CheckCircleOutlinedIcon sx={{ fontSize: "2.1rem" }} />
      </Box>

      <Typography variant="h3" sx={{ color: brand.primaryDark, mb: 1.5 }}>
        {title}
      </Typography>

      <Typography
        sx={{
          color: brand.muted,
          fontSize: "0.95rem",
          lineHeight: 1.8,
          maxWidth: 520,
          mx: "auto",
        }}
      >
        {text}
      </Typography>

      {code && (
        <Box
          sx={{
            mt: 3,
            mx: "auto",
            maxWidth: 330,
            px: 2.5,
            py: 1.8,
            backgroundColor: brand.skySoft,
            border: `1px solid ${brand.skyMid}`,
          }}
        >
          <Typography
            sx={{
              color: brand.muted,
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Código de seguimiento
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              color: brand.primaryDark,
              fontWeight: 750,
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
            }}
          >
            {code}
          </Typography>
        </Box>
      )}

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ mt: 4, justifyContent: "center" }}
      >
        <Button variant="contained" onClick={onReset}>
          {resetLabel}
        </Button>

        <Button component={RouterLink} to="/" variant="outlined">
          Volver al inicio
        </Button>
      </Stack>
    </Box>
  );
}
