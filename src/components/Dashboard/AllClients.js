import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../redux';

function AllClients({ clientData, fetchClients }) {
    useEffect(() => {
        fetchClients();
    }, [])
    return (clientData.loading ? (<h2>Loading</h2>) : clientData.error ? (<h2>{clientData.error}</h2>) : (<div>
        {clientData?.clients?.map(client => <p>{client.name}</p>)}</div>))
}

const mapStateToProps = state => {
    return {
        clientData: state.clients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllClients)
