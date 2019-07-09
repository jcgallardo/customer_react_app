import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers'
import { Route } from 'react-router-dom'
import CustomerEdit from './../components/CustomerEdit'
import CustomerData from './../components/CustomerData'
import { fetchCustomers } from '../actions/fetchCustomers'

class CustomerContainer extends Component {

    componentDidMount(){
        if(!this.props.customer){
            this.props.fetchCustomers()
        }
    }

    onCustomerUpdate = values => {
        console.log(values);
    }

    onBack = () => {
        this.props.history.goBack()
    }

    renderBody = () => {
        return <Route
            path="/customers/:dni/edit"
            children={
                ({ match }) => { 
                    const CustomerControl = (match) ? CustomerEdit : CustomerData
                    return <CustomerControl { ...this.props.customer } onSubmit={ this.onCustomerUpdate } onBack={ this.onBack } />
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

export default withRouter (connect(mapStateToProps, {
    fetchCustomers
})(CustomerContainer))