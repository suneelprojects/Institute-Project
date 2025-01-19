// import React from "react";
// import p1 from '../../assets/p-1.png';
// import p2 from '../../assets/p-2.jpg';
// import p3 from '../../assets/p-3.jpg';
// import p4 from '../../assets/p-4.avif';
// import p5 from '../../assets/p-5.webp';
// import p6 from '../../assets/p-6.jpg';
// import p7  from '../../assets/p-7.avif';
// import p8 from '../../assets/p-8.jpg';
// import p9 from '../../assets/p-9.jpg'

// const Mentordata = [
//     {
//         id: 1,
//         username: 'JohnDoe',
//         profilePhoto: p1, // Use the imported image
//         description: 'A passionate developer with a love for coding and technology.',
//         MentorFor: 'Data Science',
//     },
//     {
//         id: 2,
//         username: 'JaneSmith',
//         profilePhoto: p2, // External image URL
//         description: 'A creative designer who loves art and innovation.',
//         MentorFor: 'Full Stack Java',
//     },
//     {
//         id: 3,
//         username: 'MikeJohnson',
//         profilePhoto: p3, // External image URL
//         description: 'A data scientist with a knack for analytics and insights.',
//         MentorFor: 'Full Stack Python',
//     },
//     {
//         id: 4,
//         username: 'Steve',
//         profilePhoto: p4, // External image URL
//         description: 'A data scientist with a knack for analytics and insights.',
//         MentorFor: 'Devops',
//     },
//     {
//         id: 5,
//         username: 'John',
//         profilePhoto: p5, // External image URL
//         description: 'A data scientist with a knack for analytics and insights.',
//         MentorFor: 'AWS',
//     },
//     {
//         id: 6,
//         username: 'Mike',
//         profilePhoto: p6, // External image URL
//         description: 'A data scientist with a knack for analytics and insights.',
//         MentorFor: 'Data Analytics',
//     },
//     {
//         id: 7,
//         username: 'Sunny',
//         profilePhoto: p7, // External image URL
//         description: 'A data scientist with a knack for analytics and insights.',
//         MentorFor: 'Business Analyst',
//     },
//     {
//         id: 8,
//         username: 'Neon',
//         profilePhoto:p8, // External image URL
//         description: 'A data scientist with a knack for analytics and insights.',
//         MentorFor: 'Full Stack Python',
//     }
// ];

// export default Mentordata;





// MentorData.js
import React from 'react';
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
                                            <p className={`p-1 ${style.mentorFor}`}>{mentor.mentorFor}</p>
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