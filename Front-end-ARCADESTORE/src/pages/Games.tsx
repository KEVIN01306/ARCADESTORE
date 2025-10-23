import { useEffect, useState } from "react"
import { getGames } from "../services/games"


const Games = () => {

    const [games,setGames] =useState([])

    useEffect(() => {
        const getGamesList = async () =>{
            const response = await getGames();

            setGames(response)
        }

        getGamesList()
    },[])

    return(
        <>
            {
                games.map((game,index) => {
                    return <h1 key={index}>{game.name}</h1>
                })
            }
        </>
    )
}

export default Games;