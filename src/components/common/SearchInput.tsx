import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { brand } from "../../theme/brand";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
  label = "Buscar",
}: SearchInputProps) {
  return (
    <TextField
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      size="small"
      fullWidth
      slotProps={{
        input: {
          "aria-label": label,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 18, color: brand.muted }} />
            </InputAdornment>
          ),
          endAdornment: value ? (
            <InputAdornment position="end">
              <IconButton
                size="small"
                aria-label="Limpiar búsqueda"
                onClick={() => onChange("")}
              >
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: brand.whiteSoft,
        },
        "& .MuiInputBase-input": {
          fontSize: "0.88rem",
        },
      }}
    />
  );
}
