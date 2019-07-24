import React from 'react';
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom'

import { setPropsAsInitial } from '../../../helpers/setPropsAsInitial';
import CustomersActions from '../../CustomersActions'

import './styles.scss';

const toNumber = value => value && Number(value)
const toUpper = value => value && value.toUpperCase()
const toLower = value => value && value.toLowerCase()
//const onlyGrow = (value, previousValue, values) => value && previousValue && (value > previousValue) ? value : previousValue

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

/**
 * format --> muestra el dato formateado
 * parse --> parsea los datos establecidos
 * normalize --> valida despues de parsear
 * 
 */

const CustomerForm = ({ handleSubmit, submitting, onBack, pristine, submitSucceeded }) => {
    return (
        <form onSubmit={ handleSubmit } className={ "customerForm" }>
            <Field 
                name="name" 
                component={ MyField } 
                type="text"
                label="NOMBRE"
                parse={ toUpper }
                format={ toLower }
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
                parse={ toNumber }
                // normalize={ onlyGrow }
            ></Field>
            <CustomersActions>
                <button type="submit" disabled={ pristine || submitting }>Aceptar</button>
                <button type="button" disabled={ submitting } onClick={ onBack }>Atrás</button>
            </CustomersActions>
            <Prompt
                when={ !pristine && !submitSucceeded }
                message="Se perderán los datos si continua"
            />
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