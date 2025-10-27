import {
    MenuItem,
    Typography,
    Box,
    Avatar,
} from '@mui/material';
import type { GameType } from '../../../types/gameType';

interface MenuItemProps {
    game: GameType
    handleClose: () => void,
}

const MenuItemShopping = ({game, handleClose}: MenuItemProps) => {

    return (
        <>
            <MenuItem
                key={game._id}
                onClick={() => {
                    console.log(`Clic en el ítem: ${game.name}`);
                    handleClose();
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Avatar
                        src={game.background}
                        alt={game.name}
                        variant="rounded"
                        sx={{ width: 60, height: 40, mr: 2 }}
                    />

                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Typography noWrap>{game.name}</Typography>
                    </Box>

                    <Box sx={{ ml: 2, textAlign: 'right' }}>
                        <Typography variant="subtitle1" color="primary" fontWeight="bold">
                            ${game.price.toFixed(2)}
                        </Typography>
                    </Box>
                </Box>
            </MenuItem>

        </>
    )
}

export default MenuItemShopping;