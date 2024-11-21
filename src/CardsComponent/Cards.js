// import React, { useState } from 'react';
// import style from './cards.module.css';
// import { useNavigate } from 'react-router-dom';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../firebase'; // Adjust the import according to your project structure

// const Cards = ({ job }) => {
//   const navigate = useNavigate();
//   const [viewCount, setViewCount] = useState(job.views || 0); // Initialize view count from job object
//   const [timeLeft, setTimeLeft] = useState("");


//   const handleViewClick = async () => {
//     console.log(job); // Check the job object here
//     if (job && job.id) {
//       // Increment view count locally
//       setViewCount(prevCount => prevCount + 1);

//       // Update view count in Firestore
//       const jobRef = doc(db, "Users", job.id);
//       await updateDoc(jobRef, {
//         views: viewCount + 1 // Increment the view count
//       });

//       // Navigate to job details
//       navigate('/jobDetails', { state: { job } });
//     } else {
//       console.error('Job ID is undefined');
//     }
//   };
//     const [isScaled, setIsScaled] = useState(false); 
//     const handleCardClick = () => { setIsScaled(!isScaled); };

//   return (
//     <div className={`${style.jobCard} ${isScaled ? style.scaled : ''}`} onClick={handleCardClick}>
//       <div className={style.cardBody}>
//         <div className="m-2 p-2">
//           <div className='d-flex justify-content-between'>
//           <p className='mt-2'>Package: <strong>{job.CTC}</strong></p>
//           <p className='mt-2'><i className="bi bi-eye"></i> {viewCount}</p>
//           </div>
//           <p>Location: <b>{job.location}</b></p>
//           <h4>{job.position}</h4>
//           <div className={style.tags}>
//             {job.tags && job.tags.map((tag, index) => (
//               <span key={index} className={`mx-2 ${style.tag}`}># {tag}</span>
//             ))}
//           </div>
//           {/* Display updated view count */}
//           <p>Last date to apply: <b>{job.endedDate}</b></p>
// {timeLeft && <p><b>{timeLeft}</b></p>}
// {/* Display updated view count */} 
// <p>Last date to apply: <b>{job.endedDate}</b></p> 
// {timeLeft && <p><b>{timeLeft}</b></p>}

//         </div>
//       </div>

//       <div className={style.cardFooter}>
//         <div className='d-flex'>
//         <img src={job.imageUrl} alt="Company Logo" className={style.companyLogo} />
//         <b className='mt-2 fs-5'>{job.companyName}</b>
//         </div>
//         <div>
//         <button className={`btn bg-white ${style.viewButton}`} onClick={handleViewClick}>View</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;






import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase.js';
import style from './cards.module.css';

const Cards = ({ job }) => {
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
          setTimeLeft("");
          setBlinkClass(""); // Remove blinking class
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
      const jobRef = doc(db, "Users", job.id);
      await updateDoc(jobRef, {
        views: viewCount + 1
      });
      navigate('/jobDetails', { state: { job } });
    } else {
      console.error('Job ID is undefined');
    }
  };

  const [isScaled, setIsScaled] = useState(false);
  const handleCardClick = () => { setIsScaled(!isScaled); };

  return (
    <div className={`${style.jobCard} ${isScaled ? style.scaled : ''} ${expiredClass} m-2`}  onClick={handleCardClick}>
      <div className={style.cardBody}>
        <div className="m-2 p-2">
          <div className='d-flex justify-content-between'>
            <p className='mt-2'>Package: <strong>{job.CTC}</strong></p>
            <p className='mt-2'><i className="bi bi-eye"></i> {viewCount}</p>
          </div>
          <p>Location: <b>{job.location}</b></p>
          <h4>{job.position}</h4>
          <div className={style.tags}>
            {job.tags && job.tags.map((tag, index) => (
              <span key={index} className={`mx-2 ${style.tag}`}># {tag}</span>
            ))}
          </div>
          <p>Last date to apply: <b>{job.endedDate}</b></p>
          {timeLeft && <p className={`${style.textDanger} ${blinkClass}`}><b>{timeLeft}</b></p>}
        </div>
      </div>
      <div className={style.cardFooter}>
        <div className='d-flex'>
          <img src={job.imageUrl} alt="Company Logo" className={style.companyLogo} />
          <b className='mt-2 fs-5'>{job.companyName}</b>
        </div>
        <div>
          <Link to='/jobdetails' className={`btn bg-white ${style.viewButton}`} onClick={handleViewClick}>View</Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;