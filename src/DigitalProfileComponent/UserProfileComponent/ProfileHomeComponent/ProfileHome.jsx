// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import app from '../../../services/firebaseConfig.js'; // Firebase configuration file
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// import style from './ProfileHome.module.css';

// const db = getFirestore(app);

// const ProfileHome = () => {
//   const { userId } = useParams();
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [visibleProjects, setVisibleProjects] = useState(1); // Initially display one project
//   const [showAllCertificates, setShowAllCertificates] = useState(false); // State to control the display of all certificates

//   const fetchUserData = async (firstName, lastName) => {
//     try {
//       console.log('Fetching data for user:', firstName, lastName); // Debug log
//       const userQuery = query(collection(db, 'UsersProfile'), where('firstName', '==', firstName), where('lastName', '==', lastName));
//       const querySnapshot = await getDocs(userQuery);
//       if (!querySnapshot.empty) {
//         const userData = querySnapshot.docs[0].data();
//         console.log('User data:', userData); // Debug log
//         setUserData(userData);
//       } else {
//         console.log('No such document!');
//         setError('No such document!');
//       }
//     } catch (err) {
//       console.error('Error fetching user data:', err);
//       setError('Error fetching user data');
//     }
//   };

//   useEffect(() => {
//     console.log('userId:', userId); // Debug log
//     if (userId) {
//       const [firstName, lastName] = userId.split('-');
//       fetchUserData(firstName, lastName);
//     } else {
//       setError('User ID is undefined');
//     }
//   }, [userId]);

//   const handleShowMoreProjects = () => {
//     setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 1);
//   };

//   const toggleShowAllCertificates = () => {
//     setShowAllCertificates(prevState => !prevState);
//   };

//   return (
//     <div className='mt-5 container-fluid'>
//       {error && <p>{error}</p>}
//       {userData ? (
//         <div className={`${style.ProfileHome} p-3`}>
//           <div className='row'>
//             <div className='col-md-6'>
//                 <div className={`${style.skills} p-4`}>
//               <h5 className='text-secondary'><strong>Skills:</strong></h5>
//               <div className={`${style.skillsContainer}`}>
//                 <ul className={style.skillsList}>
//                   {userData.skills && userData.skills.map((skill, index) => (
//                     <li key={index}>
//                       <h6 className={` ${style.gradientText} d-flex justify-content-between fw-bold fs-4`}>
//                         <p><i className="bi bi-list-stars"></i></p>
//                         <p>{skill}</p>
//                       </h6>
//                     </li>
//                   ))}
//                   {userData.skills && userData.skills.map((skill, index) => (
//                     <li key={index}>
//                       <h6 className={` ${style.gradientText} d-flex justify-content-between fw-bold fs-4`}>
//                         <p><i className="bi bi-list-stars"></i></p>
//                         <p>{skill}</p>
//                       </h6>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               </div>
//             </div>

//             <div className='col-md-6'>
//                 <div className={`${style.projects} p-4`}>
//               <div className={`d-flex justify-content-between`}>
//                 <h5 className='text-secondary'><strong>Projects:</strong></h5>
//                 {visibleProjects < userData.projects.length && (
//                   <Link to={`/userProfile/${userId}/projects`}>
//                     <p onClick={handleShowMoreProjects}><i className="bi bi-arrow-right me-2"></i> All Projects</p>
//                   </Link>
//                 )}
//               </div>
//               <div className={`${style.projectsContainer}`}>
//                 {userData.projects && userData.projects.slice(0, visibleProjects).map((project, index) => (
//                   <div key={index} className={style.projectItem}>
//                     {project.images && project.images[0] ? (
//                       <img src={project.images[0]} alt={`Project ${index + 1}`} className={`${style.projectImage} p-2`} onError={(e) => console.log('Image failed to load:', project.images[0], e)} />
//                     ) : (
//                       <p>No image available</p>
//                     )}
//                   </div>
//                 ))}
//                 {/* {visibleProjects < userData.projects.length && (
//                   <button className="btn btn-primary mt-3" onClick={handleShowMoreProjects}>Add More</button>
//                 )} */}
//               </div>
//             </div>
//             </div>

