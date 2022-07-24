import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { Link as RouterLink } from "react-router-dom";

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

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}><HttpsRoundedIcon />
                    </Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField style={marginYsmall} variant="standard" label="Username" fullWidth required></TextField>
                <TextField style={marginYsmall} variant="standard" type="password" label="Password" fullWidth required></TextField>

                <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="warning" fullWidth>Login</Button>

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
