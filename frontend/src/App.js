import { Routes, Route } from "react-router-dom";
import React, { useState, useRef } from "react";
import  CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateAccountPage />} />
        
      </Routes>
    </div>
  );
};

export default App;