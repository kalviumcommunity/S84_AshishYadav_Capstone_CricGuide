import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://s84-ashishyadav-capstone-cricguide-1.onrender.com/api/auth/register", {
        name,
        email,
        password
      });

      console.log('✅ Signup successful:', res.data);
      alert('Signup successful!');
      navigate('/learn'); // redirect to /learn
    } catch (err) {
      console.error('❌ Signup failed:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">SIGNUP</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
