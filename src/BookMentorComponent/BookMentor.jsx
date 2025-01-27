// import React, { useRef, useState } from 'react';
// import style from './BookMentor.module.css'; // Assuming you're using CSS Modules
// import cardStyle from './MentorDataComponent/MentorProfile.module.css'
// import { useNavigate } from 'react-router-dom';
// import MentorProfile from './MentorDataComponent/MentorProfile.js';
// import Mentordata from './MentorDataComponent/Mentordata.js';


// const BookMentor = () => {
//   const navigate = useNavigate();
//   const [selectedMentor, setSelectedMentor] = useState(null); // State to hold the selected mentor
//   const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

//   // Create a ref for the mentor profiles section
//   const mentorProfilesRef = useRef(null);

//   const handleMentorClick = (mentor) => {
//       setSelectedMentor(mentor); // Set the selected mentor
//       navigate('/bookmentor', { state: { mentor } }); 
//       // Scroll to the mentor profiles section
//       if (mentorProfilesRef.current) {
//           mentorProfilesRef.current.scrollIntoView({ behavior: 'smooth' });
//       }
//   };

//   // Filter mentors based on the selected mentor and search query
//   const filteredMentors = Mentordata.filter(mentor => {
//       const matchesCategory = selectedMentor ? mentor.MentorFor === selectedMentor : true;
//       const matchesSearch = mentor.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                             mentor.MentorFor.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//   });

//     return (
//       <div className={`${style.BookMentor}` }>
//         <div className={` container text-center`}  style={{paddingTop:'150px'}}>
//            <>
//             <div className="row mt-5">

//                 <div className="col-md-4">
//                   <div className='d-flex align-items-end'>
//                   <div className={`text-white bg-primary mb-3 ${style.card}`} onClick={() => handleMentorClick('Full Stack Java')}>
//                       <div className='pt-2 d-block justify-content-center align-items-center'>
//                       <h5 className="fw-bold"># Full Stack Java</h5>
//                       {/* <p className="">Track your upcoming mentor sessions.</p> */}
//                       </div>
//                        </div>
//                   </div>
                 
//                 </div>
//                 <div className="col-md-4">
//                 <div className='d-flex align-content-center'>
//                     <div  className={`text-white bg-primary mb-3 ${style.card}`} onClick={() => handleMentorClick('Data Science')}>
//                     <div className='pt-2 d-block justify-content-center align-items-center'>

//                             <h5 className="fw-bold"># Data Science</h5>
//                             {/* <p className="">Access all your mentoring resources.</p> */}
//                             </div>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                 <div className='d-flex align-items-end'>
//                     <div  className={`text-white bg-primary mb-3 ${style.card}`} onClick={() => handleMentorClick('Full Stack Python')}>
//                     <div className='pt-2 d-block justify-content-center align-items-center'>
//                             <h5 className="fw-bold"># Full Stack Python</h5>
//                             {/* <p className="">Give and receive feedback.</p> */}
//                             </div>
//                     </div>
//                     </div>
//                 </div>


//             </div>


//             <div className="row mt-5">
//                 <div className="col-md-4">
//                   <div className='d-flex justify-content-center'>
//                   <div className={`text-white bg-primary mb-3 ${style.card}`} onClick={() => handleMentorClick('Devops')}>
//                       <div className='pt-2 d-block justify-content-center align-items-center'>
//                       <h5 className="fw-bold"># Devops</h5>
//                       {/* <p className="">Track your upcoming mentor sessions.</p> */}
//                       </div>
//                        </div>
//                   </div>
                 
//                 </div>
               

//                 <div className="col-md-4">
//     <div className='d-block justify-content-center'>
//         <div className='p-2'>
//           <h3>Search For Mentors</h3>
//             <p>Find all your mentoring resources and sessions in one place.</p>
//         </div>
//         <div className={style.emailInput} style={{ position: 'relative', width: '100%' }}>
//             <input 
//                 type="text" 
//                 className="form-control" 
//                 placeholder="Search by name or category" 
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//             />
//             <span
//                 style={{
//                     position: 'absolute',
//                     right: '40px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     cursor: 'pointer'
//                 }}
//             >
//                 <i className="bi bi-search"></i>
//             </span>
//         </div>

