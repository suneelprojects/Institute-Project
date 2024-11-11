import React from 'react';
import navBarStyle from "./navbar.module.css";
import { Link } from 'react-router-dom';
import logo from '../assets/job-search.png'


const NavBar = () => {
    return (
        <>

    <nav className={`navbar px-2 py-1 ${navBarStyle.navbar}`}>
      <div className='container'>
      <div className={`navbar-brand ${navBarStyle.navbarIcon}`}>
       <Link to='/'> <img src={logo} alt="icon" width="70" height="70"/></Link>
      </div>
      <div className={`nav-link ${navBarStyle.navbarCenter}`}>
        <Link to='/' href="/home">Home</Link>
      </div>
      <div className={`nav-item navbarRight ${navBarStyle.navbarRight} `}>
        <Link to='/host' className="btn" style={{backgroundColor:' #5451A6',color:'white'}} href='/host'>Host</Link>

      </div>
      <Link to='/login' href="/login"  className={`nav-link ${navBarStyle.login}`}>Login</Link>
      
      </div>
    </nav>
    </>    
           );
};

export default NavBar;