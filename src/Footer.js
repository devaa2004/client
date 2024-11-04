// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#3f51b5', top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="body2" color="inherit" align="center" sx={{ width: '100%' }}>
                    © 2024 KL ERP. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;