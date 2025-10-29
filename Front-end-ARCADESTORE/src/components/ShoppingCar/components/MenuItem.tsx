import {
    MenuItem,
    Typography,
    Box,
    Avatar,
} from '@mui/material';
import type { GameType } from '../../../types/gameType';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useGoTo } from '../../../hooks/useGoTo';

interface MenuItemProps {
    game: GameType
    handleClose: () => void,
}

const MenuItemShopping = ({ game, handleClose }: MenuItemProps) => {
    const goTo = useGoTo()
    
    return (
        <>
            <MenuItem
                key={game._id}
            /*onClick={() => {
                console.log(`Clic en el ítem: ${game.name}`);
                handleClose();
            }}*/
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: "space-between"
                    }}
                >
                    <Box display={'flex'} justifyContent={"start"} gap={2} >
                        <Box sx={{ flexGrow: 1 }} onClick={() => console.log(game.name)} >
                            <DeleteOutlineIcon color={"error"} />
                        </Box>
                        <Avatar
                            src={game.background}
                            alt={game.name}
                            variant="rounded"
                            sx={{ width: 60, height: 40, mr: 2 }}
                            onClick={() => {
                                handleClose();
                                requestAnimationFrame(() => goTo(`/games/${game._id}`));
                            }}
                        />

                        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Typography noWrap>{game.name}</Typography>
                        </Box>


                    </Box>

                    <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle1" color="success" fontWeight="bold">
                            ${game.price.toFixed(2)}
                        </Typography>
                    </Box>
                </Box>
            </MenuItem>

        </>
    )
}

export default MenuItemShopping;