import { Grid, Paper, Avatar, TextField, Button, Typography, Link, useMediaQuery } from '@mui/material'
import React from 'react'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Box, CssBaseline } from '@mui/material';
import { useTheme } from '@emotion/react';
import Loading from '../Loading';

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
    loginPaperStyle: {
        padding: "50px",
        margin: "40px auto"
    }
}))

const marginYsmall = {
    margin: "16px 0",
};

export default function Login() {
    const classes = useStyles();
    const theme = useTheme();
    var isMatch = useMediaQuery(theme.breakpoints.down('md'));
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
        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <Grid sx={{ flexDirection: `${isMatch ? "column" : "row"}`, backgroundImage: `${isMatch ? "" : `url(${process.env.PUBLIC_URL + "/images/login.jpg"})`}` }} className={classes.root}>
            <Box sx={{ display: `${isMatch ? "none" : ""}` }} className={classes.emptyBox} />
            <Paper sx={{ width: `${isMatch ? "90%" : "25vw"}` }} elevation={10} className={classes.loginPaperStyle}>
                <Grid align="center">
                    <Avatar sx={{ bgcolor: "secondary.main" }}><HttpsRoundedIcon />
                    </Avatar>
                    <Typography style={marginYsmall} color="secondary" fontSize={'32px'}>
                        Login
                    </Typography>

                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField style={marginYsmall} variant="standard" type="email" label="Username" fullWidth required name='email' />

                    <TextField style={marginYsmall} variant="standard" type="password" label="Password" fullWidth required name='password' />

                    {error && <small>{error.message}</small>}

                    <Button
                        style={{ ...marginYsmall, fontSize: "16px", color: "white" }}
                        variant="contained"
                        type="submit"
                        color="secondary"
                        fullWidth>Login</Button>

                </form>
                <Typography>
                    <Link color={'secondary'} href="#">Forgot Password?</Link>
                </Typography>
                <Typography>
                    Don't have account?
                    <Link marginLeft={'4px'} color={'secondary'} component={RouterLink} to="/signup" href="#">Sign Up</Link>
                </Typography>
            </Paper>
            <CssBaseline />
        </Grid>
    )
}
