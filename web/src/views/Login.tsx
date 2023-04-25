import { useState } from 'react';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import doctorImage from '../assets/logo.png';
import backgroundImage from '../assets/capa1.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: implement login logic
    };

    return (
        <Grid container className="h-screen bg-gray-50">
            <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container maxWidth="sm">
                    <Box className="flex items-center justify-center mb-10">
                        <img src={doctorImage} alt="Logo" className="w-1/3 h-auto" />
                    </Box>
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            className="w-full mb-4"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <TextField
                            id="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            className="w-full mb-4"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                        >
                            Sign In
                        </Button>
                    </form>
                </Container>
            </Grid>
            <Grid item xs={6} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }} />
        </Grid>
    );
};

export default Login;