//         <div>
//             {/* <span className={`p-2 ${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Java')}>Full Stack Java</span>
//             <span className={`p-2 ${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Python')}>Full Stack Python</span>
//             <span className={`p-2 ${style.mentorFor}`} onClick={() => handleMentorClick('Devops')}>Devops</span> */}
//         </div>
//     </div>
// </div>

           
//                 <div className="col-md-4">
//                 <div className='d-flex justify-content-center'>
//                     <div  className={`text-white bg-primary mb-3 ${style.card}`} onClick={() => handleMentorClick('Data Analytics')}>
//                     <div className='pt-2 d-block justify-content-center align-items-center'>
//                             <h5 className="fw-bold"># Data Analytics</h5>
//                             {/* <p className="">Give and receive feedback.</p> */}
//                             </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>



//             <div className="row mt-5">
//                 <div className="col-md-4">
//                   <div className='d-flex justify-content-end'>
//                   <div className={`text-white bg-primary mb-3 ${style.card}`} onClick={() => handleMentorClick('Business Analyst')}>
//                       <div className='pt-2 d-block justify-content-center align-items-center'>
//                       <h5 className="fw-bold"># Business Analyst</h5>
//                       {/* <p className="">Track your upcoming mentor sessions.</p> */}
//                       </div>
//                        </div>
//                   </div>
                 
//                 </div>
//                 <div className="col-md-4">
//                 <div className='d-flex justify-content-end'>
//                     <div  className={`text-white bg-primary mb-3 ${style.card}`} onClick={() => handleMentorClick('Full Stack Python')}>
//                     <div className='pt-2 d-block justify-content-center align-items-center'>

//                             <h5 className="fw-bold"># Full Stack Python</h5>
//                             {/* <p className="">Access all your mentoring resources.</p> */}
//                             </div>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                 <div className='d-flex justify-content-end '>
//                     <div  className={`text-white bg-primary mb-3 ${style.card}`} onClick={() =>handleMentorClick('AWS')}>
//                     <div className='pt-2 d-block justify-content-center align-items-center'>
//                             <h5 className="fw-bold"># AWS</h5>
//                             {/* <p className="">Give and receive feedback.</p> */}
//                             </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             </>


//             {/* <div className={style.scrollcontainer}>
//   <div className={`d-flex ${style.scrollcontent}`}>
//     {Mentordata.map((mentor) => (
//       <div className="card m-2" key={mentor.id} style={{ width: '18rem' }}>
//         <div className="card-body">
//           <div className="d-flex">
//             {mentor.profilePhoto && (
//               <img
//                 src={mentor.profilePhoto}
//                 className={style.profile}
//                 alt={`${mentor.username}'s profile`}
//               />
//             )}
//             <h5 className="card-title">{mentor.username}'s Profile</h5>
//           </div>
//           <p className="card-text">{mentor.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div> */}


// <div className='mt-5' ref={mentorProfilesRef}>
// <div className="row" >
//                     <div className="col-md-12">
//                         <h2>Mentor Profiles</h2>
//                         <div className="row">
//                             {filteredMentors.map((mentor) => (
//                                 <div className="col-md-3" key={mentor.id} style={{ marginBottom: '20px' }}>
//                                     <div className={`${style.mentorcard} card d-flex align-content-center`} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', textAlign: 'center',height:'auto',flexGrow:'1' }}>
//                                       <div className='d-flex'>
//                                       {mentor.profilePhoto && (
//                                             <img
//                                                 src={mentor.profilePhoto}
//                                                 alt={`${mentor.username}'s profile`}
//                                                 className={style.profile}
//                                             />
//                                         )}
//                                         <div className='d-block'>
//                                         <h5 className='fw-bold'>{mentor.username}</h5>
//                                         <p className={style.mentorFor}>{mentor.MentorFor}</p>
//                                         </div>
                                     
//                                       </div>
                                      
//                                         <p>{mentor.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 </div>

//         </div>
//         </div>
//     );
// };

// export default BookMentor;





// import React from 'react';
// import {Cursor,useTypewriter} from 'react-simple-typewriter'

// const BookMentor = () => {

