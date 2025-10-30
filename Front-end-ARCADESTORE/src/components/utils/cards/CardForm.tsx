import { Box } from "@mui/material"
import React from "react";


type CardFormProps = {};

const CardForm = ({children}: React.PropsWithChildren<CardFormProps>) => {

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
            >
                {children}
            </Box>
        </>
    )
}

export default CardForm;