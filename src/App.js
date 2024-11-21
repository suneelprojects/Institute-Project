import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBarComponent/NavBar'
import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.js';
import Host from './HostComponent/Host';
import JobListing from './CardsComponent/JoblistingComponent/JobListing.js';
import Login from './LoginComponent/Login';
import ResumeChecker from './ResumeCheckerComponent/ResumeChecker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mentorship from './MentorshipComponent/Mentorship';

import {auth} from './firebase.js'
import Home from './HomeComponent/Home.js';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   useEffect(() => { 
    // Check if Firebase Auth is working 
    const checkAuth = async () => { try { const user = auth.currentUser; if (user) { console.log("User is signed in:", user); setIsAuthenticated(true); } else { console.log("No user is signed in."); setIsAuthenticated(false); } } catch (error) { console.error("Error checking auth:", error); setIsAuthenticated(false); } }; checkAuth(); }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<JobListing />} /> 
      <Route path="/host" element={isAuthenticated ? <Host /> : <Navigate to="/" />} /> 
      <Route path="/jobDetails" element={isAuthenticated ? <JobDetails /> : <Navigate to="/" />} />
       <Route path="/resumechecker" element={isAuthenticated ? <ResumeChecker /> : <Navigate to="/" />} /> 
       <Route path="/mentorship" element={isAuthenticated ? <Mentorship /> : <Navigate to="/" />} /> 
       <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
