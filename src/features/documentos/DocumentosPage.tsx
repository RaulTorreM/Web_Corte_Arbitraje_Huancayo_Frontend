import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SearchInput from "../../components/common/SearchInput";
import DocumentCard from "../../components/common/DocumentCard";
import EmptyState from "../../components/common/EmptyState";
import CtaBand from "../../components/common/CtaBand";
import { Stagger } from "../../components/common/Reveal";
import { brand } from "../../theme/brand";
import {
  CATEGORIA_LABEL,
  DOCUMENTOS,
  type DocumentoCategoria,
} from "../../data/documentos";

type FiltroCategoria = "todos" | DocumentoCategoria;

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const CATEGORIAS: FiltroCategoria[] = [
  "todos",
  "institucional",
  "arbitraje",
  "jprd",
];

export default function DocumentosPage() {
  const [categoria, setCategoria] = useState<FiltroCategoria>("todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = normalize(query);

    return DOCUMENTOS.filter((doc) => {
      const matchesCategoria =
        categoria === "todos" || doc.categoria === categoria;

      const matchesQuery =
        !term ||
        normalize(doc.titulo).includes(term) ||
        normalize(doc.descripcion).includes(term) ||
        normalize(doc.tipo).includes(term);

      return matchesCategoria && matchesQuery;
    });
  }, [categoria, query]);

  const clearFilters = () => {
    setCategoria("todos");
    setQuery("");
  };

  const countByCategoria = (value: FiltroCategoria) =>
    value === "todos"
      ? DOCUMENTOS.length
      : DOCUMENTOS.filter((doc) => doc.categoria === value).length;

  return (
    <>
      <PageMeta
        title="Documentos"
        description="Repositorio de reglamentos, apéndices, formatos y documentos institucionales de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Repositorio institucional"
        title="Documentos"
        subtitle="Reglamentos, apéndices, formatos y documentos institucionales. Los PDFs se publicarán cuando la institución entregue las versiones firmadas; los documentos de la JPRD son preliminares."
        crumbs={[{ label: "Documentos" }]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <Box component="section" sx={{ py: { xs: 6, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <Stack
            direction="row"
            spacing={1.2}
            sx={{
              mb: 2.5,
              p: 2,
              alignItems: "flex-start",
              backgroundColor: brand.skySoft,
              border: `1px solid ${brand.skyMid}`,
              borderLeft: `3px solid ${brand.gold}`,
            }}
          >
            <DescriptionOutlinedIcon sx={{ color: brand.primary, fontSize: "1.05rem", mt: "2px" }} />
            <Typography sx={{ color: brand.primary, fontSize: "0.82rem", lineHeight: 1.6 }}>
              Las descargas están marcadas como “Próximamente” mientras no exista
              el PDF oficial. Los documentos de la JPRD son borradores y no
              normativa vigente.
            </Typography>
          </Stack>

          <Box
            sx={{
              backgroundColor: brand.white,
              border: `1px solid ${brand.line}`,
              mb: 3,
            }}
          >
            <Tabs
              value={categoria}
              onChange={(_event, value: FiltroCategoria) => setCategoria(value)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                px: { xs: 1, md: 2 },
                borderBottom: `1px solid ${brand.line}`,
                "& .MuiTabs-indicator": {
                  backgroundColor: brand.gold,
                  height: 3,
                },
                "& .MuiTab-root": {
                  minHeight: 56,
                  px: { xs: 1.5, md: 2.2 },
                  color: brand.muted,
                  fontSize: { xs: "0.78rem", md: "0.84rem" },
                },
                "& .Mui-selected": {
                  color: brand.primaryDark,
                },
              }}
            >
              {CATEGORIAS.map((value) => (
                <Tab
                  key={value}
                  value={value}
                  label={
                    <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
                      <span>
                        {value === "todos"
                          ? "Todos"
                          : CATEGORIA_LABEL[value]}
                      </span>
                      <Box
                        component="span"
                        sx={{
                          fontSize: "0.66rem",
                          fontWeight: 700,
                          color:
                            categoria === value ? brand.goldDeep : brand.muted,
                          backgroundColor:
                            categoria === value
                              ? "rgba(186,153,7,0.12)"
                              : "rgba(45,73,121,0.06)",
                          px: 0.7,
                          py: 0.15,
                          borderRadius: "2px",
                        }}
                      >
                        {countByCategoria(value)}
                      </Box>
                    </Stack>
                  }
                />
              ))}
            </Tabs>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                p: { xs: 2, md: 2.5 },
                alignItems: { xs: "stretch", sm: "center" },
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ flex: 1, maxWidth: { sm: 440 } }}>
                <SearchInput
                  value={query}
                  onChange={setQuery}
                  placeholder="Buscar por título, tipo o descripción"
                  label="Buscar documentos"
                />
              </Box>

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <DescriptionOutlinedIcon
                  sx={{ fontSize: "1.05rem", color: brand.goldDeep }}
                />
                <Typography sx={{ fontSize: "0.82rem", color: brand.muted }}>
                  <Box component="span" sx={{ color: brand.primaryDark, fontWeight: 750 }}>
                    {filtered.length}
                  </Box>{" "}
                  documentos
                </Typography>

                {(categoria !== "todos" || query) && (
                  <Button
                    size="small"
                    onClick={clearFilters}
                    sx={{ fontSize: "0.76rem", color: brand.primary }}
                  >
                    Limpiar
                  </Button>
                )}
              </Stack>
            </Stack>
          </Box>

          {filtered.length === 0 ? (
            <EmptyState
              title="No encontramos documentos"
              text="Prueba con otro término de búsqueda o selecciona una categoría diferente."
              actionLabel="Ver todos los documentos"
              onAction={clearFilters}
            />
          ) : (
            <Stagger amount={0.08}>
              <Grid container spacing={{ xs: 2.5, md: 3 }}>
                {filtered.map((documento) => (
                  <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <DocumentCard documento={documento} />
                  </Grid>
                ))}
              </Grid>
            </Stagger>
          )}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{
              mt: 4,
              p: 2.5,
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              backgroundColor: brand.skySoft,
              border: `1px solid ${brand.skyMid}`,
              borderLeft: `3px solid ${brand.gold}`,
            }}
          >
            <Typography sx={{ color: brand.primary, fontSize: "0.85rem", lineHeight: 1.6 }}>
              ¿No encuentras el documento que buscas? La Secretaría General puede
              orientarte.
            </Typography>

            <Button
              component={RouterLink}
              to="/contacto"
              variant="text"
              size="small"
              sx={{ color: brand.primary, flexShrink: 0, fontSize: "0.8rem" }}
            >
              Contactar a la Corte
            </Button>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="¿Necesitas iniciar un procedimiento?"
        subtitle="Revisa los requisitos, los plazos y el derecho de presentación antes de acudir a la Secretaría General."
        primaryLabel="Cómo iniciar un arbitraje"
        primaryTo="/arbitraje/inicio"
        secondaryLabel="Ver reglamentos"
        secondaryTo="/arbitraje/reglamentos"
      />
    </>
  );
}
