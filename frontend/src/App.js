import './App.css';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<CreateAccountPage />} />
                
    </Routes>

    </>
  );
};

export default App;