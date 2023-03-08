import { Routes, Route } from "react-router-dom";
import React, { useState, useRef } from "react";
import './App.css';
import './pages/LoginPage/LoginPage'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
      </Routes>
    </div>
  );
};

export default App;