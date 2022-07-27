import React from 'react';
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';


const paperStyle = {
    padding: "50px",
    height: "50vh",
    width: "280px",
    margin: "40px auto"
};

const marginYsmall = {
    margin: "16px 0",
};

export default function SignUp() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (loading) {
        return <h4>Loading...</h4>
    }

    const handleSingUp = async (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);


    }

    if (user) {
        navigate("/home");
    }
    return (
        <form onSubmit={handleSingUp}>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <h2 style={marginYsmall}>Sign Up</h2>
                    </Grid>
                    <TextField style={marginYsmall} variant="standard" label="Name" fullWidth required name='name'></TextField>
                    <TextField style={marginYsmall} variant="standard" label="Email" fullWidth required name='email'></TextField>
                    <TextField style={marginYsmall} variant="standard" type="password" label="Password" fullWidth required name='password'></TextField>

                    {error && <small>{error.message}</small>}

                    <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="warning" fullWidth>Login</Button>

                    <Typography>
                        Already have an account?
                        <Link component={RouterLink} to="/login" href="#">Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </form>
    )
}
