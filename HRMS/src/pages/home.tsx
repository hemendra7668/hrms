import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Login from './login';

const Home = () => {
const navigate = useNavigate();


  const scrollToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Smart HRMS Solution</h1>
          <p>Streamline your workforce management with our intuitive platform.</p>
        
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-text">
          <h2>All-in-One HR Platform</h2>
          <p>
            Manage attendance, payroll, recruitment, and employee engagement—all in one place.
          </p>
          <br />
            <button onClick={scrollToLogin}>Get Started</button>
        </div>
        
        <div className="info-image">
          <img
            src="https://www.infinityglobals.com/wp-content/uploads/2021/09/hrms-overview.webp"
            alt="HRMS visual"
          />
          
        </div>
      </section>

     
    </div>
  );
};

export default Home;
