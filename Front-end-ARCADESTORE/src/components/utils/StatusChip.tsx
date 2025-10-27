import { Chip } from "@mui/material";


interface StatusChipProps{
    type: string,
    purchased: boolean,
}

const StatusChip = ({ type, purchased }: StatusChipProps) => {
  const label = type === "Free" ? "Gratis" : purchased ? "Comprado" : "De Pago";

  const styles = {
    base: {
      fontWeight: 600,
      borderRadius: "10px",
      padding: "6px 10px",
      fontSize: "0.85rem",
      backdropFilter: "blur(6px)",
      boxShadow: "inset 0 1px 3px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.08)",
      letterSpacing: "0.3px",
    },
    success: {
      background: "linear-gradient(135deg, #a6f1c8, #6edda6)",
      color: "#145c39",
    },
    warning: {
      background: "linear-gradient(135deg, #ffe8a3, #ffd278)",
      color: "#7e4a00",
    },
  };

  const style = purchased || type === "Free" ? styles.success : styles.warning;

  return (
    <Chip
      label={label}
      sx={{ ...styles.base, ...style }}
    />
  );
};

export default StatusChip;
