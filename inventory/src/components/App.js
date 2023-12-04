// App.js
import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ClerkDashboard from './ClerkDashboard';
import Signup from './Signup';
import Navbar from './Navbar';
import AppFooter from './Footer';
import MerchantDashboard from './MerchantDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <div>
      
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path="/login/:role" element={<Login />} />
            <Route path='/' element={<Navbar />} />
            <Route path='/footer' element={<AppFooter />} />
            <Route path='/dashboard/clerk' element={<ClerkDashboard />} />
            <Route path='/dashboard/merchant' element={<MerchantDashboard />} />
            <Route path='/dashboard/admin' element={<AdminDashboard />} />
          </Routes>
      

    </div>
  );
}

export default App;