//   const {text}=useTypewriter({
//     words: ['Full Stack Java', 'Data Analyist',' Business Analyst','Devops','AWS','Full Stack Python',' Data Science'],
//     loop: {},
//     typeSpeed: 120,
//     deleteSpeed:80
//   })
//   return (
//     <div style={{marginTop:'180px'}}>
//     <div className='d-flex justify-content-center align-items-center h-100'>
//       <h1>1 - on - 1 
//         <span className='fw-bold text-success'>{text}</span>
//         <span className='text-danger'>
//           <Cursor cursorStyle='|'/>
//           </span>
//       </h1>
//     </div>
//     </div>
//   );
// };

// export default BookMentor;




// import React, { useRef, useState } from 'react';
// import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import mentors from '../assets/Search mentors.jpg'
// import { useNavigate } from 'react-router';
// import Mentordata from './MentorDataComponent/Mentordata.js';
// import style from './BookMentor.module.css'

// const BookMentor = () => {
//     const navigate = useNavigate();
//   const [selectedMentor, setSelectedMentor] = useState(null); // State to hold the selected mentor
//   const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

//   // Create a ref for the mentor profiles section
//   const mentorProfilesRef = useRef(null);

//   const handleMentorClick = (mentor) => {
//       setSelectedMentor(mentor); // Set the selected mentor
//       navigate('/bookmentor', { state: { mentor } }); 
//       // Scroll to the mentor profiles section
//       if (mentorProfilesRef.current) {
//           mentorProfilesRef.current.scrollIntoView({ behavior: 'smooth' });
//       }
//   };
//   const handleCardClick=(mentor)=>{
//     navigate('/mentorprofile', { state: { mentor } }); 
//   }

//   // Filter mentors based on the selected mentor and search query
//   const filteredMentors = Mentordata.filter(mentor => {
//       const matchesCategory = selectedMentor ? mentor.MentorFor === selectedMentor : true;
//       const matchesSearch = mentor.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                             mentor.MentorFor.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//   });
//   const [text] = useTypewriter({
//     words: ['Full Stack Java', 'Data Analyst', 'Business Analyst', 'DevOps', 'AWS', 'Full Stack Python', 'Data Science'],
//     loop: true,
//     typeSpeed: 120,
//     deleteSpeed: 80,
//   });

//   return (
//   <div style={{marginTop:'150px'}} className='container-fluid'>
//     <div className='row'>
//     <div className="col-12 col-md-6">
//   <div className="d-flex justify-content-center align-items-center h-100">
//     <div>
//       <h1 className="fw-bold">
//         1 - on - 1{' '}
//         <span className="fw-bold" style={{ color: 'rgb(5, 121, 180)' }}>
//           {text}
//         </span>
//         <span className="text-black">
//           <Cursor cursorStyle="|" />
//         </span>
//       </h1>
//       <h3>Search For Mentors</h3>
//       <p>Find all your mentoring resources and sessions in one place.</p>
//       <input 
//         type="text" 
//         className="form-control mt-3" 
//         placeholder="Search for Mentors e.g., 'AWS, DevOps, etc.'" 
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)} 
//       />
//       <span
//         style={{
//           position: 'absolute',
//           right: '40px',
//           top: '50%',
//           transform: 'translateY(-50%)',
//           cursor: 'pointer',
//         }}
//       >
//         <i className="bi bi-search"></i>
//       </span>
//       <div className="mt-3 d-block">
//         <span
//           className={`p-2 ${style.mentorFor} m-2`}
//           onClick={() => handleMentorClick('Full Stack Java')}
//         >
//           Full Stack Java
//         </span>
//         <span
//           className={`p-2 ${style.mentorFor} m-2`}
//           onClick={() => handleMentorClick('Full Stack Python')}
//         >
//           Full Stack Python
//         </span>
//         <span
//           className={`p-2 ${style.mentorFor} m-2`}
//           onClick={() => handleMentorClick('DevOps')}
//         >
//           DevOps
//         </span>
//         <span
//           className={`p-2 ${style.mentorFor} m-2`}
//           onClick={() => handleMentorClick('AWS')}
//         >
//           AWS
//         </span>
//         <br />
//         <div className='mt-3'>
//         <span
//           className={`p-2 ${style.mentorFor} m-2`}
//           onClick={() => handleMentorClick('Data Analytics')}
//         >
//           Data Analytics
//         </span>
//         <span
//           className={`p-2 ${style.mentorFor} m-2`}
//           onClick={() => handleMentorClick('Business Analyst')}
//         >
//           Business Analyst
//         </span>
//         <span
//           className={`p-2 ${style.mentorFor} m-2`}
//           onClick={() => handleMentorClick('Data Science')}
//         >
//           Data Science
//         </span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


