import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const scrollToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-800">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="z-10 text-white px-6">
          <h1 className="text-5xl font-bold drop-shadow-md">Smart HRMS Solution</h1>
          <p className="mt-4 text-lg max-w-xl mx-auto drop-shadow">Streamline your workforce with a Gen-Z-ready, all-in-one HRMS platform.</p>
          <button
            onClick={scrollToLogin}
            className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Info */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 gap-10 bg-white">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600">
            Automate your HR processes — attendance, payroll, hiring, and engagement — using our user-friendly platform tailored for modern teams.
          </p>
          <button
            onClick={scrollToLogin}
            className="mt-6 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition duration-300"
          >
            Try it Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://www.infinityglobals.com/wp-content/uploads/2021/09/hrms-overview.webp"
            alt="HRMS Overview"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-indigo-900 text-white py-6 px-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">SmartHRMS © 2025</h3>
            <p className="text-sm text-gray-300">Designed for the future of workforce management.</p>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaTwitter /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};  

export default Home;
