import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard';
import CustomerMang from './CustomerMang';
import RestaurantMang from './RestaurantMang';
import Cuisine from './Cuisine';
import HelpandSupport from './HelpandSupport';
import 'react-phone-input-2/lib/style.css';
 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element={ <Dashboard />} />
         <Route path="/CustomerMang" element={<CustomerMang />} />
        <Route path='/RestaurantMang' element={<RestaurantMang/>}> </Route>
        <Route path='/Cuisine' element={<Cuisine/>}></Route>
        <Route path='/HelpandSupport' element={<HelpandSupport/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
