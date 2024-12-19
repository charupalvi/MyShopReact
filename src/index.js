import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact'
// import ProductDetail from './pages/ProductDetail';
import FormDemo from './pages/FormsDemo'
import RegistrationForm from './pages/RegistrationForm'
import { ThemeProvider } from './pages/ThemeContext';

const ProductDetail = React.lazy(()=>import('./pages/ProductDetail'))

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement:<ErrorPage />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/products/:pid',
                // element: <ProductDetail />
                element:(
                    <React.Suspense>
                        <ProductDetail />
                    </React.Suspense>
                )
            },
            {
                path: '/formdemo',
                element: <FormDemo />
            },
            {
                path: '/register',
                element: <RegistrationForm />
            },
        ]
    },
    {
        path:'/home',
        element: <Home />
    },
    {
        path: '*',  //wildcard
        element: (
            <h2>The requested page is not available</h2>
        )
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
            <RouterProvider router={routes} />
    </ThemeProvider>
);




