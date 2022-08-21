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

                <TextField
                    style={marginYsmall}
                    variant="outlined"
                    type="text"
                    label="Client Name"
                    name='client'
                    fullWidth
                    required
                />

                <TextField
                    style={marginYsmall}
                    variant="outlined"
                    type="number"
                    label="Monthly Bill"
                    name='bill'
                    fullWidth
                    required
                />

                <TextField
                    style={marginYsmall}
                    variant="outlined"
                    type="text"
                    label="Address"
                    name='address'
                    multiline
                    rows={3}
                    fullWidth
                    required
                />

                <Button
                    style={{ ...marginYsmall, fontSize: "16px" }}
                    variant="contained"
                    type="submit"
                    color="warning"
                    fullWidth>Add Client</Button>
            </form>
        </Box>
    )
}
