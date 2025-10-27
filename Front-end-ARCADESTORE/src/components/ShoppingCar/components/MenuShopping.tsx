import {
    Menu,
    MenuItem,
    Typography,
    Divider,
} from '@mui/material';
import type { GameType } from '../../../types/gameType';
import MenuItemShopping from './MenuItem';

interface MenuShoppingProps {
    anchorEl: null | HTMLElement,
    open: boolean,
    handleClose: () => void,
    games: GameType[],
    
}

const MenuShopping = ({ anchorEl, open, handleClose, games }: MenuShoppingProps ) => {
    const cartTotal = games.reduce((total, game) => total + game.price, 0);

    return ( 
        <>
         <Menu
                id="game-cart-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                slotProps={{
                    paper: {
                        style: {
                            minWidth: 350,
                        },
                    },
                }}
            >

                <MenuItem onClick={handleClose} disabled>
                    <Typography variant="h6">
                        Mi Carrito ({games.length} ítems)
                    </Typography>
                </MenuItem>
                <Divider />

                {games.map((game) => (
                    <MenuItemShopping game={game} handleClose={handleClose}/>
                ))}

                <Divider />
                
                <MenuItem disabled sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Total:
                    </Typography>
                    <Typography variant="h6" color="error">
                        ${cartTotal.toFixed(2)}
                    </Typography>
                </MenuItem>
                
                <MenuItem onClick={handleClose} sx={{ justifyContent: 'center' }}>
                    <Typography color="secondary" fontWeight="bold">
                        Proceder al Pago
                    </Typography>
                </MenuItem>
            </Menu>

        </>
    )
}

export default MenuShopping;