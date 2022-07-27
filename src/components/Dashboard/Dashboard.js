import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Dashboard() {
    return (
        <Grid display={"flex"}>
            <Grid>
                <Typography>Grid 1</Typography>
            </Grid>
            <Grid>
                <Typography>Grid 1</Typography>
            </Grid>
        </Grid>
    )
}
