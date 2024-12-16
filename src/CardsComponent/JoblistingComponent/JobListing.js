
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import job from '../../assets/job.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Cards from '../Cards.js';
import Job from '../../assets/Tiny people searching for business opportunities.jpg'
import jobstyle from '../JobDetailsComponent/jobDetails.module.css'

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
      console.log('Filtered Jobs:', filteredJobs);
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
  // const handleLocationChange = (e) => setSelectLocation(e.target.value);
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const [isScaled, setIsScaled] = useState(false); 
  const handleCardClick = () => { setIsScaled(!isScaled); };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setSelectLocation(selectedLocation);
    console.log('Selected Location:', selectedLocation);
  };
  



  useEffect(() => { AOS.init({ duration: 1200 });},[]); // Customize AOS settings here },
  return (
    <div>
      <div className='container-fluid' style={{marginTop:'170px',marginBottom:'30px'}}>
      <div className='container'>

        <div className='h-100' data-aos="zoom-in-up">
        <img
          src={Job}
          alt="Job"
          className={`my-5 ${jobstyle.Image}`}
        />
        </div>
        <h1 style={{ textAlign: 'center' }} className='mt-5'>Job Listings</h1>
        <div className='col-md-6 offset-md-3'>
          <div style={{ position: 'relative', width: '100%' }} data-aos="zoom-in-up">
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
        </div>
        <div className="d-flex justify-content-center my-3 flex-wrap">
          <select id="locationFilter" className={`form-control ${jobstyle.form} m-2 `} onChange={handleLocationChange} style={{ width: 'auto' }} data-aos="zoom-in-up">
            <option value='all'>Location</option>
            <option value='Hyderabad'>Hyderabad</option>
            <option value='Chennai'>Chennai</option>
            <option value='Banglore'>Banglore</option>
            <option value='Pune'>Pune</option>
          </select>
          <select id="locationFilter" className={`form-control ${jobstyle.form}  m-2`} onChange={handleWorkLocationChange} style={{ width: 'auto' }} data-aos="zoom-in-up">
            <option value='all'>Work Location</option>
            <option value='On-site'>On-site</option>
            <option value='Remote'>Remote</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
          <select id="experienceFilter" className={`form-control ${jobstyle.form}  m-2`} onChange={handleExperienceChange} style={{ width: 'auto' }} data-aos="zoom-in-up">
            <option value='all'>experience</option>
            <option value='Freshers'>Freshers</option>
          <option value='0-1 year'>0-1 year</option>
           <option value='1-2 year'>1-2 year</option>
           <option value='2-3 year'>2-3 year</option>
           <option value='4&gt; year'>4&gt; year</option>
           </select>           
           <select
            id="salaryFilter"
            className={`form-control ${jobstyle.form} m-2`}
            onChange={handleSalaryChange}
            style={{ width: 'auto' }}
            data-aos="zoom-in-up"
          >
          
              <option value="all">Salaries</option>
  <option value="0-3 LPA">0-3 LPA</option>
  <option value="3-6 LPA">3-6 LPA</option>
  <option value="6-10 LPA">6-10 LPA</option>
  <option value="10+ LPA">10+ LPA</option>
          </select>

          <select
            id="positionFilter"
            className={`form-control ${jobstyle.form} m-2`}
            onChange={handlePositionChange}
            style={{width:'auto'}}
            data-aos="zoom-in-up"
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
    className={`form-control ${jobstyle.form} m-2`}
    onChange={(e) => setSelectedDateFilter(e.target.value)}
    style={{ width: 'auto' }}
    data-aos="zoom-in-up"
>
    <option value="all">All Jobs</option>
    <option value="today">Today</option>
    <option value="3days">Last 3 Days</option>
    <option value="15days">Last 15 Days</option>
</select>
          <div style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: '0'}}>
           {currentJobs.map((job, index) => (
            <div key={index} style={{ flex: '1 0 30%', margin: '10px' }}  data-aos="flip-left" >
              <Cards job={job} onViewClick={() => handleViewClick(job)}/>
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
        </div>
        );
        };
        export default JobListing;

