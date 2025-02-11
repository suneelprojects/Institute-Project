import React, { useEffect, useState } from 'react';
import navBarStyle from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Social_Hire_page-0001-removebg-preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Ensure correct import for Firebase auth
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userEmail = user.email;
        const userQuery = query(collection(db, 'UsersProfile'), where('email', '==', userEmail));
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          const generatedUserId = `${userData.firstName}-${userData.lastName}`;
          setUserId(generatedUserId);
        }
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add(navBarStyle.scrolled);
      } else {
        navbar.classList.remove(navBarStyle.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => { AOS.init({ duration: 1200 }) }, []); // Initialize AOS with desired options

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut()
      .then(() => {
        console.log('User signed out');
        navigate('/home'); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
    <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000' }} data-aos="fade-up">
      <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-3 ${navBarStyle.navbar}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className='d-sm-flex justify-content-sm-between'>
            <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/'>
              <img src={logo} alt="icon" width="180" height="50" />
            </Link>
            
            {/* Toggle button for small screens */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{color:'white',backgroundColor:' #024e75'}} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} text-white`} to='/' onClick={handleNavLinkClick}>Curated Jobs</Link></h5>
              </li>
              <li className="nav-item">
                <h5><a href='https://socialhire.in/resume-checker/' style={{ textDecoration: 'none' }} className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2  text-white`} onClick={handleNavLinkClick}>AI Resume Builder</a></h5>
              </li>
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2  text-white`} to='/bookmentor' onClick={handleNavLinkClick}>Book Mentor</Link></h5>
              </li>
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2  text-white`} to='/placement' onClick={handleNavLinkClick}>Placement Preparation</Link></h5>
              </li>
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2`} to={`/userProfile/${userId}`} onClick={handleNavLinkClick}>Digital Profile</Link></h5>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <h5><a className={`nav-link ${navBarStyle.navlink} ${navBarStyle.login}`} onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</a></h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