//             <div className='row mt-3'>
//               <div className='col-md-6'>
//                 <div  className={`${style.certificates} p-4`}>
//                 <div className='d-flex justify-content-between'>
//                 <h5 className='text-secondary'><strong>Certificates:</strong></h5>
//                 {userData.certifications && (
//                   <Link to={`/userProfile/${userId}/about`} onClick={toggleShowAllCertificates}>
//                 <i className="bi bi-arrow-right me-2"></i> All Certificates
//                   </Link>
//                 )}
//                 </div>
//                 <div className={`${style.certificatesContainer}`}>
//                   {userData.certifications && (
//                     showAllCertificates ? userData.certifications.map((certificate, index) => (
//                       <div key={index} className={style.certificateItem}>
//                         {certificate.image ? (
//                           <img src={certificate.image} alt={`Certificate ${index + 1}`} className={style.certificateImage} onError={(e) => console.log('Image failed to load:', certificate.image, e)} />
//                         ) : (
//                           <p>No image available</p>
//                         )}
//                         <p>{certificate.name}</p>
//                       </div>
//                     )) : (
//                       userData.certifications.slice(0, 1).map((certificate, index) => (
//                         <div key={index} className={style.certificateItem}>
//                           {certificate.image ? (
//                             <img src={certificate.image} alt={`Certificate ${index + 1}`} className={style.certificateImage} onError={(e) => console.log('Image failed to load:', certificate.image, e)} />
//                           ) : (
//                             <p>No image available</p>
//                           )}
//                         </div>
//                       ))
//                     )
//                   )}
//                 </div>
//                 {/* {userData.certifications && (
//                   <button className="btn btn-primary mt-3" onClick={toggleShowAllCertificates}>
//                     {showAllCertificates ? "Show Less Certificates" : "Show All Certificates"}
//                   </button>
//                 )} */}
//               </div>
//               </div>
//               <div className='col-md-6'>
//                 <div className={`${style.resume}`}>
//                 <h5 className='text-secondary p-3'><strong>Resume:</strong></h5>
//                 {userData.resume ? (
//                   <iframe
//                     src={userData.resume}
//                     width="100%"
//                     height="250px"
//                     title="Resume"
//                     style={{ border: 'none' }}
//                   />
//                 ) : (
//                   <p>No resume available</p>
//                 )}
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>
//       ) : (
//         // <p>Loading...</p>
//           <div>
//                     <p className={style.noProfile}>Create a Digital Profile</p>
//                     <Link className="btn btn-primary" to='/Form'>Create Profile</Link>
//                   </div>
//       )}
//     </div>
//   );
// };

// export default ProfileHome;



import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import app from '../../../services/firebaseConfig.js'; // Firebase configuration file
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import style from './ProfileHome.module.css';

const db = getFirestore(app);

