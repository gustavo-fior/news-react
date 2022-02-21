import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import "../../assets/css/teste.css";

const Noticias = ({ noticias }) => {
  const [textoBotao, setTextoBotao] = useState("Veja na íntegra!");

  useEffect(() => {
    if (noticias.length > 0 && noticias[0].link === "mailto:gustavo_fior@outlook.com") {
      setTextoBotao("Contato");
    }
  }, [noticias]);

  return (
    <>
      {noticias.map((noticia, index) => {
        return (
          <Box key={index} m={2}>
            <Card raised>
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }}>
                  {noticia.jornal}
                </Typography>
                <Typography>{noticia.titulo}</Typography>
              </CardContent>
              <CardActions sx={{marginLeft: 0.5}}>
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
