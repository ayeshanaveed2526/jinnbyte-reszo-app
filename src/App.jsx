import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard';
import CustomerMang from './CustomerMang';
import RestaurantMang from './RestaurantMang';
import Cuisine from './Cuisine';
 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/Dashboard' element={ <Dashboard />} />
         <Route path="/CustomerMang" element={<CustomerMang />} />
        <Route path='/RestaurantMang' element={<RestaurantMang/>}> </Route>
        <Route path='/Cuisine' element={<Cuisine/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
