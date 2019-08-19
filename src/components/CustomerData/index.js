import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from '../CustomersActions';

import './CustomerData.scss'

const CustomerData = ({ id, name, dni, age, isDeleteAllowed, onBack, onDelete }) => {
    return (
        <div>
            <div className="customerData">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre: </strong><i>{ name }</i></div>
                <div><strong>DNI: </strong><i>{ dni }</i></div>
                <div><strong>Edad: </strong><i>{ age }</i></div>
            </div>
            <CustomersActions>
                <button onClick={ onBack }>Volver</button>
                { isDeleteAllowed && <button onClick={ () => onDelete(id) }>Eliminar</button> }
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    isDeleteAllowed: PropTypes.bool,
    onBack: PropTypes.func,
    onDelete: PropTypes.func
};

export default CustomerData;