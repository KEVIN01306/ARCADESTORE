import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";
import { Typography } from "@mui/material";


const ItemsSider = () => {

        const navigate = useNavigate()

        const navigateHandler = (path: string) => {
            navigate(path,{ replace: true })
        }

return (
    <Box>
      <Toolbar className="aspect-3/1 p-1.5 flex justify-center items-center" >
            <Typography variant="h5" sx={{ 
              color: '#596d80',
              fontWeight: 'bold'
             }}>ARCADESTORE</Typography>
      </Toolbar>
      <List>
        {MenuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{'&:hover':{ backgroundColor: 'transparent' }}} onClick={() => navigateHandler(item.link)}>
              <ListItemIcon sx={{ 
                color: '#596d80',
                minWidth: 35 
                }}>
                {<item.icon size={23} />}
              </ListItemIcon>
              <ListItemText style={{overflowWrap: "anywhere", color: '#596d80',}}  primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}


export default ItemsSider;