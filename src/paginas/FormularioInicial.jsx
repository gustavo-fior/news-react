import { Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import Noticias from "../components/Noticias/Noticias";
import "../assets/css/teste.css"

function FormularioIncial() {

  const [palavra, setPalavra] = useState(""); 

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      margin={5}
    >
      <Container maxWidth="md">
        <Typography id="titulo" align="center" variant="h3" component="h1">
          Brazil News
        </Typography>
        <Formulario id="form" aoEnviar={setPalavra}/>
        <Noticias id="noticias" palavra={palavra}/>
      </Container>
    </Box>
  );
}

export default FormularioIncial;
