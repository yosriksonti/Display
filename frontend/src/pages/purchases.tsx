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
        <div>
            <button className="btn" onClick={() => navigate('/')} style={{float:"left"}}>Return</button>
            { props.loading 
                ? "Loading..."
                : props.purchases.map(purchase => {
                    return (
                        <div>
                            <Purchase purchase={purchase}></Purchase>
                            <hr></hr>
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