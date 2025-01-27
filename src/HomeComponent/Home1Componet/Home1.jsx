// import React from 'react';
// import HRmanager from '../../assets/HRManager.png'
// import Talents from '../../assets/talents.png'
// import styles from './Home1.module.css'


// const Home1 = () => {
//     return ( 

//         <div className={`container-fluid mt-5 ${styles.container}`}>
//           <div className={`row align-items-center mt-5 text-white text-center ${styles.row} d-flex`}>
//             <div className='col-md-3 col-sm-12'>
//               <img src={HRmanager} alt="HR Manager" className={` ms-5 justify-content-end ${styles.image}`} />
//             </div>
//             <div className={`col-md-6 col-sm-12 ${styles.textCenter}`}>
//               <p className={` ${styles.text}`}>Where Dreams Meet Opportunities<br />for a Perfect Match!</p>
//             </div>
//             <div className='col-md-3 col-sm-12'>
//               <img src={Talents} alt="Talents" className={styles.image} />
//             </div>
//           </div>
//         </div>

  
        
//     );
// };

// export default Home1;



import React, { useEffect, useState } from 'react';
import HRmanager from '../../assets/HRManager.png';
import Talents from '../../assets/talents.png';
import styles from './Home1.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Login from '../../LoginComponent/Login.jsx';

const Home1 = () => {
  useEffect(() => { AOS.init({ duration: 1300 }); }, []);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div className={`container-fluid ${styles.bgGradient}`}>
      <div className={`${isLoginOpen ? styles.blurBackground : ''}`}>
        <div className='row align-items-center text-center mt-5'>
          <div className='col-md-12 col-sm-12'>
            <div className='d-block justify-content-center align-items-center' style={{ height: '85vh' }}>
              <p className={`fs-1 fw-bolder text-white ${styles.text}`}>
                <span className={styles.gradientText}> SocialHire,</span> Where Your Dreams <br /> and Opportunities Meet!
              </p>
              <p className={`${styles.description}`}>
                Your AI-Powered Career Partner! Apply, prepare, and conquer <br /> your dream role with
                <b className='text-white'>SocialHire’s</b> revolutionary career solutions.
              </p>
              <div className='d-flex justify-content-center mt-5 mb-5'>
                <button onClick={toggleLogin} className={`btn btn-white bg-white p-3 me-3 ${styles.button}`}>Get Mentored <i className="bi bi-arrow-up-right ms-3"></i></button>
                <button onClick={toggleLogin} className={`btn btn-secondary bg-dark p-3 ${styles.button}`}>Apply Jobs <i className="bi bi-arrow-up-right ms-3"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoginOpen && <Login setIsAuthenticated={setIsAuthenticated} onClose={toggleLogin} />}
    </div>
  );
};

export default Home1;





// import React, { useEffect, useState } from 'react';
// import HRmanager from '../../assets/HRManager.png';
// import Talents from '../../assets/talents.png';
// import styles from './Home1.module.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Login from '../../LoginComponent/Login.jsx';
// import Modal from '../../ModalComponent/Modal.jsx';

// const Home1 = () => {
//   useEffect(() => { AOS.init({ duration: 1300 }); }, []);

//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const toggleLogin = () => {
//     setIsLoginOpen(!isLoginOpen);
//   };

//   return (
//     <div className={`container-fluid ${styles.bgGradient} ${isLoginOpen ? styles.blurBackground : ''}`}>
//       <div className='row align-items-center text-center mt-5'>
//         <div className='col-md-12 col-sm-12'>
//           <div className='d-block justify-content-center align-items-center' style={{ height: '85vh' }}>
//             <p className={`fs-1 fw-bolder text-white ${styles.text}`}>
//               <span className={styles.gradientText}> SocialHire,</span> Where Your Dreams <br /> and Opportunities Meet!
//             </p>
//             <p className={`${styles.description}`}>
//               Your AI-Powered Career Partner! Apply, prepare, and conquer <br /> your dream role with
//               <b className='text-white'>SocialHire’s</b> revolutionary career solutions.
//             </p>
//             <div className='d-flex justify-content-center mt-5 mb-5'>
//               <button onClick={toggleLogin} className={`btn btn-white bg-white p-3 me-3 ${styles.button}`}>Get Mentored <i className="bi bi-arrow-up-right ms-3"></i></button>
//               <button onClick={toggleLogin} className={`btn btn-secondary bg-dark p-3 ${styles.button}`}>Apply Jobs <i className="bi bi-arrow-up-right ms-3"></i></button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isLoginOpen && <Login isOpen={isLoginOpen} setIsAuthenticated={setIsAuthenticated} onClose={toggleLogin} />}


//       {/* <Modal isOpen={isLoginOpen} onClose={toggleLogin}>
//           <Login setIsAuthenticated={setIsAuthenticated} onClose={toggleLogin} />
//         </Modal> */}
//     </div>
//   );
// };

// export default Home1;
