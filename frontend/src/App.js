import './App.css';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddMenuPage from './pages/AddMenuPage/AddmenuPage';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/CreateAccount" element={<CreateAccountPage />} />
    <Route path="/ProfilePage" element={<ProfilePage />} />       
    <Route path="/AddMenuPage" element={<AddMenuPage />} />       
    </Routes>

    </>
  );
};

export default App;