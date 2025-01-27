import React from 'react';
import { Editor } from 'react-draft-wysiwyg'; // Adjust the import based on your editor library
import styles from '../JoblistingComponent/JobListing.module.css'; // Adjust the import based on your file structure
import { useLocation } from 'react-router';
import { convertFromRaw, EditorState } from 'draft-js';

const JobData = () => {
  const location = useLocation();
  const { job, editorStateJobDescription, editorStateWhatYouWillBring } = location.state || {};
const jobDescriptionRawContentState = job.jobDescription ? JSON.parse(job.jobDescription) : null;
const jobDescription = jobDescriptionRawContentState 
  ? EditorState.createWithContent(convertFromRaw(jobDescriptionRawContentState))
  : EditorState.createEmpty();

const whatYouWillBringRawContentState = job.whatYouWillBring ? JSON.parse(job.whatYouWillBring) : null;
const whatYouWillBring = whatYouWillBringRawContentState 
  ? EditorState.createWithContent(convertFromRaw(whatYouWillBringRawContentState))
  : EditorState.createEmpty();


  return (
    <div className={`col-12 d-block d-md-none ${styles.jobDetailCard}`} style={{marginTop:'150px'}}>
      <div className={`p-3 m-2 ${styles.jobDetailsCardBody}`}>
        {job ? ( // Check if job is defined
          <>
            <div className='d-flex justify-content-between'>
              <div>
                <h5 className='fw-bold'>{job.position}</h5>
                <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  <b className='text-muted'> {job.companyName}, {job.location}.</b>
                </a>
              </div>
              <p>
                <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  <img src={job.imageUrl} alt="Company Logo" className={styles.companyLogo} width={45} height={45} />
                </a>
              </p>
            </div>
            <div className='mt-3'>
              <p><i className="bi bi-briefcase-fill fw-bold fs-5"></i> <small className='mx-3'>{job.workType}, {job.workLocation}</small></p>
              <p><i className="bi bi-coin fs-5 fw-bold"></i> <small className=' mx-3'>{job.CTC}</small></p>
              <p><i className="bi bi-trophy-fill fs-5 fw-bold"></i><small className='mx-3'>{job.Experience}</small></p>
              <p><i className="bi bi-list-stars fs-5 me-3"></i> Skills: 
                {job.tags && job.tags.map((tag, index) => (
                  <small key={index}>{tag}, </small>
                ))}
              </p>
            </div>
            <button className={`btn ${styles.ApplyLink}`}>Apply Now <i className="bi bi-box-arrow-up-right"></i></button>

            <div className='mt-3'>
              <h5 className='fw-bold'>Job Description</h5>
              <Editor
                editorState={jobDescription}
                toolbarClassName="toolbarHidden"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                readOnly={true}
                toolbarHidden
              />
              <h5 className='fw-bold mt-3'> Required Skills</h5>
              <div className={styles.tags}>
                {job.tags && job.tags.map((tag, index) => (
                  <span key={index} className={`${styles.tag}`}># {tag}</span>
                ))}
              </div>
              <div className={styles.tags}>
                {job.tags && job.tags.map((tag, index) => (
                  <h6 key={index}><a href='https://socialprachar.in' className={`${styles.Learntag}`}>Learn {tag}</a></h6>
                ))}
              </div>
              <h5 className='fw-bold mt-3'>What You Will Bring</h5>
              <Editor
                editorState={whatYouWillBring}
                toolbarClassName="toolbarHidden"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                readOnly={true}
                toolbarHidden
              />
            </div>
          </>
        ) : (
          <h1 className='mt-5'>No Job Data is Available</h1>
        )}
      </div>
      </div>
  );
};

export default JobData;
