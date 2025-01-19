
// import React, { useState, useEffect } from 'react';
// import { db } from '../../firebase.js';
// import { collection, getDocs } from 'firebase/firestore';
// import job from '../../assets/job.avif';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useNavigate } from 'react-router-dom';
// import Cards from '../Cards.js';
// import Job from '../../assets/Tiny people searching for business opportunities.jpg'
// import jobstyle from '../JobDetailsComponent/jobDetails.module.css'
// import JobDetails from '../JobDetailsComponent/JobDetails.js';

// const JobListing = () => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedWorkLocation, setSelectedWorkLocation] = useState('all');
//   const [selectedExperience, setSelectedExperience] = useState('all');
//   const [selectedSalary, setSelectedSalary] = useState('all');
//   const [selectedPosition, setSelectedPosition] = useState('all');
//   const [selectlocation, setSelectLocation] = useState('all');
//   const jobsPerPage = 9;
//   const navigate = useNavigate();
//   const [selectedDateFilter, setSelectedDateFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
 

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const querySnapshot = await getDocs(collection(db, "Users"));
//       const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setJobs(jobsData);
//       console.log('Filtered Jobs:', filteredJobs);
//     };
//     fetchJobs();
//   }, []);

//   const filteredJobs = jobs.filter(job => {
//     const locationMatch = selectlocation === 'all' || job.location.toLowerCase() === selectlocation.toLowerCase();
//     const worklocationMatch = selectedWorkLocation === 'all' || job.workLocation.toLowerCase() === selectedWorkLocation.toLowerCase();
//     const experienceMatch = selectedExperience === 'all' || job.Experience.toLowerCase() === selectedExperience.toLowerCase();
//     const salaryMatch = selectedSalary === 'all' || job.CTC.toLowerCase() === selectedSalary.toLowerCase();
//     const positionMatch = selectedPosition === 'all' || job.position.toLowerCase().includes(selectedPosition.toLowerCase());
//     const searchMatch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     job.workLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     job.Experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     job.CTC.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     (job.tags && job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))); // Assuming tags is an array
//                     console.log(job.tags);
//     let dateMatch = true;
//     if (selectedDateFilter !== 'all') {
//       const today = new Date();
//       const jobEndDate = new Date(job.endedDate);
//       if (selectedDateFilter === 'today') {
//         dateMatch = jobEndDate.toDateString() === today.toDateString();
//       } else if (selectedDateFilter === '3days') {
//         const threeDaysAgo = new Date(today);
//         threeDaysAgo.setDate(today.getDate() - 3);
//         dateMatch = jobEndDate >= threeDaysAgo && jobEndDate <= today;
//       } else if (selectedDateFilter === '15days') {
//         const fifteenDaysAgo = new Date(today);
//         fifteenDaysAgo.setDate(today.getDate() - 15);
//         dateMatch = jobEndDate >= fifteenDaysAgo && jobEndDate <= today;
//       }
//     }
//     return locationMatch && experienceMatch && salaryMatch && positionMatch && dateMatch && worklocationMatch && searchMatch;
//   });

