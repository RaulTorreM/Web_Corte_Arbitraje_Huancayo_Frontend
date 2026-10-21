import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { brand } from "../../theme/brand";
import { type Registro } from "../../data/registros";
import SearchInput from "./SearchInput";
import FilterSelect from "./FilterSelect";
import EmptyState from "./EmptyState";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

type RegistryBrowserProps = {
  registros: Registro[];
  searchPlaceholder: string;
  expedienteLabel: string;
};

export default function RegistryBrowser({
  registros,
  searchPlaceholder,
  expedienteLabel,
}: RegistryBrowserProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [query, setQuery] = useState("");
  const [anio, setAnio] = useState("");

  const anios = useMemo(
    () =>
      Array.from(new Set(registros.map((registro) => registro.anio)))
        .sort((a, b) => b - a)
        .map((value) => String(value)),
    [registros]
  );

  const filtered = useMemo(() => {
    const term = normalize(query);

    return registros.filter((item) => {
      const matchesQuery =
        !term ||
        normalize(item.expediente).includes(term) ||
        normalize(item.materia).includes(term) ||
        normalize(item.resumen).includes(term);

      const matchesAnio = !anio || item.anio === Number(anio);

      return matchesQuery && matchesAnio;
    });
  }, [registros, query, anio]);

  const clearFilters = () => {
    setQuery("");
    setAnio("");
  };

  const preventMock = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.getAttribute("href") === "#") {
      event.preventDefault();
    }
  };

  return (
    <Box>
      <Paper
        sx={{
          p: { xs: 2, md: 2.5 },
          border: `1px solid ${brand.line}`,
          mb: 3,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.5}
          sx={{ alignItems: { xs: "stretch", md: "center" } }}
        >
          <Box sx={{ flex: 1 }}>
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder={searchPlaceholder}
              label={searchPlaceholder}
            />
          </Box>

          <FilterSelect
            label="Año"
            value={anio}
            onChange={setAnio}
            options={anios}
            allLabel="Todos los años"
            minWidth={170}
          />
        </Stack>
      </Paper>

      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ fontSize: "0.84rem", color: brand.muted }}>
          <Box
            component="span"
            sx={{ color: brand.primaryDark, fontWeight: 750 }}
          >
            {filtered.length}
          </Box>{" "}
          de {registros.length} registros en esta muestra
        </Typography>

        {(query || anio) && (
          <Button
            size="small"
            onClick={clearFilters}
            sx={{ fontSize: "0.78rem", color: brand.primary }}
          >
            Limpiar filtros
          </Button>
        )}
      </Stack>

      {filtered.length === 0 ? (
        <EmptyState
          title="Sin resultados"
          text="No encontramos registros para los criterios seleccionados."
          actionLabel="Limpiar filtros"
          onAction={clearFilters}
        />
      ) : isMobile ? (
        <Stack spacing={1.5}>
          {filtered.map((item) => (
            <Paper
              key={item.id}
              sx={{
                p: 2.2,
                border: `1px solid ${brand.line}`,
                borderLeft: `3px solid ${brand.gold}`,
              }}
            >
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", gap: 1, mb: 0.8 }}
              >
                <Typography
                  sx={{
                    color: brand.primaryDark,
                    fontWeight: 750,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.expediente}
                </Typography>

                <Chip
                  label={item.anio}
                  size="small"
                  sx={{
                    backgroundColor: brand.skySoft,
                    color: brand.primary,
                    height: 22,
                  }}
                />
              </Stack>

              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.68rem",
                  fontWeight: 750,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                {item.materia}
              </Typography>

              <Typography
                sx={{ color: brand.muted, fontSize: "0.85rem", lineHeight: 1.6 }}
              >
                {item.resumen}
              </Typography>

              <Button
                component="a"
                href={item.url}
                onClick={preventMock}
                disabled={item.url === "#"}
                size="small"
                startIcon={<PictureAsPdfOutlinedIcon />}
                sx={{ mt: 1.5, px: 0, fontSize: "0.78rem" }}
              >
                {item.url === "#" ? "Próximamente" : "Ver documento"}
              </Button>
            </Paper>
          ))}
        </Stack>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ border: `1px solid ${brand.line}` }}
        >
          <Table aria-label="Registro de documentos">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 170 }}>{expedienteLabel}</TableCell>
                <TableCell sx={{ width: 230 }}>Materia</TableCell>
                <TableCell sx={{ width: 80 }} align="center">
                  Año
                </TableCell>
                <TableCell>Resumen</TableCell>
                <TableCell sx={{ width: 130 }} align="center">
                  Documento
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor: "rgba(234,242,251,0.35)",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(157,196,239,0.18)",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      color: brand.primaryDark,
                      fontWeight: 650,
                      fontSize: "0.82rem",
                    }}
                  >
                    {item.expediente}
                  </TableCell>

                  <TableCell sx={{ color: brand.muted, fontSize: "0.8rem" }}>
                    {item.materia}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ color: brand.primary, fontWeight: 650, fontSize: "0.82rem" }}
                  >
                    {item.anio}
                  </TableCell>

                  <TableCell
                    sx={{ color: brand.muted, fontSize: "0.8rem", lineHeight: 1.55 }}
                  >
                    {item.resumen}
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      component="a"
                      href={item.url}
                      onClick={preventMock}
                      disabled={item.url === "#"}
                      size="small"
                      startIcon={<PictureAsPdfOutlinedIcon />}
                      sx={{ fontSize: "0.74rem", px: 0.5 }}
                    >
                      {item.url === "#" ? "Próximamente" : "Ver PDF"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
