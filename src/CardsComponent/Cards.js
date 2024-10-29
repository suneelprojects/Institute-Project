import React, { useState } from 'react';
import style from './cards.module.css';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import according to your project structure

const Cards = ({ job }) => {
  const navigate = useNavigate();
  const [viewCount, setViewCount] = useState(job.views || 0); // Initialize view count from job object

  const handleViewClick = async () => {
    console.log(job); // Check the job object here
    if (job && job.id) {
      // Increment view count locally
      setViewCount(prevCount => prevCount + 1);

      // Update view count in Firestore
      const jobRef = doc(db, "Users", job.id);
      await updateDoc(jobRef, {
        views: viewCount + 1 // Increment the view count
      });

      // Navigate to job details
      navigate('/jobDetails', { state: { job } });
    } else {
      console.error('Job ID is undefined');
    }
  };

  return (
    <div className={style.jobCard}>
      <div className={style.cardBody}>
        <div className="m-2 p-2">
          <div className='d-flex justify-content-between'>
          <p className='mt-2'>Package: <strong>{job.CTC}</strong></p>
          <p className='mt-2'><i class="bi bi-eye"></i> {viewCount}</p>
          </div>
          <p>Location: <strong>{job.location}</strong></p>
          <h4>{job.position}</h4>
          <div className={style.tags}>
            {job.tags && job.tags.map((tag, index) => (
              <span key={index} className={`mx-2 ${style.tag}`}># {tag}</span>
            ))}
          </div>
          {/* Display updated view count */}
          <p>Last date to apply: <b>{job.endedDate}</b></p>
        </div>
      </div>

      <div className={style.cardFooter}>
        <img src={job.imageUrl} alt="Company Logo" className={style.companyLogo} />
        <h5>{job.companyName}</h5>
        <button className={`btn ${style.viewButton}`} onClick={handleViewClick}>View</button>
      </div>
    </div>
  );
};

export default Cards;