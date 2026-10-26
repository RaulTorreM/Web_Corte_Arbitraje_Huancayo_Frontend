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
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SearchInput from "../../components/common/SearchInput";
import DocumentCard from "../../components/common/DocumentCard";
import EmptyState from "../../components/common/EmptyState";
import { brand } from "../../theme/brand";
import {
  CATEGORIA_LABEL,
  DOCUMENTOS,
  type DocumentoCategoria,
} from "../../data/documentos";
import { MEDIA } from "../../data/media";

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
        subtitle="Consulta los reglamentos, formatos y documentos institucionales disponibles."
        crumbs={[{ label: "Documentos" }]}
        image={MEDIA.documentos}
      />

      <Box component="section" sx={{ py: { xs: 6, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <Stack
            direction="row"
            spacing={1.4}
            sx={{
              mb: 4,
              py: 2,
              alignItems: "flex-start",
              borderTop: `1px solid ${brand.lineStrong}`,
              borderBottom: `1px solid ${brand.line}`,
            }}
          >
            <Box sx={{ width: 5, height: 5, backgroundColor: brand.goldDeep, mt: "8px", flexShrink: 0 }} />
            <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
              Las descargas disponibles son versiones de trabajo en DOCX. Los
              documentos sin archivo fuente aparecen como “Próximamente”. Los
              documentos de la JPRD son borradores y no normativa vigente.
            </Typography>
          </Stack>

          <Box sx={{ borderBottom: `1px solid ${brand.lineStrong}`, mb: 2.5 }}>
            <Tabs
              value={categoria}
              onChange={(_event, value: FiltroCategoria) => setCategoria(value)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="Categorías de documentos"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: brand.gold,
                  height: 2,
                },
                "& .MuiTab-root": {
                  minHeight: 48,
                  px: { xs: 1.2, md: 2 },
                  color: brand.muted,
                  fontSize: { xs: "0.76rem", md: "0.82rem" },
                  textTransform: "none",
                },
                "& .Mui-selected": {
                  color: brand.primaryDeep,
                  fontWeight: 700,
                },
              }}
            >
              {CATEGORIAS.map((value) => (
                <Tab
                  key={value}
                  value={value}
                  label={`${
                    value === "todos" ? "Todos" : CATEGORIA_LABEL[value]
                  } (${countByCategoria(value)})`}
                />
              ))}
            </Tabs>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mb: 4,
              alignItems: { xs: "stretch", sm: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: 1, maxWidth: { sm: 460 } }}>
              <SearchInput
                value={query}
                onChange={setQuery}
                placeholder="Buscar por título, tipo o descripción"
                label="Buscar documentos"
              />
            </Box>

            <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
              <Typography sx={{ fontSize: "0.8rem", color: brand.muted }}>
                <Box component="span" sx={{ color: brand.primaryDeep, fontWeight: 700 }}>
                  {filtered.length}
                </Box>{" "}
                {filtered.length === 1 ? "documento" : "documentos"}
              </Typography>

              {(categoria !== "todos" || query) && (
                <Button
                  size="small"
                  onClick={clearFilters}
                  sx={{ fontSize: "0.76rem", color: brand.primary, px: 0.8 }}
                >
                  Limpiar
                </Button>
              )}
            </Stack>
          </Stack>

          {filtered.length === 0 ? (
            <EmptyState
              title="No encontramos documentos"
              text="Prueba con otro término de búsqueda o selecciona una categoría diferente."
              actionLabel="Ver todos los documentos"
              onAction={clearFilters}
            />
          ) : (
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {filtered.map((documento) => (
                <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <DocumentCard documento={documento} />
                </Grid>
              ))}
            </Grid>
          )}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{
              mt: 5,
              py: 2.2,
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              borderTop: `1px solid ${brand.lineStrong}`,
            }}
          >
            <Typography sx={{ color: brand.muted, fontSize: "0.85rem", lineHeight: 1.6 }}>
              ¿No encuentras el documento que buscas? La Secretaría General puede
              orientarte.
            </Typography>

            <Button
              component={RouterLink}
              to="/contacto"
              variant="text"
              size="small"
              sx={{ color: brand.primary, flexShrink: 0, fontSize: "0.8rem", px: 0 }}
            >
              Contactar a la Corte
            </Button>
          </Stack>
        </Container>
      </Box>

    </>
  );
}
