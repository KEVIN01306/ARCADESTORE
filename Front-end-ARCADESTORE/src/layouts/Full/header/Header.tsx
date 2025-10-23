import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

interface HeaderProps {
    drawerWidth: number,
    handleDrawerToggle: () => void,

}

const Header = ({ drawerWidth, handleDrawerToggle }: HeaderProps) => {


    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    mr: { sm: 1 }, 
                    boxShadow: "none",
                    backgroundColor: 'transparent',
                    color: 'primary.main',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    mt: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Avatar variant="square" sx={{backgroundColor: "#6060f3"}}>K</Avatar>
                </Toolbar>
            </AppBar>
            <Divider/>
        </>
    )
}

export default Header;