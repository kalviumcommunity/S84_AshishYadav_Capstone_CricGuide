import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Learn from './pages/Learn';

import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn" element={<Learn />} />
      <Navbar />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dummy endpoints for navigation */}
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
        <Route path="/learn" element={<div>Start Learning Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
