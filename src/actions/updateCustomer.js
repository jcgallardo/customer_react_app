import { UPDATE_CUSTOMER } from './../constants'
import { createAction } from 'redux-actions'
import { apiUpdate } from './../api'
import { urlCustomers } from './../api/urls'

export const updateCustomer = createAction(UPDATE_CUSTOMER, 
    (id, customer) => apiUpdate(urlCustomers, id, customer)())