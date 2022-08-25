import { Box, Button, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        minHeight: "90vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/homeBanner.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "2vh",
        position: "relative"
    },
    title: {
        fontSize: "3rem",
        color: "darkcyan",
        letterSpacing: "4px"
    },
    subtitle: {
        fontSize: "2rem",
        color: "white",
        letterSpacing: "2px",
        textAlign: "center",
        backgroundColor: "teal",
        padding: "20px",
        borderRadius: "20px 0 20px 0"

    },
    introText: {
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingTop: "10vh",
    },
    emptyBox: {
        width: "30vw"
    }
}))

export default function Home() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            sx={{
                justifyContent: `${isMatch ? "center" : "space-around"}`,
                backgroundSize: `${isMatch ? "60vw 40vh" : "60vw 90vh"}`,
                backgroundPosition: `${isMatch ? "center" : "right"}`,
            }}>

            <Box
                className={classes.introText}
                sx={{
                    alignItems: `${isMatch ? "center" : "left"}`,
                    width: `${isMatch ? "90%" : "40%"}`
                }}
            >
                <h1 className={classes.title}>TRACTit</h1>
                <h3 className={classes.subtitle} style={{
                    opacity: `${isMatch ? "0.7" : "0.5"}`,
                }}>A Handy Tool To Save Your Time</h3>
                <Button LinkComponent={Link} to="/dashboard" variant='contained' color="secondary" sx={{ color: "white", width: `${isMatch ? "40%" : "25%"}` }}>Explore</Button>
            </Box>
            <Box display={`${isMatch ? "none" : "block"}`} className={classes.emptyBox}></Box>
            <CssBaseline />
        </Box>
    )
}
