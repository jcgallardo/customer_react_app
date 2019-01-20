import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        'dni': '22222233T',
        'name': 'Juanito',
        'age': 28
    },
    {
        'dni': '22222233O',
        'name': 'Gemita',
        'age': 27
    },
    {
        'dni': '22222233W',
        'name': 'Lucky',
        'age': 12
    }
]

class CustomersContainer extends Component {
    renderBody = (customers) => (
        <div>
            <CustomersList 
                customers={customers}
                urlPath="customer/"
            />
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                />
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    customers: PropTypes.array.isRequired
};

export default CustomersContainer;