import { useTheme } from '@emotion/react';
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import auth from '../../firebase.init';
import { fetchClients, createTicket } from '../../redux';
import Loading from '../Loading';


const marginYsmall = {
    margin: "16px 0",
};

const selectClientStyle = {
    width: "100%"
};

function AddIssue({ clients, fetchClients, createTicket, ticketForClient, loading, status, error }) {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [user] = useAuthState(auth);
    const [client, setClient] = useState(ticketForClient ? ticketForClient : '');
    const formRef = useRef();

    useEffect(() => {
        fetchClients();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        alert(error);
    }

    const handleCreateTicket = async (e) => {
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
        await createTicket(ticket);
        if (status === 200) {
            alert(`Ticket: ${ticketId} Created Successfully`)
        }
        formRef.current.reset();
    }

    console.log(clients);
    return (
        <Box sx={{ width: `${isMatch ? "90%" : "50%"}`, margin: '2% auto' }}>
            <Typography variant='h3' color="secondary">Create A New Ticket</Typography>
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
                    {
                        clients?.map(client => <MenuItem key={client._id} value={client.clientName}>{client.clientName}</MenuItem>)
                    }


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

                <Button
                    style={{ ...marginYsmall, fontSize: "16px", color: "white" }}
                    variant="contained"
                    type="submit"
                    color="secondary"
                    fullWidth>Create Ticket</Button>
            </form>
        </Box>
    )
}

const mapStateToProps = state => {
    const { loading, status, error } = state.createTicket;
    const { clients } = state.clients;
    return {
        clients,
        loading,
        status,
        error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        createTicket: (ticket) => dispatch(createTicket(ticket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);
