import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import Dashboard from "./pages/dashboard/Dashboard";
import Login from './pages/login/Login';
import Vehicles from './pages/vehicles/Vehicles';
import Administrator from './pages/administrator/Admin';
import User from './pages/user/User';
import HolderVehicle from './pages/holderVehicle/Holder';
import Reports from './pages/dataReport/Report';
import AddDataVehicles from './components/addData/DataVehicles';
import AddDataAdmin from './components/addData/DataAdmin';
import AddDataUser from './components/addData/DataUser';
import AddDataHolder from './components/addData/DataHolder';

export default function App() {
  const location = useLocation;

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route path='login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/administrator' element={<Administrator />} />
        <Route path='/user' element={<User />} />
        <Route path='/holder' element={<HolderVehicle />} />
        <Route path='/report' element={<Reports />}/>
        <Route path='/add-data-vehicles' element={<AddDataVehicles />} />
        <Route path='/add-data-admin' element={<AddDataAdmin />} />
        <Route path='/add-data-user' element={<AddDataUser />} />
        <Route path='/add-data-holder' element={<AddDataHolder/>} />
      </Routes>
    </BrowserRouter>
  )
};