import './App.css';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<CreateAccountPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>

    </>
  );
};

export default App;