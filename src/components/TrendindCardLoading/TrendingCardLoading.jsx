import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Skeleton } from '@mui/material';
import React from 'react';

const TrendingCardLoading = () => {
    return (
        <>
            <Grid textAlign="center" item xs={4}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia>
                            <Skeleton height={120} sx={{marginLeft: 1.5}} width="90%" />
                        </CardMedia >
                        <CardContent>
                            <Skeleton height={60} width="100%" />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid textAlign="center" item xs={4}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia>
                            <Skeleton height={120} sx={{marginLeft: 1.5}} width="90%" />
                        </CardMedia >
                        <CardContent>
                            <Skeleton height={60} width="100%" />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid textAlign="center" item xs={4}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia>
                            <Skeleton height={120} sx={{marginLeft: 1.5}} width="90%" />
                        </CardMedia >
                        <CardContent>
                            <Skeleton height={60} width="100%" />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid textAlign="center" item xs={4}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia>
                            <Skeleton height={120} sx={{marginLeft: 1.5}} width="90%" />
                        </CardMedia >
                        <CardContent>
                            <Skeleton height={60} width="100%" />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid textAlign="center" item xs={4}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia>
                            <Skeleton height={120} sx={{marginLeft: 1.5}} width="90%" />
                        </CardMedia >
                        <CardContent>
                            <Skeleton height={60} width="100%" />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid textAlign="center" item xs={4}>
                <Card raised>
                    <CardActionArea>
                        <CardMedia>
                            <Skeleton height={120} sx={{marginLeft: 1.5}} width="90%" />
                        </CardMedia >
                        <CardContent>
                            <Skeleton height={60} width="100%" />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
}

export default TrendingCardLoading;