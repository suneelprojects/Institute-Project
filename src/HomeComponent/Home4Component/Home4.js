import React, { useEffect } from 'react';
import styles from './Home4.module.css'; // Import the CSS module
import Aos from 'aos';
import 'aos/dist/aos.css'; // Make sure to import the AOS CSS
import image from '../../assets/image.png'
import Job from '../../assets/JOBSearch.png'
import { Link } from 'react-router-dom';


const Home4 = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 }); // Customize AOS settings here
  }, []);

  return (
    <>
            <div className={`${styles.Home5} container my-5`} data-aos="fade-up">
<div className='row'>
    <div className='col-12 col-md-5 col-sm-12'>
        <img src={Job} height='100%' width='100%' className='rounded'></img>
    </div>
    <div className='col-12 col-md-7 col-sm-12 p-3 my-5'>
        <p className='fs-1 fw-bold text-white'>Find the <span className={styles.gradientText}>Jobs</span> You Deserve</p>

<p className='text-secondary'>Tired of searching endlessly? SocialHire provides you with personalized job opportunities that align perfectly with your skills and goals. Whether you’re kickstarting your career or aiming for your next big break, we bring you the roles that fit best.
</p>
<Link to='/login' className='bg-white text-dark btn-lg fs-6' style={{borderRadius:'25px',textDecoration:'none'}}>Apply Now <i className="bi bi-arrow-up-right ms-3"></i> </Link>
</div>
</div>
        </div>
        </>
  );
};

export default Home4;
