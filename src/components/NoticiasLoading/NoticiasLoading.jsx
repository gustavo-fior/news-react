import { Box, Card, CardActions, CardContent, Skeleton } from '@mui/material';
import React from 'react';

const NoticiasLoading = () => {
    return (
        <>
            <Box m={2}>
                <Card raised>
                    <CardContent >
                        <Skeleton height={10} width="40%"/>
                        <Skeleton height={30} width="80%"/>
                        <Skeleton height={60} width="100%"/>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}>
                <Card raised>
                    <CardContent >
                        <Skeleton height={10} width="40%"/>
                        <Skeleton height={30} width="80%"/>
                        <Skeleton height={60} width="100%"/>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default NoticiasLoading;