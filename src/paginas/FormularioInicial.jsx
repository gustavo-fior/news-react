import { Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import Noticias from "../components/Noticias/Noticias";
import Footer from "../components/Footer";
import "../assets/css/teste.css"

function FormularioIncial() {

  const [palavra, setPalavra] = useState("");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      margin={0}
      position='relative'
    >
      <Container className="margem-cima" maxWidth="md">
        <Typography id="titulo" align="center" variant="h3" component="h1">
          Brazil News
        </Typography>
        <div className="wrap-conteudo">
          <Formulario id="form" aoEnviar={setPalavra} />
          <Noticias id="noticias" palavra={palavra} />
        </div>
        <Footer />
      </Container>
    </Box>
  );
}

export default FormularioIncial;
