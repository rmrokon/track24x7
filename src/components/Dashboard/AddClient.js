import { useTheme } from '@emotion/react';
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { addNewClient } from '../../redux';
import Loading from '../Loading';


const marginYsmall = {
    margin: "16px 0",
};

const addClientParentBoxStyles = {
    width: '50%',
    margin: '2% auto',

}

function AddClient({ addNewClient, status, loading, error }) {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const formRef = useRef();

    const handleAddNewClient = async (e) => {
        e.preventDefault();
        const client = {
            clientName: e.target.client.value,
            monthlyBill: e.target.bill.value,
            address: e.target.address.value
        }
        await addNewClient(client);

        if (loading) {
            return <Loading />
        }

        if (status === 200) {
            alert("New Client Added");
        }

        if (error) {
            alert(error);
        }
        formRef.current.reset();
    }


    return (
        <Box sx={{ width: `${isMatch ? "90%" : "50%"}`, margin: '2% auto' }}>
            <Typography variant='h3' color={'secondary'}>Add New Client</Typography>
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
                    style={{ ...marginYsmall, fontSize: "16px", color: "white" }}
                    color="secondary"
                    variant="contained"
                    type="submit"
                    fullWidth>Add Client</Button>
            </form>
        </Box>
    )
}

const mapStateToProps = (state) => {
    const { adding, status, error } = state.addClient;
    console.log(state)
    return {
        loading: adding,
        status: status,
        error: error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewClient: (client) => dispatch(addNewClient(client))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddClient);