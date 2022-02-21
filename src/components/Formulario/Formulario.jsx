import React, { useEffect, useState } from "react";
import { TextField, Box, Button, IconButton, Select, MenuItem, InputLabel, FormControl, FormHelperText, Grid } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { auth, buscaJornais, buscaNoticias, buscaNoticiasComJornal } from "../../api/api";
import Noticias from "../Noticias/Noticias";
import "./estilo.css";

function Formulario() {
  const [palavra, setPalavra] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [jornais, setJornais] = useState([]);
  const [jornal, setJornal] = useState("");
  const [jornalSelecionado, setJornalSelecionado] = useState(false);

  useEffect(() => {
    auth("joao@email.com", "123");
    buscaJornais(setJornais);
  }, [noticias, jornalSelecionado]);

  const handleSelectChange = (e) => {
    setJornal(e.target.value);
    if (e.target.value === "none") {
      setJornalSelecionado(false);
    } else {
      setJornalSelecionado(true);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (jornalSelecionado) {
            buscaNoticiasComJornal(palavra, jornal, setNoticias);
          } else {
            buscaNoticias(palavra, setNoticias);
          }
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              onChange={(event) => {
                setPalavra(event.target.value);
              }}
              margin="normal"
              fullWidth
              variant="standard"
              placeholder="Digite a palavra que deseja buscar"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <SearchOutlinedIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl sx={{marginTop: 1}}>
              <InputLabel id="select-label">Jornal</InputLabel>
              <Select variant="standard"
                labelId="label-jornais"
                value={jornal}
                label="Jornal"
                onChange={handleSelectChange}
              >
                <MenuItem value="none">
                  <em>Todos</em>
                </MenuItem>
                {jornais.map((jornal, index) => (
                  <MenuItem label="Escolha o jornal" key={index} value={jornal.nome}>{jornal.nome}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Se preferir, filtre por um jornal</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Box margin={5} textAlign="center">
          <Button type="submit" variant="contained">
            Buscar
          </Button>
        </Box>
      </form>
      <Noticias noticias={noticias} />
    </>
  );
}

export default Formulario;
