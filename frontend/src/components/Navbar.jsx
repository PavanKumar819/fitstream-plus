import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  useEffect(() => {
    setIsLoggedIn(!!user); // re-check when user changes
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>FitStream+</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        {isLoggedIn ? (
          <>
            <Link to="/workouts" style={styles.link}>Workouts</Link>
            <Link to="/media" style={styles.link}>Media</Link>
            <Link to="/profile" style={styles.link}>Profile</Link>
            <button onClick={handleLogout} style={styles.authButton}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.authButton}>Login</Link>
            <Link to="/signup" style={styles.authButton}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#282c34',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#61dafb',
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  authButton: {
    color: '#fff',
    backgroundColor: '#61dafb',
    padding: '6px 12px',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
  }
};

export default Navbar;
