import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './jobDetails.module.css';
import Cards from './Cards';
import { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { convertFromRaw, Editor, EditorState } from 'draft-js';

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state || {};
  const [Jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editorStateJobDescription, setEditorStateJobDescription] = useState(EditorState.createEmpty());
  const [editorStateWhatYouWillBring, setEditorStateWhatYouWillBring] = useState(EditorState.createEmpty());
  const jobsPerPage = 9;
  const navigate = useNavigate();
  const [user, setUser] = useState();


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
      console.log('Fetched Jobs:', jobsData); // Log to check fetched jobs
      setJobs(jobsData);

      try {
        if (job?.jobDescription) {
          const jobDescriptionRawContentState = JSON.parse(job.jobDescription);
          const jobDescription = EditorState.createWithContent(convertFromRaw(jobDescriptionRawContentState));
          setEditorStateJobDescription(jobDescription);
        } else {
          setEditorStateJobDescription(EditorState.createEmpty());
        }

        if (job?.whatYouWillBring) {
          const whatYouWillBringRawContentState = JSON.parse(job.whatYouWillBring);
          const whatYouWillBring = EditorState.createWithContent(convertFromRaw(whatYouWillBringRawContentState));
          setEditorStateWhatYouWillBring(whatYouWillBring);
        } else {
          setEditorStateWhatYouWillBring(EditorState.createEmpty());
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    fetchJobs();
  }, [job]);

  const reversedJobs = [...Jobs].reverse();

  if (!job) {
    return <div>No job details available.</div>;
  }

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = reversedJobs.slice(indexOfFirstJob, indexOfLastJob);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Log after definitions
  console.log('Job from location state:', job);
  console.log('Current Jobs:', currentJobs);

 

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-4 d-none d-sm-block'>
          {Jobs && (
            <>
              <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto', height: '200vh' }}>
                {currentJobs.map((job, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    <Cards job={job} />
                  </li>
                ))}
              </ul>
              <nav>
                <ul className='pagination'>
                  {Array.from({ length: Math.ceil(Jobs.length / jobsPerPage) }, (_, index) => (
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
        <div className={`col-md-8 col-sm-12 ${style.jobDetailCard}`}>
        <div className={`p-3 ${style.profile}`} style={{ position: 'relative' }}>

   <div className='d-flex'>
     {job.imageUrl && 
      <img 
        src={job.imageUrl} 
        alt="Job Image" 
        className={`mt-3 ${style.image}`}
      />
    }
    <div className='d-block m-3'>
      <h2>{job.position}</h2>
      <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className={style.companyLink}>
      {job.companyName} <i className="bi bi-box-arrow-up-right"></i>
      </a>
      <p style={{fontSize:'20px'}}>{job.workLocation}</p>
    </div>
    
    {/* Apply Now Button positioned absolutely */}
    <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
  {user ? (
    <a href={job.applyLink} className='btn' style={{ backgroundColor: '#5451A6', color: 'white' }}>
      Apply Now <i className="bi bi-box-arrow-up-right"></i>
    </a>
  ) : (
    <button className='btn' onClick={() => navigate('/login')} style={{ backgroundColor: '#5451A6', color: 'white' }}>
      Apply Now <i className="bi bi-box-arrow-up-right"></i>
    </button>
  )}
</div>
  </div>
  <div className={style.tags}>
        {job.tags && job.tags.map((tag, index) => (
          <span key={index} className={` ${style.tag}`}># {tag}</span>
        ))}
      </div>  
</div>



<div className={style.profile}>
<div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class={style.card}>
                    <div>
                        <h5>Application Start Date</h5>
                        <p>{job.startDate}</p>
                    </div>
                    <div class={style.cardIcon}>
                        <i class="bi bi-calendar"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div  class={style.card}>
                    <div>
                        <h5>Application End Date</h5>
                        <p>{job.endedDate}</p>
                    </div>
                    <div class={style.cardIcon}>
                        <i class="bi bi-calendar"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

          <div className={style.profile}>
            <h4>Job Description</h4>
            <Editor
              editorState={editorStateJobDescription}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              readOnly={true} // Set readOnly to true to prevent editing
            />
            <h4> Required Skills</h4>
            <div className={style.tags}>
        {job.tags && job.tags.map((tag, index) => (
         <span key={index} className={`${style.tag}`}># {tag}</span>
        ))}
      </div> 
      <div className={style.tags}>
        {job.tags && job.tags.map((tag, index) => (
         <h6><a key={index} href='https://socialprachar.in' className={`${style.Learntag}`}>Learn {tag}</a></h6>
        ))}
      </div>  
            <h4>What You Will Bring</h4>
            <Editor
              editorState={editorStateWhatYouWillBring}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              readOnly={true} // Set readOnly to true to prevent editing
            />
 
          </div>
          <div class="container mt-5">
        <h4>More Information</h4>
        <div class="row">
            <div class="col-md-6">
                <div class={style.infoCard}>
                <i class="bi bi-cash-coin fs-1"></i>
                    <h6>Package</h6>
                    <p>{job.CTC}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class={style.infoCard}>
                <i class="bi bi-briefcase-fill fs-1"></i>
                    <h6>Minimum Experience</h6>
                    <p>{job.Experience}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class={style.infoCard}>
                <i class="bi bi-geo-alt-fill fs-1"></i>
                    <h6>Job Location</h6>
                    <p>{job.location}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class={style.infoCard}>
                <i class="bi bi-clock-fill fs-1"></i>
                    <h6>Work Type</h6>
                    <p>{job.workType}</p>
                </div>
            </div>
        </div>
    </div> 
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
