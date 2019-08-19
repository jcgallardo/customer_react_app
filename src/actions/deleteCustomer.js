import { DELETE_CUSTOMER } from './../constants'
import { createAction } from 'redux-actions'
import { apiDelete } from './../api'
import { urlCustomers } from './../api/urls'

export default createAction(DELETE_CUSTOMER,  id => apiDelete(urlCustomers, id)())