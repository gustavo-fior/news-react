import React, { useState } from "react";
import { TextField, Box, Button, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { buscaNoticias } from "../../api/api";
import Noticias from "../Noticias/Noticias";
import "./estilo.css";

function Formulario() {
  const [palavra, setPalavra] = useState("");
  const [noticias, setNoticias] = useState([]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // talvez colocar dentro do useEffect
          buscaNoticias(palavra, setNoticias);
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
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            ),
          }}
        />
        <Box margin={5} textAlign="center">
          <Button className="sombra" type="submit" variant="contained">
            Buscar
          </Button>
        </Box>
      </form>
      <Noticias noticias={noticias}/>
    </>
  );
}

export default Formulario;
