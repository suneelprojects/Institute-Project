import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../services/firebaseConfig.js';
import style from './cards.module.css';

const Cards = ({ job, onCardClick }) => {
  const navigate = useNavigate();
  const [viewCount, setViewCount] = useState(job.views || 0);
  const [timeLeft, setTimeLeft] = useState("");
  const [blinkClass, setBlinkClass] = useState("");
  const [expiredClass, setExpiredClass] = useState("");
  

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

  const handleViewClick = async () => {
    if (job && job.id) {
        setViewCount(prevCount => prevCount + 1);
        const jobRef = doc(db, "JOBS", job.id);
        await updateDoc(jobRef, {
            views: viewCount + 1
        });
        // Ensure that the job object is passed correctly
        onCardClick(job); // Call the onCardClick function with the job
        navigate('/jobListing', { state: { job } });
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
          <p className="card-text"><small className="text-muted"><i class="bi bi-eye fs-5"></i> {viewCount}</small></p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Cards;
