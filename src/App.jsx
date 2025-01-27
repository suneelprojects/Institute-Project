// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './Footer';
// import NavBar from './NavBarComponent/NavBar'
// import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.js';
// import Host from './HostComponent/Host';
// import JobListing from './CardsComponent/JoblistingComponent/JobListing.js';
// import Login from './LoginComponent/Login';
// import ResumeChecker from './ResumeCheckerComponent/ResumeChecker';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Mentorship from './MentorshipComponent/Mentorship';

// import {auth} from './firebase.js'
// import Home from './HomeComponent/Home.js';



// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//    useEffect(() => { 
//     // Check if Firebase Auth is working 
//     const checkAuth = async () => { try { const user = auth.currentUser; if (user) { console.log("User is signed in:", user); setIsAuthenticated(true); } else { console.log("No user is signed in."); setIsAuthenticated(false); } } catch (error) { console.error("Error checking auth:", error); setIsAuthenticated(false); } }; checkAuth(); }, []);
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//       <Route path="/" element={<JobListing />} /> 
//       <Route path="/host" element={<Host />} /> 
//       <Route path="/jobDetails" element={<JobDetails/>} />
//        <Route path="/resumechecker" element={ <ResumeChecker /> } /> 
//        <Route path="/mentorship" element={ <Mentorship />} /> 
//        <Route path="/login" element={<Login></Login>}></Route>
//         <Route path='/Home' element={<Home/>}></Route>
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// };

// export default App;








// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './Footer.js';
// import NavBar from './NavBarComponent/NavBar.js'
// // import NavBarAuthenticated from './NavBarComponent/NavBarAuthenticated';
// // import NavBarUnauthenticated from './NavBarComponent/NavBarUnauthenticated';
// import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.js';
// import Host from './HostComponent/Host.js';
// import JobListing from './CardsComponent/JoblistingComponent/JobListing.js';
// import Login from './LoginComponent/Login.js';
// import SignUp from './LoginComponent/SignUp.js'
// import ResumeChecker from './ResumeCheckerComponent/ResumeChecker.js';
// import Mentorship from './MentorshipComponent/Mentorship.js';
// import Home from './HomeComponent/Home.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { auth } from './firebase.js';
// import PrivateRoute from './PrivateRoute.js'

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if Firebase Auth is working
//     const checkAuth = async () => {
//       try {
//         const user = auth.currentUser;
//         if (user) {
//           console.log("User is signed in:", user);
//           setIsAuthenticated(true);
//         } else {
//           console.log("No user is signed in.");
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.error("Error checking auth:", error);
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<JobListing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/host" element={<PrivateRoute element={Host} isAuthenticated={isAuthenticated} />} />
//         <Route path="/" element={<PrivateRoute element={JobDetails} isAuthenticated={isAuthenticated} />} />
//         <Route path="/resumechecker" element={<PrivateRoute element={ResumeChecker} isAuthenticated={isAuthenticated} />} />
//         <Route path="/mentorship" element={<PrivateRoute element={Mentorship} isAuthenticated={isAuthenticated} />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;






// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './Footer.js';
// import NavBar from './NavBarComponent/NavBar.js'
// // import NavBarAuthenticated from './NavBarComponent/NavBarAuthenticated';
// // import NavBarUnauthenticated from './NavBarComponent/NavBarUnauthenticated';
// import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.js';
// import Host from './HostComponent/Host.js';
// import JobListing from './CardsComponent/JoblistingComponent/JobListing.js';
// import Login from './LoginComponent/Login.js';
// import SignUp from './LoginComponent/SignUp.js'
// import ResumeChecker from './ResumeCheckerComponent/ResumeChecker.js';
// import Mentorship from './MentorshipComponent/Mentorship.js';
// import Home from './HomeComponent/Home.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { auth } from './firebase.js';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if Firebase Auth is working
//     const checkAuth = async () => {
//       try {
//         const user = auth.currentUser;
//         if (user) {
//           console.log("User is signed in:", user);
//           setIsAuthenticated(true);
//         } else {
//           console.log("No user is signed in.");
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.error("Error checking auth:", error);
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   return (
//     <BrowserRouter>
//       {isAuthenticated ? <NavBar /> : " "}
//       <Routes>
//         {isAuthenticated ? (
//           <>
//             <Route path="/" element={<JobListing />} />
//             <Route path="/host" element={<Host />} />
//             <Route path="/jobDetails" element={<JobDetails />} />
//             <Route path="/resumechecker" element={<ResumeChecker />} />
//             <Route path="/mentorship" element={<Mentorship />} />
//             <Route path="/login" element={<Navigate to="/" />} />
//             <Route path="/home" element={<Navigate to="/" />} />
//             <Route path="/jobListing" element={<JobListing />} />

//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//             <Route path='/signup' element={<SignUp/>}></Route>
//           </>
//         )}
//       </Routes>
//       {isAuthenticated ? <Footer /> : " "}
//     </BrowserRouter>
//   );
// };

// export default App;








// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './Footer.js';
// import NavBar from './NavBarComponent/NavBar.js';
// import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.js';
// import Host from './HostComponent/Host.js';
// import JobListing from './CardsComponent/JoblistingComponent/JobListing.js';
// import Login from './LoginComponent/Login.js';
// import SignUp from './LoginComponent/SignUp.js';
// import ResumeChecker from './ResumeCheckerComponent/ResumeChecker.js';
// import Home from './HomeComponent/Home.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { auth } from './firebase.js';
// import Placement from './PlacementPreparationComponent/Placement.js';
// import JobData from './CardsComponent/MobileViewCardsComponent/JobData.js';
// import BookMentor from './BookMentorComponent/BookMentor.js';
// import MentorProfile from './BookMentorComponent/MentorProfileComponent/MentorProfile.js';
// import CompleteProfile from './LoginComponent/CompleteProfile.js';
// import MentorForm from './BookMentorComponent/MentorForm.js';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = () => {
//       auth.onAuthStateChanged(user => {
//         if (user) {
//           console.log("User is signed in:", user);
//           setIsAuthenticated(true);
//         } else {
//           console.log("No user is signed in.");
//           setIsAuthenticated(false);
//         }
//       });
//     };

//     checkAuth();
//   }, []);

//   return (
//     <BrowserRouter>
//       {isAuthenticated ? <NavBar /> : ""}
//       <Routes>
//         {isAuthenticated ? (
//           <>
//             <Route path="/" element={<JobListing />} />
//             <Route path="/joblisting" element={<JobListing />} />
//             <Route path="/host" element={<Host />} />
//             <Route path="/jobDetails" element={<JobDetails />} />
//             <Route path="/resumechecker" element={<ResumeChecker />} />
//             <Route path="/bookmentor" element={<BookMentor />} />
//             <Route path="/login" element={<Navigate to="/" />} />
//             <Route path="/home" element={<Navigate to="/" />} />
//             <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/jobListing" element={<JobListing />} />
//             <Route path="/jobData" element={<JobData/>} />
//             <Route path="/mentorprofile" element={<MentorProfile/>} />
//             <Route path='/placement' element={<Placement/>}/>
//             <Route path='/completeProfile' element={<CompleteProfile/>}></Route>
//             <Route path='/mentorform' element={<MentorForm/>}></Route>
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//             <Route path='/signup' element={<SignUp/>}></Route>
//             <Route path="/host" element={<Host />} />
//             <Route path='/completeProfile' element={<CompleteProfile/>}></Route>
//             <Route path='/mentorform' element={<MentorForm/>}></Route>
//             </>
//         )}
//       </Routes>
//       {isAuthenticated ? <Footer /> : ""}
//     </BrowserRouter>
//   );
// };

// export default App;



// // App.js
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Footer from './Footer.js';
// import NavBar from './NavBarComponent/NavBar.js';
// import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.js';
// import Host from './HostComponent/Host.js';
// import JobListing from './CardsComponent/JoblistingComponent/JobListing.js';
// import Login from './LoginComponent/Login.js';
// import SignUp from './LoginComponent/SignUp.js';
// import ResumeChecker from './ResumeCheckerComponent/ResumeChecker.js';
// import Home from './HomeComponent/Home.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { auth } from './firebase.js';
// import Placement from './PlacementPreparationComponent/Placement.js';
// import JobData from './CardsComponent/MobileViewCardsComponent/JobData.js';
// import BookMentor from './BookMentorComponent/BookMentor.js';
// import MentorProfile from './BookMentorComponent/MentorDataComponent/MentorProfile.js';
// import Modal from './Modal.js';

// const ModalHandler = ({ setIsModalOpen, setModalContent }) => {
//   const location = useLocation();

//   useEffect(() => {
//     const handleModalOpen = () => {
//       if (location.pathname === '/signup') {
//         setModalContent(<SignUp onClose={() => setIsModalOpen(false)} />);
//         setIsModalOpen(true);
//       } else if (location.pathname === '/login') {
//         setModalContent(<Login onClose={() => setIsModalOpen(false)} />);
//         setIsModalOpen(true);
//       } else {
//         setIsModalOpen(false);
//       }
//     };

//     handleModalOpen();
//   }, [location, setIsModalOpen, setModalContent]);

//   return null; // This component does not render anything
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   useEffect(() => {
//     const checkAuth = () => {
//       auth.onAuthStateChanged(user => {
//         if (user) {
//           console.log("User  is signed in:", user);
//           setIsAuthenticated(true);
//         } else {
//           console.log("No user is signed in.");
//           setIsAuthenticated(false);
//         }
//       });
//     };

//     checkAuth();
//   }, []);

//   return (
//     <BrowserRouter>
//       {isAuthenticated ? <NavBar /> : ""}
//       <ModalHandler setIsModalOpen={setIsModalOpen} setModalContent={setModalContent} />
//       <Routes>
//         {isAuthenticated ? (
//           <>
//             <Route path="/" element={<JobListing />} />
//             <Route path="/joblisting" element={<JobListing />} />
//             <Route path="/host" element={<Host />} />
//             <Route path="/jobDetails" element={<JobDetails />} />
//             <Route path="/resumechecker" element={<ResumeChecker />} />
//             <Route path="/bookmentor" element={<BookMentor />} />
//             <Route path="/login" element={<Navigate to="/" />} />
//             <Route path="/home" element={<Navigate to="/" />} />
//             <Route path="/jobData" element={<JobData />} />
//             <Route path="/mentorprofile" element={<MentorProfile />} />
//             <Route path='/placement' element={<Placement />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//           </>
//         )}
//       </Routes>
//       {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>{modalContent}</Modal>}
//       {isAuthenticated ? <Footer /> : ""}
//     </BrowserRouter>
//   );
// };

// export default App;






// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './Footer.jsx';
// import NavBar from './NavBarComponent/NavBar.jsx';
// import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.jsx';
// import Host from './HostComponent/Host.jsx';
// import JobListing from './CardsComponent/JoblistingComponent/JobListing.jsx';
// import Login from './LoginComponent/Login.jsx';
// import SignUp from './LoginComponent/SignUp.jsx';
// import ResumeChecker from './ResumeCheckerComponent/ResumeChecker.jsx';
// import Home from './HomeComponent/Home.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { auth } from './services/firebaseConfig.js';
// import Placement from './PlacementPreparationComponent/Placement.jsx';
// import JobData from './CardsComponent/MobileViewCardsComponent/JobData.jsx';
// import BookMentor from './BookMentorComponent/BookMentor.jsx';
// import MentorProfile from './BookMentorComponent/MentorProfileComponent/MentorProfile.jsx';
// import CompleteProfile from './LoginComponent/CompleteProfile.jsx';
// import MentorForm from './BookMentorComponent/MentorForm.jsx';
// import HomePage from './ResumeCheckerComponent/pages/HomePage.jsx';
// import Hero from './ResumeCheckerComponent/pages/Hero.jsx';
// import AllPages from './ResumeCheckerComponent/allpages/AllPages.jsx';
// import JobDescription from './ResumeCheckerComponent/pages/JobDescription.jsx';
// import Results from './ResumeCheckerComponent/pages/Results.jsx'
// import ResumeTemplatePage from './ResumeCheckerComponent/resumetemplates/ResumeTemplatePage.jsx'
// import ResumeEditor from './ResumeCheckerComponent/resumetemplates/ResumeEditor.jsx';
// import Atsscore from './ResumeCheckerComponent/pages/Atsscore.jsx';
// import ResumeRole from './ResumeCheckerComponent/pages/ResumeRole.jsx';






// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true); // Add this line

//   useEffect(() => {
//     const checkAuth = () => {
//       auth.onAuthStateChanged(user => {
//         if (user) {
//           console.log("User is signed in:", user);
//           setIsAuthenticated(false);
//         } else {
//           console.log("No user is signed in.");
//           setIsAuthenticated(false);
//         }
//         setLoading(false); // Set loading to false after checking auth
//       });
//     };

//     checkAuth();
//   }, []);

//   if (loading) {
//     return <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
//       <img src='https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif' width={100} height={100}></img></div>; // Render loading text while checking auth
//   }

//   return (
//     <BrowserRouter>
//       {isAuthenticated ? <NavBar /> : ""}
//       <Routes>
//         {isAuthenticated ? (
//           <>
//             <Route path="/" element={<JobListing />} />
//             <Route path="/joblisting" element={<JobListing />} />
//             <Route path="/host" element={<Host />} />
//             <Route path="/jobDetails" element={<JobDetails />} />
//             <Route path="/resumechecker" element={<ResumeChecker />} />
//             <Route path="/bookmentor" element={<BookMentor />} />
//             {/* <Route path="/login" element={<Navigate to="/" />} /> */}
//             <Route path="/home" element={<Navigate to="/" />} />
//             <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/jobListing" element={<JobListing />} />
//             <Route path="/jobData" element={<JobData/>} />
//             <Route path="/mentorprofile" element={<MentorProfile/>} />
//             <Route path='/placement' element={<Placement/>}/>
//             <Route path='/completeProfile' element={<CompleteProfile/>}></Route>
//             <Route path='/mentorform' element={<MentorForm/>}></Route>
//             <Route path="/HomePage" element={<HomePage/>}/>
//             <Route path="/hero" element={<Hero/>} />
//             <Route path="/allpages" element={<AllPages />} />
//           {/* <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login/>} />  */}
//             <Route path="/choosetemplate" element={<ResumeTemplatePage/>} />
//             <Route path="/resume" element={<ResumeEditor/>} />
//         <Route path="/ats-score" element={<Atsscore />} />
//         <Route path="/role-score" element={<ResumeRole />} />
//         <Route path="/jd-score" element={<JobDescription />} />
//         <Route path="/results" element={<Results/>} />
//         <Route path="/home" element={<Home/>} />

//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//             <Route path='/signup' element={<SignUp/>}></Route>
//             <Route path="/host" element={<Host />} />
//             <Route path='/completeProfile' element={<CompleteProfile/>}></Route>
//             <Route path='/mentorform' element={<MentorForm/>}></Route>
//           </>
//         )}
//       </Routes>
//       {isAuthenticated ? <Footer /> : ""}
//     </BrowserRouter>
//   );
// };

// export default App;




import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import NavBar from './NavBarComponent/NavBar.jsx';
import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.jsx';
import Host from './HostComponent/Host.jsx';
import JobListing from './CardsComponent/JoblistingComponent/JobListing.jsx';
import Login from './LoginComponent/Login.jsx';
import SignUp from './LoginComponent/SignUp.jsx';
import ResumeChecker from './ResumeCheckerComponent/ResumeChecker.jsx';
import Home from './HomeComponent/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { auth } from './services/firebaseConfig.js';
import Placement from './PlacementPreparationComponent/Placement.jsx';
import JobData from './CardsComponent/MobileViewCardsComponent/JobData.jsx';
import BookMentor from './BookMentorComponent/BookMentor.jsx';
import MentorProfile from './BookMentorComponent/MentorProfileComponent/MentorProfile.jsx';
import CompleteProfile from './LoginComponent/CompleteProfile.jsx';
import MentorForm from './BookMentorComponent/MentorForm.jsx';
import HomePage from './ResumeCheckerComponent/pages/HomePage.jsx';
import Hero from './ResumeCheckerComponent/pages/Hero.jsx';
import AllPages from './ResumeCheckerComponent/allpages/AllPages.jsx';
import JobDescription from './ResumeCheckerComponent/pages/JobDescription.jsx';
import Results from './ResumeCheckerComponent/pages/Results.jsx'
import ResumeTemplatePage from './ResumeCheckerComponent/resumetemplates/ResumeTemplatePage.jsx'
import ResumeEditor from './ResumeCheckerComponent/resumetemplates/ResumeEditor.jsx';
import Atsscore from './ResumeCheckerComponent/pages/Atsscore.jsx';
import ResumeRole from './ResumeCheckerComponent/pages/ResumeRole.jsx';
import styles from './App.module.css'; // Make sure this imports the CSS file
import UserProfileForm from './DigitalProfileComponent/AllForms/UserProfileForm.jsx';
import FormNavbar from './DigitalProfileComponent/FormFieldsComponent/FormNavbar.jsx';
import PersonalInfo from './DigitalProfileComponent/PersonalInfoComponent/PersonalInfo.jsx';
import UserProfile from './DigitalProfileComponent/UserProfileComponent/UserProfileComponent/UserProfile.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false); // State to handle the login modal visibility

  useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged(user => {
        setLoading(false);
        if (user) {
          console.log("User is signed in:", user);
          setIsAuthenticated(true);
        } else {
          console.log("No user is signed in.");
          setIsAuthenticated(false);
        }
      });
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsAuthenticated(false);
      setShowLogin(true); // Show login modal on logout
    });
  };

  if (loading) {
    return <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <img src='https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif' width={100} height={100} alt="Loading"></img></div>;
  }

  return (
    <div className={showLogin ? styles.blurBackground : ''}>
      <BrowserRouter>
        {isAuthenticated ? <NavBar onLogout={handleLogout} /> : ""}
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<JobListing />} />
              <Route path="/joblisting" element={<JobListing />} />
              <Route path="/host" element={<Host />} />
              <Route path="/jobDetails" element={<JobDetails />} />
              <Route path="/resumechecker" element={<ResumeChecker />} />
              <Route path="/bookmentor" element={<BookMentor />} />
              <Route path="/home" element={<Navigate to="/" />} />
              {/* <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> */}
              <Route path="/jobListing" element={<JobListing />} />
              <Route path="/jobData" element={<JobData/>} />
              <Route path="/mentorprofile" element={<MentorProfile/>} />
              <Route path='/placement' element={<Placement/>}/>
              <Route path='/completeProfile' element={<CompleteProfile/>}></Route>
              <Route path='/mentorform' element={<MentorForm/>}></Route>
              {/* <Route path="/HomePage" element={<HomePage/>}/>
              <Route path="/hero" element={<Hero/>} />
              <Route path="/allpages" element={<AllPages />} />
              <Route path="/choosetemplate" element={<ResumeTemplatePage/>} />
              <Route path="/resume" element={<ResumeEditor/>} />
              <Route path="/ats-score" element={<Atsscore />} />
              <Route path="/role-score" element={<ResumeRole />} />
              <Route path="/jd-score" element={<JobDescription />} />
              <Route path="/results" element={<Results/>} />
              <Route path="/home" element={<Home/>} /> */}

              {/* <Route path="/userProfile" element={<UserProfile/>} /> */}
           
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} onClose={() => setShowLogin(false)} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/*" element={<Navigate to="/login" />} />
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path="/host" element={<Host />} />
              <Route path='/completeProfile' element={<CompleteProfile/>}></Route>
              <Route path='/mentorform' element={<MentorForm/>}></Route>
            </>
          )}
        </Routes>
        {isAuthenticated ? <Footer /> : ""}
      </BrowserRouter>
      {showLogin && <Login setIsAuthenticated={setIsAuthenticated} onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default App;
