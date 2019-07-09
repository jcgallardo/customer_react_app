import React from 'react';
import PropTypes from 'prop-types';


import CustomerForm from './forms/customerForm'


const CustomerEdit = ({ name, dni, age, onSubmit }) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <h3>Nombre: { name } / DNI: { dni } / Edad: { age } </h3>
            <CustomerForm
                name={ name }
                dni={ dni }
                age={ age }
                onSubmit={ onSubmit }
            />
        </div>
    )
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onSubmit: PropTypes.func
};

export default CustomerEdit;