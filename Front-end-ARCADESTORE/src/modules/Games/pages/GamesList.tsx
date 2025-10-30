import { useEffect, useState } from "react"
import { getGames } from "../../../services/games.services"
import { GameCard } from "../components/index"
import { Box, Grid } from "@mui/material"
import type { GameType } from "../../../types/gameType"
import Loading from "../../../components/utils/Loading"
import ErrorCard from "../../../components/utils/ErrorCard"
import HeaderGames from "../components/HeaderGames"



const GamesList = () => {

    const [games,setGames] = useState<GameType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


     const getGamesList = async () =>{
            try {
                setLoading(true)
                const response = await getGames();

                setGames(response)
            }catch(err: any){
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

    useEffect(() => {

        getGamesList()

    },[])

    if (loading) return <Loading/>

    if (error) return <ErrorCard errorText={error} restart={getGamesList}/>;

    return(
        <>
        <Box sx={{ flexGrow: 1,}}>
            <HeaderGames/>
            <Grid container spacing={1}>
                {
                games.map((game,index) => {
                    return( 
                            <Grid sx={{ p: 1}}  size={{ xs: 12, md: 4 }} key={index}>
                                <GameCard game={game}/>
                            </Grid>
                        )
                })
            }
            </Grid>
        </Box>
        </>
    )
}

export default GamesList;