import './App.css';
import { Route, Routes } from "react-router-dom";

import './pages/HomePage/HomePage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<homePage />} />
      </Routes>
    </div>
  );
};

export default App;