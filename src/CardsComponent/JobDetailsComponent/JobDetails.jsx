import React, { useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './jobDetails.module.css';
import Cards from '../Cards.jsx';
import { auth, db } from '../../services/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import { convertFromRaw, Editor, EditorState } from 'draft-js';
import AOS from 'aos'; 
import 'aos/dist/aos.css'

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

  useEffect(() => { AOS.init({ duration: 1200 });},[]); 
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
    <div  style={{marginTop:'150px',marginBottom:'30px'}}>
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-4 d-none d-sm-block'>
          {Jobs && (
            <>
              <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto', height: '200vh' }}>
                {currentJobs.map((job, index) => (
                  <li key={index} style={{ marginBottom: '10px' }} >
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
   <div className={`p-3 ${style.profile}`} style={{ position: 'relative' }}  data-aos="fade-up">

   <div className='d-flex'>
     {job.imageUrl && 
      <img 
        src={job.imageUrl} 
        alt="Job Image" 
        className={`mt-3 ${style.image}`}
      />
    }
    <div className='d-block m-3'>
      <h4 className='fs-3 fw-bold'>{job.position}</h4>
      <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className={style.companyLink}>
     <b className='fs-5'>{job.companyName}</b> <i className="bi bi-box-arrow-up-right"></i>
      </a>
     <p><b style={{fontSize:'17px'}}>{job.workLocation}</b></p> 
    </div>
    
    {/* Apply Now Button positioned absolutely */}
    <div style={{ position: 'absolute', top: '20px', right: '20px' }}>

    <a href={job.applyLink} className='btn' style={{ backgroundColor: '#5451A6', color: 'white' }}>
      Apply Now <i className="bi bi-box-arrow-up-right"></i>
    </a>
</div>
  </div>
  <div className={style.tags}>
        {job.tags && job.tags.map((tag, index) => (
          <span key={index} className={` ${style.tag}`}># {tag}</span>
        ))}
      </div>  
</div>



<div className={style.profile} data-aos="fade-up">
<div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className={style.card}>
                    <div>
                        <h5 className='fw-bold'>Application Start Date</h5>
                        <p>{job.startDate}</p>
                    </div>
                    <div className={style.cardIcon}>
                        <i className="bi bi-calendar"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div  className={style.card}>
                    <div>
                        <h5 className='fw-bold'>Application End Date</h5>
                        <p>{job.endedDate}</p>
                    </div>
                    <div className={style.cardIcon}>
                        <i className="bi bi-calendar"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

          <div className={style.profile} data-aos="fade-up">
            <h4 className='fw-bold'>Job Description</h4>
            <Editor
              editorState={editorStateJobDescription}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              readOnly={true} // Set readOnly to true to prevent editing
            />
            <h4 className='fw-bold'> Required Skills</h4>
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
            <h4 className='fw-bold'>What You Will Bring</h4>
            <Editor
              editorState={editorStateWhatYouWillBring}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              readOnly={true} // Set readOnly to true to prevent editing
            />
 
          </div>
          <div className="container mt-5" >
        <h4 className='fw-bold'>More Information</h4>
        <div className="row">
            <div className="col-md-6" data-aos="fade-up">
                <div className={style.infoCard}>
                <i className="bi bi-cash-coin fs-1"></i>
                    <h6 className='fw-bold'>Package</h6>
                    <p>{job.CTC}</p>
                </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
                <div className={style.infoCard}>
                <i className="bi bi-briefcase-fill fs-1"></i>
                    <h6 className='fw-bold'>Minimum Experience</h6>
                    <p>{job.Experience}</p>
                </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
                <div className={style.infoCard}>
                <i className="bi bi-geo-alt-fill fs-1"></i>
                    <h6 className='fw-bold'>Job Location</h6>
                    <p>{job.location}</p>
                </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
                <div className={style.infoCard}>
                <i className="bi bi-clock-fill fs-1"></i>
                    <h6 className='fw-bold'>Work Type</h6>
                    <p>{job.workType}</p>
                </div>
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
