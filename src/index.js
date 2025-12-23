import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
//import { UserProvider } from './context/user.context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';
//import { CategoriesProvider } from './context/categories.context';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter>
    {/* <UserProvider> */}
      {/* <CategoriesProvider> */}
       {/* <CartProvider> */}
        <App />
       {/* </CartProvider> */}
      {/* </CategoriesProvider> */}
    {/* </UserProvider> */}
   </BrowserRouter>
   </Provider>
  </React.StrictMode>
);


reportWebVitals();
