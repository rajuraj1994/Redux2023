import logo from './logo.svg';
import './App.css';
// import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
// import testReducer from './reducers/testReducer';
import Test from './Test';
import store from './store';
import Student from './Student';
import Products from './Products';
import ItemData from './ItemData';

function App() {
  // const store = legacy_createStore(testReducer)
  return (
    <Provider store={store}>
      <Test />
      <Student />
      {/* <Products/> */}
      <ItemData/>
    </Provider>
  );
}

export default App;
