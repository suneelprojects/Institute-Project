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



import React, { useEffect } from 'react';
import HRmanager from '../../assets/HRManager.png'
import Talents from '../../assets/talents.png'
import styles from './Home1.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



const Home1 = () => {
  useEffect(() => { AOS.init({ duration: 1300 });},[]); // Customize AOS settings here },
    return ( 
<div className={`container-fluid ${styles.bgGradient}`}>
  <div className='row align-items-center text-center mt-5'>
    {/* <div className='col-md-3 col-sm-12 mb-3 mb-md-0 '>
      <img src={HRmanager} alt="HR Manager" height={150} className={`${styles.image}`} data-aos="fade-right"/>
    </div> */}
    <div className='col-md-12 col-sm-12'>
      <div className='d-block justify-content-center align-items-center' style={{height:'85vh'}}>
      <p className={` fs-1 fw-bolder text-white ${styles.text}`}><span className={styles.gradientText}> SocialHire,</span> Where Your Dreams <br/>  and Opportunities Meet!</p>
      <p className={`${styles.description}`}>Discover endless opportunities with <b className='text-white'>SocialHire</b>, the AI-driven platform connecting <br/>top talent with innovative employers. Take control of your career growth with <br/>the support and tools you need to succeed.</p>
      <div className='d-flex justify-content-center mt-5 mb-5'>
        <Link to='/login' className={`btn btn-white bg-white p-3 me-3 ${styles.button}`}>Get Mentored <i className="bi bi-arrow-up-right ms-3"></i></Link>
        <Link to='/login' className={`btn btn-secondary bg-dark p-3 ${styles.button}`}>Apply Jobs <i className="bi bi-arrow-up-right ms-3"></i></Link>
      </div>
      </div>
    </div>
    {/* <div className='col-md-3 col-sm-12 mt-3 mt-md-0'>
      <img src={Talents} alt="Talents" height={150} className={`${styles.image}`} data-aos="fade-left"/>
    </div> */}
  </div>
  
</div>

        
    );
};

export default Home1;