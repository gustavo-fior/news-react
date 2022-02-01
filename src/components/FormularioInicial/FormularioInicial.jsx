import { Container, TextField, Typography } from "@mui/material";
import React from "react";

function FormularioIncial() {
  return (
    <Container maxWidth="sm">
      <Typography maxWidth variant="h3" component="h1">
        Brazil News
      </Typography>
      <TextField maxWidth variant="standard" placeholder="Digite a palavra que deseja buscar."/>
    </Container>
  );
}

export default FormularioIncial;
