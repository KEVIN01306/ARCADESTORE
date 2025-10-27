import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "../../../services/games.services";
import type { GameType } from "../../../types/gameType";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import Loading from "../../../components/utils/Loading";
import ErrorCard from "../../../components/utils/ErrorCard";
import { AddShoppingCart } from "@mui/icons-material";

const GameDetail = () => {
  const { id } = useParams<GameType["_id"]>();
  const [game, setGame] = useState<GameType>();
const [loading, setLoading] = useState<boolean>(true)
const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getGameOne = async () => {
      try {
        const response = await getGame(id);
        setGame(response);
      } catch (err: any) {
        setError(err.message)
      }finally{
        setLoading(false)
      }
    };

    getGameOne();
  }, []);

    if (loading) return <Loading/>

    if (error) return <ErrorCard errorText={error}/>;

  return (
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
          }}
        />

        <Stack spacing={2} sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={700} color='#596d80'>
            {game?.name}
          </Typography>

          <Typography variant="body1" sx={{ opacity: 0.8 }} color='#596d80'>
            {game?.context}
          </Typography>

          <Typography variant="h5" fontWeight={600} color='#596d80'>
            ${game?.price}
          </Typography>
          <Box display={"flex"} justifyContent={"center"} >
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCart />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GameDetail;
