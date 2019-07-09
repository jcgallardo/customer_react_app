import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers'
import { Route } from 'react-router-dom'
import CustomerEdit from './../components/CustomerEdit'
import CustomerData from './../components/CustomerData'
import { fetchCustomers } from '../actions/fetchCustomers'

const mapDispatchToProps = { fetchCustomers }

class CustomerContainer extends Component {

    componentDidMount(){
        this.props.fetchCustomers()
    }

    onCustomerUpdate = (customer) => {
        alert(customer.name + " " + customer.age)
    }

    renderBody = () => {
        return <Route
            path="/customers/:dni/edit"
            children={
                ({ match }) => { 
                    const CustomerControl = (match) ? CustomerEdit : CustomerData
                    return <CustomerControl { ...this.props.customer } onSubmit={ this.onCustomerUpdate } />
                }
            }
        />
    }

    render(){
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`}
                    body={ this.renderBody() }
                >
                </AppFrame>
            </div>
        )
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer)