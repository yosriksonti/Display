import React from 'react';
import { Purchase as PurchaseType } from '../types';

interface Props {
    purchase: PurchaseType;
}

const Purchase = (props:Props) => {
    return ( 
        <div className="purchase">
            <h1>ID: {props.purchase.purchase_identifier}</h1>
            <h2>PRODUCT: {props.purchase.product_id} | QTY: {props.purchase.quantity} | PRICE: {props.purchase.price}</h2>
            <h3>DATE: {props.purchase.date} | CUSTOMER: {props.purchase.last_name}</h3>
        </div>
     );
}
 
export default Purchase;