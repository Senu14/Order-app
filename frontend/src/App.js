import { Routes, Route } from "react-router-dom";
import React, { useState, useRef } from "react";
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import CreateOrderPage from "./pages/CreateOrderPage/CreateOrderPage";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";




                
function App() {
  return (
    <div>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/CreateOrderPage" element={<CreateOrderPage />} />
        <Route path="/ShoppingListPage" element={<ShoppingListPage />} />
      </Routes>
    </div>
  );
};

export default App;