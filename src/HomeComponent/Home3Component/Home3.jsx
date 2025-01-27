// import React, { useEffect, useState } from 'react';
// import styles from './Home3.module.css'; // Import the CSS module
// import Aos from 'aos';
// import 'aos/dist/aos.css'; // Make sure to import the AOS CSS
// import cv from '../../assets/cv.png'
// import mentor from '../../assets/mentorship.png'
// import portfolio from '../../assets/add-friend.png'
// import job from '../../assets/application.png'
// import { Link } from 'react-router-dom';
// import Login from '../../LoginComponent/Login.jsx';



// const Home3 = () => {
//   useEffect(() => { Aos.init({ duration: 1300 });},[]); // Customize AOS settings here },

//      const [isLoginOpen, setIsLoginOpen] = useState(false);
//         const [isAuthenticated, setIsAuthenticated] = useState(false);
      
//         const toggleLogin = () => {
//           setIsLoginOpen(!isLoginOpen);
//         };

//   return (
//     <div className={`${isLoginOpen ? styles.blurBackground : ''}`}>
//     <div className={styles.container} data-aos="fade-up">
//       <div className="container mt-5">
//         <div className="row">
//           <div className={`col-md-6 ${styles.contentBox}`}>
//             <div className='p-5'>
//             <h2 className={`fs-1 fw-bold ${styles.gradientText}`}>How it works</h2>
//             <p className='text-secondary'>
//             Getting started with SocialHire is easy. Begin by creating a profile that showcases your skills, experience, and job preferences. Upload your resume and other documents to effectively highlight your expertise.
//             </p>
//             <p className='text-secondary'>
//             Next, access personalized mentorship from industry experts to guide you on your career journey. After that, start applying for curated job opportunities that match your skills and interests.
//             </p>
//             <p className='text-secondary'>
//             SocialHire also helps you build winning resumes using our advanced AI technology, ensuring you stand out to recruiters. Finally, create an impressive tech portfolio to showcase your skills to potential employers.
//             </p>
//             <div className="mt-5">
//               <Link to='/login' className={`btn btn-dark text-white ${styles.button} m-2`} onClick={toggleLogin} >Try AI Assesments <i className="bi bi-arrow-up-right ms-3"></i></Link>
//               <Link to='/login' className={`btn btn-dark text-white ${styles.button}`} onClick={toggleLogin}>Find Jobs <i className="bi bi-arrow-up-right ms-3"></i></Link>
//             </div>
//           </div>
//           </div>
//           <div className="col-md-6">        
//               <div className='d-block justify-content-center align-items-center'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-md-6 mb-3'  data-aos="flip-up">
//                 <div className={`card my-3 ${styles.card} h-100`}>
//                   <div className="card-body mt-3">
//                     <img src={cv} height={50} width={50} alt='cv/resume'></img>
//                     <h5 className="card-title mt-2 text-white">Create Your Profile</h5>
//                     <p className="card-text text-secondary">Highlight your skills, experience, and preferences to stand out.
//                     </p>
//                   </div>
//                 </div>
//                 </div>
//                 <div className='col-md-6 mb-3'  data-aos="flip-up">
//                 <div className={`card my-3 ${styles.card} h-100`}>
//                   <div className="card-body mt-3">
//                   <img src={mentor} height={40}  width={40} alt='mentor'></img>
//                     <h5 className="card-title mt-2 text-white"> Get Mentorship from Experts</h5>
//                     <p className="card-text text-secondary">Receive personalized guidance to advance your career.</p>
//                   </div>
//                 </div>
//                 </div>
//                 <div className='col-md-6 mb-3'  data-aos="flip-up">
//                 <div className={`card mt-3 ${styles.card} h-100`}>
//                   <div className="card-body mt-3">
//                   <img src={job} height={40} alt='job'></img>
//                     <h5 className="card-title mt-2 text-white">Apply for Jobs & Build Winning Resumes </h5>
//                     <p className="card-text text-secondary">Access hand-picked opportunities that match your expertise and create an optimized resume that passes ATS with ease. </p>
//                   </div>
//                   </div>
//                 </div>
//                 <div className='col-md-6 mb-3'  data-aos="flip-up">
//                 <div className={`card mt-3 ${styles.card} h-100`}>
//                   <div className="card-body mt-3">
//                   <img src={portfolio} height={40} alt='portoflio'></img>
//                     <h5 className="card-title mt-2 text-white">Develop an Outstanding Tech portfolio </h5>
//                     <p className="card-text text-secondary">Demonstrate your skills and accomplishments to potential employers.</p>
//                   </div>
//                   </div>
//                   </div>
//                 </div>
//                 </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//       {isLoginOpen && <Login isOpen={isLoginOpen} setIsAuthenticated={setIsAuthenticated} onClose={toggleLogin} />}
//         </div>

