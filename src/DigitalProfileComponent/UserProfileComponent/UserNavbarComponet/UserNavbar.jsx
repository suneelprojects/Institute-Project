import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig.js';
import logo from '../../../assets/userProfileLogo.png';
import navBarStyle from './UserNavbar.module.css';
import banner from '../../../assets/banner-shape.png';
import UserProfile from '../UserProfileComponent/UserProfile.jsx';

const UserNavbar = () => {
  const [hasProfile, setHasProfile] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
          setHasProfile(true);
          if (location.pathname === '/userProfile') {
            navigate(`/userProfile/${generatedUserId}`);
          }
        }
      }
    });
  }, [navigate, location]);

  return (
    <div className='container' style={{ marginTop: '150px', backgroundImage: `url(${banner})`, backgroundRepeat: 'repeat-y' }}>
      <div data-aos="fade-up">
        <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-3 ${navBarStyle.navbar}`}>
          <div className="container d-flex justify-content-between align-items-center">
            <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/userProfile'>
              <img src={logo} alt="icon" width="70" height="70" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#userNavbarContent"
              aria-controls="userNavbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: 'white', backgroundColor: '#024e75' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="userNavbarContent">
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                  <h5>
                    <Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter}`} to={`/userProfile/${userId}`}>
                      <i className="bi bi-house-door me-2 fw-bold"></i>
                      Home
                    </Link>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter}`} to={`/userProfile/${userId}/about`}>
                      <i className="bi bi-person-square me-2 fw-bold"></i>
                      About
                    </Link>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2 text-white`} to={`/userProfile/${userId}/projects`}>
                      <i className="bi bi-cast me-2 fw-bold"></i>
                      Projects
                    </Link>
                  </h5>
                </li>
              </ul>
              <div>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <h5>
                      <Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.login}`} style={{ cursor: 'pointer' }} to='/Form'>
                        {hasProfile ? 'Update Profile' : 'Create Profile'}
                      </Link>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4'>
            {userId && <UserProfile userId={userId} />}
          </div>
          <div className='col-md-8 mb-2'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
