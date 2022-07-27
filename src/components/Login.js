import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { Link as RouterLink } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from "react-router-dom";

const paperStyle = {
    padding: "50px",
    height: "50vh",
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
        navigate("/home");
    }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}><HttpsRoundedIcon />
                    </Avatar>
                    <h2 style={marginYsmall}>Login</h2>
                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField style={marginYsmall} variant="standard" type="email" label="Username" fullWidth required name='email'></TextField>
                    <TextField style={marginYsmall} variant="standard" type="password" label="Password" fullWidth required name='password'></TextField>

                    {error && <small>{error.message}</small>}

                    <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="warning" fullWidth>Login</Button>

                </form>
                <Typography>
                    <Link href="#">Forgot Password?</Link>

                </Typography>
                <Typography>
                    Don't have account?
                    <Link component={RouterLink} to="/signup" href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
