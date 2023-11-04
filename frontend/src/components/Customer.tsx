import React from 'react';
import { Customer as CustomerType } from '../types';
interface Props {
    customer: CustomerType;
}
const Customer = (props:Props) => {
    return ( 
        <div className="customer">
            <h1>{props.customer.title} {props.customer.firstname} {props.customer.lastname}</h1>
            <h2>{props.customer.email}</h2>
            <h3>{props.customer.city} {props.customer.postal_code}</h3>
        </div>
    );
}
 
export default Customer;