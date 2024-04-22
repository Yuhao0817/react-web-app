import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ResetPasswordPage from './pages/ResetPassword';
import AccountRecoveryPage from './pages/AccountRecovery';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/recoveraccount" element={<AccountRecoveryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
