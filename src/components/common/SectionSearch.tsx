import { useMemo, useState } from "react";
import {
  Autocomplete,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { brand, fonts } from "../../theme/brand";
import { NAV_ITEMS, UTILITY_LINKS } from "../../data/navigation";

type SearchItem = {
  label: string;
  to: string;
  group: string;
};

const cleanLabel = (label: string) =>
  label.replace(/\s*\((borrador|preliminar)\)/gi, "");

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const SECTION_INDEX: SearchItem[] = (() => {
  const seen = new Set<string>();
  const candidates: SearchItem[] = [
    ...NAV_ITEMS.flatMap((item) => [
      { label: cleanLabel(item.label), to: item.to, group: "" },
      ...(item.children ?? []).map((child) => ({
        label: cleanLabel(child.label),
        to: child.to,
        group: cleanLabel(item.label),
      })),
    ]),
    ...UTILITY_LINKS.map((link) => ({
      label: link.label,
      to: link.to,
      group: "Servicios",
    })),
  ];

  return candidates.filter((item) => {
    if (seen.has(item.to)) return false;
    seen.add(item.to);
    return true;
  });
})();

function SearchField({
  onSelect,
  autoFocus = false,
}: {
  onSelect: (item: SearchItem) => void;
  autoFocus?: boolean;
}) {
  const [value, setValue] = useState<SearchItem | null>(null);
  const [inputValue, setInputValue] = useState("");

  const options = useMemo(() => SECTION_INDEX, []);

  return (
    <Autocomplete<SearchItem, false, false, false>
      options={options}
      value={value}
      inputValue={inputValue}
      onChange={(_event, item) => {
        setValue(item);
        if (item) {
          onSelect(item);
          setValue(null);
          setInputValue("");
        }
      }}
      onInputChange={(_event, next) => setInputValue(next)}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, selected) => option.to === selected.to}
      filterOptions={(items, { inputValue: query }) => {
        const term = normalize(query);
        if (!term) return items.slice(0, 10);
        return items
          .filter((item) =>
            normalize(`${item.label} ${item.group}`).includes(term)
          )
          .slice(0, 10);
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        return (
          <Box
            key={key}
            component="li"
            {...optionProps}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              minWidth: 0,
              px: 1.5,
              py: 1,
            }}
          >
            <Typography
              sx={{
                minWidth: 0,
                color: brand.primaryDeep,
                fontSize: "0.88rem",
                fontWeight: 600,
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {option.label}
            </Typography>
            <ArrowForwardIcon
              sx={{ fontSize: 15, color: brand.lineStrong, flexShrink: 0 }}
            />
          </Box>
        );
      }}
      noOptionsText="Sin coincidencias"
      autoHighlight
      openOnFocus
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Buscar página"
          autoFocus={autoFocus}
          slotProps={{
            inputLabel: params.slotProps.inputLabel,
            htmlInput: params.slotProps.htmlInput,
            input: {
              ...params.slotProps.input,
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: 16 }} />
                  </InputAdornment>
                  {params.slotProps.input.startAdornment}
                </>
              ),
            },
          }}
        />
      )}
      slotProps={{
        listbox: {
          sx: { maxHeight: 360, py: 0.5 },
        },
        paper: {
          sx: {
            mt: 0.5,
            backgroundColor: brand.white,
            border: `1px solid ${brand.line}`,
            boxShadow: "0 14px 30px rgba(4,15,38,0.18)",
            "& .MuiAutocomplete-option": {
              fontSize: "0.84rem",
              color: brand.ink,
              py: 1,
            },
            "& .MuiAutocomplete-option[aria-selected='true']": {
              backgroundColor: brand.paper,
            },
            "& .MuiAutocomplete-groupLabel": {
              color: brand.goldInk,
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              backgroundColor: brand.whiteSoft,
            },
          },
        },
      }}
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: 32,
          px: 0.6,
          backgroundColor: "rgba(255,255,255,0.08)",
          color: brand.white,
          fontSize: "0.78rem",
          "& fieldset": { borderColor: "rgba(255,255,255,0.24)" },
          "&:hover fieldset": { borderColor: "rgba(255,255,255,0.46)" },
          "&.Mui-focused fieldset": { borderColor: brand.goldSoft },
        },
        "& .MuiAutocomplete-input": {
          color: brand.white,
          "&::placeholder": {
            color: "rgba(255,255,255,0.62)",
            opacity: 1,
          },
        },
        "& .MuiAutocomplete-endAdornment": { color: brand.goldSoft },
        "& .MuiSvgIcon-root": { color: brand.goldSoft },
      }}
    />
  );
}

/**
 * Buscador de secciones del sitio. En escritorio vive en la barra superior;
 * en móvil se abre desde un icono en la barra principal.
 */
export default function SectionSearch({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSelect = (item: SearchItem) => {
    navigate(item.to);
    setOpen(false);
  };

  if (compact) {
    return (
      <>
        <IconButton
          aria-label="Buscar en el sitio"
          onClick={() => setOpen(true)}
          sx={{
            color: brand.white,
            border: "1px solid rgba(255,255,255,0.24)",
            borderRadius: 1.5,
            width: 44,
            height: 44,
            "&:hover": { backgroundColor: "rgba(255,255,255,0.12)" },
          }}
        >
          <SearchIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="sm"
          slotProps={{
            paper: {
              sx: {
                backgroundColor: brand.paper,
                backgroundImage: "none",
              },
            },
          }}
        >
          <DialogTitle
            sx={{
              color: brand.primaryDeep,
              fontFamily: fonts.display,
              fontSize: "1.3rem",
              fontWeight: 600,
            }}
          >
            Buscar en el sitio
          </DialogTitle>
          <DialogContent sx={{ pb: 3 }}>
            <SearchField onSelect={handleSelect} autoFocus />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <Box sx={{ width: { md: 220, lg: 280 }, flexShrink: 0 }}>
      <SearchField onSelect={handleSelect} />
    </Box>
  );
}
