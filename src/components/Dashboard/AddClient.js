import { Box, Button, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { addNewClient } from '../../redux';


const marginYsmall = {
    margin: "16px 0",
};

const addClientParentBoxStyles = {
    width: '50%',
    margin: '2% auto',

}

function AddClient({ addNewClient, status }) {
    const formRef = useRef();

    const handleAddNewClient = (e) => {
        e.preventDefault();
        const client = {
            clientName: e.target.client.value,
            monthlyBill: e.target.bill.value,
            address: e.target.address.value
        }
        addNewClient(client);
        formRef.current.reset();
    }
    return (
        <Box sx={addClientParentBoxStyles}>
            <Typography variant='h3'>Add New Client</Typography>
            <form onSubmit={handleAddNewClient} ref={formRef}>

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

const mapStateToProps = (state) => {
    return {
        status: state.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewClient: (client) => dispatch(addNewClient(client))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddClient);