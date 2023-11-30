// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './components/Login';
import ClerkDashboard from './components/ClerkDashboard';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import AppFooter from './components/Footer';
import MerchantDashboard from './components/MerchantDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';
import SideBar from './components/SideBar';
function App() {

  const Layout = () => {
    return (
      <div className="main">

        <Navbar />

        <div className="contentContainer">

          {/* <SideBar /> */}
          <Outlet />



        </div>


      </div>
    );
  };
  return (
    <div>





      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path='/dashboard/clerk' element={<ClerkDashboard />} />
            <Route path='/dashboard/merchant' element={<MerchantDashboard />} />
            <Route path='/dashboard/admin' element={<AdminDashboard />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>


    </div>
  );
}

export default App;
