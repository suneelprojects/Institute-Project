import React, { useEffect } from 'react';
import styles from './Home7.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home7 = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 }); // Customize AOS settings here
      }, []);
    return (
        <div className='container my-5' data-aos="fade-up">
    <div className={`container ${styles.faqContactContainer}`}>
      <div className="row">
        <div className="col-md-6">
          <h6 className='text-secondary'>We just might have answered<br/> some of your questions. <span style={{color:'white'}}>Check this out</span></h6>
          <div className="accordion" id="faqAccordion">
            <div className='card bg-dark m-2' style={{border:'1px solid white'}} data-aos="fade-right">
              <div className={`card-header mb-1 ${styles.cardHeader}`} id="headingOne" role="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <h6 className="mb-0 text-white d-flex justify-content-between p-2">
                What is SocialHire?
                  <i className="bi bi-chevron-down"></i>
                </h6>
              </div>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className={`card-body ${styles.cardBody}`}>
                SocialHire is an AI-driven career platform designed to help students and job seekers apply for curated jobs, build advanced resumes, receive mentorship, and create tech portfolio pages.
                </div>
              </div>
            </div>
            <div className="card bg-dark m-2" style={{border:'1px solid white'}} data-aos="fade-right">
              <div className={`card-header mb-1 ${styles.cardHeader}`}  id="headingTwo" role="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h6 className="mb-0 text-white d-flex justify-content-between p-2">
                How do I get started with SocialHire?
                  <i className="bi bi-chevron-down"></i>
                </h6>
              </div>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className={`card-body ${styles.cardBody}`}>
                Simply create a profile on SocialHire by highlighting your skills, experience, and job preferences. Upload your resume and start exploring curated job opportunities.
                </div>
              </div>
            </div>
            <div  className="card bg-dark m-2" style={{border:'1px solid white'}} data-aos="fade-right">
              <div className={`card-header mb-1 ${styles.cardHeader}`}   id="headingThree" role="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h6 className="mb-0 text-white d-flex justify-content-between p-2">
                What kind of jobs are available on SocialHire?
                  <i className="bi bi-chevron-down"></i>
                </h6>
              </div>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className={`card-body ${styles.cardBody}`}>
                SocialHire offers a variety of curated job opportunities, specifically tailored to match your skills, experience, and career aspirations.
                </div>
              </div>
            </div>
            <div  className="card bg-dark m-2" style={{border:'1px solid white'}} data-aos="fade-right">
              <div className={`card-header mb-1 ${styles.cardHeader}`}   id="headingFour" role="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <h6 className="mb-0 text-white d-flex justify-content-between p-2">
                How does SocialHire help with resume building?
                  <i className="bi bi-chevron-down"></i>
                </h6>
              </div>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                <div className={`card-body ${styles.cardBody}`}>
                SocialHire provides advanced AI tools that help you build, optimize, and ensure your resume is ATS-compatible, making you stand out to potential employers.
                </div>
              </div>
            </div>
            <div  className="card bg-dark m-2" style={{border:'1px solid white'}} data-aos="fade-right">
              <div className={`card-header mb-1 ${styles.cardHeader}`}   id="headingFive" role="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <h6 className="mb-0 text-white d-flex justify-content-between p-2">
                Can I get career mentorship through SocialHire?
                  <i className="bi bi-chevron-down"></i>
                </h6>
              </div>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                <div className={`card-body ${styles.cardBody}`}>
                Yes, SocialHire connects you with industry experts who provide personalized guidance to help you succeed in your career journey.
                </div>
              </div>
            </div>
            <div  className="card bg-dark m-2" style={{border:'1px solid white'}} data-aos="fade-right">
              <div className={`card-header mb-1 ${styles.cardHeader}`}   id="headingSix" role="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                <h6 className="mb-0 text-white d-flex justify-content-between p-2">
                What is a tech portfolio, and how can SocialHire help me create one?
                  <i className="bi bi-chevron-down"></i>
                </h6>
              </div>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                <div className={`card-body ${styles.cardBody}`}>
                A tech portfolio is a showcase of your skills and accomplishments. SocialHire helps you create a professional tech portfolio that highlights your work and abilities, making it easier to impress recruiters.
                </div>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6">
      <h2 className='fs-1 fw-bold text-white'>Want a feature on <span className={styles.gradientText}>SocialHire? </span></h2>
      <p className='text-secondary'>If there are features you would like us to have on SocialHire to aid your recruitment and matching process kindly send us a message.</p>
      <form>
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="exampleInput" style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}></label>
          <input
            id="exampleInput"
            type="text"
            className={`${styles.styledInput} form-control bg-dark`}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="message" style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}></label>
          <textarea
            className={`${styles.styledInput} form-control bg-dark`}
            id="message"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" className="btn bg-white text-dark justify-content-center mt-3 p-2" data-aos="fade-left">
          Send message <i className="bi bi-chevron-double-right ms-3"></i>
        </button>
      </form>
    </div>
      </div>
    </div>
            
        </div>
    );
};

export default Home7;





