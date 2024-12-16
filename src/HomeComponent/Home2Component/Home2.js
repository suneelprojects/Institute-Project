import React, { useEffect } from 'react';
import Map from '../../assets/worldmap.png'; // Import your image correctly
import styles from './Home2.module.css'; // Import the CSS module
import Aos from 'aos'; 
import 'aos/dist/aos.css';

const Home2 = () => {
    useEffect(() => {
        Aos.init({ duration: 1300 }); // Customize AOS settings here
      }, []);
  return (
    <div className={`container ${styles.Home2} p-1`} data-aos="fade-up">
      <div className="row m-5 align-items-center">
        <div className="col-md-6 col-sm-12 text-white">
          <p className="fs-1 fw-bold">
            The <span className={styles.gradientText}>Solution</span><br />
            for your Career Growth
          </p>
          <p className="text-secondary">
          SocialHire is a platform designed specifically for students and job seekers to thrive. With SocialHire, you can apply for curated jobs, build advanced resumes using AI, receive mentorship sessions from expert trainers, and create tech portfolio pages that showcase your skills. We are dedicated to giving you everything you need to succeed in your career journey.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Map} className="img-fluid m-3" alt="Map" />
        </div>
      </div>
    </div>
  );
};

export default Home2;
