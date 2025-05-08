import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to FitStream+</h1>
        <p>Your one-stop platform for fitness & entertainment</p>
        <Link to="/workouts" className="cta-button">Start Your Workout</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🎥 Media Streaming</h3>
          <p>Watch workout videos, tutorials, and entertainment on demand.</p>
        </div>
        <div className="feature-card">
          <h3>🏋️ Personalized Workouts</h3>
          <p>Get routines based on your fitness level and goals.</p>
        </div>
        <div className="feature-card">
          <h3>📈 Real-time Analytics</h3>
          <p>Track your progress with interactive dashboards.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
