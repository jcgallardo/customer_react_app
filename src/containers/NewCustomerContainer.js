import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import createCustomer from '../actions/createCustomer';
import { SubmissionError } from 'redux-form';

class NewCustomerContainer extends Component {
    handleSubmit = values => {
        return this.props.createCustomer(values).then( r => {
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        })
    }

    handleOnSubmitSuccess = () => {
        this.handleOnBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <CustomerEdit onSubmit={ this.handleSubmit }
            onSubmitSuccess={ this.handleOnSubmitSuccess }
            onBack={ this.handleOnBack }
        />
    )

    render() {
        return (
            <div>
                <AppFrame 
                    body={ this.renderBody() }
                    header={ `Creación del cliente` }
                >

                </AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    createCustomer: PropTypes.func,
};

NewCustomerContainer.defaultProps = {
    createCustomer: null
}

export default withRouter(connect(null, { createCustomer })(NewCustomerContainer));