import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Dashboard from "./pages/dashboard/Dashboard";
import Login from './pages/login/Login';

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
        <Route exact path="/" element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
};

