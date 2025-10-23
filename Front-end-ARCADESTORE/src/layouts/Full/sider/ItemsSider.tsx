import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";


const ItemsSider = () => {

        const navigate = useNavigate()

        const navigateHandler = (path: string) => {
            navigate(path,{ replace: true })
        }

return (
    <Box>
      <Toolbar className="aspect-3/1 p-1.5" >
            <img className="rounded-2xl shadow-2xs shadow-blue-300 border-2 border-blue-400" style={{width: "100%", height: "100%"}} src="banner.png" alt="" />
      </Toolbar>
      <Divider />
      <List>
        {MenuItems.map((item) => (
          <ListItem key={item.name} className=" hover:bg-sky-200 active:bg-red-200 transition-all" disablePadding>
            <ListItemButton onClick={() => navigateHandler(item.link)}>
              <ListItemIcon>
                {<item.icon size={20} />}
              </ListItemIcon>
              <ListItemText style={{overflowWrap: "anywhere"}}  primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}


export default ItemsSider;