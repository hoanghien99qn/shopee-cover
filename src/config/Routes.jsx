import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Catalog from "../pages/Catalog";
import AdminPage from "../pages/AdminPage";
import DetailProduct from "../pages/DetailProduct";
import CartPage from "../pages/CartPage";
import Search from "../pages/Search";

const RouteRoute = () => {
  return (
    <Routes>
      <Route path="/detail/:collectionId/:id" element={<DetailProduct />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" exact element={<Catalog />} />
      <Route path="/shopee-cover" element={<Navigate to="/" />} />
      <Route path="/search/:searchTerm" element={<Search />} />
    </Routes>
  );
};

export default RouteRoute;
