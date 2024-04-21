import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Register from './Routes/Register.js';
import Reset from './Routes/Reset.js';
import Login from './Routes/Login.js';
import Home from './Routes/Home.js';
import ErrorPage from './Routes/ErrorPage.js';
import Contact from './Routes/Contact.js';

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <ErrorPage/>,
        children : [
            
            
        ]
    },
    {
        path : "/home",
        element : <Home/>
    },
    {
        path : "Profil"
    },
    {
        path : "Mes KEFs"
    },
    {
        path : "Nouveau KEF"
    },
    {
        path : "Rechercher KEFs"
    },
    {
        path : "/contact",
        element : <Contact/>
    },
    {
        path : "/register",
        element : <Register/>
    },
    {
        path : "/reset",
        element : <Reset/>
    },
    {
        path : "/login",
        element : <Login/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
);
