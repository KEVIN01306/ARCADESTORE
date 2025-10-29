import React, { useState } from 'react';
import {
    IconButton,
    Box,
    styled,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import Badge, { badgeClasses } from '@mui/material/Badge';
import MenuShopping from './components/MenuShopping';
import { useShoppingCart } from '../../store/useShoppingCart';

export type GameType = {
    _id: string;
    name: string;
    type: string;
    price: number;
    background: string;
    context: string;
};

const GameCartMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const shoppingCart = useShoppingCart((state) => state.shoppingCardtList)

    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
    }
    `;
    return (
        <Box>
            <IconButton
                aria-label="carrito de compras"
                aria-controls={open ? 'game-cart-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit" 
            >
                <ShoppingCartIcon color={shoppingCart.length ? 'primary' : 'disabled'}/> 
                <CartBadge badgeContent={shoppingCart.length} color="primary" overlap="circular" />
            </IconButton>

            <MenuShopping anchorEl={anchorEl} open={open} handleClose={handleClose} games={shoppingCart}/>
        </Box>
    );
};

export default GameCartMenu;