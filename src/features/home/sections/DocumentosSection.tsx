import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand, fonts } from "../../../theme/brand";
import { DOCUMENTOS } from "../../../data/documentos";
import SectionHeading from "../../../components/common/SectionHeading";

const IDS = ["d-02", "d-07", "d-08", "d-09", "d-01"];

export default function DocumentosSection() {
  const documentos = IDS.map((id) => DOCUMENTOS.find((doc) => doc.id === id)).filter(
    (doc): doc is (typeof DOCUMENTOS)[number] => Boolean(doc)
  );

  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
      <Container>
        <SectionHeading
          kicker="Transparencia"
          title="La normativa, a la vista"
          subtitle="Reglamento, tarifas y formatos en un solo lugar. Las descargas estarán disponibles cuando la institución publique los PDFs definitivos."
        />

        <Box sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
          {documentos.map((doc, index) => (
            <Box
              key={doc.id}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "44px 1fr auto" },
                gap: { xs: 0.5, sm: 2 },
                alignItems: "center",
                py: 2,
                borderBottom: `1px solid ${brand.line}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: fonts.display,
                  color: brand.goldDeep,
                  fontSize: "0.95rem",
                  display: { xs: "none", sm: "block" },
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>

              <Box>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.94rem" }}>
                  {doc.titulo}
                </Typography>
                <Typography sx={{ mt: 0.25, color: brand.muted, fontSize: "0.76rem" }}>
                  {doc.tipo} · Versión {doc.version} · {doc.peso}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: brand.muted,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  justifySelf: { xs: "start", sm: "end" },
                }}
              >
                Próximamente
              </Typography>
            </Box>
          ))}
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 3.5, alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between" }}
        >
          <Typography sx={{ color: brand.muted, fontSize: "0.8rem", maxWidth: 520 }}>
            También puedes revisar el catálogo completo de documentos institucionales,
            arbitraje y JPRD.
          </Typography>

          <Button
            component={RouterLink}
            to="/documentos"
            variant="text"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
            sx={{ px: 0, flexShrink: 0 }}
          >
            Ver todos los documentos
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