//     <div className='col-12 col-md-6'>
// <img src='https://img.freepik.com/free-vector/man-woman-touching-each-other-when-work-is-done_1150-35029.jpg?t=st=1736679593~exp=1736683193~hmac=e5b6e7a787f628607f1a3c57df163f0fcc27300b3f084174a785878ff3a2febb&w=1380' style={{height:'100%',width:'100%'}}></img>
//     </div>
//     </div>
//      <div className='mt-5 container' ref={mentorProfilesRef}>
//  <div className="row" >
//                      <div className="col-md-12">
//                          <h2>Mentor Profiles</h2>
//                          <div className="row">
//                              {filteredMentors.map((mentor) => (
//                                 <div className="col-md-3" key={mentor.id} style={{ marginBottom: '20px' }}>
//                                     <div className={`${style.card} card d-flex align-content-center`} onClick={() => handleCardClick(mentor)}>
//                                       <div className='d-flex'>
//                                       {mentor.profilePhoto && (
//                                             <img
//                                                 src={mentor.profilePhoto}
//                                                 alt={`${mentor.username}'s profile`}
//                                                 className={style.profile}
//                                             />
//                                         )}
//                                         <div className='d-block'>
//                                         <h5 className='fw-bold'>{mentor.username}</h5>
//                                         <p className={`p-1 ${style.mentorFor}`}>{mentor.MentorFor}</p>
//                                         </div>
                                     
//                                       </div>
                                      
//                                         <p>{mentor.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//     </div>
//   );
// };

// export default BookMentor;












// import React, { useEffect, useRef, useState } from 'react';
// import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import { useNavigate } from 'react-router';
// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../firebase.jsx';
// import style from './BookMentor.module.css';
// import MentorData from './MentorDataComponent/Mentordata.jsx';

// const BookMentor = () => {
//     const navigate = useNavigate();
//     const [mentors, setMentors] = useState([]);
//     const [selectedMentor, setSelectedMentor] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const mentorProfilesRef = useRef(null);

//     useEffect(() => {
//         const fetchMentors = async () => {
//             const querySnapshot = await getDocs(collection(db, "mentors"));
//             const mentorsList = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             setMentors(mentorsList);
//         };

//         fetchMentors();
//     }, []);

//     const handleMentorClick = (mentorFor) => {
//         setSelectedMentor(mentorFor);
//         console.log(`Selected Mentor: ${mentorFor}`);
//         if (mentorProfilesRef.current) {
//             mentorProfilesRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const handleCardClick = (mentor) => {
//         navigate('/mentorprofile', { state: { mentor } });
//     }

//     const filteredMentors = mentors.filter(mentor => {
//         const matchesCategory = selectedMentor ? mentor.mentorFor === selectedMentor : true;
//         const matchesSearch = mentor.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             mentor.mentorFor.toLowerCase().includes(searchQuery.toLowerCase());
//         return matchesCategory && matchesSearch;
//     });

//     useEffect(() => {
//         console.log(`Filtered Mentors:`, filteredMentors);
//     }, [filteredMentors]);

//     const [text] = useTypewriter({
//         words: ['Full Stack Java', 'Data Analyst', 'Business Analyst', 'DevOps', 'AWS', 'Full Stack Python', 'Data Science'],
//         loop: true,
//         typeSpeed: 120,
//         deleteSpeed: 80,
//     });

