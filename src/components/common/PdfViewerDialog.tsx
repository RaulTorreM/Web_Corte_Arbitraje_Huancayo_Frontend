import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { brand, fonts } from "../../theme/brand";

type PdfViewerDialogProps = {
  open: boolean;
  title: string;
  url: string;
  onClose: () => void;
};

/**
 * Visor de PDF dentro de la página. Evita sacar al usuario del sitio y deja
 * siempre a mano la descarga y la apertura en una pestaña nueva como respaldo
 * para navegadores móviles que no incrustan PDF.
 */
export default function PdfViewerDialog({
  open,
  title,
  url,
  onClose,
}: PdfViewerDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      aria-labelledby="pdf-viewer-title"
      slotProps={{
        paper: {
          sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: brand.paper,
          },
        },
      }}
    >
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          backgroundColor: brand.primaryDeep,
          borderBottom: `2px solid ${brand.gold}`,
          color: brand.white,
        }}
      >
        <Toolbar
          sx={{
            gap: { xs: 0.5, sm: 1.5 },
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, md: 3 },
          }}
        >
          <Typography
            id="pdf-viewer-title"
            component="h2"
            sx={{
              flex: 1,
              minWidth: 0,
              color: brand.white,
              fontFamily: fonts.display,
              fontWeight: 600,
              fontSize: { xs: "0.98rem", sm: "1.1rem" },
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>

          <Button
            component="a"
            href={url}
            download
            startIcon={<DownloadOutlinedIcon sx={{ fontSize: 17 }} />}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              flexShrink: 0,
              color: brand.goldSoft,
              "&:hover": { color: brand.white },
            }}
          >
            Descargar
          </Button>

          <IconButton
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir el documento en una pestaña nueva"
            sx={{
              display: { xs: "inline-flex", sm: "none" },
              color: brand.goldSoft,
              flexShrink: 0,
            }}
          >
            <OpenInNewIcon />
          </IconButton>

          <IconButton
            onClick={onClose}
            aria-label="Cerrar el visor"
            sx={{ color: brand.white, flexShrink: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          p: { xs: 0, sm: 1.5 },
          backgroundColor: brand.paper,
        }}
      >
        {open && (
          <Box
            component="iframe"
            title={title}
            src={url}
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              border: 0,
              backgroundColor: brand.white,
            }}
          />
        )}
      </Box>
    </Dialog>
  );
}
