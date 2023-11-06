import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Customers from './pages/Customers';
import Purchases from './pages/Purchases';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Routes>
        < Route path='/' element={<Customers />} />
        < Route path='/customer/:id/orders' element={<Purchases />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;