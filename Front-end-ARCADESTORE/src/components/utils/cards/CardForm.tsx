import { Box, type SxProps, type Theme } from "@mui/material"
import React from "react";


type CardFormProps = {
    sx?: SxProps<Theme>
};

const CardForm = ({children,sx}: React.PropsWithChildren<CardFormProps>) => {

    return (
        <>
            <Box
                bgcolor={"white"}
                boxShadow={'0px 0px 3px rgb(0,0,0,0.1)'}
                width={"100%"}
                margin={2}
                borderRadius={3}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #e3e5e8"}
                sx={sx}
            >
                {children}
            </Box>
        </>
    )
}

export default CardForm;