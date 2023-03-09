import { Routes, Route } from "react-router-dom";
import React, { useState, useRef } from "react";
import './App.css';

import HomePage from "./pages/HomePage/HomePage";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;