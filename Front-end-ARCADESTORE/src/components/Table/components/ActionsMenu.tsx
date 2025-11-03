import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ActionsMenuProps<T> {
  actions: { label: string | React.ReactNode; onClick: (row: T) => void }[];
  row: T;
}

export const ActionsMenu = <T,>({ actions, row }: ActionsMenuProps<T>) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {actions.map((action, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              action.onClick(row);
              handleClose();
            }}
          >
            {action.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
