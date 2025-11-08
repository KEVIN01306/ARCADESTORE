import { Grid, type SxProps, type Theme } from "@mui/material";
import CardForm from "./cards/CardForm";
import React from "react";

interface FormEstructureProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  sx?: SxProps<Theme>;
  pGrid?: number;
  center?: boolean
}

const FormEstructure = ({children,handleSubmit,sx,pGrid,center}: React.PropsWithChildren<FormEstructureProps>) => {
  return (
    <CardForm sx={sx}>
      <Grid flexGrow={1} padding={pGrid ? pGrid : 2} container spacing={2} >
        <form onSubmit={handleSubmit} noValidate style={{ width: "100%" }}>
          <Grid container spacing={2} padding={pGrid ? pGrid : 2} sx={center ? {display: "flex", justifyContent: "center"} : {}}>
            {children}
          </Grid>
        </form>
      </Grid>
    </CardForm>
  );
};

export default FormEstructure;