//   const reversedJobs = [...filteredJobs].reverse();
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = reversedJobs.slice(indexOfFirstJob, indexOfLastJob);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const handleViewClick = (job) => {
//     navigate('/jobDetails', { state: { job, jobs } });
//   };
//   const handleWorkLocationChange = (e) => setSelectedWorkLocation(e.target.value);
//   const handleExperienceChange = (e) => setSelectedExperience(e.target.value);
//   const handleSalaryChange = (e) => setSelectedSalary(e.target.value);
//   const handlePositionChange = (e) => setSelectedPosition(e.target.value);
//   // const handleLocationChange = (e) => setSelectLocation(e.target.value);
//   const handleSearch = (e) => setSearchTerm(e.target.value);
//   const [isScaled, setIsScaled] = useState(false); 
//   const handleCardClick = () => { setIsScaled(!isScaled); };

//   const handleLocationChange = (e) => {
//     const selectedLocation = e.target.value;
//     setSelectLocation(selectedLocation);
//     console.log('Selected Location:', selectedLocation);
//   };
  



//   useEffect(() => { AOS.init({ duration: 1200 });},[]); // Customize AOS settings here },
//   return (
//     <div>
//       <div className='container-fluid' style={{marginTop:'170px',marginBottom:'30px'}}>
//       <div className='container'>

//         <div className='h-100' data-aos="zoom-in-up">
//         <img
//           src={Job}
//           alt="Job"
//           className={`my-5 ${jobstyle.Image}`}
//         />
//         </div>
//         <h1 style={{ textAlign: 'center' }} className='mt-5'>Job Listings</h1>
//         <div className='col-md-6 offset-md-3'>
//           <div style={{ position: 'relative', width: '100%' }} data-aos="zoom-in-up">
//             <input
//  type="text" className='form-control' placeholder="Search for jobs..." id="searchInput" aria-label="Search" aria-describedby="basic-addon2" onChange={handleSearch}
// />
//       <span
// style={{
// position: 'absolute',
// right: '40px',
// top: '50%',
// transform: 'translateY(-50%)',
// cursor: 'pointer'
// }}
// >
// <i className="bi bi-search"></i>
// </span>
// </div>
//         </div>
//         <div className="d-flex justify-content-center my-3 flex-wrap">
//           <select id="locationFilter" className={`form-control ${jobstyle.form} m-2 `} onChange={handleLocationChange} style={{ width: 'auto' }} data-aos="zoom-in-up">
//             <option value='all'>Location</option>
//             <option value='Hyderabad'>Hyderabad</option>
//             <option value='Chennai'>Chennai</option>
//             <option value='Banglore'>Banglore</option>
//             <option value='Pune'>Pune</option>
//           </select>
//           <select id="locationFilter" className={`form-control ${jobstyle.form}  m-2`} onChange={handleWorkLocationChange} style={{ width: 'auto' }} data-aos="zoom-in-up">
//             <option value='all'>Work Location</option>
//             <option value='On-site'>On-site</option>
//             <option value='Remote'>Remote</option>
//             <option value='Hybrid'>Hybrid</option>
//           </select>
//           <select id="experienceFilter" className={`form-control ${jobstyle.form}  m-2`} onChange={handleExperienceChange} style={{ width: 'auto' }} data-aos="zoom-in-up">
//             <option value='all'>experience</option>
//             <option value='Freshers'>Freshers</option>
//           <option value='0-1 year'>0-1 year</option>
//            <option value='1-2 year'>1-2 year</option>
//            <option value='2-3 year'>2-3 year</option>
//            <option value='4&gt; year'>4&gt; year</option>
//            </select>           
//            <select
//             id="salaryFilter"
//             className={`form-control ${jobstyle.form} m-2`}
//             onChange={handleSalaryChange}
//             style={{ width: 'auto' }}
//             data-aos="zoom-in-up"
//           >
          
//               <option value="all">Salaries</option>
//   <option value="0-3 LPA">0-3 LPA</option>
//   <option value="3-6 LPA">3-6 LPA</option>
//   <option value="6-10 LPA">6-10 LPA</option>
//   <option value="10+ LPA">10+ LPA</option>
//           </select>

//           <select
//             id="positionFilter"
//             className={`form-control ${jobstyle.form} m-2`}
//             onChange={handlePositionChange}
//             style={{width:'auto'}}
//             data-aos="zoom-in-up"
//             >
//               <option value='all'>Position</option>
//           <option value='Full Stack Java Developer'> Full Stack Java Developer</option>
//           <option value='Full Stack Python Developer'>Full Stack Python Developer</option>
//           <option value='UI/UX Development'>UI/UX Developer</option>
//           <option value='MERN Stack'>MERN Stack</option>
//           <option value='Data Analytics'>Data Analyst</option>
//           <option value='Data Science'>Data Science</option>
//           <option value='Business Analyst'>Business Analyst</option>
//          </select>
//          <select
//     id="dateFilter"
//     className={`form-control ${jobstyle.form} m-2`}
//     onChange={(e) => setSelectedDateFilter(e.target.value)}
//     style={{ width: 'auto' }}
//     data-aos="zoom-in-up"
// >
//     <option value="all">All Jobs</option>
//     <option value="today">Today</option>
//     <option value="3days">Last 3 Days</option>
//     <option value="15days">Last 15 Days</option>
// </select>
//           <div style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: '0'}}>
//            {currentJobs.map((job, index) => (
//             <div key={index} style={{ flex: '1 0 30%', margin: '10px' }}  data-aos="flip-left" >
//               <Cards job={job} onViewClick={() => handleViewClick(job)}/>
//             </div>
//           ))}
//         </div>
//         </div>
//         <nav>
//           <ul className='pagination d-flex justify-content-center mt-5'>
//             {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, index) => (
//               <li key={index} className='page-item'>
//                 <button onClick={() => paginate(index + 1)} className='page-link'>
//                   {index + 1}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         </div>
//         </div>
//         </div>
//         );
//         };
//         export default JobListing;








// import React, { useEffect, useState } from 'react';
// import styles from './JobListing.module.css'
// import { db,auth } from '../../firebase.js';
// import { collection, getDocs } from 'firebase/firestore';
// import job from '../../assets/job.avif';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Cards from '../Cards.js';
// import Job from '../../assets/Tiny people searching for business opportunities.jpg'
// // import jobstyle from '../JobDetailsComponent/jobDetails.module.css'
// import JobDetails from '../JobDetailsComponent/JobDetails.js';
// import { convertFromRaw, Editor, EditorState } from 'draft-js';
// import logo from '../../assets/socialhire.png';


// const JobListing = () => {
//   const location = useLocation();
//   const [currentJob, setCurrentJobs] = useState([]);
//   const { job } = location.state || { job: {} };
//   const [jobs, setJobs] = useState([]);
//   const [showDetails, setShowDetails] = useState(false); // State to manage visibility
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedWorkLocation, setSelectedWorkLocation] = useState('all');
//     const [selectedExperience, setSelectedExperience] = useState('all');
//     const [selectedSalary, setSelectedSalary] = useState('all');
//     const [selectedPosition, setSelectedPosition] = useState('all');
//     const [selectlocation, setSelectLocation] = useState('all');
//     const jobsPerPage = 9;
//     const navigate = useNavigate();
//     const [selectedDateFilter, setSelectedDateFilter] = useState('all');
//     const [searchTerm, setSearchTerm] = useState('');
//       const [editorStateJobDescription, setEditorStateJobDescription] = useState(EditorState.createEmpty());
//       const [editorStateWhatYouWillBring, setEditorStateWhatYouWillBring] = useState(EditorState.createEmpty());
//         const [user, setUser] = useState();
//         const [selectedJob, setSelectedJob] = useState(null);
      
   
  



