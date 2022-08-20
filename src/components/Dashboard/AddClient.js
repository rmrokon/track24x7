import { Box, Button, TextField, Typography } from '@mui/material';


const marginYsmall = {
    margin: "16px 0",
};

const addClientParentBoxStyles = {
    width: '50%',
    margin: '2% auto',

}

export default function AddClient() {

    const handleAddNewClient = () => {

    }
    return (
        <Box sx={addClientParentBoxStyles}>
            <Typography variant='h3'>Add New Client</Typography>
            <form onSubmit={handleAddNewClient}>
                <TextField style={marginYsmall} variant="standard" type="text" label="Client Name" fullWidth required name='client'></TextField>
                <TextField style={marginYsmall} variant="standard" type="number" label="Monthly Bill" fullWidth required name='bill'></TextField>
                <TextField style={marginYsmall} variant="standard" type="text" label="Address" fullWidth required name='address'></TextField>
                <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="warning" fullWidth>Add Client</Button>
            </form>
        </Box>
    )
}
