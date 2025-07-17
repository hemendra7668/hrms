import  { useState } from 'react';
import axios from 'axios';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    age: '',
    email: '',
    password: '',
  });

  const roles = ['admin', 'user', 'guest'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
     try {
          const res = await axios.post('http://localhost:3000/auth/register', formData);
          alert(res.data.message);
        } catch (err) {
          console.error('Registration error:', err.response?.data || err.message);
          alert('Registration failed');
        }

    // You can add API call here
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Registration</h2>

      <label style={styles.label}>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Role:</label>
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
        style={styles.input}
      >
        <option value="">Select role</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label style={styles.label}>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <button type="submit" style={styles.button}>Register</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.6rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default RegistrationForm;
