import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; // Import the necessary functions
import app from '../../../services/firebaseConfig.js'; // Firebase configuration file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import style from './UserProfile.module.css'
import logo from '../../../assets/userProfileLogo.png';


const db = getFirestore(app);

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const fetchUserData = async (firstName, lastName) => {
    try {
      console.log('Fetching data for user:', firstName, lastName); // Debug log
      const userQuery = query(collection(db, 'UsersProfile'), where('firstName', '==', firstName), where('lastName', '==', lastName));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        setUserData(querySnapshot.docs[0].data());
      } else {
        console.log('No such document!');
        setError('No such document!');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      // setError('Error fetching user data');
    }
  };

  useEffect(() => {
    console.log('userId:', userId); // Debug log
    if (userId) {
      const [firstName, lastName] = userId.split('-');
      fetchUserData(firstName, lastName);
    } else {
      setError('User ID is undefined');
    }
  }, [userId]);

  return (
    <div className="container mt-5">
      {error && <p>{error}</p>}
      {userData ? (
        <div className={`${style.userprofile} p-4 mb-3`}>
          <div>
            {/* <img src={profile} alt='profile' width={300} height={300} className={`${style.profileImg}`}></img> */}
            {userData.profileImage && <img src={userData.profileImage} className={`${style.profileImg}`} alt="Profile" style={{ width: '200px' }} />}
          </div>
          <div className='mt-3'>
            <h4 style={{ whiteSpace: 'nowrap' }} className='text-secondary'>{userData.firstName} {userData.lastName}</h4>
            <p dangerouslySetInnerHTML={{ __html: userData.about }} className='text-secondary'></p>
          </div>
          <div className='d-flex'>
            <button className='bg-primary text-white btn p-3'><i className="bi bi-telephone"></i> Let's Talk </button>
            <button className='ms-2 bg-white text-dark btn p-3 border' onClick={() => copyToClipboard(userData.email)}><i className="bi bi-copy"></i> Copy Email</button>
          </div>
          <div className='d-flex mt-3'>
            <a className='border rounded p-2 m-1 text-dark' href={userData.githubLink}><i className="bi bi-github fs-5 text-secondary"></i></a>
            <a className='border rounded p-2 m-1 text-dark' href={userData.linkedinLink}><i className="bi bi-linkedin fs-5 text-secondary"></i></a>
          </div>
        </div>
      ) : (

          <div>
          <img src={logo}></img>
            <p className={style.noProfile}>Create a Digital Profile</p>
            <button className="btn btn-primary" onClick={() => navigate('/form')}>Create Profile</button>
          </div>
        
      )}
    </div>
  );
};

export default UserProfile;
