import { useState } from "react";
import { Controller } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { toBase64 } from "../../../utils/toBase64";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Props {
  control: any;
  errors: any;
}

export default function BackgroundField({ control, errors }: Props) {
  const [type, setType] = useState<"url" | "img">("url");
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
        Background of the game
      </Typography>

      <RadioGroup
        row
        value={type}
        onChange={(e) => {
          setType(e.target.value as "url" | "img");
          //setPreview(null);
        }}
        sx={{ mb: 2 }}
      >
        <FormControlLabel value="url" control={<Radio />} label="URL" />
        <FormControlLabel value="img" control={<Radio />} label="Imagen" />
      </RadioGroup>

      {type === "url" ? (
        <Controller
          name="background"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="URL of the image"
              fullWidth
              variant="standard"
              error={!!errors.background}
              helperText={errors.background?.message}
              onChange={(e) => {
                field.onChange(e.target.value);
                setPreview(e.target.value || null);
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#ffff",
                },
                "& .MuiInputLabel-root": {
                  color: "#6b7280",
                },
              }}
            />
          )}
        />
      ) : (
        <Controller
          name="background"
          control={control}
          render={({ field }) => (
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                backgroundColor: "#60a5fa",
                "&:hover": { backgroundColor: "#3b82f6" },
              }}
            >
              Up Load Image
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const base64 = await toBase64(file);
                    field.onChange(base64);
                    setPreview(base64);
                  }
                }}
              />
            </Button>
          )}
        />
      )}

      {preview && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            p: 1,
          }}
        >
          <img
            src={preview}
            alt="Vista previa"
            style={{
              maxWidth: "100%",
              maxHeight: "220px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0px 0px 5px rgb(0,0,0,0.1)",
            }}
          />
        </Box>
      )}
    </Box>
  );
}
