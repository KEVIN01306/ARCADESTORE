import { Box, CircularProgress } from "@mui/material"



const Loading = () => {


    return (
        <>
            <Box sx={{ flexGrow: 1,
                        display: "flex", 
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",

                    }}>
                <CircularProgress color="primary" />
            </Box>
        </>
    )
}

export default Loading;