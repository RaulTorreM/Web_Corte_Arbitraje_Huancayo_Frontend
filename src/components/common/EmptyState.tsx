import { Box, Button, Typography } from "@mui/material";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";
import { brand } from "../../theme/brand";

type EmptyStateProps = {
  title: string;
  text: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  title,
  text,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: 3,
        textAlign: "center",
        border: `1px dashed ${brand.line}`,
        backgroundColor: "rgba(234,242,251,0.45)",
      }}
    >
      <SearchOffOutlinedIcon
        sx={{ fontSize: 42, color: brand.primaryLight, mb: 1.5 }}
      />

      <Typography variant="h4" sx={{ color: brand.primaryDark, mb: 1 }}>
        {title}
      </Typography>

      <Typography sx={{ color: brand.muted, fontSize: "0.92rem", mb: 2.5 }}>
        {text}
      </Typography>

      {actionLabel && onAction && (
        <Button variant="outlined" color="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Box>
  );
}
