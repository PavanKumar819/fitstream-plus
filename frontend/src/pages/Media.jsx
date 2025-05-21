import React from 'react';

function Media() {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Media Library</h1>
      <p style={styles.text}>Browse through our video tutorials and expert tips.</p>
      <div style={styles.mediaGrid}>
        <div style={styles.videoCard}>🎥 Beginner Workout</div>
        <div style={styles.videoCard}>🎥 HIIT Routine</div>
        <div style={styles.videoCard}>🎥 Yoga for Flexibility</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#222',
    marginBottom: '20px',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.2rem',
    color: '#444',
  },
  mediaGrid: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  videoCard: {
    backgroundColor: '#e0f7fa',
    padding: '20px',
    borderRadius: '10px',
    width: '240px',
    textAlign: 'center',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default Media;
