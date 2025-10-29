import {
    Menu,
    MenuItem,
    Typography,
    Divider,
    Stack,
    IconButton,
} from '@mui/material';
import type { GameType } from '../../../types/gameType';
import MenuItemShopping from './MenuItem';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useShoppingCart } from '../../../store/useShoppingCart';


interface MenuShoppingProps {
    anchorEl: null | HTMLElement,
    open: boolean,
    handleClose: () => void,
    games: GameType[],
    
}

const MenuShopping = ({ anchorEl, open, handleClose, games }: MenuShoppingProps ) => {
    const cartTotal = games.reduce((total, game) => total + game.price, 0);
    const clearShoppingCart = useShoppingCart((state) => state.clearShoppingCart)

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
                            boxShadow: "0px 0px 5px rgb(0,0,0,0.1)",
                            borderRadius: 3
                        },
                    },
                }}
            >

                <MenuItem onClick={handleClose} sx={{ display: "flex",justifyContent: "space-between"}}>
                    <Typography variant="body1" color=''>
                        Mi Carrito ({games.length} ítems)
                    </Typography>
                    <IconButton onClick={() => clearShoppingCart()}>
                        <RemoveShoppingCartIcon color={games.length ? 'error' : 'disabled'}/>
                    </IconButton>
                </MenuItem>
                <Divider />
                <Stack flexGrow={1} maxHeight={200} overflow={"auto"} >
                     {games.map((game,index) => (
                    <MenuItemShopping game={game} handleClose={handleClose} key={index}/>
                ))}
                </Stack>

                <Divider />
                
                <MenuItem disabled sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Total:
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        ${cartTotal.toFixed(2)}
                    </Typography>
                </MenuItem>
                
                <MenuItem /*onClick={handleClose}*/ sx={{ justifyContent: 'center' }}>
                    <Typography color="secondary" fontWeight="bold">
                        Proceder al Pago
                    </Typography>
                </MenuItem>
            </Menu>

        </>
    )
}

export default MenuShopping;