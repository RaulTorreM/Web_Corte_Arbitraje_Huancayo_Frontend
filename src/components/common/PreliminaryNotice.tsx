import { Box, Container, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { brand } from "../../theme/brand";

type PreliminaryNoticeProps = {
  title?: string;
  text?: string;
  contained?: boolean;
};

/**
 * Aviso visible para contenido en borrador o no vigente. Por defecto usa el
 * texto de la JPRD, que se anuncia en el Estatuto pero aún no tiene reglamento,
 * aranceles ni cláusulas aprobadas.
 */
export default function PreliminaryNotice({
  title = "Página Borrador",
  text = "Esta sección es un borrador de trabajo. Los documentos, montos y perfiles que aparecen aquí necesitan ser reemplazados por datos reales.",
  contained = true,
}: PreliminaryNoticeProps) {
  const content = (
    <Stack
      direction="row"
      spacing={1.4}
      sx={{
        p: { xs: 2.2, md: 2.6 },
        alignItems: "flex-start",
        backgroundColor: brand.whiteSoft,
        borderTop: `2px solid ${brand.accent}`,
        borderBottom: `1px solid ${brand.line}`,
      }}
    >
      <InfoOutlinedIcon sx={{ color: brand.accent, fontSize: 19, mt: "2px" }} />
      <Box>
        <Typography
          sx={{
            color: brand.primaryDeep,
            fontWeight: 700,
            fontSize: "0.82rem",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ mt: 0.5, color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
          {text}
        </Typography>
      </Box>
    </Stack>
  );

  if (!contained) return content;

  return (
    <Box component="section" sx={{ pt: { xs: 3, md: 4 }, backgroundColor: brand.paper }}>
      <Container>{content}</Container>
    </Box>
  );
}
