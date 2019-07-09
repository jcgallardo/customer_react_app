import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => {
        console.log("reducer: ", state, action)
        return [ ...action.payload ]
    }
}, [])