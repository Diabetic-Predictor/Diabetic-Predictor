
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import LoginPage from "./pages/Login";
import SignupPage from './pages/Signup';
import HomePage  from  './pages/Home';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="pageNotFound" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
} 

export default App;