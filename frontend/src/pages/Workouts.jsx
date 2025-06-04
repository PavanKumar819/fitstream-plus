import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Workouts() {
  const [level, setLevel] = useState('beginner');
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/workouts/${level}`)
      .then(res => setWorkouts(res.data))
      .catch(err => {
        console.error("Failed to fetch workouts", err);
        setWorkouts([]);
      });
  }, [level]);

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Workout Programs</h1>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {workouts.length > 0 ? (
        <div style={styles.grid}>
          {workouts.map((workout, index) => (
            <div key={index} style={styles.card}>
              <h2>{workout.title}</h2>
              <p>{workout.duration}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.text}>No workouts found.</p>
      )}
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
