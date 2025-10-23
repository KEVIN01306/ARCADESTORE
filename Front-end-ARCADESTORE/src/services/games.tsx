import axios from 'axios'


const API_URL = import.meta.env.VITE_DOMAIN;
const API_GAMES = API_URL+"games"


const getGames = async () => {

    const games = await axios.get(API_GAMES); 
    console.log(games.data.data)
    return games.data.data
}





export {
    getGames
}