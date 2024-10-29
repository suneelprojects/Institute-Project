// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import job from '../assets/job.avif';
// import { useNavigate } from 'react-router-dom';
// import Cards from './Cards';

// const JobListing = () => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedWorkLocation, setSelectedWorkLocation] = useState('all');
//   const [selectedExperience, setSelectedExperience] = useState('all');
//   const [selectedSalary, setSelectedSalary] = useState('all');
//   const [selectedPosition, setSelectedPosition] = useState('all');
//   const [selectlocation,setSelectLocation]=useState('all')
//   const jobsPerPage = 9;
//   const navigate = useNavigate();
//   const [selectedDateFilter, setSelectedDateFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');


//   useEffect(() => {
//     const fetchJobs = async () => {
//       const querySnapshot = await getDocs(collection(db, "Users"));
//       const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setJobs(jobsData);
//     };
//     fetchJobs();
//   }, []);

//   // Filter jobs based on selected criteria
//   const filteredJobs = jobs.filter(job => {
//     const locationMatch = selectlocation === 'all' || job.location.toLowerCase() === selectlocation.toLowerCase();
//     const worklocationMatch = selectedWorkLocation === 'all' || job.workLocation.toLowerCase() === selectedWorkLocation.toLowerCase();
//     const experienceMatch = selectedExperience === 'all' || job.Experience.toLowerCase() === selectedExperience.toLowerCase();
//     const salaryMatch = selectedSalary === 'all' || job.CTC.toLowerCase() === selectedSalary.toLowerCase();
//     const positionMatch = selectedPosition === 'all' || job.position.toLowerCase().includes(selectedPosition.toLowerCase());

//     const searchMatch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                         job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                         job.workLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                         job.Experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                         job.CTC.toLowerCase().includes(searchTerm.toLowerCase());

//                         let dateMatch = true; // Default to true
//                         if (selectedDateFilter !== 'all') {
//                           const today = new Date();
//                           const jobEndDate = new Date(job.endedDate); // Make sure this is the correct field
                      
//                           if (selectedDateFilter === 'today') {
//                             dateMatch = jobEndDate.toDateString() === today.toDateString(); // Match only today's jobs
//                           } else if (selectedDateFilter === '3days') {
//                             const threeDaysAgo = new Date(today);
//                             threeDaysAgo.setDate(today.getDate() - 3);
//                             dateMatch = jobEndDate >= threeDaysAgo && jobEndDate <= today; // Jobs within the last 3 days
//                           } else if (selectedDateFilter === '15days') {
//                             const fifteenDaysAgo = new Date(today);
//                             fifteenDaysAgo.setDate(today.getDate() - 15);
//                             dateMatch = jobEndDate >= fifteenDaysAgo && jobEndDate <= today; // Jobs within the last 15 days

//                           }
//                         }
//     return locationMatch && locationMatch && experienceMatch && salaryMatch && positionMatch && dateMatch && worklocationMatch && searchMatch;
//   });

//   // Assuming 'all' is used for default selection

//   // Reverse the jobs array so new jobs are displayed first
//   const reversedJobs = [...filteredJobs].reverse();

