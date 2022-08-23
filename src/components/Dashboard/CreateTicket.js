import { Box, Button, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import auth from '../../firebase.init';
import { fetchClients, createTicket } from '../../redux';


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

function AddIssue({ clientData, fetchClients, createTicket }) {
    const [user] = useAuthState(auth);
    const [client, setClient] = useState('');
    const formRef = useRef();

    useEffect(() => {
        fetchClients();
    }, []);

    if (clientData.loading) {
        return <h2>Loading</h2>;
    }

    if (clientData.error) {
        return <h2>{clientData.error}</h2>;
    }

    const handleCreateTicket = (e) => {
        e.preventDefault();
        const clientName = e.target.client.value;
        const description = e.target.description.value;
        const date = new Date();
        const yy = date.getFullYear().toString().slice(2);
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hrs = date.getHours();
        const mins = date.getMinutes();
        const secs = date.getSeconds();
        const miliSecs = date.getMilliseconds();
        const ticketId = `${dd}${mm}${yy}T${hrs}-${mins}-${secs}-${miliSecs}`;
        const ticket = {
            ticketId,
            clientName,
            description,
            status: "Pending",
            createdOn: `${dd}-${mm}-${yy}`,
            createdAt: `${hrs}-${mins}-${secs}`,
            createdBy: user?.email
        }
        console.log(ticket);
        createTicket(ticket);
        formRef.current.reset();
    }
    return (
        <Box sx={addClientParentBoxStyles}>
            <Typography variant='h3'>Create A New Ticket</Typography>
            <form onSubmit={handleCreateTicket} style={{ margin: "20px 0" }} ref={formRef}>

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
                    {clientData?.clients?.map(client => <MenuItem key={client._id} value={client.clientName}>{client.clientName}</MenuItem>)}


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

const mapStateToProps = state => {
    return {
        clientData: state.clients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        createTicket: (ticket) => dispatch(createTicket(ticket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);
