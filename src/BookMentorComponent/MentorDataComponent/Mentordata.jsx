import style from './MentorData.module.css';

const MentorData = ({ mentors, handleCardClick }) => {
    return (
        <div className='mt-5 container'>
            <div className="row">
                <div className="col-md-12">
                    <h2>Mentor Profiles</h2>
                    <div className="row">
                        {mentors.map((mentor) => (
                            <div className="col-md-3" key={mentor.id} style={{ marginBottom: '20px' }}>
                                <div className={`${style.card} card d-flex align-content-center`} onClick={() => handleCardClick(mentor)}>
                                    <div className='d-flex'>
                                        {mentor.imageUrl && (
                                            <img
                                                src={mentor.imageUrl}
                                                alt={`${mentor.fullName}'s profile`}
                                                className={style.profile}
                                            />
                                        )}
                                        <div className='d-block'>
                                            <h5 className='fw-bold'>{mentor.fullName}</h5>
                                            {/* <p className={`p-1 ${style.mentorFor}`}>{mentor.mentorFor}</p> */}
                                        </div>
                                    </div>
                                    <p>{truncateText(mentor.aboutMentor)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function to truncate text
const truncateText = (text) => {
    return text.length > 50 ? text.substring(0, 50) + '...' : text;
};

export default MentorData;