import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "../assets/css/teste.css"
import React, { useState } from "react";
import { useEffect } from "react";
import { buscaTrends } from "../api/api";
import TrendingCardLoading from "../components/TrendindCardLoading/TrendingCardLoading";
import TrendingCard from "../components/TrendingCard/TrendingCard";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscaTrends(setTrending).then(() => { setLoading(false) });
  }, []);

  return (
    <Container className="container-main" maxWidth="md" sx={{ marginTop: 20 }}>
      <Typography margin={3} id="titulo" align="center" variant="h3" component="h1">
        Brazil News Trending
      </Typography>
      <Typography margin={3} id="descricao" align="center" variant="h5" component="h2">
        Aqui você encontra os assuntos mais buscados nos jornais brasileiros.
      </Typography>
      <Grid textAlign="center" container spacing={3} justifyContent={"center"}>
        {loading ? (<TrendingCardLoading />) : (<TrendingCard trends={trending} />)}
      </Grid>
    </Container>
  );
};

export default Trending;