//     useEffect(() => {
//       const unsubscribe = auth.onAuthStateChanged((user) => {
//         setUser(user);
//       });
//       return () => unsubscribe();
//     }, []);
 
//     useEffect(() => {
//       const fetchJobs = async () => {
//         const querySnapshot = await getDocs(collection(db, "Users"));
//         const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setJobs(jobsData);
//         // if (jobsData.length > 0) {
//         //   setSelectedJob(jobsData[0]); // Set the first job as the default selected job
//         // }
        
//               try {
//                 if (job?.jobDescription) {
//                   const jobDescriptionRawContentState = JSON.parse(job.jobDescription);
//                   const jobDescription = EditorState.createWithContent(convertFromRaw(jobDescriptionRawContentState));
//                   setEditorStateJobDescription(jobDescription);
//                 } else {
//                   setEditorStateJobDescription(EditorState.createEmpty());
//                 }
        
//                 if (job?.whatYouWillBring) {
//                   const whatYouWillBringRawContentState = JSON.parse(job.whatYouWillBring);
//                   const whatYouWillBring = EditorState.createWithContent(convertFromRaw(whatYouWillBringRawContentState));
//                   setEditorStateWhatYouWillBring(whatYouWillBring);
//                 } else {
//                   setEditorStateWhatYouWillBring(EditorState.createEmpty());
//                 }
//               } catch (error) {
//                 console.error('Error parsing JSON:', error);
//               }
            
        
//       };
//       fetchJobs();
//     }, [job]);

      
//   // useEffect(() => {
//   //   const fetchJobs = async () => {
//   //     const querySnapshot = await getDocs(collection(db, "Users"));
//   //     const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   //     setJobs(jobsData);
     

//   //     if (job) {
//   //       try {
//   //         if (job.jobDescription) {
//   //           const jobDescriptionRawContentState = JSON.parse(job.jobDescription);
//   //           const jobDescription = EditorState.createWithContent(convertFromRaw(jobDescriptionRawContentState));
//   //           setEditorStateJobDescription(jobDescription);
//   //         } else {
//   //           setEditorStateJobDescription(EditorState.createEmpty());
//   //         }

//   //         if (job.whatYouWillBring) {
//   //           const whatYouWillBringRawContentState = JSON.parse(job.whatYouWillBring);
//   //           const whatYouWillBring = EditorState.createWithContent(convertFromRaw(whatYouWillBringRawContentState));
//   //           setEditorStateWhatYouWillBring(whatYouWillBring);
//   //         } else {
//   //           setEditorStateWhatYouWillBring(EditorState.createEmpty());
//   //         }
//   //       } catch (error) {
//   //         console.error('Error parsing JSON:', error);
//   //       }
//   //     }
//   //   };
//   //   fetchJobs();
//   // }, [job]);
  
//     const filteredJobs = jobs.filter(job => {
//       const locationMatch = selectlocation === 'all' || job.location.toLowerCase() === selectlocation.toLowerCase();
//       const worklocationMatch = selectedWorkLocation === 'all' || job.workLocation.toLowerCase() === selectedWorkLocation.toLowerCase();
//       const experienceMatch = selectedExperience === 'all' || job.Experience.toLowerCase() === selectedExperience.toLowerCase();
//       const salaryMatch = selectedSalary === 'all' || job.CTC.toLowerCase() === selectedSalary.toLowerCase();
//       const positionMatch = selectedPosition === 'all' || job.position.toLowerCase().includes(selectedPosition.toLowerCase());
//       const searchMatch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       job.workLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       job.Experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       job.CTC.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       (job.tags && job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))); // Assuming tags is an array
//                       console.log(job.tags);
//       let dateMatch = true;
//       if (selectedDateFilter !== 'all') {
//         const today = new Date();
//         const jobEndDate = new Date(job.endedDate);
//         if (selectedDateFilter === 'today') {
//           dateMatch = jobEndDate.toDateString() === today.toDateString();
//         } else if (selectedDateFilter === '3days') {
//           const threeDaysAgo = new Date(today);
//           threeDaysAgo.setDate(today.getDate() - 3);
//           dateMatch = jobEndDate >= threeDaysAgo && jobEndDate <= today;
//         } else if (selectedDateFilter === '15days') {
//           const fifteenDaysAgo = new Date(today);
//           fifteenDaysAgo.setDate(today.getDate() - 15);
//           dateMatch = jobEndDate >= fifteenDaysAgo && jobEndDate <= today;
//         }
//       }
//       return locationMatch && experienceMatch && salaryMatch && positionMatch && dateMatch && worklocationMatch && searchMatch;
//     });
  