//     return (
//         <div className="container-fluid" style={{marginTop:'150px'}}>
//             <div className="row">
//                 <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
//                     <div>
//                         <h1 className="fw-bold">
//                             1 - on - 1{' '}
//                             <span className="fw-bold" style={{ color: 'rgb(5, 121, 180)' }}>
//                                 {text}
//                             </span>
//                             <span className="text-black">
//                                 <Cursor cursorStyle="|" />
//                             </span>
//                         </h1>
//                         <h3>Search For Mentors</h3>
//                         <p>Find all your mentoring resources and sessions in one place.</p>
//                         <div className="input-group mt-3">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Search for Mentors e.g., 'AWS, DevOps, etc.'"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                             <span className="input-group-text" style={{ cursor: 'pointer' }}>
//                                 <i className="bi bi-search"></i>
//                             </span>
//                         </div>
//                         <div className="mt-3 d-flex flex-wrap">
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Java')}>Full Stack Java</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Python')}>Full Stack Python</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('DevOps')}>DevOps</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('AWS')}>AWS</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Data Analytics')}>Data Analytics</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Business Analyst')}>Business Analyst</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Data Science')}>Data Science</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-6">
//                     <img src="https://img.freepik.com/free-vector/man-woman-touching-each-other-when-work-is-done_1150-35029.jpg?t=st=1736679593~exp=1736683193~hmac=e5b6e7a787f628607f1a3c57df163f0fcc27300b3f084174a785878ff3a2febb&w=1380" className="img-fluid" alt="Mentors" />
//                 </div>
//             </div>
//             <div className="row mt-3">
//                 <div className="col-12">
//                 <MentorData mentors={mentors} handleCardClick={handleCardClick} />
//           </div>
//         </div>
//       </div>
//     );
// };

// export default BookMentor;




// import React, { useEffect, useRef, useState } from 'react';
// import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import { useNavigate } from 'react-router';
// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../services/firebaseConfig.js';
// import style from './BookMentor.module.css';
// import MentorData from './MentorDataComponent/Mentordata.jsx';

// const BookMentor = () => {
//     const navigate = useNavigate();
//     const [mentors, setMentors] = useState([]);
//     const [selectedMentor, setSelectedMentor] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const mentorProfilesRef = useRef(null);

//     useEffect(() => {
//         const fetchMentors = async () => {
//             const querySnapshot = await getDocs(collection(db, "mentors"));
//             const mentorsList = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             setMentors(mentorsList);
//         };

//         fetchMentors();
//     }, []);

//     const handleMentorClick = (mentorFor) => {
//         setSelectedMentor(mentorFor === 'All' ? null : mentorFor); // Set to null if 'All' is clicked
//         console.log(`Selected Mentor: ${mentorFor}`);
//         if (mentorProfilesRef.current) {
//             mentorProfilesRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const handleCardClick = (mentor) => {
//         navigate('/mentorprofile', { state: { mentor } });
//     }

//     const filteredMentors = mentors.filter(mentor => {
//         const matchesCategory = selectedMentor ? mentor.mentorFor === selectedMentor : true;
//         const matchesSearch = mentor.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             mentor.mentorFor.toLowerCase().includes(searchQuery.toLowerCase());
//         return matchesCategory && matchesSearch;
//     });

//     useEffect(() => {
//         console.log(`Filtered Mentors:`, filteredMentors);
//     }, [filteredMentors]);

//     const [text] = useTypewriter({
//         words: ['Full Stack Java', 'Data Analyst', 'Business Analyst', 'DevOps', 'AWS', 'Full Stack Python', 'Data Science'],
//         loop: true,
//         typeSpeed: 120,
//         deleteSpeed: 80,
//     });