const ProfileHome = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(1); // Initially display one project
  const [showAllCertificates, setShowAllCertificates] = useState(false); // State to control the display of all certificates

  const fetchUserData = async (firstName, lastName) => {
    try {
      console.log('Fetching data for user:', firstName, lastName); // Debug log
      const userQuery = query(collection(db, 'UsersProfile'), where('firstName', '==', firstName), where('lastName', '==', lastName));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        console.log('User data:', userData); // Debug log
        setUserData(userData);
      } else {
        console.log('No such document!');
        setError('No such document!');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Error fetching user data');
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

  const handleShowMoreProjects = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 1);
  };

  const toggleShowAllCertificates = () => {
    setShowAllCertificates(prevState => !prevState);
  };

  return (
    <div className='mt-5 container-fluid'>
      {error && <p>{error}</p>}
      {userData ? (
        <div className={`${style.ProfileHome} p-3`}>
          <div className='row'>
            <div className='col-md-6 mb-2'>
              <div className={`${style.skills} p-4`}>
                <h5 className='text-secondary'><strong>Skills:</strong></h5>
                <div className={`${style.skillsContainer}`}>
                  <ul className={style.skillsList}>
                    {userData.skills && userData.skills.map((skill, index) => (
                      <li key={index}>
                        <h6 className={` ${style.gradientText} d-flex justify-content-between fw-bold fs-4`}>
                          
                          <p><img src={skill.logo} alt={`${skill.name} logo`} width={30} height={30} /></p>
                          <p>{skill.name}</p>
                        </h6>
                      </li>
                    ))}
                     {userData.skills && userData.skills.map((skill, index) => (
                      <li key={index}>
                        <h6 className={` ${style.gradientText} d-flex justify-content-between fw-bold fs-4`}>
                          
                          <p><img src={skill.logo} alt={`${skill.name} logo`} width={30} height={30} /></p>
                          <p>{skill.name}</p>
                        </h6>
                      </li>
                    ))}
                  </ul>
                </div>
                   </div>
             </div>

             <div className='col-md-6 mb-2'>
                 <div className={`${style.projects} p-4`}>
               <div className={`d-flex justify-content-between`}>
                 <h5 className='text-secondary'><strong>Projects:</strong></h5>
                 {visibleProjects < userData.projects.length && (
                  <Link to={`/userProfile/${userId}/projects`}>
                    <p onClick={handleShowMoreProjects}><i className="bi bi-arrow-right me-2"></i> All Projects</p>
                  </Link>
                )}
              </div>
              <div className={`${style.projectsContainer}`}>
                {userData.projects && userData.projects.slice(0, visibleProjects).map((project, index) => (
                  <div key={index} className={style.projectItem}>
                    {project.images && project.images[0] ? (
                      <img src={project.images[0]} alt={`Project ${index + 1}`} className={`${style.projectImage} p-2`} onError={(e) => console.log('Image failed to load:', project.images[0], e)} />
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>
                ))}
                {/* {visibleProjects < userData.projects.length && (
                  <button className="btn btn-primary mt-3" onClick={handleShowMoreProjects}>Add More</button>
                )} */}
              </div>
            </div>
            </div>

            <div className='row mt-3 '>
              <div className='col-md-6 mb-2'>
                <div  className={`${style.certificates} p-4`}>
                <div className='d-flex justify-content-between'>
                <h5 className='text-secondary'><strong>Certificates:</strong></h5>
                {userData.certifications && (
                  <Link to={`/userProfile/${userId}/about`} onClick={toggleShowAllCertificates}>
                <i className="bi bi-arrow-right me-2"></i> All Certificates
                  </Link>
                )}
                </div>
                <div className={`${style.certificatesContainer}`}>
                  {userData.certifications && (
                    showAllCertificates ? userData.certifications.map((certificate, index) => (
                      <div key={index} className={style.certificateItem}>
                        {certificate.image ? (
                          <img src={certificate.image} alt={`Certificate ${index + 1}`} className={style.certificateImage} onError={(e) => console.log('Image failed to load:', certificate.image, e)} />
                        ) : (
                          <p>No image available</p>
                        )}
                        <p>{certificate.name}</p>
                      </div>
                    )) : (
                      userData.certifications.slice(0, 1).map((certificate, index) => (
                        <div key={index} className={style.certificateItem}>
                          {certificate.image ? (
                            <img src={certificate.image} alt={`Certificate ${index + 1}`} className={style.certificateImage} onError={(e) => console.log('Image failed to load:', certificate.image, e)} />
                          ) : (
                            <p>No image available</p>
                          )}
                        </div>
                      ))
                    )
                  )}
                </div>
                {/* {userData.certifications && (
                  <button className="btn btn-primary mt-3" onClick={toggleShowAllCertificates}>
                    {showAllCertificates ? "Show Less Certificates" : "Show All Certificates"}
                  </button>
                )} */}
              </div>
              </div>
              <div className='col-md-6'>
                <div className={`${style.resume}`}>
                <h5 className='text-secondary p-3'><strong>Resume:</strong></h5>
                {userData.resume ? (
                  <iframe
                    src={userData.resume}
                    width="100%"
                    height="250px"
                    title="Resume"
                    style={{ border: 'none' }}
                  />
                ) : (
                  <p>No resume available</p>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>
      ) : (
        // <p>Loading...</p>
          <div>
                    <p className={style.noProfile}>Create a Digital Profile</p>
                    <Link className="btn btn-primary" to='/Form'>Create Profile</Link>
                  </div>
      )}
    </div>
  );
};

export default ProfileHome;
