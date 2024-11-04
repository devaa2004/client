// src/components/Login.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const LoginRegister = ({ onLogin, onRegister }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [idNumber, setIdNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message

        const success = onLogin({ idNumber, password });
        if (!success) {
            setErrorMessage('Invalid ID number or password. Please try again.');
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message

        // Validate that ID number contains only digits
        const idNumberPattern = /^\d+$/; // Regular expression for numbers only
        if (!idNumberPattern.test(idNumber)) {
            setErrorMessage('ID Number must contain only numeric values.');
            return;
        }

        // Proceed with registration if validation passes
        onRegister({ idNumber, password });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
            }}
        >
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
                    {isRegistering ? 'Register' : 'Login'}
                </Typography>
                <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
                    <TextField
                        label="ID Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        error={!!errorMessage && !isRegistering && !/^\d+$/.test(idNumber)}
                        helperText={isRegistering && !/^\d+$/.test(idNumber) ? "ID Number must contain only numeric values." : ""}
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
                    {errorMessage && (
                        <Typography variant="body2" color="error" align="center" sx={{ marginTop: 2 }}>
                            {errorMessage}
                        </Typography>
                    )}
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        {isRegistering ? 'Register' : 'Login'}
                    </Button>
                </form>
                <Button 
                    onClick={() => setIsRegistering(!isRegistering)} 
                    style={{ marginTop: '10px', textAlign: 'center' }}
                >
                    {isRegistering ? 'Already have an account? Login' : 'New user? Register'}
                </Button>
            </Box>
        </Box>
    );
};

export default LoginRegister;