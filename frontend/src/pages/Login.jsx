// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);

    if (!existingUser) {
      alert('User not found. Please sign up first.');
    } else if (existingUser.password !== password) {
      alert('Incorrect password!');
    } else {
      login(existingUser);
      alert('Login successful!');
      navigate('/profile');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card} className="fade-in">
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to continue to FitStream+</p>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required style={styles.input}
          />
          <input
            type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.switchText}>
          Don’t have an account? <Link to="/signup" style={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    background: 'rgba(0, 0, 0, 0.75)',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
    width: '100%',
    maxWidth: '400px',
    animation: 'fadeIn 1s ease-in-out',
  },
  title: { fontSize: '28px', color: '#61dafb', marginBottom: '10px', textAlign: 'center' },
  subtitle: { color: '#ccc', textAlign: 'center', marginBottom: '30px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: {
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    background: '#1c1c1c',
    color: '#fff',
    outline: 'none',
  },
  button: {
    padding: '12px',
    background: '#61dafb',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#000',
  },
  switchText: {
    marginTop: '15px',
    textAlign: 'center',
    color: '#ccc',
    fontSize: '14px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '4px',
  }
};

export default Login;
