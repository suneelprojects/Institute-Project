import React, { useState } from 'react';
import { db } from '../../services/firebaseConfig.js';
import { collection, addDoc } from "firebase/firestore";
import Navbar from '../../NavBarComponent/NavBar.jsx';
import PersonalInfo from '../PersonalInfoComponent/PersonalInfo.jsx';
import About from '../AboutComponent/About.jsx';
import Projects from '../ProjectsComponent/Projects.jsx';
import Skills from '../SkillsComponent/Skills.jsx';

const UserProfileForm = () => {
  const [activeComponent, setActiveComponent] = useState('personalInfo');
  const [userData, setUserData] = useState({
    personalInfo: "",
    about: "",
    projects: "",
    skills: ""
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "userProfiles"), userData);
      alert("User profile saved successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to save user profile.");
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'personalInfo':
        return <PersonalInfo userData={userData} handleChange={handleChange} />;
      case 'about':
        return <About userData={userData} handleChange={handleChange} />;
      case 'projects':
        return <Projects userData={userData} handleChange={handleChange} />;
      case 'skills':
        return <Skills userData={userData} handleChange={handleChange} />;
      default:
        return <PersonalInfo userData={userData} handleChange={handleChange} />;
    }
  };

  return (
    <div style={{marginTop:'150px'}}>
      <Navbar setActiveComponent={setActiveComponent} />
      <form onSubmit={handleSubmit}>
        {renderComponent()}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
