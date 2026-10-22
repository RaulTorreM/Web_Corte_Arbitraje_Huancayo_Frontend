import { MenuItem, TextField } from "@mui/material";
import { brand } from "../../theme/brand";

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  allLabel: string;
  minWidth?: number;
};

export default function FilterSelect({
  label,
  value,
  onChange,
  options,
  allLabel,
  minWidth = 220,
}: FilterSelectProps) {
  return (
    <TextField
      select
      size="small"
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      sx={{
        minWidth,
        backgroundColor: brand.whiteSoft,
        "& .MuiSelect-select": {
          fontSize: "0.88rem",
        },
      }}
    >
      <MenuItem value="">
        <em>{allLabel}</em>
      </MenuItem>

      {options.map((option) => (
        <MenuItem key={option} value={option} sx={{ fontSize: "0.88rem" }}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
