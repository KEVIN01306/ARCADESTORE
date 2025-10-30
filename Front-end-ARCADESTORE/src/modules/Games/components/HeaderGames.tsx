import { Autocomplete, Fab, Grid, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useGoTo } from "../../../hooks/useGoTo"

const opcionsType = [
    "All",
    "Free",
    "Pay",
]

const opcionsGames = [
    "All",
    "My Games",
]

const HeaderGames = () => {
    const goTo = useGoTo()
    return(
        <>
            <Grid flexGrow={1} container p={1} gap={2} justifyContent={{sm: "center",md: "flex-end"}}>
                <Grid size={{xs: 5, md: 2}}  flexGrow={1} >
                    <Autocomplete
                    disableClearable
                    size="small"
                    options={opcionsType}
                    renderInput={(params) => <TextField {...params} label="Type" variant="standard"
                    sx={{
                        borderRadius: 3
                    }} />}
                />  
                </Grid>
                <Grid size={{xs: 5, md: 2}}  flexGrow={1}  alignItems={"center"}  justifyContent={"center"}>
                    <Autocomplete
                        disableClearable
                        size="small"
                        options={opcionsGames}
                        renderInput={(params) => <TextField {...params} label="Games" variant="standard" />}
                    />
                </Grid> 
                <Grid size={{xs: 10, md: 1}} display={"flex"} flexGrow={1} alignItems={"center"} justifyContent={"end"} >
                    <Fab size="small" color="primary" aria-label="add" onClick={() => goTo('create')} >
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderGames;