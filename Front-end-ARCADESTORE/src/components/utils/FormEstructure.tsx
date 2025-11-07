import { Grid, type SxProps, type Theme } from "@mui/material";
import CardForm from "./cards/CardForm";
import React from "react";

interface FormEstructureProps {
  handleSubmit: () => void;
  sx?: SxProps<Theme>
  pGrid?: number
}

const FormEstructure = ({children,handleSubmit,sx,pGrid}: React.PropsWithChildren<FormEstructureProps>) => {
  return (
    <CardForm sx={sx}>
      <Grid flexGrow={1} padding={pGrid ? pGrid : 2} container spacing={2} >
        <form onSubmit={handleSubmit} noValidate style={{ width: "100%" }}>
          <Grid container spacing={2} padding={pGrid ? pGrid : 2}>
            {children}
          </Grid>
        </form>
      </Grid>
    </CardForm>
  );
};

export default FormEstructure;
