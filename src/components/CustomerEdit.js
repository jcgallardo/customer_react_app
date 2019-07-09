import React from 'react';
import PropTypes from 'prop-types';


import CustomerForm from './forms/customerForm'

const CustomerEdit = ({ id, name, dni, age, onSubmit, onBack }) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <h3>Nombre: { name } / DNI: { dni } / Edad: { age } </h3>
            <CustomerForm
                id={ id }
                name={ name }
                dni={ dni }
                age={ age }
                onSubmit={ onSubmit }
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

export default CustomerEdit;