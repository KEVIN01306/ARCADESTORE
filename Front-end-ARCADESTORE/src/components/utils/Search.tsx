import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 50,
        px: 1.5,
        py: 0.6,
        backgroundColor: "#f2f4f7",
        border: "1px solid #e3e5e8",
      }}
    >
      <IconButton
        sx={{
          p: 0,
          mr: 1,
          color: "#7d8797",
        }}
      >
        <SearchIcon sx={{ fontSize: 20 }} />
      </IconButton>

      <InputBase
        placeholder="Buscar juegos..."
        sx={{
          flex: 1,
          fontSize: 14,
          color: "#374151",
          "::placeholder": {
            color: "#9ca3af",
          },
        }}
      />
    </Paper>
  );
}
