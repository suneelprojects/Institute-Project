import React from 'react';

const CardsList = () => {
      const [jobs, setJobs] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        
    const handleCardClick = (job) => {
        setSelectedJob(job);
      };
    return (
        <div>
<div className={`col-12 col-md-6 ${styles.scrollableColumn}`}>
    {jobs && (
        <>
            <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: '0', overflowY: 'auto' }}>
                {currentJobs.map((job, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <Cards job={job} onCardClick={handleCardClick}/>
                    </li>
                ))}
            </ul>
            <nav>
                <ul className='pagination'>
                    {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, index) => (
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
        </div>
    );
};

export default CardsList;