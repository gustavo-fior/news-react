import { Box, Link } from '@mui/material';
import React from 'react';
import './estilo.css';

const Footer = () => {
    return (
        <Box display="flex" alignItems="center"
        justifyContent="center">
            <footer className='footer'>
                <Link className='footer-link1' href='https://github.com'>
                    <p className='footer-texto'>GitHub</p>
                </Link>
                <Link className='footer-link2' href='https://github.com'>
                    <p className='footer-texto'>API</p>
                </Link>
                <Link className='footer-link3' href='https://github.com'>
                    <p className='footer-texto'>Developer</p>
                </Link>
            </footer>
        </Box>
    );
}

export default Footer;