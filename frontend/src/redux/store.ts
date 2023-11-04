import { createStore, combineReducers } from 'redux'
import customerReducer from './customer/customerReducer';
import purchaseReducer from './purchase/purchaseReducer';
import { applyMiddleware } from "redux"; 
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    customer: customerReducer,
    purchase: purchaseReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store