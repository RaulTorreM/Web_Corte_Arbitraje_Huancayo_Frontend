import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { brand } from "../../theme/brand";

type ClauseBlockProps = {
  title: string;
  description?: string;
  clause: string;
  note?: string;
};

const copyText = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

export default function ClauseBlock({
  title,
  description,
  clause,
  note,
}: ClauseBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyText(clause);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Box
      component="article"
      sx={{
        borderTop: `2px solid ${brand.primary}`,
        backgroundColor: brand.whiteSoft,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          px: { xs: 2.5, md: 3.5 },
          py: 2.5,
          borderBottom: `1px solid ${brand.line}`,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ color: brand.primaryDeep, fontSize: "1.12rem" }}>
            {title}
          </Typography>

          {description && (
            <Typography sx={{ mt: 0.7, color: brand.muted, fontSize: "0.86rem" }}>
              {description}
            </Typography>
          )}
        </Box>

        <Button
          onClick={handleCopy}
          variant={copied ? "contained" : "outlined"}
          color={copied ? "success" : "primary"}
          size="small"
          startIcon={
            copied ? (
              <CheckOutlinedIcon sx={{ fontSize: 16 }} />
            ) : (
              <ContentCopyOutlinedIcon sx={{ fontSize: 16 }} />
            )
          }
          sx={{ flexShrink: 0, fontSize: "0.76rem" }}
        >
          {copied ? "Copiado" : "Copiar texto"}
        </Button>
      </Stack>

      <Box
        sx={{
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 3, md: 4 },
          backgroundColor: brand.white,
          borderLeft: `3px solid ${brand.gold}`,
        }}
      >
        <Typography
          component="pre"
          sx={{
            margin: 0,
            fontFamily: '"Public Sans", "Segoe UI", Roboto, sans-serif',
            fontSize: { xs: "0.86rem", md: "0.94rem" },
            lineHeight: 1.85,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            color: brand.ink,
          }}
        >
          {clause}
        </Typography>
      </Box>

      {note && (
        <Box sx={{ px: { xs: 2.5, md: 3.5 }, py: 2 }}>
          <Typography sx={{ color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}>
            {note}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
