import { Grid } from "@mui/material";
import CardForm from "./cards/CardForm";
import React from "react";

interface FormEstructureProps {
  handleSubmit: () => void;
}

const FormEstructure = ({children,handleSubmit}: React.PropsWithChildren<FormEstructureProps>) => {
  return (
    <CardForm>
      <Grid flexGrow={1} padding={2} container spacing={2}>
        <form onSubmit={handleSubmit} noValidate style={{ width: "100%" }}>
          <Grid container spacing={2} padding={2}>
            {children}
          </Grid>
        </form>
      </Grid>
    </CardForm>
  );
};

export default FormEstructure;
