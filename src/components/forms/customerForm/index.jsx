import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { setPropsAsInitial } from '../../../helpers/setPropsAsInitial';

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

const isRequired = value => (
    !value && "Este campo es requerido"
)

const CustomerForm = () => {
    return (
        <form action="" className={ "customerForm" }>
            <Field 
                name="name" 
                component={ MyField } 
                type="text"
                validate={ isRequired }
                label="NOMBRE"
            ></Field>
            <Field 
                name="dni" 
                component={ MyField } 
                type="text"
                validate={ isRequired }
                label="DNI"
            ></Field>
            <Field 
                name="age" 
                component={ MyField } 
                type="number"
                validate={ [isRequired, isNumber] }
                label="EDAD"
            ></Field>
        </form>
    )
}

CustomerForm.propTypes = {}

const CustomerForms = reduxForm({ form: 'CustomerForm' })(CustomerForm);
export default setPropsAsInitial(CustomerForms); 