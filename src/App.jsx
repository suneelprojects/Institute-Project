import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import NavBar from './NavBarComponent/NavBar.jsx';
// import JobDetails from './CardsComponent/JobDetailsComponent/JobDetails.jsx';
import Host from './HostComponent/Host.jsx';
import JobListing from './CardsComponent/JoblistingComponent/JobListing.jsx';
import Login from './LoginComponent/Login.jsx';
import SignUp from './LoginComponent/SignUp.jsx';
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
import styles from './App.module.css'; // Make sure this imports the CSS file
import ProfileHome from './DigitalProfileComponent/UserProfileComponent/ProfileHomeComponent/ProfileHome.jsx';
import UserNavbar from './DigitalProfileComponent/UserProfileComponent/UserNavbarComponet/UserNavbar.jsx';
import About from './DigitalProfileComponent/UserProfileComponent/UserAboutComponent/UserAbout.jsx';
import { v4 as uuidv4 } from 'uuid';
import Form from './DigitalProfileComponent/UserProfileComponent/FormComponent/Form.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import UserProfile from './DigitalProfileComponent/UserProfileComponent/UserProfileComponent/UserProfile.jsx';
import DefaultProfile from './DigitalProfileComponent/UserProfileComponent/UserProfileComponent/DefaultProfile.jsx';
import UserAbout from './DigitalProfileComponent/UserProfileComponent/UserAboutComponent/UserAbout.jsx';
import Projects from './DigitalProfileComponent/UserProfileComponent/ProjectsComponent/Projects.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false); // State to handle the login modal visibility
  const [userId] = useState(uuidv4());

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log("User is signed in: ", user);
    });
    return unsubscribe;
  }, []);

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
              <Route path="/bookmentor" element={<BookMentor />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/jobListing" element={<JobListing />} />
              <Route path="/jobData" element={<JobData/>} />
              <Route path="/mentorprofile" element={<MentorProfile/>} />
              <Route path='/placement' element={<Placement/>}/>
              <Route path='/completeProfile' element={<CompleteProfile/>}></Route>
              <Route path='/mentorform' element={<MentorForm/>} />
             <Route path="/userProfile/:userId" element={<UserNavbar />}>
          <Route index element={<ProfileHome />} />
          <Route path="about" element={<UserAbout />} />
          <Route path="projects" element={<Projects />} />
        </Route>
  <Route path='/Form' element={<Form  user={user}/>}/>

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
      {/* {showLogin && <Login setIsAuthenticated={setIsAuthenticated} onClose={() => setShowLogin(false)} />} */}
    </div>
  );
};

export default App;









