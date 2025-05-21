import React from 'react';

function Profile() {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Your Profile</h1>
      <div style={styles.profileBox}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Goals:</strong> Weight Loss, Muscle Gain</p>
        <button style={styles.button}>Edit Profile</button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px',
  },
  profileBox: {
    margin: '0 auto',
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'left',
    lineHeight: '1.8',
  },
  button: {
    marginTop: '15px',
    backgroundColor: '#61dafb',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Profile;
