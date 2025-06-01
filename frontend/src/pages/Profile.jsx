import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>👋 Welcome, {user?.name || "Guest"}!</h2>
        <p style={styles.subtitle}>Email: {user?.email}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: '#111',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    background: '#222',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#61dafb',
  },
  subtitle: {
    fontSize: '18px',
    color: '#ccc',
  },
};

export default Profile;
