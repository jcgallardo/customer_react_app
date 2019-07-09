import { createSelector } from 'reselect'

export const getCustomers = state => state.customers;
export const getCustomerByDni = createSelector(
    (state, props) => {
        return state.customers.find( c => c.dni === props.dni)
    },
    customer => customer
)