import fetchCustomersActions from './types/fetchCustomers'
import { CustomerState,Action } from '../../types';


const initialState:CustomerState = {
    loading: false,
    data: [],
    error: ''
}


const customerReducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case fetchCustomersActions.FETCH_CUSTOMERS_START: return {
            ...state,
            loading: true
        }
        case fetchCustomersActions.FETCH_CUSTOMERS_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            error: ''
        }
        case fetchCustomersActions.FETCH_CUSTOMERS_ERROR: return {
            ...state,
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}

export default customerReducer