// MentorProfile.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './MentorProfile.module.css';

const MentorProfile = () => {
    const location = useLocation();
    const { mentor } = location.state; // Get the mentor data from the location state

    return (
        <div className={`container-fluid`}  >
            <div className='row'>
                <div className={`col-4 ${style.profileContainer}`} style={{paddingTop:'150px'}}>
                    <div>
            <h2 className='fw-bold'>{mentor.fullName}</h2>
            {mentor.imageUrl && (
                <img
                    src={mentor.imageUrl}
                    alt={`${mentor.fullName}'s profile`}
                    className={style.profileImage}

                />
            )}
            <p className='mt-3 px-2'><span  className={`${style.mentorFor}`}>{mentor.mentorFor}</span></p>
            <p>{mentor.aboutMentor}</p>
            {/* Add more mentor details as needed */}
        </div>
        </div>
        <div className='col-8'>
            <div className='row' style={{paddingTop:'150px'}}>
                <div className='col-md-6'>
        <div className={`${style.card} card d-flex justify-content-start align-items-between`} >
  <div className="card-body">
    <h3 className="card-title fw-bold">Career Guide-{mentor.mentorFor}</h3>
    <p className="card-text text-secondary">1:1 Career Guidence Session</p>
    </div>
    <div className={`${style.booking} d-flex justify-content-between align-items-center p-2 m-3`}>
        <div className='d-flex mx-2'>
    <div className={`${style.calender}`}>
    <i className="bi bi-calendar2-week fs-1"></i>
    </div>
    <div className='d-block mx-3'>
        <span><b>30 mins</b></span><br/>
        <span>Video meeting</span>
    </div>
    </div>
    <div className='text-center m-2'>
        <button className={`p-2 ${style.free}`}>Free <i class="bi bi-arrow-right"></i></button>
    </div>

    </div>
  </div>
</div>

<div className='col-md-6'>
<div className={`${style.card} card d-flex justify-content-start align-items-between`} >
  <div className="card-body">
    <h3 className="card-title fw-bold">Career Guide</h3>
    <p className="card-text text-secondary">1:1 Career Guidence Session</p>
    </div>
    <div className={`${style.booking} d-flex justify-content-between align-items-center p-2 m-3`}>
        <div className='d-flex mx-2'>
    <div className={`${style.calender}`}>
    <i className="bi bi-calendar2-week fs-1"></i>
    </div>
    <div className='d-block mx-3'>
        <span><b>30 mins</b></span><br/>
        <span>Video meeting</span>
    </div>
    </div>
    <div className='text-center m-2'>
        <button className={`p-2 ${style.free}`}>Free <i class="bi bi-arrow-right"></i></button>
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

export default MentorProfile;