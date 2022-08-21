import { Box, Button, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';


const marginYsmall = {
    margin: "16px 0",
};

const addClientParentBoxStyles = {
    width: '50%',
    margin: '2% auto',
};

const selectClientStyle = {
    width: "100%"
};

export default function AddIssue() {
    const [client, setClient] = useState('');
    const handleCreateTicket = (e) => {
        e.preventDefault();
        const client = e.target.client.value;
        console.log(client);
    }
    return (
        <Box sx={addClientParentBoxStyles}>
            <Typography variant='h3'>Create A New Ticket</Typography>
            <form onSubmit={handleCreateTicket} style={{ margin: "20px 0" }}>

                <InputLabel id="selectClientLabel">Select Client</InputLabel>

                <Select
                    labelId="selectClientLabel"
                    sx={selectClientStyle}
                    id="demo-simple-select-standard"
                    value={client}
                    label="Age"
                    onChange={(e) => setClient(e.target.value)}
                    name="client"
                    required
                >
                    <MenuItem value={10}>Ten</MenuItem>

                </Select>

                <TextField
                    style={marginYsmall}
                    variant="outlined"
                    type="text"
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    name='description'
                />

                <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="warning" fullWidth>Create Ticket</Button>
            </form>
        </Box>
    )
}
