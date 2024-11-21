// import React, { useEffect } from 'react';
// import navBarStyle from "./navbar.module.css";
// import { Link } from 'react-router-dom';
// import logo from '../assets/socialhire.png';


// const NavBar = () => {


//   useEffect(() => { 
//     const handleScroll = () => { 
//       const navbar = document.querySelector('.navbar'); 
//       if (window.scrollY > 50)
//          {
//            // Adjust the value as needed
//             navbar.classList.add('scrolled'); 
//           } else { navbar.classList.remove('scrolled');

//            } };
           
//            window.addEventListener('scroll', handleScroll); // Cleanup the event listener on component unmount 
//            return () => { window.removeEventListener('scroll', handleScroll); }; },[])
//     return ( 
//  <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000' }}>
//   <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-1 ${navBarStyle.navbar}`}>
//     <div className='container-fluid'>
//       <div className="row w-100">
//         {/* Left Side: Logo */}
//         <div className='col-md-1 d-flex align-items-center'>
//           <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/'>
//             <img src={logo} alt="icon" width="auto" height="70" />
//           </Link>
//         </div>

//         {/* Center: Navigation Links */}
//         <div className='col-md-10 d-flex align-items-center'>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <h5><Link className={`nav-link ${navBarStyle.navbarCenter} text-white`} to='/'>Jobs</Link></h5>
//               </li>
//               <li className="nav-item">
//                 <h5><Link className={`nav-link ${navBarStyle.navbarCenter} text-white mx-2`} to='/resumechecker'>Resume checker</Link></h5>
//               </li>
//               <li className="nav-item">
//                 <h5><Link className={`nav-link ${navBarStyle.navbarCenter} text-white mx-2`} to='/mentorship'>Mentorship</Link></h5>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Side: Login Link */}
//         <div className='col-md-1 d-flex align-items-center justify-content-end'>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <h5><Link className={`nav-link ${navBarStyle.login} text-white`} to='/login'>Login</Link></h5>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </nav>

//   {/* <!-- Content to scroll --> */}
//    <div style="height: 2000px; padding-top: 100px;"> Scroll down to see the navbar color change. </div>
// </div> 


// // {/* <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000' }}>
// //   <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-1 ${navBarStyle.navbar}`}>
// //     <div className='container-fluid'>
// //       {/* Left Side: Logo */}
// //       <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/'>
// //         <img src={logo} alt="icon" width="auto" height="70" />
// //       </Link>

// //       {/* Toggler for small screens */}
// //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //         <span className="navbar-toggler-icon"></span>
// //       </button>

// //       {/* Center: Navigation Links */}
// //       <div className='collapse navbar-collapse' id="navbarNav">
// //         <ul className="navbar-nav mx-auto">
// //           <li className="nav-item">
// //             <h5><Link className={`nav-link ${navBarStyle.navbarCenter} text-white`} to='/'>Jobs</Link></h5>
// //           </li>
// //           <li className="nav-item">
// //             <h5><Link className={`nav-link ${navBarStyle.navbarCenter} text-white mx-2`} to='/resumechecker'>Resume Checker</Link></h5>
// //           </li>
// //           <li className="nav-item">
// //             <h5><Link className={`nav-link ${navBarStyle.navbarCenter} text-white mx-2`} to='/mentorship'>Mentorship</Link></h5>
// //           </li>
// //         </ul>

// //         {/* Right Side: Login Link */}
// //         <ul className="navbar-nav">
// //           <li className="nav-item">
// //             <h5><Link className={`nav-link ${navBarStyle.login} text-white`} to='/login'>Login</Link></h5>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   </nav>
// // </div> */}
//            );
// };

// export default NavBar;






// import React, { useEffect } from 'react';
// import navBarStyle from './navbar.module.css';
// import { Link } from 'react-router-dom';
// import logo from '../assets/socialhire.png';

// const NavBar = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.querySelector('.navbar');
//       if (window.scrollY > 50) {
//         navbar.classList.add(navBarStyle.scrolled);
//       } else {
//         navbar.classList.remove(navBarStyle.scrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000' }}>
//       <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-1 ${navBarStyle.navbar}`}>
//         <div className='container-fluid'>
//           <div className="row w-100">
//             {/* Left Side: Logo */}
//             <div className='col-md-1 d-flex align-items-center'>
//               <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/'>
//                 <img src={logo} alt="icon" width="auto" height="70" />
//               </Link>
//             </div>

//             {/* Center: Navigation Links */}
//             <div className='col-md-10 d-flex align-items-center'>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav mx-auto">
//                   <li className="nav-item">
//                     <h5><Link className={`nav-link  ${navBarStyle.navlink} ${navBarStyle.navbarCenter}`} to='/'>Jobs</Link></h5>
//                   </li>
//                   <li className="nav-item">
//                     <h5><Link className={`nav-link  ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2`} to='/resumechecker'>Resume checker</Link></h5>
//                   </li>
//                   <li className="nav-item">
//                     <h5><Link className={`nav-link  ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2`} to='/mentorship'>Mentorship</Link></h5>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Right Side: Login Link */}
//             <div className='col-md-1 d-flex align-items-center justify-content-end'>
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <h5><Link className={`nav-link  ${navBarStyle.navlink} ${navBarStyle.login}`} to='/login'>Login</Link></h5>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>


//     </div>
//   );
// };

// export default NavBar;








// import React, { useEffect } from 'react';
// import navBarStyle from './navbar.module.css';
// import { Link } from 'react-router-dom';
// import logo from '../assets/socialhire.png';

// const NavBar = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.querySelector('.navbar');
//       if (window.scrollY > 50) {
//         navbar.classList.add(navBarStyle.scrolled);
//       } else {
//         navbar.classList.remove(navBarStyle.scrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000' }}>
//       <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-1 ${navBarStyle.navbar}`}>
//         <div className='container-fluid'>
//           <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/'>
//             <img src={logo} alt="icon" width="auto" height="70" />
//           </Link>
          
//           {/* Toggle button for small screens */}
//           <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon text-dark"></span>
//           </button>
          
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter}`} to='/'>Jobs</Link></h5>
//               </li>
//               <li className="nav-item">
//                 <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2`} to='/resumechecker'>Resume checker</Link></h5>
//               </li>
//               <li className="nav-item">
//                 <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2`} to='/mentorship'>Mentorship</Link></h5>
//               </li>
//               <li className="nav-item">
//                 <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.login}`} to='/login'>Login</Link></h5>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;






import React, { useEffect } from 'react';
import navBarStyle from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/socialhire.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const NavBar = () => {
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

  useEffect(() => { AOS.init({ duration: 1200 })},[]); // Initialize AOS with desired options }, []);
  return (
    <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000' }} data-aos="fade-up">
      <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-1 ${navBarStyle.navbar}`}>
        <div className='container-fluid'>
          <Link className={`navbar-brand ${navBarStyle.navbarIcon}`} to='/'>
            <img src={logo} alt="icon" width="auto" height="70" />
          </Link>
          
          {/* Toggle button for small screens */}
          <button className="navbar-toggler mb-1" style={{backgroundColor:'#5451A6'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-dark"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter}`} to='/'>Jobs</Link></h5>
              </li>
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2`} to='/resumechecker'>Resume checker</Link></h5>
              </li>
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.navbarCenter} mx-2`} to='/mentorship'>Mentorship</Link></h5>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <h5><Link className={`nav-link ${navBarStyle.navlink} ${navBarStyle.login}`} to='/login'>Login</Link></h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
