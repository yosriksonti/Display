import React, {useEffect} from 'react';
import Customer from '../components/Customer';
import { connect } from 'react-redux';
import { fetchCustomers } from '../redux';
import { useNavigate } from 'react-router-dom';
import { Customer as CustomerType, RootState } from '../types';

interface Props {
    loading: boolean;
    customers: CustomerType[];
    error: string;
    fetchCustomers: Function;
}

const Customers = (props:Props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(props.customers.length==0 && !props.loading ){
            props.fetchCustomers()
        }
    }, [])
    return ( 
        <div className="customers">
            { 
            props.loading 
                ? "Loading..."
                : props.customers.map((customer:CustomerType) => {
                    return (
                        <div>
                            <Customer customer={customer}/>
                            <button onClick={() => navigate(`/customer/${customer.id}/orders`)}>Purchases</button>      
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