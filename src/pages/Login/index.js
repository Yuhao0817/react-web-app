import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic here
    console.log('Logging in user:', { email, password });
    // Redirect to dashboard or home page after login
    navigate('/dashboard');
  };

  return (
    <div className={ styles.loginForm }>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={ styles.loginFormContainer}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.loginFormInput}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.loginFormInput}
        />
        <button type="submit" className={styles.loginFormButton}>Login</button>
      </form>
      <div className={styles.loginActions}>
        <a href="/register" className={styles.loginActionLink}>Register</a>
        <a href="/resetpassword" className={styles.loginActionLink}>Forgot Password?</a>
        <a href="/recoveraccount" className={styles.loginActionLink}>Account Recovery</a>
      </div>
    </div>
  );
};

export default Login;
