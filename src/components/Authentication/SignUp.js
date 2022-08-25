import React from 'react';
import { Grid, Paper, TextField, Button, Typography, Link, Avatar, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { ComputerRounded } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Box, CssBaseline } from '@mui/material';
import { useTheme } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "60vw 80vh",
        backgroundPositionY: "2vh"
    },
    emptyBox: {
        width: "50vw"
    },
    signupPaperStyle: {
        padding: "50px",
        margin: "40px auto"
    },
    yAxisMargin: {
        margin: "16px 0"
    }
}))

const marginYsmall = {
    margin: "16px 0"
}


export default function SignUp() {
    const classes = useStyles();
    const theme = useTheme();
    var isMatch = useMediaQuery(theme.breakpoints.down('md'));
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
            <Grid
                sx={{ backgroundImage: `${isMatch ? "" : `url(${process.env.PUBLIC_URL + "/images/signup.jpg"})`}` }}
                className={classes.root}>

                <Box sx={{ display: `${isMatch ? "none" : ""}` }} className={classes.emptyBox} />
                <Paper sx={{ width: `${isMatch ? "90%" : "20vw"}` }} elevation={10} className={classes.signupPaperStyle}>
                    <Grid align="center">
                        <Avatar sx={{ bgcolor: "secondary.main" }}><ComputerRounded />
                        </Avatar>
                        <Typography style={marginYsmall} color="secondary" fontSize={'32px'}>
                            Sing Up
                        </Typography>
                    </Grid>
                    <TextField
                        style={marginYsmall}
                        variant="standard"
                        label="Name"
                        fullWidth
                        required
                        name='name' />

                    <TextField
                        style={marginYsmall}
                        variant="standard"
                        label="Email"
                        fullWidth
                        required
                        name='email' />

                    <TextField
                        style={marginYsmall}
                        variant="standard"
                        type="password"
                        label="Password"
                        fullWidth
                        required
                        name='password' />

                    {error && <small>{error.message}</small>}

                    <Button
                        style={{ ...marginYsmall, fontSize: "16px", color: "white" }}
                        variant="contained"
                        type="submit"
                        color="secondary"
                        fullWidth>Sign Up
                    </Button>

                    <Typography>
                        Already have an account?
                        <Link marginLeft={'4px'} color={'secondary'} component={RouterLink} to="/login" href="#">Login</Link>
                    </Typography>
                </Paper>
                <CssBaseline />
            </Grid>
        </form>
    )
}
