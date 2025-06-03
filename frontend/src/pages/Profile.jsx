import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, login } = useAuth();
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPicture, setUpdatedPicture] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  // Load user data from context or localStorage
  useEffect(() => {
  const currentUser = user || JSON.parse(localStorage.getItem('fitstream_user'));
  console.log("Current user from auth/localStorage:", currentUser);

  if (currentUser) {
    // Normalize structure for both Firebase and custom auth users
    const normalizedUser = {
      username: currentUser.username || currentUser.name || currentUser.displayName || 'User',
      email: currentUser.email || '',
      picture: currentUser.picture || currentUser.photoURL || '',
      height: currentUser.height || '',
      weight: currentUser.weight || '',
      bmi: currentUser.bmi || null,
    };

    setUserData(normalizedUser);
    setUpdatedName(normalizedUser.username);
    setUpdatedPicture(normalizedUser.picture);
    setHeight(normalizedUser.height);
    setWeight(normalizedUser.weight);
  }
}, [user]);

  // Recalculate BMI when height or weight changes
  useEffect(() => {
    if (height && weight) {
      const h = parseFloat(height);
      const w = parseFloat(weight);
      if (!isNaN(h) && !isNaN(w) && h > 0) {
        const bmiCalc = (w / ((h / 100) ** 2)).toFixed(1);
        setBmi(bmiCalc);
      }
    }
  }, [height, weight]);

  const handleSave = () => {
  const updatedUser = {
    ...userData,
    username: updatedName,
    picture: updatedPicture,
    height,
    weight,
    bmi,
  };

  setUserData(updatedUser);
  login(updatedUser); // this should also update the auth context
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
            {userData.height && <p><strong>Height:</strong> {userData.height} cm</p>}
            {userData.weight && <p><strong>Weight:</strong> {userData.weight} kg</p>}
            {userData.bmi && <p><strong>BMI:</strong> {userData.bmi}</p>}

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

            <div style={styles.formGroup}>
              <label style={styles.label}>Height (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={styles.input}
              />
            </div>

            {bmi && <p><strong>BMI:</strong> {bmi}</p>}

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
