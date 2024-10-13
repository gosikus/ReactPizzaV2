import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './pages/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Main from './pages/Main';
import Cart from './pages/Cart';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <Error />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
        errorElement: <Error />,
      },
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
