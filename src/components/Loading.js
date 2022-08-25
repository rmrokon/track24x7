import { Button } from '@mui/material';
import React from 'react';

const loadingBtnStyles = {
    height: "10vh",
    width: "15vw",
    fontSize: "24px",
    marginTop: "40vh",
    marginLeft: "45vw"
}


function Loading() {
    return (
        <Button color={"secondary"} sx={loadingBtnStyles} loading variant="outlined">Loading...</Button>
    )
}

export default Loading