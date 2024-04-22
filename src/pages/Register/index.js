import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic here
    console.log('Registering user:', { name, email, password });
    // Redirect to login page after registration
    navigate('/login');
  };

  return (
    <div className={style.registerForm}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={style.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={style.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={style.input}
        />
        <button type="submit" className={style.registerButton}>Register</button>
      </form>
      <p><span>Already have an account? </span><a href="/login" className={style.loginLink}>Login here</a></p>
    </div>
  );
};

export default Register;
