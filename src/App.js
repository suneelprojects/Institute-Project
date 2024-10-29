import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import { Navbar } from 'react-bootstrap';
import NavBar from './NavBarComponent/NavBar'
import JobDetails from './CardsComponent/JobDetails';
import Host from './HostComponent/Host';
import JobListing from './CardsComponent/JobListing';
import Login from './LoginComponent/Login';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<JobListing/>} />
        <Route path="/host" element={<Host />} />
        <Route path="/jobDetails" element={<JobDetails />} /> {/* Ensure this matches navigate path */}
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