//   // Calculate current jobs
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = reversedJobs.slice(indexOfFirstJob, indexOfLastJob);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleViewClick = (job) => {
//     navigate('/jobDetails', { state: { job, jobs } });
//   };

//   const handleWorkLocationChange = (e) => setSelectedWorkLocation(e.target.value);
//   const handleExperienceChange = (e) => setSelectedExperience(e.target.value);
//   const handleSalaryChange = (e) => setSelectedSalary(e.target.value);
//   const handlePositionChange = (e) => setSelectedPosition(e.target.value);
//   const handleLocationChange=(e)=> setSelectLocation(e.target.value);
//   const handleSearch=(e)=>setSearchTerm(e.target.value);
  

//   const handleSearchButtonClick = () => {
//     // You could implement additional logic here if needed
//     console.log('Searching for:', searchTerm);
//   };

//   return (
//     <div>
//       <div className='container'>
//         <img
//           src={job}
//           alt="Job"
//           style={{
//             height: 'auto',
//             width: '100%',
//             maxWidth: '700px',
//             display: 'block',
//             marginLeft: 'auto',
//             marginRight: 'auto'
//           }}
//         />
//         <h1 style={{ textAlign: 'center' }}>Job Listings</h1>
// <div className='col-md-6 offset-md-3'>
//         <div className="input-group mb-3">
//   <input type="text" className="form-control" placeholder="Search for jobs..." id="searchInput" aria-label="Search" aria-describedby="basic-addon2"
//     onChange={handleSearch}
//   />
//   <div className="input-group-append">
//     <button className="btn btn-outline-secondary p-2" type="button" onClick={handleSearchButtonClick}><i class="bi bi-search"></i></button>
//   </div>
// </div>
// </div>
//         <div className="d-flex justify-content-center my-3 flex-wrap">
//         <select
//             id="locationFilter"
//             className="form-control mx-2"
//             onChange={handleLocationChange}
//             style={{ width: 'auto' }}
//           >
//           <option value='all'>Location</option>
//           <option value='Hyderabad'>Hyderabad</option>
//           <option value='Chennai'>Chennai</option>
//           <option value='Banglore'>Banglore</option>
//           <option value='Pune'>Pune</option>

//             {/* Add more location options as needed */}
//           </select>

//           <select
//             id="locationFilter"
//             className="form-control mx-2"
//             onChange={handleWorkLocationChange}
//             style={{ width: 'auto' }}
//           >
//             <option value='all'>Work Location</option>
//              <option value='On-site'>On-site</option>
//           <option value='Remote'>Remote</option>
//           <option value='Hybrid'>Hybrid</option>
//             {/* Add more location options as needed */}
//           </select>

//           <select
//             id="experienceFilter"
//             className="form-control mx-2"
//             onChange={handleExperienceChange}
//             style={{ width: 'auto' }}
//           >
//           <option value='all'>experience</option>
//           <option value='Freshers'>Freshers</option>
//           <option value='0-1 year'>0-1 year</option>
//           <option value='1-2 year'>1-2 year</option>
//           <option value='2-3 year'>2-3 year</option>
//           <option value='4&gt; year'>4&gt; year</option>
//           </select>

//           <select
//             id="salaryFilter"
//             className="form-control mx-2"
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
//             className='form-control '
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
//     className="form-control mx-2"
//     onChange={(e) => setSelectedDateFilter(e.target.value)}
//     style={{ width: 'auto' }}
// >
//     <option value="all">All Jobs</option>
//     <option value="today">Today</option>
//     <option value="3days">Last 3 Days</option>
//     <option value="15days">Last 15 Days</option>
// </select>
//           <div style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: '0'}}>
//            {currentJobs.map((job, index) => (
//             <div key={index} style={{ flex: '1 0 30%', margin: '10px' }}>
//               <Cards job={job} onViewClick={() => handleViewClick(job)} />
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
//         );
//         };
//         export default JobListing;





import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import job from '../assets/job.avif';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWorkLocation, setSelectedWorkLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedSalary, setSelectedSalary] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [selectlocation, setSelectLocation] = useState('all');
  const jobsPerPage = 9;
  const navigate = useNavigate();
  const [selectedDateFilter, setSelectedDateFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
 

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobs(jobsData);
    };
    fetchJobs();
  }, []);

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
                    console.log(job.tags);
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
  const handleViewClick = (job) => {
    navigate('/jobDetails', { state: { job, jobs } });
  };
  const handleWorkLocationChange = (e) => setSelectedWorkLocation(e.target.value);
  const handleExperienceChange = (e) => setSelectedExperience(e.target.value);
  const handleSalaryChange = (e) => setSelectedSalary(e.target.value);
  const handlePositionChange = (e) => setSelectedPosition(e.target.value);
  const handleLocationChange = (e) => setSelectLocation(e.target.value);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <div>
      <div className='container'>
        <img
          src={job}
          alt="Job"
          style={{
            height: 'auto',
            width: '100%',
            maxWidth: '700px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <h1 style={{ textAlign: 'center' }}>Job Listings</h1>
        <div className='col-md-6 offset-md-3'>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for jobs..." id="searchInput" aria-label="Search" aria-describedby="basic-addon2" onChange={handleSearch} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary p-2" type="button"><i className="bi bi-search"></i></button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-3 flex-wrap">
          <select id="locationFilter" className="form-control mx-2 m-1" onChange={handleLocationChange} style={{ width: 'auto' }}>
            <option value='all'>Location</option>
            <option value='Hyderabad'>Hyderabad</option>
            <option value='Chennai'>Chennai</option>
            <option value='Banglore'>Banglore</option>
            <option value='Pune'>Pune</option>
          </select>
          <select id="locationFilter" className="form-control mx-2 m1" onChange={handleWorkLocationChange} style={{ width: 'auto' }}>
            <option value='all'>Work Location</option>
            <option value='On-site'>On-site</option>
            <option value='Remote'>Remote</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
          <select id="experienceFilter" className="form-control mx-2 m-1" onChange={handleExperienceChange} style={{ width: 'auto' }}>
            <option value='all'>experience</option>
            <option value='Freshers'>Freshers</option>
          <option value='0-1 year'>0-1 year</option>
           <option value='1-2 year'>1-2 year</option>
           <option value='2-3 year'>2-3 year</option>
           <option value='4&gt; year'>4&gt; year</option>
           </select>           
           <select
            id="salaryFilter"
            className="form-control mx-2 m-1"
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
            className='form-control mx-2 m-1 '
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
    className="form-control mx-2 m-1"
    onChange={(e) => setSelectedDateFilter(e.target.value)}
    style={{ width: 'auto' }}
>
    <option value="all">All Jobs</option>
    <option value="today">Today</option>
    <option value="3days">Last 3 Days</option>
    <option value="15days">Last 15 Days</option>
</select>
          <div style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: '0'}}>
           {currentJobs.map((job, index) => (
            <div key={index} style={{ flex: '1 0 30%', margin: '10px' }}>
              <Cards job={job} onViewClick={() => handleViewClick(job)} />
            </div>
          ))}
        </div>
     
        </div>
        <nav>
          <ul className='pagination d-flex justify-content-center mt-5'>
            {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, index) => (
              <li key={index} className='page-item'>
                <button onClick={() => paginate(index + 1)} className='page-link'>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        </div>
        );
        };
        export default JobListing;

