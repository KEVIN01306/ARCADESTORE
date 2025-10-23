import Drawer from "@mui/material/Drawer"
import ItemsSider from "./ItemsSider"

interface SiderProps {
    window?: () => Window;
    handleDrawerClose: () => void,
    handleDrawerTransitionEnd: () => void,
    mobileOpen: boolean
}

const drawerWidth = 240;

const Sider = ( {handleDrawerClose, handleDrawerTransitionEnd,mobileOpen, window }:SiderProps) => {

  const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                borderRadius: 4,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'primary.main',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
            
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
            <ItemsSider/>
          
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
          open
        >
          <ItemsSider/>
        </Drawer>
        </>
    )
}

export default Sider;