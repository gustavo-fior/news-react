import { Container, Typography, Box } from "@mui/material";
import React from "react";
import Formulario from "../components/Formulario/Formulario";
import Footer from "../components/Footer";
import "../assets/css/teste.css"

function FormularioIncial() {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      position='relative'
    >
      <Container className="container-main" maxWidth="md">
        <Typography sx={{fontWeight: 400}} id="titulo" align="center" variant="h2" component="h1" >
          Brazil News
        </Typography>
        <div className="wrap-conteudo">
          <Formulario id="form" />
        </div>
        <Footer />
      </Container>
    </Box>
  );
}

export default FormularioIncial;
