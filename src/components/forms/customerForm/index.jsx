import React from 'react';
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';

import { setPropsAsInitial } from '../../../helpers/setPropsAsInitial';
import CustomersActions from '../../CustomersActions'

import './styles.scss';

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={ name }>{ label }</label>
        <input  {...input} type={ type || "text" }/>
        { meta.touched && meta.error && <span className={ "error" }>{ meta.error }</span> }
    </div>
)

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
)

const validate = values => {
    const error = {};

    if(!values.name){
        error.name = "El campo NOMBRE es requerido"
    }

    if(!values.dni){
        error.dni = "El campo DNI es requerido"
    }

    if(!values.age){
        error.age = "El campo EDAD es requerido"
    }

    return error;
} 

const CustomerForm = ({id, name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <form onSubmit={ handleSubmit } className={ "customerForm" }>
            <Field 
                name="name" 
                component={ MyField } 
                type="text"
                label="NOMBRE"
            ></Field>
            <Field 
                name="dni" 
                component={ MyField } 
                type="text"
                label="DNI"
            ></Field>
            <Field 
                name="age" 
                component={ MyField } 
                type="number"
                validate={ isNumber }
                label="EDAD"
            ></Field>
            <CustomersActions>
                <button type="submit" disabled={ submitting }>Aceptar</button>
                <button onClick={ onBack }>Cancelar</button>
            </CustomersActions>
        </form>
    )
}

CustomerForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func
}

const CustomerForms = reduxForm({ 
    form: 'CustomerForm',
    validate
})(CustomerForm);
export default setPropsAsInitial(CustomerForms); 