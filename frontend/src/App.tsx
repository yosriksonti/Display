import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Menu from './pages/menu';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Provider store={store}>
      <Menu></Menu>
    </Provider>
  );
}

export default App;