//     return (
//         <div className="container-fluid" style={{marginTop:'150px'}}>
//             <div className="row">
//                 <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
//                     <div>
//                         <h1 className="fw-bold">
//                             1 - on - 1{' '}
//                             <span className="fw-bold" style={{ color: 'rgb(5, 121, 180)' }}>
//                                 {text}
//                             </span>
//                             <span className="text-black">
//                                 <Cursor cursorStyle="|" />
//                             </span>
//                         </h1>
//                         <h3>Search For Mentors</h3>
//                         <p>Find all your mentoring resources and sessions in one place.</p>
//                         <div className="input-group mt-3">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Search for Mentors e.g., 'AWS, DevOps, etc.'"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                             <span className="input-group-text" style={{ cursor: 'pointer' }}>
//                                 <i className="bi bi-search"></i>
//                             </span>
//                         </div>
//                         <div className="mt-3 d-flex flex-wrap">
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('All')}>All</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Java')}>Full Stack Java</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Python')}>Full Stack Python</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('DevOps')}>DevOps</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('AWS')}>AWS</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Data Analytics')}>Data Analytics</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Business Analyst')}>Business Analyst</span>
//                             <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Data Science')}>Data Science</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-6">
//                     <img src="https://img.freepik.com/free-vector/man-woman-touching-each-other-when-work-is-done_1150-35029.jpg?t=st=1736679593~exp=1736683193~hmac=e5b6e7a787f628607f1a3c57df163f0fcc27300b3f084174a785878ff3a2febb&w=1380" className="img-fluid" alt="Mentors" />
//                 </div>
//             </div>
//             <div className="row mt-3" ref={mentorProfilesRef}>
//                 <div className="col-12">
//                     {/* Pass the filtered mentors to the MentorData component */}
//                     <MentorData mentors={filteredMentors} handleCardClick={handleCardClick} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookMentor;





import React, { useEffect, useRef, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../services/firebaseConfig.js';
import style from './BookMentor.module.css';
import MentorData from './MentorDataComponent/MentorData.jsx';

const BookMentor = () => {
    const navigate = useNavigate();
    const [mentors, setMentors] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const mentorProfilesRef = useRef(null);

    useEffect(() => {
        const fetchMentors = async () => {
            const querySnapshot = await getDocs(collection(db, "mentors"));
            const mentorsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMentors(mentorsList);
        };

        fetchMentors();
    }, []);

    const handleMentorClick = (mentorFor) => {
        setSelectedMentor(mentorFor === 'All' ? null : mentorFor); // Set to null if 'All' is clicked
        console.log(`Selected Mentor: ${mentorFor}`);
        if (mentorProfilesRef.current) {
            mentorProfilesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCardClick = (mentor) => {
        navigate('/mentorprofile', { state: { mentor } });
    }

    const filteredMentors = mentors.filter(mentor => {
        const matchesCategory = selectedMentor ? mentor.mentorFor.includes(selectedMentor) : true;
        const matchesSearch = mentor.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mentor.mentorFor.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        console.log(`Filtered Mentors:`, filteredMentors);
    }, [filteredMentors]);

    const [text] = useTypewriter({
        words: ['Full Stack Java', 'Data Analyst', 'Business Analyst', 'DevOps', 'AWS', 'Full Stack Python', 'Data Science'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div className="container-fluid" style={{ marginTop: '150px' }}>
            <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="fw-bold">
                            1 - on - 1{' '}
                            <span className="fw-bold" style={{ color: 'rgb(5, 121, 180)' }}>
                                {text}
                            </span>
                            <span className="text-black">
                                <Cursor cursorStyle="|" />
                            </span>
                        </h1>
                        <h3>Search For Mentors</h3>
                        <p>Find all your mentoring resources and sessions in one place.</p>
                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for Mentors e.g., 'AWS, DevOps, etc.'"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <span className="input-group-text" style={{ cursor: 'pointer' }}>
                                <i className="bi bi-search"></i>
                            </span>
                        </div>
                        <div className="mt-3 d-flex flex-wrap">
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('All')}>All</span>
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Java')}>Full Stack Java</span>
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Full Stack Python')}>Full Stack Python</span>
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('DevOps')}>DevOps</span>
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('AWS')}>AWS</span>
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Data Analytics')}>Data Analytics</span>
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Business Analyst')}>Business Analyst</span>
                            <span className={`${style.mentorFor} m-2`} onClick={() => handleMentorClick('Data Science')}>Data Science</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="https://img.freepik.com/free-vector/man-woman-touching-each-other-when-work-is-done_1150-35029.jpg?t=st=1736679593~exp=1736683193~hmac=e5b6e7a787f628607f1a3c57df163f0fcc27300b3f084174a785878ff3a2febb&w=1380" className="img-fluid" alt="Mentors" />
                </div>
            </div>
            <div className="row mt-3" ref={mentorProfilesRef}>
                <div className="col-12">
                    {/* Pass the filtered mentors to the MentorData component */}
                    <MentorData mentors={filteredMentors} handleCardClick={handleCardClick} />
                </div>
            </div>
        </div>
    );
};

export default BookMentor;
