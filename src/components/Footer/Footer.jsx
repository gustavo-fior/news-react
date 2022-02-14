import { Box, Link } from '@mui/material';
import React from 'react';
import './estilo.css';

const Footer = () => {
    return (
        <Box display="flex" alignItems="center"
        justifyContent="center" className='margem-cima'>
            <footer className='footer'>
                <Link className='footer-link1' href='https://github.com/gustavo-fior/news-react'>
                    <p className='footer-texto'>GitHub</p>
                </Link>
                <Link className='footer-link2' href='https://rapidapi.com/gustavo_fior@outlook.com/api/brazil-news/'>
                    <p className='footer-texto'>API</p>
                </Link>
                <Link className='footer-link3' href='https://github.com/gustavo-fior'>
                    <p className='footer-texto'>Developer</p>
                </Link>
            </footer>
        </Box>
    );
}

export default Footer;
