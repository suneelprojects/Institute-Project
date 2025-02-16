// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import app from '../../../services/firebaseConfig.js'; // Firebase configuration file
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; // Import the necessary functions
// import styles from './UserAbout.module.css'; // Import the CSS module

// const db = getFirestore(app);

// const UserAbout = () => {
//   const { userId } = useParams();
//   const [certificates, setCertificates] = useState([]);
//   const [skills, setSkills] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchCertificates = async (firstName, lastName) => {
//     console.log('Fetching certificates for user:', firstName, lastName); // Debug log
//     try {
//       const userQuery = query(collection(db, 'UsersProfile'), where('firstName', '==', firstName), where('lastName', '==', lastName));
//       const querySnapshot = await getDocs(userQuery);

//       console.log('Query snapshot:', querySnapshot); // Debug log

//       if (!querySnapshot.empty) {
//         const userDoc = querySnapshot.docs[0];
//         const userData = userDoc.data();
//         console.log('User data:', userData); // Debug log
//         setCertificates(userData.certifications || []);
//         setSkills(userData.skills || []);
//       } else {
//         console.log('User profile not found'); // Debug log
//         setError('User profile not found');
//       }
//     } catch (err) {
//       console.error('Error fetching certificates:', err);
//       setError('Error fetching certificates');
//     }
//   };

//   useEffect(() => {
//     if (userId) {
//       const [firstName, lastName] = userId.split('-');
//       fetchCertificates(firstName, lastName);
//     }
//   }, [userId]);

//   return (
//     <div className={`mt-5 ${styles.userAboutContainer}`}>
//       <h3 className={`text-secondary ${styles.sectionTitle}`}>Certificates</h3>
//       {error && <p className={styles.errorMessage}>{error}</p>}
//       {certificates.length > 0 ? (
//         <ul className={styles.certificateList}>
//           {certificates.map((cert, index) => (
//             <li key={index} className={styles.certificateItem}>
//               <div className='d-flex justify-content-between'>
//                 <div className='align-self-center'>
//               <h5>{cert.name}</h5>
//               <p dangerouslySetInnerHTML={{ __html: cert.description }} ></p>
//               </div>
//               <p>{cert.image && <img src={cert.image} alt="Certificate" className={styles.certificateImage} />}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         !error && <p>No certificates found</p>
//       )}
//       <h3 className={` text-secondary ${styles.sectionTitle}`}>Skills</h3>
//       {/* {   skills.length > 0 ? (
//             <div className="container">
//                 <div className="row">
//                     {skills.map((skill, index) => (
//                         <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
//                             <span className={`d-block ${styles.skillItem} text-center m-2 px-3 py-2`} onClick={() => handleMentorClick('All')}>
//                                 {skill}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//       ) : (
//         !error && <p>No skills found</p>
//       )} */}

//          <ul className={styles.skillsList}>
//                           {userData.skills && userData.skills.map((skill, index) => (
//                             <li key={index}>
//                               <h6 className={` ${styles.gradientText} d-flex justify-content-between fw-bold fs-4`}>
//                                 <p><i className="bi bi-list-stars"></i></p>
//                                 <p>{skill.name}</p>
//                                 <img src={skill.logo} alt={`${skill.name} logo`} />
//                               </h6>
//                             </li>
//                           ))}
//                         </ul>
//     </div>
//   );
// };

// export default UserAbout;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import app from '../../../services/firebaseConfig.js';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import styles from './UserAbout.module.css';

const db = getFirestore(app);

const UserAbout = () => {
  const { userId } = useParams();
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  const fetchCertificates = async (firstName, lastName) => {
    console.log('Fetching certificates for user:', firstName, lastName);
    try {
      const userQuery = query(collection(db, 'UsersProfile'), where('firstName', '==', firstName), where('lastName', '==', lastName));
      const querySnapshot = await getDocs(userQuery);

      console.log('Query snapshot:', querySnapshot);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        console.log('User data:', userData);
        setCertificates(userData.certifications || []);
        setSkills(userData.skills || []);
      } else {
        console.log('User profile not found');
        setError('User profile not found');
      }
    } catch (err) {
      console.error('Error fetching certificates:', err);
      setError('Error fetching certificates');
    }
  };

  useEffect(() => {
    if (userId) {
      const [firstName, lastName] = userId.split('-');
      fetchCertificates(firstName, lastName);
    }
  }, [userId]);

  return (
    <div className={`mt-5 ${styles.userAboutContainer}`}>
      <h3 className={`text-secondary ${styles.sectionTitle}`}>Certificates</h3>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {certificates.length > 0 ? (
        <ul className={styles.certificateList}>
          {certificates.map((cert, index) => (
            <li key={index} className={styles.certificateItem}>
              <div className='d-flex justify-content-between'>
                <div className='align-self-center'>
                  <h5>{cert.name}</h5>
                  <p dangerouslySetInnerHTML={{ __html: cert.description }}></p>
                </div>
                <p>{cert.image && <img src={cert.image} alt="Certificate" className={styles.certificateImage} />}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>No certificates found</p>
      )}
      {/* <h3 className={` text-secondary ${styles.sectionTitle}`}>Skills</h3>
      {skills.length > 0 ? (
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index}>
              <h6 className={` ${styles.gradientText} d-flex justify-content-between fw-bold fs-4`}>
                <p><i className="bi bi-list-stars"></i></p>
                <p>{skill.name}</p>
                <img src={skill.logo} alt={`${skill.name} logo`} />
              </h6>
            </li>
          ))}
        </ul>

      ) : (
        !error && <p>No skills found</p>
      )} */}

       {   skills.length > 0 ? (
            <div className="container">
                <div className="row">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
                            <span className={`d-block ${styles.skillItem} text-center m-2 px-3 py-2`} onClick={() => handleMentorClick('All')}>
                <img src={skill.logo} alt={`${skill.name} logo`} width={30} height={30} className='me-3'/>
                {skill.name}
                            </span>

                        </div>
                    ))}
                </div>
            </div>
      ) : (
        !error && <p>No skills found</p>
      )} 
    </div>
  );
};

export default UserAbout;