//     const reversedJobs = [...filteredJobs].reverse();
//     const indexOfLastJob = currentPage * jobsPerPage;
//     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//     const currentJobs = reversedJobs.slice(indexOfFirstJob, indexOfLastJob);
  
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const handleViewClick = (job) => {
//       navigate('/jobDetails', { state: { job, jobs } });
//     };
//     const handleWorkLocationChange = (e) => setSelectedWorkLocation(e.target.value);
//     const handleExperienceChange = (e) => setSelectedExperience(e.target.value);
//     const handleSalaryChange = (e) => setSelectedSalary(e.target.value);
//     const handlePositionChange = (e) => setSelectedPosition(e.target.value);
//     // const handleLocationChange = (e) => setSelectLocation(e.target.value);
//     const handleSearch = (e) => setSearchTerm(e.target.value);
//     const [isScaled, setIsScaled] = useState(false); 
  
//     const handleLocationChange = (e) => {
//       const selectedLocation = e.target.value;
//       setSelectLocation(selectedLocation);
//       console.log('Selected Location:', selectedLocation);
//     };
    
  
  
  
//     useEffect(() => { AOS.init({ duration: 1200 });},[]);
  
//     const handleCardClick = (job) => {
//       setSelectedJob(job);
//       setShowDetails(true); // Set showDetails to true to display job details
//     };



//   return (
//     <div>
//               <>
//             <div className={`${styles.container} text-white p-3 pb-5`}>
//                 <div className='container'>
//                 <div className='row'>
//     <div className='col-md-6 offset-md-3 text-center'>
//         <p><img src={logo} alt="Logo" className='img-fluid'/></p>
//     </div>
// </div>

                  
//                     <h2 className='fw-bold'>Let's Find Your Dream Job</h2>
//                     <p>Discover the best remote and work from home jobs at top remote companies</p>
//                 </div>
//             </div>

//             <div className={`container p-3 ${styles.overlapContainer}`}>
               



//                     <div style={{ position: 'relative', width: '100%' }}>
//            <input
//  type="text" className='form-control' placeholder="Search for jobs..." id="searchInput" aria-label="Search" aria-describedby="basic-addon2" onChange={handleSearch}
// />
//       <span
// style={{
// position: 'absolute',
// right: '40px',
// top: '50%',
// transform: 'translateY(-50%)',
// cursor: 'pointer'
// }}
// >
// <i className="bi bi-search"></i>
// </span>
// </div>
       
//         <div className="d-flex justify-content-center my-3 flex-wrap">
//           <select id="locationFilter" className={`form-select m-2 `} onChange={handleLocationChange} style={{ width: 'auto' }}>
//             <option value='all'>Location</option>
//             <option value='Hyderabad'>Hyderabad</option>
//             <option value='Chennai'>Chennai</option>
//             <option value='Banglore'>Banglore</option>
//             <option value='Pune'>Pune</option>
//           </select>
//           <select id="locationFilter" className={`form-select m-2`} onChange={handleWorkLocationChange} style={{ width: 'auto' }} >
//             <option value='all'>Work Location</option>
//             <option value='On-site'>On-site</option>
//             <option value='Remote'>Remote</option>
//             <option value='Hybrid'>Hybrid</option>
//           </select>
//           <select id="experienceFilter" className={`form-select   m-2`} onChange={handleExperienceChange} style={{ width: 'auto' }}>
//             <option value='all'>experience</option>
//             <option value='Freshers'>Freshers</option>
//           <option value='0-1 year'>0-1 year</option>
//            <option value='1-2 year'>1-2 year</option>
//            <option value='2-3 year'>2-3 year</option>
//            <option value='4&gt; year'>4&gt; year</option>
//            </select>           
//            <select
//             id="salaryFilter"
//             className={`form-select m-2`}
//             onChange={handleSalaryChange}
//             style={{ width: 'auto' }}
            
//           >
          
//               <option value="all">Salaries</option>
//   <option value="0-3 LPA">0-3 LPA</option>
//   <option value="3-6 LPA">3-6 LPA</option>
//   <option value="6-10 LPA">6-10 LPA</option>
//   <option value="10+ LPA">10+ LPA</option>
//           </select>

//           <select
//             id="positionFilter"
//             className={`form-select m-2`}
//             onChange={handlePositionChange}
//             style={{width:'auto'}}
            
//             >
//               <option value='all'>Position</option>
//           <option value='Full Stack Java Developer'> Full Stack Java Developer</option>
//           <option value='Full Stack Python Developer'>Full Stack Python Developer</option>
//           <option value='UI/UX Development'>UI/UX Developer</option>
//           <option value='MERN Stack'>MERN Stack</option>
//           <option value='Data Analytics'>Data Analyst</option>
//           <option value='Data Science'>Data Science</option>
//           <option value='Business Analyst'>Business Analyst</option>
//          </select>
//          <select
//     id="dateFilter"
//     className={`form-select  m-2`}
//     onChange={(e) => setSelectedDateFilter(e.target.value)}
//     style={{ width: 'auto' }}
// >
//     <option value="all">All Jobs</option>
//     <option value="today">Today</option>
//     <option value="3days">Last 3 Days</option>
//     <option value="15days">Last 15 Days</option>
// </select>
//                 </div>
//             </div>





//             <div className='container-fluid mt-3'>
       
//        <div className='row'>
//         {/* This block is only displayed on medium screens */}
//         <div className={`col-12 col-md-6 ${styles.scrollableColumn}`}>
//           {jobs && (
//             <>
//               <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto' }}>
//                 {currentJobs.map((job, index) => (
//                   <li key={index} style={{ marginBottom: '10px' }}>
//                     <Cards job={job} onCardClick={handleCardClick} />
//                   </li>
//                 ))}
//               </ul>
//               <nav>
//                 <ul className='pagination'>
//                   {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, index) => (
//                     <li key={index} className='page-item'>
//                       <button onClick={() => paginate(index + 1)} className='page-link'>
//                         {index + 1}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </>
//           )}
//         </div>

//         {/* Job details card display */}
//         {showDetails && (
//           <div className={`col-12 col-md-6 ${styles.jobDetailCard}`}>
//             <div className={`p-3 ${styles.jobDetailsCardBody}`}>
//               {selectedJob && (
//                 <>
//                   <div className='d-flex justify-content-between'>
//                     <div>
//                       <h5 className='fw-bold'>{selectedJob.position}</h5>
//                       <a href={selectedJob.companyLink} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
//                         <b className='text-muted'> {selectedJob.companyName}, {selectedJob.location}.</b>
//                       </a>
//                     </div>
//                     <p>
//                       <a href={selectedJob.companyLink} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
//                         <img src={selectedJob.imageUrl} alt="Company Logo" className={styles.companyLogo} width={45} height={45} />
//                       </a>
//                     </p>
//                   </div>
//                   <div className='mt-3'>
//                     <p><i className="bi bi-briefcase-fill fw-bold fs-5"></i> <small className='mx-3'>{selectedJob.workType}, {selectedJob.workLocation}</small></p>
//                     <p><i className="bi bi-coin fs-5 fw-bold"></i> <small className=' mx-3'>{selectedJob.CTC}</small></p>
//                     <p><i className="bi bi-trophy-fill fs-5 fw-bold"></i><small className='mx-3'>{selectedJob.Experience}</small></p>
//                     <p><i className="bi bi-list-stars fs-5 me-3"></i> Skills: 
//                       {selectedJob.tags && selectedJob.tags.map((tag, index) => (
//                         <small key={index}>{tag}, </small>
//                       ))}
//                     </p>
//                   </div>
//                   <button className={`btn ${styles.ApplyLink}`}>Apply Now <i className="bi bi-box-arrow-up-right"></i></button>

//                   <div className='mt-3'>
//                     <h5 className='fw-bold'>Job Description</h5>
//                     <Editor
//                       editorState={editorStateJobDescription}
//                       toolbarClassName="toolbarClassName"
//                       wrapperClassName="wrapperClassName"
//                       editorClassName="editorClassName"
//                       readOnly={true} // Set readOnly to true to prevent editing
//                     />
//                     <h5 className='fw-bold mt-3'> Required Skills</h5>
//                     <div className={styles.tags}>
//                       {selectedJob.tags && selectedJob.tags.map((tag, index) => (
//                         <span key={index} className={`${styles.tag}`}># {tag}</span>
//                       ))}
//                     </div>
//                     <div className={styles.tags}>
//                       {selectedJob.tags && selectedJob.tags.map((tag, index) => (
//                         <h6 key={index}><a href='https://socialprachar.in' className={`${styles.Learntag}`}>Learn {tag}</a></h6>
//                       ))}
//                     </div>
//                     <h5 className='fw-bold mt-3'>What You Will Bring</h5>
//                     <Editor
//                       editorState={editorStateWhatYouWillBring}
//                       toolbarClassName="toolbarClassName"
//                       wrapperClassName="wrapperClassName"
//                       editorClassName="editorClassName"
//                       readOnly={true} // Set readOnly to true to prevent editing
//                     />
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//       </div>





//         </>
//         </div>
 
//   );
// };

// export default JobListing;











import React, { useEffect, useState } from 'react';
import styles from './JobListing.module.css'
import { db,auth } from '../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Cards from '../Cards.js';
import JobDetails from '../JobDetailsComponent/JobDetails.js';
import { convertFromRaw, Editor, EditorState } from 'draft-js';
import logo from '../../assets/Social_Hire_page-0001-removebg-preview.png';
import JobDetail from '../MobileViewCardsComponent/JobData.js';
import JobCards  from '../MobileViewCardsComponent/JobCard.js';
import Search from '../../assets/Search.gif'

const JobListing = () => {
  const location = useLocation();
  const [currentJob, setCurrentJobs] = useState([]);
  const { job } = location.state || { job: {} };
  const [jobs, setJobs] = useState([]);
  const [showDetails, setShowDetails] = useState(false); // State to manage visibility
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedWorkLocation, setSelectedWorkLocation] = useState('all');
    const [selectedExperience, setSelectedExperience] = useState('all');
    const [selectedSalary, setSelectedSalary] = useState('all');
    const [selectedPosition, setSelectedPosition] = useState('all');
    const [selectlocation, setSelectLocation] = useState('all');
    const jobsPerPage = 6;
    const navigate = useNavigate();
    const [selectedDateFilter, setSelectedDateFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
      const [editorStateJobDescription, setEditorStateJobDescription] = useState(EditorState.createEmpty());
      const [editorStateWhatYouWillBring, setEditorStateWhatYouWillBring] = useState(EditorState.createEmpty());
        const [user, setUser] = useState();
        const [selectedJob, setSelectedJob] = useState(null);
   
      



    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
      return () => unsubscribe();
    }, []);
    useEffect(() => {
      const fetchJobs = async () => {
        const querySnapshot = await getDocs(collection(db, "Users"));
        const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setJobs(jobsData);
        if (jobsData.length > 0) {
          setSelectedJob(jobsData[jobsData.length - 1]); // Set the last job as the default selected job
          setShowDetails(true); // Show details for the last job
        }
      };
      fetchJobs();
    }, []);
 
    useEffect(() => {
      if (selectedJob) {
        try {
          if (selectedJob.jobDescription) {
            const jobDescriptionRawContentState = JSON.parse(selectedJob.jobDescription);
            const jobDescription = EditorState.createWithContent(convertFromRaw(jobDescriptionRawContentState));
            setEditorStateJobDescription(jobDescription);
          } else {
            setEditorStateJobDescription(EditorState.createEmpty());
          }
  
          if (selectedJob.whatYouWillBring) {
            const whatYouWillBringRawContentState = JSON.parse(selectedJob.whatYouWillBring);
            const whatYouWillBring = EditorState.createWithContent(convertFromRaw(whatYouWillBringRawContentState));
            setEditorStateWhatYouWillBring(whatYouWillBring);
          } else {
            setEditorStateWhatYouWillBring(EditorState.createEmpty());
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }, [selectedJob]);
  
    const filteredJobs = jobs.filter(job => {
      const locationMatch = selectlocation === 'all' || job.location.toLowerCase() === selectlocation.toLowerCase();
      const worklocationMatch = selectedWorkLocation === 'all' || job.workLocation.toLowerCase() === selectedWorkLocation.toLowerCase();
      const experienceMatch = selectedExperience === 'all' || job.Experience.toLowerCase() === selectedExperience.toLowerCase();
      const salaryMatch = selectedSalary === 'all' || job.CTC.toLowerCase() === selectedSalary.toLowerCase();
      const positionMatch = selectedPosition === 'all' || job.position.toLowerCase().includes(selectedPosition.toLowerCase());
      const searchMatch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      job.workLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      job.Experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      job.CTC.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      (job.tags && job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))); // Assuming tags is an array
                      // console.log(job.tags);
      let dateMatch = true;
      if (selectedDateFilter !== 'all') {
        const today = new Date();
        const jobEndDate = new Date(job.endedDate);
        if (selectedDateFilter === 'today') {
          dateMatch = jobEndDate.toDateString() === today.toDateString();
        } else if (selectedDateFilter === '3days') {
          const threeDaysAgo = new Date(today);
          threeDaysAgo.setDate(today.getDate() - 3);
          dateMatch = jobEndDate >= threeDaysAgo && jobEndDate <= today;
        } else if (selectedDateFilter === '15days') {
          const fifteenDaysAgo = new Date(today);
          fifteenDaysAgo.setDate(today.getDate() - 15);
          dateMatch = jobEndDate >= fifteenDaysAgo && jobEndDate <= today;
        }
      }
      return locationMatch && experienceMatch && salaryMatch && positionMatch && dateMatch && worklocationMatch && searchMatch;
    });
  
    const reversedJobs = [...filteredJobs].reverse();
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = reversedJobs.slice(indexOfFirstJob, indexOfLastJob);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleWorkLocationChange = (e) => setSelectedWorkLocation(e.target.value);
    const handleExperienceChange = (e) => setSelectedExperience(e.target.value);
    const handleSalaryChange = (e) => setSelectedSalary(e.target.value);
    const handlePositionChange = (e) => setSelectedPosition(e.target.value);
    // const handleLocationChange = (e) => setSelectLocation(e.target.value);
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const [isScaled, setIsScaled] = useState(false); 
  
    const handleLocationChange = (e) => {
      const selectedLocation = e.target.value;
      setSelectLocation(selectedLocation);
      // console.log('Selected Location:', selectedLocation);
    };
    
  
  
  
    useEffect(() => { AOS.init({ duration: 1200 });},[]);
  
    const handleCardClick = (job) => {
      setSelectedJob(job);
      setShowDetails(true); // Set showDetails to true to display job details
    };



  return (
    <div>
              <>
            <div className={`${styles.container} text-white p-3 pb-5`}>
                <div className='container'>
                <div className='row'>
    <div className='col-md-6 offset-md-3 text-center'>
        <p><img src={logo} alt="Logo" className='img-fluid'/></p>
    </div>
</div>

                  
                    <h2 className='fw-bold'>Let's Find Your Dream Job</h2>
                    <p>Discover the best remote and work from home jobs at top remote companies</p>
                </div>
            </div>

            <div className={`container p-3 ${styles.overlapContainer}`}>
               



                    <div style={{ position: 'relative', width: '100%' }}>
           <input
 type="text" className='form-control' placeholder="Search for jobs..." id="searchInput" aria-label="Search" aria-describedby="basic-addon2" onChange={handleSearch}
/>
      <span
style={{
position: 'absolute',
right: '40px',
top: '50%',
transform: 'translateY(-50%)',
cursor: 'pointer'
}}
>
<i className="bi bi-search"></i>
</span>
</div>
       
        <div className="d-flex justify-content-center my-3 flex-wrap">
          <select id="locationFilter" className={`form-select m-2 `} onChange={handleLocationChange} style={{ width: 'auto' }}>
            <option value='all'>Location</option>
            <option value='Hyderabad'>Hyderabad</option>
            <option value='Chennai'>Chennai</option>
            <option value='Banglore'>Banglore</option>
            <option value='Pune'>Pune</option>
          </select>
          <select id="locationFilter" className={`form-select m-2`} onChange={handleWorkLocationChange} style={{ width: 'auto' }} >
            <option value='all'>Work Location</option>
            <option value='On-site'>On-site</option>
            <option value='Remote'>Remote</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
          <select id="experienceFilter" className={`form-select   m-2`} onChange={handleExperienceChange} style={{ width: 'auto' }}>
            <option value='all'>experience</option>
            <option value='Freshers'>Freshers</option>
          <option value='0-1 year'>0-1 year</option>
           <option value='1-2 year'>1-2 year</option>
           <option value='2-3 year'>2-3 year</option>
           <option value='4&gt; year'>4&gt; year</option>
           </select>           
           <select
            id="salaryFilter"
            className={`form-select m-2`}
            onChange={handleSalaryChange}
            style={{ width: 'auto' }}
            
          >
          
              <option value="all">Salaries</option>
  <option value="0-3 LPA">0-3 LPA</option>
  <option value="3-6 LPA">3-6 LPA</option>
  <option value="6-10 LPA">6-10 LPA</option>
  <option value="10+ LPA">10+ LPA</option>
          </select>

          <select
            id="positionFilter"
            className={`form-select m-2`}
            onChange={handlePositionChange}
            style={{width:'auto'}}
            
            >
              <option value='all'>Position</option>
          <option value='Full Stack Java Developer'> Full Stack Java Developer</option>
          <option value='Full Stack Python Developer'>Full Stack Python Developer</option>
          <option value='UI/UX Development'>UI/UX Developer</option>
          <option value='MERN Stack'>MERN Stack</option>
          <option value='Data Analytics'>Data Analyst</option>
          <option value='Data Science'>Data Science</option>
          <option value='Business Analyst'>Business Analyst</option>
         </select>
         <select
    id="dateFilter"
    className={`form-select  m-2`}
    onChange={(e) => setSelectedDateFilter(e.target.value)}
    style={{ width: 'auto' }}
>
    <option value="all">All Jobs</option>
    <option value="today">Today</option>
    <option value="3days">Last 3 Days</option>
    <option value="15days">Last 15 Days</option>
</select>
                </div>
            </div>





            <div className='container-fluid mt-3'>
       
       <div className='row'>
        {/* This block is only displayed on medium screens */}

 {/* This block is only displayed on medium screens */}
<div className={`col-12 col-md-6 d-none d-md-block`}>
  {currentJobs && (
    <>
<div className={` ${styles.scrollableColumn}`}>
      <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto' }}>
        {currentJobs.map((job, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <Cards job={job} onCardClick={handleCardClick} />
          </li>
        ))}
      </ul>
    </div>

      <nav>
      <ul className='pagination'>
          {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }, (_, index) => (
            <li key={index} className='page-item'>
              <button onClick={() => paginate(index + 1)} className='page-link'>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )}
</div>

{/* This block is only displayed on small screens */}
<div className={`col-12 d-block d-md-none ${styles.scrollableColumn}`}>
  {currentJobs && (
    <>
      <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto' }}>
        {currentJobs.map((job, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <JobCards job={job} onCardClick={handleCardClick} />
          </li>
        ))}
      </ul>
      <nav>
        <ul className='pagination'>
          {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }, (_, index) => (
            <li key={index} className='page-item'>
              <button onClick={() => paginate(index + 1)} className='page-link'>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )}
</div>

   

        {/* Job details card display */}
        {showDetails && selectedJob ? (
          <>
          <div className={`col-12 col-md-6 d-none d-md-block ${styles.jobDetailCard}`}>
            <div className={`p-5 ${styles.jobDetailsCardBody}`}>
              {selectedJob && (
                <>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h5 className='fw-bold'>{selectedJob.position}</h5>
                      <a href={selectedJob.companyLink} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                        <b className='text-muted'> {selectedJob.companyName}, {selectedJob.location}.</b>
                      </a>
                    </div>
                    <p>
                      <a href={selectedJob.companyLink} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                        <img src={selectedJob.imageUrl} alt="Company Logo" className={styles.companyLogo} width={45} height={45} />
                      </a>
                    </p>
                  </div>
                  <div className='mt-3'>
                    <p><i className="bi bi-briefcase-fill fw-bold fs-5"></i> <small className='mx-3'>{selectedJob.workType}, {selectedJob.workLocation}</small></p>
                    <p><i className="bi bi-coin fs-5 fw-bold"></i> <small className=' mx-3'>{selectedJob.CTC}</small></p>
                    <p><i className="bi bi-trophy-fill fs-5 fw-bold"></i><small className='mx-3'>{selectedJob.Experience}</small></p>
                    <p><i className="bi bi-list-stars fs-5 me-3"></i> Skills: 
                      {selectedJob.tags && selectedJob.tags.map((tag, index) => (
                        <small key={index}>{tag}, </small>
                      ))}
                    </p>
                  </div>
                  <button className={`btn ${styles.ApplyLink}`}>Apply Now <i className="bi bi-box-arrow-up-right"></i></button>

                  <div className='mt-3'>
                    <h5 className='fw-bold'>Job Description</h5>
                    <Editor
                      editorState={editorStateJobDescription}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      readOnly={true} // Set readOnly to true to prevent editing
                    />
                    <h5 className='fw-bold mt-3'> Required Skills</h5>
                    <div className={styles.tags}>
                      {selectedJob.tags && selectedJob.tags.map((tag, index) => (
                        <span key={index} className={`${styles.tag}`}># {tag}</span>
                      ))}
                    </div>
                    <div className={styles.tags}>
                      {selectedJob.tags && selectedJob.tags.map((tag, index) => (
                        <h6 key={index}><a href='https://socialprachar.in' className={`${styles.Learntag}`}>Learn {tag}</a></h6>
                      ))}
                    </div>
                    <h5 className='fw-bold mt-3'>What You Will Bring</h5>
                    <Editor
                      editorState={editorStateWhatYouWillBring}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      readOnly={true} // Set readOnly to true to prevent editing
                    />
                  </div>
                </>
              )}
            </div>
          </div>

 {/* <JobDetail selectedJob={selectedJob} 
 editorStateJobDescription={editorStateJobDescription} 
 editorStateWhatYouWillBring={editorStateWhatYouWillBring} /> */}
 </>
        ):
        <div className={`col-12 col-md-6 d-none d-md-block ${styles.jobDetailCard}`}>
          <div className={`d-flex justify-content-center align-items-center h-50 ${styles.jobDetailsCardBody}}`}>
        <img src='https://i.pinimg.com/originals/ec/27/0f/ec270f640979bc536adcf53c6f66928c.gif' height={500} width={600}></img>
          </div>
        </div>
        }

      </div>
      </div>





        </>
        </div>
 
  );
};

export default JobListing;






// import React, { useState, useEffect } from 'react';
// import { getDocs, collection } from "firebase/firestore";
// import JobCards from './JobCards'; // Adjust the import path as needed
// import JobDetail from './JobDetail'; // Ensure correct import
// import { db } from '../firebase.js'; // Adjust the import path as needed
// import { EditorState, convertFromRaw } from 'draft-js'; // Import necessary modules for Editor
// import styles from '../JoblistingComponent/JobListing.module.css'; // Adjust the import based on your file structure

// const JobListing = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [showDetails, setShowDetails] = useState(false); // State to manage visibility
//   const [currentJobs, setCurrentJobs] = useState([]);
//   const [smallScreenJobs, setSmallScreenJobs] = useState([]);
//   const [mediumScreenJobs, setMediumScreenJobs] = useState([]);
//   const [editorStateJobDescription, setEditorStateJobDescription] = useState(EditorState.createEmpty());
//   const [editorStateWhatYouWillBring, setEditorStateWhatYouWillBring] = useState(EditorState.createEmpty());

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const querySnapshot = await getDocs(collection(db, "Users"));
//       const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setJobs(jobsData);
//       setSmallScreenJobs(jobsData.slice(0, 5)); // Set first 5 jobs for small screens
//       setMediumScreenJobs(jobsData.slice(5, 10)); // Set next 5 jobs for medium screens
//       if (jobsData.length > 0) {
//         setSelectedJob(jobsData[0]); // Set the first job as the default selected job
//       }
//     };
//     fetchJobs();
//   }, []);

//   const handleCardClick = (job) => {
//     setSelectedJob(job);
//     setShowDetails(true); // Show job details when a card is clicked

//     try {
//       if (job.jobDescription) {
//         const jobDescriptionRawContentState = JSON.parse(job.jobDescription);
//         const jobDescription = EditorState.createWithContent(convertFromRaw(jobDescriptionRawContentState));
//         setEditorStateJobDescription(jobDescription);
//       } else {
//         setEditorStateJobDescription(EditorState.createEmpty());
//       }

//       if (job.whatYouWillBring) {
//         const whatYouWillBringRawContentState = JSON.parse(job.whatYouWillBring);
//         const whatYouWillBring = EditorState.createWithContent(convertFromRaw(whatYouWillBringRawContentState));
//         setEditorStateWhatYouWillBring(whatYouWillBring);
//       } else {
//         setEditorStateWhatYouWillBring(EditorState.createEmpty());
//       }
//     } catch (error) {
//       console.error('Error parsing JSON:', error);
//     }
//   };

//   const jobsPerPage = 5; // Set this value as needed
//   const paginate = (pageNumber) => {
//     const startIndex = (pageNumber - 1) * jobsPerPage;
//     const endIndex = startIndex + jobsPerPage;
//     setCurrentJobs(jobs.slice(startIndex, endIndex));
//   };

//   useEffect(() => {
//     paginate(1); // Display the first page by default
//   }, [jobs]);

//   return (
//     <div className='container-fluid mt-3'>
//       <div className='row'>
//         {/* This block is only displayed on medium screens */}
//         <div className={`col-12 col-md-6 d-none d-md-block ${styles.scrollableColumn}`}>
//           {mediumScreenJobs && (
//             <>
//               <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto' }}>
//                 {mediumScreenJobs.map((job, index) => (
//                   <li key={index} style={{ marginBottom: '10px' }}>
//                     <JobCards job={job} onCardClick={handleCardClick} />
//                   </li>
//                 ))}
//               </ul>
//               <nav>
//                 <ul className='pagination'>
//                   {Array.from({ length: Math.ceil(mediumScreenJobs.length / jobsPerPage) }, (_, index) => (
//                     <li key={index} className='page-item'>
//                       <button onClick={() => paginate(index + 1)} className='page-link'>
//                         {index + 1}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </>
//           )}
//         </div>

//         {/* This block is only displayed on small screens */}
//         <div className={`col-12 d-block d-md-none ${styles.scrollableColumn}`}>
//           {smallScreenJobs && (
//             <>
//               <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto' }}>
//                 {smallScreenJobs.map((job, index) => (
//                   <li key={index} style={{ marginBottom: '10px' }}>
//                     <JobCards job={job} onCardClick={handleCardClick} />
//                   </li>
//                 ))}
//               </ul>
//               <nav>
//                 <ul className='pagination'>
//                   {Array.from({ length: Math.ceil(smallScreenJobs.length / jobsPerPage) }, (_, index) => (
//                     <li key={index} className='page-item'>
//                       <button onClick={() => paginate(index + 1)} className='page-link'>
//                         {index + 1}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </>
//           )}
//         </div>

//         {/* Job details card display */}
//         {showDetails && (
//           <JobDetail 
//             selectedJob={selectedJob}
//             editorStateJobDescription={editorStateJobDescription}
//             editorStateWhatYouWillBring={editorStateWhatYouWillBring}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobListing;
