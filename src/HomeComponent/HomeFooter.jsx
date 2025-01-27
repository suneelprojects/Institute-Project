import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Social_Hire_page-0001-removebg-preview.png';
import Login from '../LoginComponent/Login.jsx';


const HomeFooter = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const toggleLogin = () => {
      setIsLoginOpen(!isLoginOpen);
    };
    return (
      <>
        <div style={{ backgroundImage: 'url(../assets/gradient2.png)', backgroundSize: 'cover',backgroundColor:'black'}}>
           <div className="container-fluid bg-teal-500 p-5 mt-5">
      <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-white mb-4">About Us</h4>
          <img src={logo} width={250} height={70}></img>
          <p className="text-white mb-4">socialHire is one stop solution for engineers and graduates! A platform to learn in community, explore campuses & get placed in dream companies.</p>
          <p className="text-white mb-4"><i className="bi bi-geo-alt"></i> #508, 5th Floor,
Manjeera Majestic Commercial,
JNTU - HiTech City Road,
KPHB, Hyderabad - 500072
Contact: +91-8019 479 419</p>
          <p className="text-white mb-4">Recognized by <a href="#" className="text-white fs-4">startupindia</a></p>
          <div>
  <a href="https://www.instagram.com/socialprachar_institute/" className="m-2"><i className="bi bi-instagram fs-3"></i></a>
  <a href="https://www.linkedin.com/company/socialprachar-com/posts/?feedView=all" className="m-2"><i className="bi bi-linkedin fs-3"></i></a>
  <a href="https://www.youtube.com/@socialprachar" className="m-2"><i className="bi bi-youtube fs-3"></i></a>
  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsocial_prachar" className="m-2"><i className="bi bi-twitter-x fs-3"></i></a>
  <a href="https://www.facebook.com/socialprachar/" className="m-2"><i className="bi bi-facebook fs-3"></i></a>
</div>

       
       </div>
<div className='col-md-2'></div>
       <div className='col-md-3' style={{textDecoration:'none'}}>
       <h4 className='text-white'>Our Links</h4>
       <p><Link href='/login' onClick={toggleLogin} className="text-white" style={{textDecoration:'none'}}>Jobs</Link></p> 
        <p><Link href='/login'  onClick={toggleLogin} className="text-white" style={{textDecoration:'none'}}>Resume Checker</Link></p>
        <p><Link href='/login'  onClick={toggleLogin} className="text-white" style={{textDecoration:'none'}}>Mentorship</Link></p>
       <p><Link href='/login'  onClick={toggleLogin} className="text-white" style={{textDecoration:'none'}}>Login</Link></p>
      </div>
          </div>
          </div>
          </div>  
        </div>
      {isLoginOpen && <Login setIsAuthenticated={setIsAuthenticated} onClose={toggleLogin} />}
</>
    );
};

export default HomeFooter;