// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ user, onLogout }) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}> {/* New color */}
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    KL ERP
                </Typography>
                {user ? (
                    <>
                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                            ID: {user.idNumber}
                        </Typography>
                        <Button color="inherit" onClick={onLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button color="inherit">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;