import React, { useEffect, useRef, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../services/firebaseConfig.js';
import style from './BookMentor.module.css';
import MentorData from './MentorDataComponent/MentorData.jsx';

const BookMentor = () => {
    const navigate = useNavigate();
    const [mentors, setMentors] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const mentorProfilesRef = useRef(null);

    useEffect(() => {
        const fetchMentors = async () => {
            const querySnapshot = await getDocs(collection(db, "mentors"));
            const mentorsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMentors(mentorsList);
        };

        fetchMentors();
    }, []);

    const handleMentorClick = (mentorFor) => {
        setSelectedMentor(mentorFor === 'All' ? null : mentorFor); // Set to null if 'All' is clicked
        console.log(`Selected Mentor: ${mentorFor}`);
        if (mentorProfilesRef.current) {
            mentorProfilesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCardClick = (mentor) => {
        navigate('/mentorprofile', { state: { mentor } });
    }

    const filteredMentors = mentors.filter(mentor => {
        const matchesCategory = selectedMentor ? mentor.mentorFor.includes(selectedMentor) : true;
        const matchesSearch = mentor.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mentor.mentorFor.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        console.log(`Filtered Mentors:`, filteredMentors);
    }, [filteredMentors]);

    const [text] = useTypewriter({
        words: ['Full Stack Java', 'Data Analyst', 'Business Analyst', 'DevOps', 'AWS', 'Full Stack Python', 'Data Science'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div className="container-fluid" style={{ marginTop: '150px' }}>
            <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="fw-bold">
                            1 - on - 1{' '}
                            <span className="fw-bold" style={{ color: 'rgb(5, 121, 180)' }}>
                                {text}
                            </span>
                            <span className="text-black">
                                <Cursor cursorStyle="|" />
                            </span>
                        </h1>
                        <h3>Search For Mentors</h3>
                        <p>Find all your mentoring resources and sessions in one place.</p>
                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for Mentors e.g., 'AWS, DevOps, etc.'"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <span className="input-group-text" style={{ cursor: 'pointer' }}>
                                <i className="bi bi-search"></i>
                            </span>
                        </div>
                        <div className="mt-3 d-flex flex-wrap">
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('All')}>All</span>
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('Full Stack Java')}>Full Stack Java</span>
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('Full Stack Python')}>Full Stack Python</span>
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('DevOps')}>DevOps</span>
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('AWS')}>AWS</span>
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('Data Analytics')}>Data Analytics</span>
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('Business Analyst')}>Business Analyst</span>
                            <span className={`${style.mentorFor} m-2 px-2`} onClick={() => handleMentorClick('Data Science')}>Data Science</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="https://img.freepik.com/free-vector/man-woman-touching-each-other-when-work-is-done_1150-35029.jpg?t=st=1736679593~exp=1736683193~hmac=e5b6e7a787f628607f1a3c57df163f0fcc27300b3f084174a785878ff3a2febb&w=1380" className="img-fluid" alt="Mentors" />
                </div>
            </div>
            <div className="row mt-3" ref={mentorProfilesRef}>
                <div className="col-12">
                    {/* Pass the filtered mentors to the MentorData component */}
                    <MentorData mentors={filteredMentors} handleCardClick={handleCardClick} />
                </div>
            </div>
        </div>
    );
};

export default BookMentor;
