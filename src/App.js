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