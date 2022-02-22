import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { buscaTrends } from "../api/api";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    buscaTrends(setTrending);
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      <Typography margin={3} id="titulo" align="center" variant="h3" component="h1">
        Brazil News Trending
      </Typography>
      <Grid textAlign="center" container spacing={5}>
        {trending.map((trend, index) => (
          <Grid key={index} textAlign="center" item xs={4}>
            <Card raised>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image={trend.image}
                  alt={trend.titulo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {trend.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {trend.descricao}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{ marginLeft: 6 }} href={"/trending/" + trend.link} size="small" variant="contained" color="primary">
                  Veja as notícias
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Trending;
