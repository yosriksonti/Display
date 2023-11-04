import fetchPurchasesActions from './types/fetchPurchases'
interface Action {
    type: string;
    payload: any;
}

const initialState = {
    loading: false,
    data: [],
    error: ''
}


const purchaseReducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case fetchPurchasesActions.FETCH_PURCHASES_START: return {
            ...state,
            loading: true
        }
        case fetchPurchasesActions.FETCH_PURCHASES_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            error: ''
        }
        case fetchPurchasesActions.FETCH_PURCHASES_ERROR: return {
            ...state,
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}

export default purchaseReducer