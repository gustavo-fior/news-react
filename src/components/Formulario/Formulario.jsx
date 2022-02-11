import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import './estilo.css';

function Formulario( { aoEnviar } ) {
  const [palavra, setPalavra] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar(palavra);
      }}
    >
      <TextField
        onChange={(event) => {
          setPalavra(event.target.value);
        }}
        margin="normal"
        fullWidth
        variant="standard"
        placeholder="Digite a palavra que deseja buscar"
      />
      <Box margin={5} textAlign="center">
        <Button className="sombra" type="submit" variant="contained">
          Buscar
        </Button>
      </Box>
    </form>
    
  );
}

export default Formulario;
