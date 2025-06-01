// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful! Please log in.');
        navigate('/login');
      } else {
        alert(data.message || 'Signup failed!');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card} className="fade-in">
        <h2 style={styles.title}>Create Your Account</h2>
        <p style={styles.subtitle}>Sign up to get started with FitStream+</p>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} required style={styles.input}
          />
          <input
            type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required style={styles.input}
          />
          <div style={{ position: 'relative' }}>
            <input
            type={showPassword ? 'text' : 'password'} placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required style={{ ...styles.input, paddingRight: '40px' }} />
           <span onClick={() => setShowPassword(!showPassword)} style={styles.toggle} >
            {showPassword ? '🙈' : '👁️'}
          </span>
          </div>

          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.switchText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
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
  },
  toggle: {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  fontSize: '18px',
  userSelect: 'none',
  color: '#61dafb',
}

};

export default Signup;
