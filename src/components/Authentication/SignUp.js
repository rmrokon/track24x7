import React from 'react';
import { Grid, Paper, TextField, Button, Typography, Link, Avatar } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { ComputerRounded } from '@mui/icons-material';


const paperStyle = {
    padding: "50px",
    height: "auto",
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
                        <Avatar sx={{ bgcolor: "secondary.main" }}><ComputerRounded />
                        </Avatar>
                        <Typography style={marginYsmall} color="secondary" fontSize={'32px'}>
                            Sing Up
                        </Typography>
                    </Grid>
                    <TextField style={marginYsmall} variant="standard" label="Name" fullWidth required name='name'></TextField>
                    <TextField style={marginYsmall} variant="standard" label="Email" fullWidth required name='email'></TextField>
                    <TextField style={marginYsmall} variant="standard" type="password" label="Password" fullWidth required name='password'></TextField>

                    {error && <small>{error.message}</small>}

                    <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="secondary" fullWidth>Login</Button>

                    <Typography>
                        Already have an account?
                        <Link marginLeft={'4px'} color={'secondary'} component={RouterLink} to="/login" href="#">Login</Link>
                    </Typography>
                </Paper>
            </Grid>
        </form>
    )
}
