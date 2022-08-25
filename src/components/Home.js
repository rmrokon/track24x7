import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "90vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/homeBanner.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "60vw 90vh",
        backgroundPosition: "right",
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
        color: "gray",
        letterSpacing: "2px"
    },
    introBackground: {
        width: "30vw",
        height: "30vw",
        borderRadius: "50%",
        backgroundColor: "lightcyan",
        opacity: "0.9",
        textAlign: "center",
        position: "absolute",
        top: "10vh",
        left: "5vw",
        padding: "7%"
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.introBackground}>
                <h1 className={classes.title}>TRACTit CRM</h1>
                <h3 className={classes.subtitle}>A Handy Tool To Save Your Time</h3>
            </Box>
            <CssBaseline />
        </Box>
    )
}
