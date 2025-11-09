import { Autocomplete, Fab, Grid, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useGoTo } from "../../../hooks/useGoTo"
import { useAuthStore } from "../../../store/useAuthStore";
import { ESRB_RATINGS, type RatingKey } from "../../../types/gameType";
import { useEffect, useState } from "react";

const opcionsType = [
    "All",
    "Free",
    "Pay",
]

const opcionsGames = [
    "All",
    "My Games",
]


interface HeaderGamesProps {
  onFilterChange: (filters: { 
            category?: string,
            type?: string,
            games?: string

   }) => void;
}

const HeaderGames = ({ onFilterChange }: HeaderGamesProps) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [selectedGame, setSelectedGame] = useState("All");
    const categories = (Object.keys(ESRB_RATINGS) as RatingKey[]).map( key => ESRB_RATINGS[key].code )
    const user = useAuthStore.getState().user
    const goTo = useGoTo()


    useEffect(() => {
    onFilterChange({
      category: selectedCategory,
      type: selectedType,
      games: selectedGame
    });
  }, [selectedCategory, selectedType,selectedGame]);
    return (
        <>
            <Grid flexGrow={1} container p={1} gap={2} justifyContent={{ sm: "center", md: "flex-end" }}>
                <Grid size={{ xs: 5, md: 2 }} flexGrow={1} >
                    <Autocomplete
                        disableClearable
                        size="small"
                        options={opcionsType}
                        onChange={(_,newValue) => {
                            setSelectedType(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Type" variant="standard"
                            sx={{
                                borderRadius: 3
                            }} />}
                    />
                </Grid>
                <Grid size={{ xs: 5, md: 2 }} flexGrow={1} alignItems={"center"} justifyContent={"center"}>
                    <Autocomplete
                        disableClearable
                        size="small"
                        options={opcionsGames}
                        onChange={(_,newValue) => {
                            setSelectedGame(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Games" variant="standard" />}
                    />
                </Grid>

                <Grid size={{ xs: 5, md: 2 }} flexGrow={1} alignItems={"center"} justifyContent={"center"}>
                    <Autocomplete
                        disableClearable
                        size="small"
                        options={["All",...categories]}
                        onChange={(_,newValue) => {
                            setSelectedCategory(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Category" variant="standard" />}
                    />
                </Grid>
                {
                    user?.role == "admin" ?
                        (
                            <Grid size={{ xs: 10, md: 1 }} display={"flex"} flexGrow={1} alignItems={"center"} justifyContent={"end"} >
                                <Fab size="small" color="primary" aria-label="add" onClick={() => goTo('create')} >
                                    <AddIcon />
                                </Fab>
                            </Grid>
                        ) :
                        (
                            ""
                        )
                }
            </Grid>
        </>
    )
}

export default HeaderGames;