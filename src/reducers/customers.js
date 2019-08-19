import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, CREATE_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload ] ,
    [CREATE_CUSTOMER]: (state, action) => [ ...state, action.payload ],
    [UPDATE_CUSTOMER]: (state, action) => {
        const customerPayload = action.payload
        // [ { id: 1, name: '', ...}, { id: 2, name: '', ...}, ... ]
        const initialValue = [];
        const customers = state;
        return customers.reduce((acc, customer) => {
            if(customer.id === customerPayload.id)
                return [...acc, customerPayload ];
            return [...acc, customer ];
        }, initialValue);
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, [])