import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const TrendingCard = ({ trends }) => {
  return (
    <>
      {trends.map((trend, index) => (
        <Grid sx={{marginBottom: 2}} key={index} textAlign="center" item xs={12} md={4}>
          <Card raised>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
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
              <Grid container justifyContent={"center"}>
                <Button
                  href={"/trending/" + trend.link}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Veja as notícias
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default TrendingCard;
