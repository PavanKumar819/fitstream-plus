import React from 'react';

function Workouts() {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Workout Programs</h1>
      <p style={styles.text}>Choose from beginner to advanced workouts tailored just for you!</p>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>Cardio Blast</h2>
          <p>Get your heart pumping with high-energy cardio routines.</p>
        </div>
        <div style={styles.card}>
          <h2>Strength Training</h2>
          <p>Build muscle and burn fat with guided strength exercises.</p>
        </div>
        <div style={styles.card}>
          <h2>Yoga Flex</h2>
          <p>Relax and stretch with calming yoga flows.</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.2rem',
    color: '#555',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '280px',
    textAlign: 'center',
  },
};

export default Workouts;
