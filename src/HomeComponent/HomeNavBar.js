// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/Social_Hire_page-0001-removebg-preview.png';

// const HomeNavBar = () => {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg px-3 py-5">
//                 <div className="container-fluid mt-3" style={{ background: 'linear-gradient(to right, rgba(255, 0, 255, 0.3), rgba(255, 127, 80, 0.3))' }}>
//                     <Link className="navbar-brand" to='/'>
//                         <img src={logo} alt="icon" width="180" height="70" />
//                     </Link>
                    
//                     <button className="navbar-toggler mb-1" style={{ backgroundColor:'#fff' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon text-dark"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav mx-auto">
//                             <li className="nav-item">
//                                 <b><Link className="nav-link text-white fs-6" to='/login'>Curated jobs</Link></b>
//                             </li>
//                             <li className="nav-item">
//                                 <b><Link className="nav-link text-white mx-2 fs-6" to='/login'>Resume checker</Link></b>
//                             </li>
//                             <li className="nav-item">
//                                 <b><Link className="nav-link text-white mx-2 fs-6" to='/login'>Book Mentor</Link></b>
//                             </li>
//                             <li className="nav-item">
//                                 <b><Link className="nav-link text-white mx-2 fs-6" to='/login'>Placement Preparation</Link></b>
//                             </li>
//                         </ul>

//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item">
//                                 <b><Link className="nav-link text-white fs-6" to='/login'>Login</Link></b>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default HomeNavBar;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Social_Hire_page-0001-removebg-preview.png';
import Login from '../LoginComponent/Login.js'; // Import the Login component
import Signup from '../LoginComponent/SignUp.js'; // Import the SignUp component

const HomeNavBar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
        setIsSignUpOpen(false); // Close SignUp if Login is opened
    };

    const toggleSignUp = () => {
        setIsSignUpOpen(!isSignUpOpen);
        setIsLoginOpen(false); // Close Login if SignUp is opened
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg px-3 py-5">
                <div className="container-fluid mt-3" style={{ background: 'linear-gradient(to right, rgba(255, 0, 255, 0.3), rgba(255, 127, 80, 0.3))' }}>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="icon" width="180" height="70" />
                    </Link>
                    
                    <button className="navbar-toggler mb-1" style={{ backgroundColor:'#fff' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <b><Link className="nav-link text-white fs-6" to='/login'>Curated jobs</Link></b>
                            </li>
                            <li className="nav-item">
                                <b><Link className="nav-link text-white mx-2 fs-6" to='/login'>Resume checker</Link></b>
                            </li>
                            <li className="nav-item">
                                <b><Link className="nav-link text-white mx-2 fs-6" to='/login'>Book Mentor</Link></b>
                            </li>
                            <li className="nav-item">
                                <b><Link className="nav-link text-white mx-2 fs-6" to='/login'>Placement Preparation</Link></b>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <div className='d-flex justify-content-center align-items-center pt-3'>
                                <p><b><button className="nav-link text-white fs-6 text-center" onClick={toggleLogin}>Signin</button></b></p>
                                <p><b><button className="nav-link text-white fs-6 text-center" onClick={toggleSignUp}>SignUp</button></b></p>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {isLoginOpen && <Login setIsAuthenticated={setIsAuthenticated} onClose={toggleLogin} toggleSignUp={toggleSignUp} />}
            {isSignUpOpen && <Signup onClose={toggleSignUp} />}
        </div>
    );
};

export default HomeNavBar;