import React, {useState} from 'react';
import Customers from '../components/Customers';
import Purchases from '../components/Purchases';

const Menu = () => {
    const [id, setId] = useState(0);
    return (
        <div className="flex">
            <div className={"w-48 bg-dark-purple p-5  pt-8 relative duration-300"}>
                <Customers setId={setId}/>
            </div>
            <div className="h-screen flex-1 p-7">
                <Purchases id={id} />
            </div>
        </div>
      );
}
 
export default Menu;