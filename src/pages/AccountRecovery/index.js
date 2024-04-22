import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './AccountRecovery.module.css';

const AccountRecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 假设后端API会校验验证码并解锁账号
      const response = await axios.post('/api/verify-recovery', { email, verificationCode });
      if (response.data.success) {
        navigate('/login'); // 假设成功后跳转至登录页面
        alert('Your account has been successfully recovered. You can now login.');
      } else {
        throw new Error('Verification code is incorrect or expired.');
      }
    } catch (error) {
      console.error('Account recovery failed:', error);
      alert('Account recovery failed. Please make sure you entered the correct verification code.');
    }
  };

  return (
    <div className={styles.accountRecoveryPage}>
      <h2>Account Recovery</h2>
      <form onSubmit={handleSubmit} className={styles.accountRecoveryForm}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
          className={styles.input}
        />
        <button type="button" className={styles.sendCodeButton}>Send Verification Code</button>
        <input
          type="text"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
          placeholder="Verification Code"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.recoveryButton}>Recover Account</button>
      </form>
    </div>
  );
};

export default AccountRecoveryPage;
