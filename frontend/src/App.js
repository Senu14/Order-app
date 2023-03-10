import './App.css';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import HomePage from './pages/HomePage/HomePage';
import ShoppingListPage from './pages/ShoppingListPage/ShoppingListPage';
import CreateOrderPage from './pages/CreateOrderPage/CreateOrderPage';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/CreateAccount" element={<CreateAccountPage />} />
    <Route path="/ProfilePage" element={<ProfilePage />} />  
    <Route path="/HomePage" element={<HomePage />} />
    <Route path="/CreateOrderPage" element={<CreateOrderPage />} />
     <Route path="/ShoppingListPage" element={<ShoppingListPage />} />         
    </Routes>

    </>
  );
};

export default App;