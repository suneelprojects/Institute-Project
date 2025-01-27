import React from 'react';
import navBarStyle from '../UserNavbarComponet/UserNavbar.module.css'
import { Link } from 'react-router-dom';
import logo from '../../../assets/userProfileLogo.jpg';

const UserNavbar = () => {
    return (
        <div className='container' style={{marginTop:'150px'}}>
            <div data-aos="fade-up">
      <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-3 ${navBarStyle.navbar}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className='d-sm-flex justify-content-sm-between'>
            <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/'>
              <img src={logo} alt="icon" width="70" height="70" />
            </Link>
            
            {/* Toggle button for small screens */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{color:'white',backgroundColor:' #024e75'}} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter}`} to='/'>
                <i className="bi bi-house-door me-2 fw-bold"></i>
                Home</Link></h5>
              </li>
              <li className="nav-item">
                <h5><a href='https://socialhire.in/resume-checker/' style={{ textDecoration: 'none' }} className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2  text-white`}>
                <i className="bi bi-person-circle me-2 fw-bold"></i>
                About</a></h5>
              </li>
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2  text-white`} to='/bookmentor'>
                <i className="bi bi-cast me-2 fw-bold"></i>
                Projects</Link></h5>
              </li>
             
            
              
            </ul>

           
          </div>
        </div>
      </nav>
    </div>
        </div>
    );
};

export default UserNavbar;