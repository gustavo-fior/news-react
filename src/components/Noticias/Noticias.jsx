import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { buscaNoticias } from "../../api/api";

import "../../assets/css/teste.css"

const Noticias = ({ palavra }) => {
  const [noticias, setNoticias] = useState([]);
  const [textoBotao, setTextoBotao] = useState("");

  useEffect(() => {
    buscaNoticias(palavra, setNoticias);

    if(noticias.length > 0 && noticias[0].link === "mailto:gustavo_fior@outlook.com") {
      setTextoBotao("Contato");
    }
  }, [palavra]);

  return (
    <>
      {noticias.map((noticia, index) => {
        return (
          <Box key={index} m={2}>
            <Card>
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }}>{noticia.jornal}</Typography>
                <Typography>{noticia.titulo}</Typography>
              </CardContent>
              <CardActions>
                <a className="removeUnderline" href={noticia.link}>
                  <Button size="small">{textoBotao}</Button>
                </a>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </>
  );
};

export default Noticias;
