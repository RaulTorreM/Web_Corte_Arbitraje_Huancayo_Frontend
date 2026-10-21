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
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { brand } from "../../theme/brand";
import type { Profesional } from "../../data/arbitros";
import SearchInput from "./SearchInput";
import FilterSelect from "./FilterSelect";
import EmptyState from "./EmptyState";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

type ProfessionalDirectoryProps = {
  profesionales: Profesional[];
  searchPlaceholder: string;
};

export default function ProfessionalDirectory({
  profesionales,
  searchPlaceholder,
}: ProfessionalDirectoryProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [query, setQuery] = useState("");
  const [profesion, setProfesion] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const profesiones = useMemo(
    () =>
      Array.from(new Set(profesionales.map((p) => p.profesion))).sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    [profesionales]
  );

  const especialidades = useMemo(
    () =>
      Array.from(
        new Set(profesionales.flatMap((p) => p.especialidades))
      ).sort((a, b) => a.localeCompare(b, "es")),
    [profesionales]
  );

  const filtered = useMemo(() => {
    const term = normalize(query);

    return profesionales.filter((item) => {
      const matchesQuery =
        !term ||
        normalize(item.nombre).includes(term) ||
        normalize(item.especialidades.join(" ")).includes(term);

      const matchesProfesion = !profesion || item.profesion === profesion;
      const matchesEspecialidad =
        !especialidad || item.especialidades.includes(especialidad);

      return matchesQuery && matchesProfesion && matchesEspecialidad;
    });
  }, [profesionales, query, profesion, especialidad]);

  const clearFilters = () => {
    setQuery("");
    setProfesion("");
    setEspecialidad("");
  };

  return (
    <Box>
      <Paper
        sx={{
          p: { xs: 2, md: 2.5 },
          border: `1px solid ${brand.line}`,
          backgroundColor: brand.white,
          mb: 3,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.5}
          sx={{ alignItems: { xs: "stretch", md: "center" } }}
        >
          <Box sx={{ flex: 1, minWidth: 220 }}>
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder={searchPlaceholder}
              label={searchPlaceholder}
            />
          </Box>

          <FilterSelect
            label="Profesión"
            value={profesion}
            onChange={setProfesion}
            options={profesiones}
            allLabel="Todas las profesiones"
          />

          <FilterSelect
            label="Especialidad"
            value={especialidad}
            onChange={setEspecialidad}
            options={especialidades}
            allLabel="Todas las especialidades"
            minWidth={240}
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
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <BadgeOutlinedIcon
            sx={{ fontSize: "1.05rem", color: brand.goldDeep }}
          />
          <Typography sx={{ fontSize: "0.84rem", color: brand.muted }}>
            <Box
              component="span"
              sx={{ color: brand.primaryDark, fontWeight: 750 }}
            >
              {filtered.length}
            </Box>{" "}
            de {profesionales.length} profesionales
          </Typography>
        </Stack>

        {(query || profesion || especialidad) && (
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
          text="No encontramos profesionales que coincidan con los filtros seleccionados."
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
                    fontSize: "0.92rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.nombre}
                </Typography>

                {item.rna && (
                  <Chip
                    label="RNA"
                    size="small"
                    sx={{
                      backgroundColor: "rgba(186,153,7,0.14)",
                      color: brand.goldDeep,
                      height: 22,
                    }}
                  />
                )}
              </Stack>

              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.68rem",
                  fontWeight: 750,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  mb: 1.2,
                }}
              >
                {item.profesion}
              </Typography>

              <Stack direction="row" spacing={0.7} sx={{ flexWrap: "wrap", gap: 0.7 }}>
                {item.especialidades.map((esp) => (
                  <Chip
                    key={esp}
                    label={esp}
                    size="small"
                    sx={{
                      backgroundColor: brand.skySoft,
                      color: brand.primary,
                      height: 24,
                      fontSize: "0.66rem",
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          ))}
        </Stack>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ border: `1px solid ${brand.line}` }}
        >
          <Table aria-label="Nómina de profesionales">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 56 }}>N°</TableCell>
                <TableCell>Apellidos y nombres</TableCell>
                <TableCell sx={{ width: 150 }}>Profesión</TableCell>
                <TableCell>Especialidades</TableCell>
                <TableCell sx={{ width: 84 }} align="center">
                  RNA
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((item, index) => (
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
                  <TableCell sx={{ color: brand.muted, fontSize: "0.8rem" }}>
                    {String(index + 1).padStart(2, "0")}
                  </TableCell>

                  <TableCell
                    sx={{
                      color: brand.primaryDark,
                      fontWeight: 650,
                      fontSize: "0.86rem",
                    }}
                  >
                    {item.nombre}
                  </TableCell>

                  <TableCell
                    sx={{ color: brand.muted, fontSize: "0.82rem" }}
                  >
                    {item.profesion}
                  </TableCell>

                  <TableCell>
                    <Stack
                      direction="row"
                      sx={{ flexWrap: "wrap", gap: 0.6 }}
                    >
                      {item.especialidades.map((esp) => (
                        <Chip
                          key={esp}
                          label={esp}
                          size="small"
                          sx={{
                            backgroundColor: brand.skySoft,
                            color: brand.primary,
                            height: 23,
                            fontSize: "0.64rem",
                          }}
                        />
                      ))}
                    </Stack>
                  </TableCell>

                  <TableCell align="center">
                    {item.rna ? (
                      <Chip
                        label="RNA"
                        size="small"
                        sx={{
                          backgroundColor: "rgba(186,153,7,0.14)",
                          color: brand.goldDeep,
                          height: 22,
                          fontSize: "0.64rem",
                        }}
                      />
                    ) : (
                      <Typography
                        sx={{ color: brand.line, fontSize: "0.8rem" }}
                      >
                        —
                      </Typography>
                    )}
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
