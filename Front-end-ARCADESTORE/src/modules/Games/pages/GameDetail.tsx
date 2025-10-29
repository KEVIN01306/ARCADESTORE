import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "../../../services/games.services";
import type { GameType } from "../../../types/gameType";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import Loading from "../../../components/utils/Loading";
import ErrorCard from "../../../components/utils/ErrorCard";
import { AddShoppingCart, DeleteForeverOutlined, Edit, Whatshot } from "@mui/icons-material";
import ModalConfirm from "../../../components/utils/modals/ModalConfirm";
import BreadcrumbsRoutes from "../../../components/utils/Breadcrumbs";
import { PiGameController } from "react-icons/pi";
import { useShoppingCart } from "../../../store/useShoppingCart";

const GameDetail = () => {
    const { id } = useParams<GameType["_id"]>();
    const [game, setGame] = useState<GameType>();
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const breadcrumbsData = [
        { label: "Games", icon: <PiGameController fontSize="inherit" />, href: "/games" },
        { label: game?.name ? game?.name : "" , icon: <Whatshot fontSize="inherit" />, href: `/${id}` },
    ];
    const saveShoppingCart = useShoppingCart((state) => state.saveShoppingCart)

    const getGameOne = async () => {
            try {
                setLoading(true)
                const response = await getGame(id);
                setGame(response);
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
    };

    useEffect(() => {

        getGameOne();

    }, []);

    if (loading) return <Loading />

    if (error) return <ErrorCard errorText={error} restart={getGameOne}/>;

    const handleClickOpenDelete = () => {
        setOpenConfirmModal(true);
    };

    const handleCloseDelete = () => {
        setOpenConfirmModal(false);
    };

    return (
        <>
        <BreadcrumbsRoutes items={breadcrumbsData} />
        <ModalConfirm 
            open={openConfirmModal} 
            cancel={{cancel:handleCloseDelete, name: "Cancelar" }}
            confirm={{confirm: () => console.log("borrado"), name: "Eliminar", color: "error"}}
            text={`Seguro que quieres eliminar el juego: ${game?.name}, recuerda que
                    esta accion es irreversible`}
            title={`Eliminar: ${game?.name}`}
            onClose={handleCloseDelete}
            />
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                sx={{
                    maxWidth: "1000px",
                    width: "100%",
                    alignItems: { xs: "center", md: "flex-start" },
                }}
            >
                <Box
                    component="img"
                    src={game?.background}
                    alt={game?.name}
                    sx={{
                        width: { xs: "100%", md: "45%" },
                        height: "auto",
                        borderRadius: 2,
                        objectFit: "cover",
                        boxShadow: "0px 0px 5px rgb(0,0,0,0.1)",
                    }}
                />

                <Stack spacing={5} sx={{ flex: 1, width: "100%"}}  >
                    <Typography variant="h4" fontWeight={700} color='#596d80'>
                        {game?.name}
                    </Typography>

                    <Typography variant="body1" sx={{ opacity: 0.8 }} color='#596d80'>
                        {game?.context}
                    </Typography>

                    <Typography variant="h5" fontWeight={600} color='#596d80'>
                        ${game?.price}
                    </Typography>
                    <Box display={"flex"} justifyContent={"space-between"} >
                        <Box display={"flex"} justifyContent={"center"} gap={2} >
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <Edit />
                            </IconButton>
                            <IconButton onClick={() => handleClickOpenDelete()} color="error" aria-label="add to shopping cart">
                                <DeleteForeverOutlined />
                            </IconButton>
                        </Box>
                        {
                            game?.type == "Pay" ?   <IconButton color="primary" aria-label="add to shopping cart" onClick={() => saveShoppingCart(game)}>
                                                        <AddShoppingCart />
                                                    </IconButton>
                                                :
                                                ""
                        }
                    </Box>
                </Stack>
            </Stack>
        </Box>
    </>
    );
};

export default GameDetail;
