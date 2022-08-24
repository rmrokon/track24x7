import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import React from 'react'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";

const paperStyle = {
    padding: "50px",
    height: "auto",
    width: "280px",
    margin: "40px auto"
};

const marginYsmall = {
    margin: "16px 0",
};

export default function Login() {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    if (loading) {
        return <h4>Loading...</h4>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar sx={{ bgcolor: "secondary.main" }}><HttpsRoundedIcon />
                    </Avatar>
                    <Typography style={marginYsmall} color="secondary" fontSize={'32px'}>
                        Login
                    </Typography>

                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField style={marginYsmall} variant="standard" type="email" label="Username" fullWidth required name='email'></TextField>
                    <TextField style={marginYsmall} variant="standard" type="password" label="Password" fullWidth required name='password'></TextField>

                    {error && <small>{error.message}</small>}

                    <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="secondary" fullWidth>Login</Button>

                </form>
                <Typography>
                    <Link color={'secondary'} href="#">Forgot Password?</Link>
                </Typography>
                <Typography>
                    Don't have account?
                    <Link marginLeft={'4px'} color={'secondary'} component={RouterLink} to="/signup" href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
