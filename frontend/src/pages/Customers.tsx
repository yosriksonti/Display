import React, {useEffect} from 'react';
import Customer from '../components/Customer';
import { connect } from 'react-redux';
import { fetchCustomers } from '../redux';
import { Customer as CustomerType, RootState } from '../types';

interface Props {
    loading: boolean;
    customers: CustomerType[];
    error: string;
    fetchCustomers: Function;
}

const Customers = (props:Props) => {
    useEffect(() => {
        if(props.customers.length==0 && !props.loading ){
            props.fetchCustomers()
        }
    }, [])
    return ( 
        <div className="bg-gradient-to-b from-indigo-500 p-4  pt-4 relative duration-300 h-screen">
            { 
            props.loading 
                ? "Loading..."
                : props.customers.map((customer:CustomerType) => {
                    return (
                            <Customer customer={customer} key={customer.id} />
                    )
                  })
            }
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
        fetchCustomers: () => dispatch(fetchCustomers())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Customers);