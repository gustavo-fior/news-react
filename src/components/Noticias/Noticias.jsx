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

const Noticias = ({ palavra }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    buscaNoticias(palavra, setNoticias);
  }, [palavra]);

  return (
    <>
      {noticias.map((noticia, index) => {
        return (
          <Box key={index} m={2}>
            <Card>
              <CardContent>
                <Typography>{noticia.jornal}</Typography>
              </CardContent>
              <CardActions>
                <a href={noticia.link}>
                  <Button size="small">Veja na íntegra!</Button>
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
