import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import styles from './ResetPassword.module.css'; 

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      // const response = await axios.post('/api/reset-password', { email, password });
      // if (response.data.success) {
      //   navigate('/login'); // 假设成功重置密码后跳转至登录页面
      //   alert('Password has been reset successfully. Please login with your new password.');
      // } else {
      //   throw new Error(response.data.message);
      // }
      console.log('账号和密码：', email, password);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Password reset failed:', error);
      alert('Password reset failed. Please try again.');
    }
  };

  return (
    <div className={styles.resetPasswordPage}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className={styles.resetPasswordForm}>
        <input
          type="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="New Password"
          required
          className={styles.input}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          placeholder="Confirm New Password"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.resetButton}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
