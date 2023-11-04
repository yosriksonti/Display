import actions from '../types/fetchCustomers';
import axiosInstance from "../../../api";
import { Customer } from '../../../types'


export const fetchCustomersStart = () => {
    return {
        type: actions.FETCH_CUSTOMERS_START
    }
}

export const fetchCustomersSuccess = (customers:Array<Customer>) => {
    return {
        type: actions.FETCH_CUSTOMERS_SUCCESS,
        payload: customers
    }
}

export const fetchCustomersError = (error:any) => {
    return {
        type: actions.FETCH_CUSTOMERS_ERROR,
        payload: error
    }
}

export const fetchCustomers = () => {
    return async (dispatch:Function) => {
        dispatch(fetchCustomersStart())
        try {
            const response = await axiosInstance.get(`/customer`,{})
            const customers = response.data
            dispatch(fetchCustomersSuccess(customers))
        } catch (error) {
            dispatch(fetchCustomersError(error))
        }
    }
}