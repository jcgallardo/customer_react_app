import React from 'react';
import PropTypes from 'prop-types';


import CustomerForm from './forms/customerForm'
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../constants/permissions';

const CustomerEdit = ({ id, name, dni, age, onSubmit, onSubmitSuccess, onBack }) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <CustomerForm
                id={ id }
                name={ name }
                dni={ dni }
                age={ age }
                onSubmit={ onSubmit }
                onSubmitSuccess={ onSubmitSuccess }
                onBack={ onBack }
            />
        </div>
    )
};

CustomerEdit.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onSubmit: PropTypes.func,
    onBack: PropTypes.func
};

export default accessControl([CUSTOMER_EDIT])(CustomerEdit);