import React, { useEffect } from 'react';
import Purchase from '../components/Purchase';
import { connect } from 'react-redux';
import { fetchPurchases } from '../redux';
import { Purchase as PurchaseType, RootState } from '../types';

interface Props {
    loading: boolean;
    purchases: PurchaseType[];
    error: string;
    fetchPurchases: Function;
    id: number;
}

const Purchases = (props:Props) => {

    useEffect(() => {
        if(props.id){
            props.fetchPurchases(props.id)
        }
    }, [props.id])
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
            { props.loading 
                ? ""
                : props.purchases.map(purchase => {
                    return (
                        <div key={purchase.purchase_identifier}>
                            <Purchase purchase={purchase}></Purchase>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
const mapStateToProps = (state:RootState) => {
    return {
        loading: state.purchase.loading,
        purchases: state.purchase.data,
        error: state.purchase.error
    }
}

const mapDispatchToProps = (dispatch:Function) => {
    return {
        fetchPurchases: (id:number) => dispatch(fetchPurchases(id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Purchases);