import React from 'react';
import { connect } from 'react-redux';
import { fetchPurchases } from '../redux';
import { Customer as CustomerType, RootState } from '../types';
import { useNavigate } from 'react-router-dom';
interface Props {
    customer: CustomerType;
    fetchPurchases: Function;
}
const Customer = (props:Props) => {
    const navigate = useNavigate();
    return ( 
        <div data-testid="customer-test" className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
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
                onClick={() => navigate(`/customer/${props.customer.id}/orders`)}>Show Orders</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state:RootState) => {
    return {
        loading: state.customer.loading,
        customers: state.customer.data,
        error: state.customer.error
    }
}

const mapDispatchToProps = (dispatch:Function) => {
    return {
        fetchPurchases: (id:number) => dispatch(fetchPurchases(id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Customer);