import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import About from './Components/Landing/About';
import Contact from './Components/Landing/Contact';
import Service from './Components/Landing/Services';
import Login from './Components/Landing/Login';

import Dashboard from './Components/Dashboard/Dashboard';
import Attendance from './Components/Dashboard/Attendance';
import Leave from './Components/Dashboard/Leave'
import Salary from './Components/Dashboard/Salary'
import Reports from './Components/Dashboard/Reports'

import PrivateRoutes from './Components/Auth/PrivateRoutes';
import PublicRoute from './Components/Auth/PublicRoutes';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute><Landing /></PublicRoute>}>
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='service' element={<Service />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='/dashboard' element={<PrivateRoutes><Dashboard /></PrivateRoutes>}>
            <Route path='attendance'  element={<Attendance />} />
            <Route path='leave' element={<Leave />} />
            <Route path='salary' element={<Salary />} />
            <Route path='reports' element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App