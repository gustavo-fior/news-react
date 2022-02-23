import React, { useEffect, useState } from "react";
import {
  TextField,
  Card,
  Box,
  Button,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  Skeleton
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { auth, buscaJornais, buscaNoticias } from "../../api/api";
import Noticias from "../Noticias/Noticias";
import "./estilo.css";
import NoticiasLoading from "../NoticiasLoading/NoticiasLoading";

function Formulario() {
  const [palavra, setPalavra] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [jornais, setJornais] = useState([]);
  const [jornal, setJornal] = useState("none");
  const [jornalSelecionado, setJornalSelecionado] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    auth("joao@email.com", "123");
    buscaJornais(setJornais);
    if (loading) {
      setLoading(false);
    }
  }, [noticias, jornalSelecionado]);

  const handleSelectChange = (e) => {
    setJornal(e.target.value);
    if (e.target.value === "none") {
      setJornalSelecionado(false);
    } else {
      setJornalSelecionado(true);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setLoading(true);
          buscaNoticias(palavra, setNoticias, jornal);
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
            <FormControl sx={{ marginTop: 3 }}>
              <Select
                variant="standard"
                value={jornal}
                label="Jornal"
                onChange={handleSelectChange}
              >
                <MenuItem value="none">
                  <em>Todos</em>
                </MenuItem>
                {jornais.map((jornal, index) => (
                  <MenuItem
                    label="Escolha o jornal"
                    key={index}
                    value={jornal.nome}
                  >
                    {jornal.nome}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Se preferir, filtre por um jornal</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Box margin={3} textAlign="center">
          <Button sx={{ marginRight: 1 }} type="submit" variant="contained">
            Buscar
          </Button>
          <Button sx={{ marginLeft: 1 }} variant="contained">
            <Link color="white" underline="none" href="/trending">Trends</Link>
          </Button>
        </Box>
      </form>
      {loading ? (<NoticiasLoading />) : (<Noticias noticias={noticias} />)}
    </>
  );
}

export default Formulario;
