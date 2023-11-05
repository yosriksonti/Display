import React from 'react';
import { Customer as CustomerType } from '../types';
interface Props {
    customer: CustomerType;
    setId: Function;
}
const Customer = (props:Props) => {

    return ( 
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                {props.customer.title}. {props.customer.firstname} {props.customer.lastname}
                </p>
                <small className="text-slate-500 text-xm">
                {props.customer.email} 
                </small>

                <p className="text-slate-500 font-small-italic">
                {props.customer.city} {props.customer.postal_code}
                </p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" 
                onClick={() => props.setId(props.customer.id)}>Purchases</button>
            </div>
        </div>
    );
}
 
export default Customer;