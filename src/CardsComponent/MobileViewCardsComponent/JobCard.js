import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../../firebase.js';
import style from '../cards.module.css';
import { EditorState, convertFromRaw, ContentState } from 'draft-js'; // Import necessary modules

const JobCard = ({ job, onCardClick }) => {
  const navigate = useNavigate();
  const [viewCount, setViewCount] = useState(job.views || 0);
  const [timeLeft, setTimeLeft] = useState("");
  const [blinkClass, setBlinkClass] = useState("");
  const [expiredClass, setExpiredClass] = useState("");
  const [editorStateJobDescription, setEditorStateJobDescription] = useState(EditorState.createEmpty());
  const [editorStateWhatYouWillBring, setEditorStateWhatYouWillBring] = useState(EditorState.createEmpty());
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobs(jobsData);
      // if (jobsData.length > 0) {
      //   setSelectedJob(jobsData[0]); // Set the first job as the default selected job
      // }
      
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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date(job.endedDate);
      const timeDifference = endDate - now;

      if (timeDifference > 0) {
        const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
        if (hoursLeft <= 24) {
          setTimeLeft(`${hoursLeft} hours left`);
          setBlinkClass(style.blink); // Add blinking class
        } else {
          setTimeLeft("Available to Apply");
          setBlinkClass(style.available); // Add available class
        }
      } else {
        setTimeLeft("Expired");
        setBlinkClass(""); // Remove blinking class
        setExpiredClass(style.expiredCard); // Add expired card class
      }
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [job.endedDate]);

  const handleViewClick = async (e) => {
    e.stopPropagation(); // Prevent event propagation
    if (job && job.id) {
      setViewCount(prevCount => prevCount + 1);
      const jobRef = doc(db, "Users", job.id);
      await updateDoc(jobRef, {
        views: viewCount + 1
      });

      const jobDescriptionRawContentState = job.jobDescription ? JSON.parse(job.jobDescription) : null;
      const jobDescription = jobDescriptionRawContentState 
        ? EditorState.createWithContent(convertFromRaw(jobDescriptionRawContentState))
        : EditorState.createEmpty();
      
      const whatYouWillBringRawContentState = job.whatYouWillBring ? JSON.parse(job.whatYouWillBring) : null;
      const whatYouWillBring = whatYouWillBringRawContentState 
        ? EditorState.createWithContent(convertFromRaw(whatYouWillBringRawContentState))
        : EditorState.createEmpty();
     
      navigate('/jobData', { 
        state: { 
          job, 
          editorStateJobDescription: jobDescription,
          editorStateWhatYouWillBring: whatYouWillBring 
        } 
      });
    } else {
      console.error('Job ID is undefined');
    }
  };

  return (
    <div className={`card p-3 mb-2 mx-3 ${style.jobCard} ${expiredClass}`} onClick={() => onCardClick(job)} style={{ maxWidth: '100%' }}>
      <div className="row no-gutters">
        <div className="col-12 col-md-2 ">
          <img src={job.imageUrl} alt="Company Logo" className={`text-center ms-3 ${style.companyLogo}`} width={60} height={60} />
        </div>
        <div className="col-12 col-md-10">
          <div className="card-body">
            <div className='d-flex justify-content-between'>
              <div>
                <h5 className="card-title fw-bold">{job.position}</h5>
                <p className='text-muted fw-bold'>{job.companyName}, {job.location}</p>
              </div>
              <div className='align-self-center'>
                {timeLeft && (
                  <p className={`${style.textDanger} ${blinkClass} ${timeLeft === "Expired" ? style.expiredText : ""}`}>
                    <b>{timeLeft}</b>
                  </p>
                )}
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <p className='text-muted fw-bold'>{job.Experience}</p>
              <p className="card-text fw-bold fs-6 text-muted">{job.workType}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <button className={`btn ${style.viewButton}`} onClick={handleViewClick}>View</button>
              <p className="card-text"><small className="text-muted"><i className="bi bi-eye fs-5"></i> {viewCount}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
