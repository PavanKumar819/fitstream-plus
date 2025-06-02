import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, login } = useAuth(); // Use login to update context
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPicture, setUpdatedPicture] = useState('');

  useEffect(() => {
    const currentUser = user || JSON.parse(localStorage.getItem('fitstream_user'));
    if (currentUser) {
      setUserData(currentUser);
      setUpdatedName(currentUser.username || currentUser.name || '');
      setUpdatedPicture(currentUser.picture || '');
    }
  }, [user]);

  const handleSave = () => {
    const updatedUser = {
      ...userData,
      name: updatedName,
      username: updatedName, // update both to keep it in sync
      picture: updatedPicture,
    };

    setUserData(updatedUser);
    login(updatedUser); // update context
    localStorage.setItem('fitstream_user', JSON.stringify(updatedUser));
    setEditing(false);
  };

  if (!userData) {
    return <div style={styles.container}>Loading profile...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>👤 User Profile</h2>

        {!editing ? (
          <>
            <p><strong>Name:</strong> {userData.username || userData.name || 'User'}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            {userData.picture && (
              <img src={userData.picture} alt="Profile" style={styles.image} />
            )}
            <button style={styles.editButton} onClick={() => setEditing(true)}>Edit Profile</button>
          </>
        ) : (
          <>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name:</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Profile Picture URL:</label>
              <input
                type="text"
                value={updatedPicture}
                onChange={(e) => setUpdatedPicture(e.target.value)}
                style={styles.input}
              />
            </div>
            <button style={styles.saveButton} onClick={handleSave}>Save</button>
            <button style={styles.cancelButton} onClick={() => setEditing(false)}>Cancel</button>
          </>
        )}
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
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.6)',
    textAlign: 'center',
    minWidth: '300px',
  },
  title: {
    color: '#61dafb',
    marginBottom: '20px',
  },
  image: {
    width: '100px',
    borderRadius: '50%',
    marginTop: '15px',
  },
  editButton: {
    marginTop: '20px',
    padding: '10px 15px',
    background: '#61dafb',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  saveButton: {
    marginTop: '20px',
    padding: '10px 15px',
    background: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  cancelButton: {
    marginTop: '10px',
    padding: '8px 15px',
    background: '#888',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    background: '#333',
    color: '#fff',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#ccc',
    textAlign: 'left',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
};

export default Profile;
