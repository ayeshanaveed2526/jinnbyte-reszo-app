import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard';
import CustomerMang from './CustomerMang';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
         <Route path="/CustomerMang" element={<CustomerMang />} />
        
      </Routes>
    </Router>
  )
}

export default App
