import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
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
    <Container sx={{ marginTop: 5 }}>
      <Grid textAlign="center" container spacing={5}>
        {trending.map((index, trend) => (
          <Grid key={index} textAlign="center" item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={trend.image}
                  alt="green iguana"
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
                <Button size="small" color="primary">
                  <Link underline="hover" href={trend.link}>
                    Veja as notícias...
                  </Link>
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
