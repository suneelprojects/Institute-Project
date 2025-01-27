import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import image from '../../assets/resume-6627200_1280.jpg'
import styles from '../Home5Component/Home5.module.css';
import { Link } from 'react-router-dom';
import Login from '../../LoginComponent/Login';

const Home6 = () => {
    useEffect(() => {
        Aos.init({ duration: 1300 }); // Customize AOS settings here
      }, []);



          const [isLoginOpen, setIsLoginOpen] = useState(false);
                const [isAuthenticated, setIsAuthenticated] = useState(false);
              
                const toggleLogin = () => {
                  setIsLoginOpen(!isLoginOpen);
                };
    return (
        <>
        <div className='container mt-5' data-aos="fade-up">
            {/* <img src={linktree} hanging='100%' width='100%' className='mt-5'></img> */}
            <div className={`${styles.Home5} container my-5`} data-aos="fade-up">
<div className='row'>
<div className='col-12 col-md-5 col-sm-12'>
    
        <img src={image} width='100%' height='100%' className='rounded'></img>
        
    </div>
    <div className='col-12 col-md-7 col-sm-12 p-3 my-5'>
        <p className='fs-1 fw-bold text-white'>Create a Winning 
        <span className={styles.gradientText}> Resume</span> in Seconds</p>

<p className='text-secondary'>Make your resume stand out effortlessly with SocialHire's AI-powered tools. Build, optimize, and ensure your resume passes Applicant Tracking Systems (ATS) so you never miss an opportunity. Create a compelling resume with just one click.

</p>
<Link onClick={toggleLogin}  className='bg-white text-dark btn-lg fs-6' style={{borderRadius:'25px',textDecoration:'none'}}>Build Your Resume <i className="bi bi-arrow-up-right ms-3"></i> </Link>
</div>

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

export default Home6;