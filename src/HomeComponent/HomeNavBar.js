import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/socialhire.png'

const HomeNavBar = () => {
    return (
        <div>
      <nav className={`navbar navbar-expand-lg px-3 py-5`}>
        {/* <div className='container-fluid mt-3' style={{background:'linear-gradient(to right, rgb(255, 0, 255), rgb(255, 127, 80));'}}> */}
        <div className='container-fluid mt-3' style={{ background: 'linear-gradient(to right, rgba(255, 0, 255, 0.3), rgba(255, 127, 80, 0.3))' }}>
        {/* <div className='container-fluid mt-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}> */}

          <Link className={`navbar-brand`} to='/'>
            <img src={logo} alt="icon" width="auto" height="70" />
          </Link>
          
          {/* Toggle button for small screens */}
          <button className="navbar-toggler mb-1" style={{backgroundColor:'#fff'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-dark"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <b><Link className={`nav-link text-white fs-6`} to='/login'>Curated jobs</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className={`nav-link text-white mx-2 fs-6`} to='/login'>Resume checker</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className={`nav-link text-white mx-2 fs-6`} to='/login'>Book Mentor</Link></b>
              </li>
              <li className="nav-item">
                  <b><Link className={`nav-link text-white mx-2 fs-6`} to='/login'>Placement Preparation</Link></b>
      </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <b><Link className={`nav-link text-white fs-6`} to='/login'>Login</Link></b>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
};

export default HomeNavBar;