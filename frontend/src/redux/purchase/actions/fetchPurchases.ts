import actions from '../types/fetchPurchases';
import axiosInstance from "../../../api";
import { Purchase } from '../../../types';


export const fetchPurchasesStart = () => {
    return {
        type: actions.FETCH_PURCHASES_START
    }
}

export const fetchPurchasesSuccess = (purchases:Array<Purchase>) => {
    return {
        type: actions.FETCH_PURCHASES_SUCCESS,
        payload: purchases
    }
}

export const fetchPurchasesError = (error:any) => {
    return {
        type: actions.FETCH_PURCHASES_ERROR,
        payload: error
    }
}

export const fetchPurchases = (id:number) => {
    return async (dispatch:Function) => {
        dispatch(fetchPurchasesStart())
        try {
            const response = await axiosInstance.get(`/customer/${id}/orders`,{})
            const purchases = response.data
            dispatch(fetchPurchasesSuccess(purchases))
        } catch (error) {
            dispatch(fetchPurchasesError(error))
        }
    }
}