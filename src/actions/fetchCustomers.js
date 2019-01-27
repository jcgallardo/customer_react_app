import { FETCH_CUSTOMERS } from './../constants'
import { createAction } from 'redux-actions'

const customers = [
    {
        'dni': '22222233T',
        'name': 'Juanito',
        'age': 28
    },
    {
        'dni': '22222233O',
        'name': 'Gemita',
        'age': 27
    },
    {
        'dni': '22222233W',
        'name': 'Lucky',
        'age': 12
    }
]

export const fetchCustomers = createAction(FETCH_CUSTOMERS)