import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscaTrends } from '../api/api';
import Noticias from '../components/Noticias/Noticias';

const TrendingNews = () => {

    const [trend, setTrend] = useState([]);
    const [noticias, setNoticias] = useState([]);
    const { trendTitle } = useParams();

    useEffect(() => {
        buscaTrends(setTrend, trendTitle, setNoticias);
    }, [trendTitle]); 

    return (
        <>
            <Container sx={{ marginTop: 5 }}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="320"
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
                    <Noticias noticias={noticias} />
                </Container>
            </Container>
        </>
    );
}

export default TrendingNews;