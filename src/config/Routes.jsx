import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Catalog from '../pages/Catalog'
import AdminPage from '../pages/AdminPage'
import DetailProduct from '../pages/DetailProduct'
import CartPage from '../pages/CartPage';

const RouteRoute = () => {
    return (
        <Routes>
            <Route
                path='/detail/:id'
                element={<DetailProduct />}
            />
            <Route
                path='/admin'
                element={<AdminPage />}
            />
            <Route
                path='/cart'
                element={<CartPage />}
            />
            <Route
                path='/'
                exact
                element={<Catalog />}
            />
        </Routes>
    );
}

export default RouteRoute;