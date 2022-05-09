import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Login from './components/Form/Login';
// import Signin from './components/Form/Signin';
// import Upload from './components/Form/upload';

// import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { rrfProps } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
  <App />
  {/* </ReactReduxFirebaseProvider> */}
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

