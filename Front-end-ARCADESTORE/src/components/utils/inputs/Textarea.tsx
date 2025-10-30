

import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
    name: string;
  control: any;
  errors: {
    err: any,
    message: any
  };
}

export default function ContextInput({name, control, errors }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={name}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          onChange={(e) => field.onChange(e.target.value)}
          error={!!errors.err}
          value={field.value || ""}
          helperText={errors.err ? errors.message : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "7px",
              backgroundColor: "#ffff",
            },
            "& .MuiInputLabel-root": {
              color: "#6b7280",
            },
            "& .Mui-focused .MuiInputLabel-root": {
              color: "#2265ec",
            },
          }}
        />
      )}
    />
  );
}
