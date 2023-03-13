import './App.css';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddMenuPage from './pages/AddMenuPage/AddmenuPage';
import HomePage from './pages/HomePage/HomePage';
import ShoppingListPage from './pages/ShoppingListPage/ShoppingListPage';
import CreateOrderPage from './pages/CreateOrderPage/CreateOrderPage';
import ContactPages from './pages/ContactPages/ContactPages';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/CreateAccount" element={<CreateAccountPage />} />
    <Route path="/ProfilePage" element={<ProfilePage />} />       
    <Route path="/AddMenuPage" element={<AddMenuPage />} />       
    <Route path="/ProfilePage" element={<ProfilePage />} />  
    <Route path="/HomePage" element={<HomePage />} />
    <Route path="/CreateOrderPage" element={<CreateOrderPage />} />
     <Route path="/ShoppingListPage" element={<ShoppingListPage />} />  
     <Route path="/WelcomePage" element={<WelcomePage />} />
     <Route path='/ContactPages' element={<ContactPages />} />          
    </Routes>

    </>
  );
};

export default App;