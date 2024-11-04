// src/components/Register.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ username, password });
    };

    return (
        <Box
            sx={{
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: 'white',
                width: '400px',
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default Register;