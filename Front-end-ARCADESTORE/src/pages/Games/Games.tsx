import { useEffect, useState } from "react"
import { getGames } from "../../services/games.services"
import CardGameView from "./components/CardGameView"
import { Box, Grid } from "@mui/material"
import type { GameType } from "../../types/gameType"
import Loading from "../../components/utils/Loading"
import ErrorCard from "../../components/utils/ErrorCard"


const Games = () => {

    const [games,setGames] = useState<GameType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getGamesList = async () =>{
            try {
                const response = await getGames();

                setGames(response)
            }catch(err: any){
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        getGamesList()
    },[])

    if (loading) return <Loading/>

    if (error) return <ErrorCard errorText={error}/>;

    return(
        <>
        <Box sx={{ flexGrow: 1,}}>
            <Grid container spacing={1}>
                {
                games.map((game,index) => {
                    return( 
                            <Grid sx={{ p: 2 }}  size={{ xs: 12, md: 4 }} key={index}>
                                <CardGameView game={game}/>
                            </Grid>
                        )
                })
            }
            </Grid>
        </Box>
        </>
    )
}

export default Games;