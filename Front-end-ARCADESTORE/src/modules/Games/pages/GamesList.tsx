import { useEffect, useState } from "react"
import { getGames } from "../../../services/games.services"
import { GameCard } from "../components/index"
import { Box, Grid, Typography } from "@mui/material"
import type { GameType } from "../../../types/gameType"
import Loading from "../../../components/utils/Loading"
import ErrorCard from "../../../components/utils/ErrorCard"
import HeaderGames from "../components/HeaderGames"
import { useAuthStore } from "../../../store/useAuthStore"



const GamesList = () => {

    const [games,setGames] = useState<GameType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [filteredGames, setFilteredGames] = useState<GameType[]>([]);
    const user = useAuthStore(state => state.user)

     const getGamesList = async () =>{
            try {
                setLoading(true)
                const response = await getGames();
                setGames(response)
                setFilteredGames(response);
            }catch(err: any){
                console.error(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

    useEffect(() => {

        getGamesList()

    },[])


    const handleFilterChange = (filters: { category?: string, type?: string, games?: string } ) => {
    let filtered = [...games];

    if (filters.category && filters.category !== "All") {
      filtered = filtered.filter(
        (game) => game.category === filters.category
      );
    }

    if (filters.type && filters.type !== "All") {
      filtered = filtered.filter(
        (game) => game.type === filters.type
      );
    }

    if (filters.games && filters.games !== "All") {
      filtered = filtered.filter(
        (game) => user.games.includes(game._id)
      );
    }
    
    setFilteredGames(filtered);
  };

    if (loading) return <Loading/>

    if (error) return <ErrorCard errorText={error} restart={getGamesList}/>;

    return(
        <>
        <Box sx={{ flexGrow: 1,}} width={"100%"}>
            <HeaderGames onFilterChange={handleFilterChange}/>
            <Grid container spacing={1} size={12}>
                {

                    filteredGames.length > 0 ? 
                (filteredGames.map((game,index) => {
                    return( 
                            <Grid sx={{ p: 1}}  size={{ xs: 12, md: 4 }} key={index}>
                                <GameCard game={game}/>
                            </Grid>
                        )
                })) :
                    (
                            <Grid sx={{ p: 5}}  size={{ xs: 12, md: 12 }}>
                                <Typography  display={"flex"} justifyContent={"center"} variant="h5" sx={{ fontWeight: 600 }} color='#596d80'>
                                    Not Games
                                </Typography>
                            </Grid>

                        
                    )
            }
            </Grid>
        </Box>
        </>
    )
}

export default GamesList;