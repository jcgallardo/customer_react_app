import { CREATE_CUSTOMER } from './../constants'
import { createAction } from 'redux-actions'
import { apiPost } from './../api'
import { urlCustomers } from './../api/urls'

export default createAction(CREATE_CUSTOMER,  customer => apiPost(urlCustomers, customer)())