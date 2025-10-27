import { Outlet } from 'react-router';
import Sider from './sider/Sider';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header/Header';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Footer from './sider/Footer';

const drawerWidth = 240

const FullLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex', bgcolor: "rgb(251, 251, 252)",minHeight: "100vh" }}>
                <CssBaseline />
                <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Sider
                        handleDrawerClose={handleDrawerClose}
                        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
                        mobileOpen={mobileOpen}
                    />

                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Outlet />
                    <Footer/>
                </Box>
            </Box>
        </>
    )
}

export default FullLayout;