//   );
// };

// export default Home3;







import React, { useEffect, useState } from 'react';
import styles from './Home3.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import cv from '../../assets/cv.png';
import mentor from '../../assets/mentorship.png';
import portfolio from '../../assets/add-friend.png';
import job from '../../assets/application.png';
import { Link } from 'react-router-dom';
import Login from '../../LoginComponent/Login.jsx';

const Home3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
  
      <div className={`${isLoginOpen ? styles.blurBackground : ''}`}>
        <div className={styles.container} data-aos="fade-up">
          <div className="container mt-5">
            <div className="row">
              <div className={`col-md-6 ${styles.contentBox}`}>
                <div className="p-5">
                  <h2 className={`fs-1 fw-bold ${styles.gradientText}`}>
                    How it works
                  </h2>
                  <p className="text-secondary">
                    Getting started with SocialHire is easy. Begin by creating a profile that showcases your skills, experience, and job preferences. Upload your resume and other documents to effectively highlight your expertise.
                  </p>
                  <p className="text-secondary">
                    Next, access personalized mentorship from industry experts to guide you on your career journey. After that, start applying for curated job opportunities that match your skills and interests.
                  </p>
                  <p className="text-secondary">
                    SocialHire also helps you build winning resumes using our advanced AI technology, ensuring you stand out to recruiters. Finally, create an impressive tech portfolio to showcase your skills to potential employers.
                  </p>
                  <div className="mt-5">
                    <Link  className={`btn btn-dark text-white ${styles.button} m-2`} onClick={toggleLogin}>
                      Try AI Assesments <i className="bi bi-arrow-up-right ms-3"></i>
                    </Link>
                    <Link  className={`btn btn-dark text-white ${styles.button}`} onClick={toggleLogin}>
                      Find Jobs <i className="bi bi-arrow-up-right ms-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-block justify-content-center align-items-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 mb-3" data-aos="flip-up">
                        <div className={`card my-3 ${styles.card} h-100`}>
                          <div className="card-body mt-3">
                            <img src={cv} height={50} width={50} alt="cv/resume" />
                            <h5 className="card-title mt-2 text-white">
                              Create Your Profile
                            </h5>
                            <p className="card-text text-secondary">
                              Highlight your skills, experience, and preferences to stand out.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3" data-aos="flip-up">
                        <div className={`card my-3 ${styles.card} h-100`}>
                          <div className="card-body mt-3">
                            <img src={mentor} height={40} width={40} alt="mentor" />
                            <h5 className="card-title mt-2 text-white">
                              Get Mentorship from Experts
                            </h5>
                            <p className="card-text text-secondary">
                              Receive personalized guidance to advance your career.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3" data-aos="flip-up">
                        <div className={`card mt-3 ${styles.card} h-100`}>
                          <div className="card-body mt-3">
                            <img src={job} height={40} alt="job" />
                            <h5 className="card-title mt-2 text-white">
                              Apply for Jobs & Build Winning Resumes
                            </h5>
                            <p className="card-text text-secondary">
                              Access hand-picked opportunities that match your expertise and create an optimized resume that passes ATS with ease.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3" data-aos="flip-up">
                        <div className={`card mt-3 ${styles.card} h-100`}>
                          <div className="card-body mt-3">
                            <img src={portfolio} height={40} alt="portfolio" />
                            <h5 className="card-title mt-2 text-white">
                              Develop an Outstanding Tech portfolio
                            </h5>
                            <p className="card-text text-secondary">
                              Demonstrate your skills and accomplishments to potential employers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Login component outside the blurred container */}
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

export default Home3;
