import React, { useEffect, useState } from 'react';
import image from '../../assets/image.png'
import styles from './Home5.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Make sure to import the AOS CSS
import mentor from '../../assets/Mentors.png'
import { Link } from 'react-router-dom';
import Login from '../../LoginComponent/Login';

const Home5 = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 }); // Customize AOS settings here
      }, []);

      
          const [isLoginOpen, setIsLoginOpen] = useState(false);
          const [isAuthenticated, setIsAuthenticated] = useState(false);
        
          const toggleLogin = () => {
            setIsLoginOpen(!isLoginOpen);
          };
    return (
        <>
        <div className={`${styles.Home5} container my-5`} data-aos="fade-up">
<div className='row'>
  
    <div className='col-12 col-md-7 col-sm-12 p-3 my-5'>
        <p className='fs-1 fw-bold text-white'>Grow with Personalized <span className={styles.gradientText}> Mentorship </span></p>

<p className='text-secondary'>Gain valuable insights from industry leaders who’ve walked your path. Our mentorship program offers tailored guidance to help you at every stage of your journey—from landing your ideal job to excelling and growing in your career.!
</p>
<Link onClick={toggleLogin} className='bg-white text-dark btn-lg fs-6' style={{borderRadius:'25px',textDecoration:'none'}}>Get Mentored <i className="bi bi-arrow-up-right ms-3"></i> </Link>
</div>
<div className='col-12 col-md-5 col-sm-12'>
        <img src={mentor} height='100%' width='100%'></img>
    </div>
</div>
</div>
        {isLoginOpen && (
            <Login
              isOpen={isLoginOpen}
              setIsAuthenticated={setIsAuthenticated}
              onClose={toggleLogin}
            />
          )}
          </>
    );
};

export default Home5;