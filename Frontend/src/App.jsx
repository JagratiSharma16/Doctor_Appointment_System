import './App.css'
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/doctors" element={<Doctors />}/>
          <Route path="/doctors/:speciality" element={<Doctors />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/my-profile" element={<Myprofile />}/>
          <Route path="/my-appointments" element={<Myappointments />}/>
          <Route path="/appointment/:docId" element={<Appointment />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
