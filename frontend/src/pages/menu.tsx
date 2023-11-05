import React, {useState} from 'react';
import Customers from '../components/Customers';
import Purchases from '../components/Purchases';

const Menu = () => {
    const [id, setId] = useState(0);
    return (
        <div className="flex">
            <div className={"w-52 bg-dark-purple p-4  pt-8 relative duration-300"}>
                <Customers/>
            </div>
            <div className="h-screen bg-light-white flex-1 p-4">
                <Purchases />
            </div>
        </div>
      );
}
 
export default Menu;