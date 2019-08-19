import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/fetchCustomers'
import { getCustomers } from './../selectors/customers.js'

const mapDispatchToProps = { fetchCustomers }

class CustomersContainer extends Component {
    componentDidMount(){
        if(this.props.customers.length  === 0)
            this.props.fetchCustomers()
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new')
    }

    renderBody = (customers) => (
        <div>
            <CustomersList 
                customers={customers}
                urlPath="customers/"
            />
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        const { customers } = this.props
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
    customers: PropTypes.array.isRequired,
    fetchCustomers: PropTypes.func.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));