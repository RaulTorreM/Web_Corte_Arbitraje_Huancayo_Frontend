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
        py: { xs: 5, md: 7 },
        px: 3,
        textAlign: "center",
        borderTop: `1px solid ${brand.line}`,
        borderBottom: `1px solid ${brand.line}`,
      }}
    >
      <SearchOffOutlinedIcon sx={{ fontSize: 34, color: brand.lineStrong, mb: 1.2 }} />

      <Typography variant="h4" sx={{ color: brand.primaryDeep, mb: 0.8 }}>
        {title}
      </Typography>

      <Typography sx={{ color: brand.muted, fontSize: "0.9rem", mb: 2.2 }}>
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
