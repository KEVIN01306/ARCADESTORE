import { Autocomplete, Button, Fab, Grid, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useGoTo } from "../../../hooks/useGoTo"

interface AutocompleteOption {
  label: string;
}

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
                    disablePortal
                    size="small"
                    options={opcionsType}
                    renderInput={(params) => <TextField {...params} label="Type"
                    sx={{
                        borderRadius: 3
                    }} />}
                />
                </Grid>
                <Grid size={{xs: 5, md: 2}}  flexGrow={1}  alignItems={"center"}  justifyContent={"center"}>
                    <Autocomplete
                        disablePortal
                        size="small"
                        options={opcionsGames}
                        renderInput={(params) => <TextField {...params} label="Games" />}
                    />
                </Grid>
                <Grid size={{xs: 10, md: 1}} display={"flex"} flexGrow={1} alignItems={"center"} justifyContent={"end"} onClink={() => goTo('/create')}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderGames;