import React, { useEffect } from 'react';
import Purchase from '../components/Purchase';
import { connect } from 'react-redux';
import { fetchPurchases } from '../redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Purchase as PurchaseType, RootState } from '../types';

interface Props {
    loading: boolean;
    purchases: PurchaseType[];
    error: string;
    fetchPurchases: Function;
}

const Purchases = (props:Props) => {
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
            props.fetchPurchases(id)
    }, [id])
    console.log(props.purchases)
    return ( 
        <div className="bg-gradient-to-b from-indigo-500 p-4  pt-4 relative duration-300 h-screen">
            
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
            <button onClick={() => navigate(-1)}
            className="bg-purple-500 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-full">
                Back
            </button>
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