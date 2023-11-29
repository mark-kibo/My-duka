import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ClerkDashboard from './ClerkDashboard';
import Signup from './Signup';
import Navbar from './Navbar';
import AppFooter from './Footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Navbar />} />
          <Route path='/' element={<AppFooter />} />
          <Route path='/clerk-dashboard/*' element={<ClerkDashboard />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;