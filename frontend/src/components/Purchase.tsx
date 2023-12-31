import React from 'react';
import { Purchase as PurchaseType } from '../types';

interface Props {
    purchase: PurchaseType;
}

const Purchase = (props:Props) => {
    return ( 
        <div data-testid="purchase-test" className="py-4 px-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-2 sm:space-x-6 m-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded dark:text-blue-400 border border-blue-400 ">
                {props.purchase.purchase_identifier}
            </span>
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                {props.purchase.product_id} <small>x{props.purchase.quantity}</small>
                </p>
                <p className="text-slate-500 font-small-italic">
                {props.purchase.price} {props.purchase.currency}  
                </p>
                <hr></hr>
                <p className="text-slate-500 font-medium">
                {props.purchase.last_name} on {props.purchase.date}
                </p>
                </div>
            </div>
        </div>
     );
}
 
export default Purchase;