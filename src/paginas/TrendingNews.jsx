import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscaTrends } from '../api/api';
import Noticias from '../components/Noticias/Noticias';
import NoticiasLoading from '../components/NoticiasLoading/NoticiasLoading'
import "../assets/css/teste.css"

const TrendingNews = () => {

    const [trend, setTrend] = useState([]);
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const { trendTitle } = useParams();

    useEffect(() => {
        buscaTrends(setTrend, trendTitle, setNoticias).then(() => {setLoading(false)});
    }, [trendTitle]);

    return (
        <>
            <Container className="container-main" sx={{ marginTop: 5 }}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="420"
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
                </Card>
                <Container maxWidth="md" >
                    {loading ? (<NoticiasLoading />) : (<Noticias noticias={noticias} />)}
                </Container>
            </Container>
        </>
    );
}

export default TrendingNews;