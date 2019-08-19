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
import { updateCustomer } from '../actions/updateCustomer'
import deleteCustomer from '../actions/deleteCustomer'

class CustomerContainer extends Component {

    componentDidMount(){
        if(!this.props.customer){
            this.props.fetchCustomers()
        }
    }

    onCustomerUpdate = values => {
        console.log(values);
        const { id } = values
        return this.props.updateCustomer(id, values)
    }

    onBack = () => {
        this.props.history.goBack()
    }

    onDelete = id => {
        return this.props.deleteCustomer(id).then(r => {
            this.onBack();
        })
    }

    onSubmitSuccess = () => {
        this.props.history.goBack()
    }

    renderCustomerControl = (isEdit, isDelete) => {
        const CustomerControl = (isEdit) ? CustomerEdit : CustomerData
        return <CustomerControl { ...this.props.customer } 
            isDeleteAllowed={ !!isDelete }
            onSubmit={ this.onCustomerUpdate }
            onSubmitSuccess={ this.onSubmitSuccess }
            onBack={ this.onBack }
            onDelete={ this.onDelete }
        />
    }

    renderBody = () => {
        return <Route path="/customers/:dni/edit" children={
            ({ match: isEdit }) => (
                <Route path="/customers/:dni/del" children={
                    ({ match: isDelete }) => this.renderCustomerControl(isEdit, isDelete)
                } />
            )
        } />
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
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})

export default withRouter (connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer))