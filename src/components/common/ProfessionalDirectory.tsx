import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
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
      Array.from(new Set(profesionales.flatMap((p) => p.especialidades))).sort((a, b) =>
        a.localeCompare(b, "es")
      ),
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
      <Box
        sx={{
          py: 2,
          borderTop: `1px solid ${brand.lineStrong}`,
          borderBottom: `1px solid ${brand.line}`,
          mb: 2.5,
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
      </Box>

      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 1.5,
          flexWrap: "wrap",
        }}
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <BadgeOutlinedIcon sx={{ fontSize: 17, color: brand.goldDeep }} />
          <Typography sx={{ fontSize: "0.8rem", color: brand.muted }}>
            <Box component="span" sx={{ color: brand.primaryDeep, fontWeight: 700 }}>
              {filtered.length}
            </Box>{" "}
            de {profesionales.length} profesionales
          </Typography>
        </Stack>

        {(query || profesion || especialidad) && (
          <Button
            size="small"
            onClick={clearFilters}
            sx={{ fontSize: "0.76rem", color: brand.primary }}
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
        <Stack>
          {filtered.map((item) => (
            <Box
              key={item.id}
              sx={{ py: 2.2, borderTop: `1px solid ${brand.line}` }}
            >
              <Typography
                sx={{
                  color: brand.primaryDeep,
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  lineHeight: 1.4,
                }}
              >
                {item.nombre}
              </Typography>

              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.64rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  mt: 0.5,
                  mb: 1,
                }}
              >
                {item.profesion}
              </Typography>

              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.6 }}>
                {item.especialidades.map((esp) => (
                  <Chip
                    key={esp}
                    label={esp}
                    size="small"
                    sx={{
                      backgroundColor: brand.skySoft,
                      color: brand.primary,
                      height: 24,
                      fontSize: "0.64rem",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      ) : (
        <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
          <Table aria-label="Nómina de profesionales">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 56 }}>N.º</TableCell>
                <TableCell>Apellidos y nombres</TableCell>
                <TableCell sx={{ width: 150 }}>Profesión</TableCell>
                <TableCell>Especialidades</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:hover": { backgroundColor: "rgba(176,138,46,0.06)" },
                  }}
                >
                  <TableCell sx={{ color: brand.muted, fontSize: "0.78rem" }}>
                    {String(index + 1).padStart(2, "0")}
                  </TableCell>

                  <TableCell
                    sx={{
                      color: brand.primaryDeep,
                      fontWeight: 700,
                      fontSize: "0.86rem",
                    }}
                  >
                    {item.nombre}
                  </TableCell>

                  <TableCell sx={{ color: brand.muted, fontSize: "0.82rem" }}>
                    {item.profesion}
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.6 }}>
                      {item.especialidades.map((esp) => (
                        <Chip
                          key={esp}
                          label={esp}
                          size="small"
                          sx={{
                            backgroundColor: brand.skySoft,
                            color: brand.primary,
                            height: 23,
                            fontSize: "0.62rem",
                          }}
                        />
                      ))}
                    </Stack>
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
