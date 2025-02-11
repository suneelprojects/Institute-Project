import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import app from '../../../services/firebaseConfig.js';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import styles from './Projects.module.css';

const db = getFirestore(app);

const Projects = () => {
  const { userId } = useParams();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const fetchProjects = async (firstName, lastName) => {
    console.log('Fetching projects for user:', firstName, lastName);
    try {
      const userQuery = query(collection(db, 'UsersProfile'), where('firstName', '==', firstName), where('lastName', '==', lastName));
      const querySnapshot = await getDocs(userQuery);

      console.log('Query snapshot:', querySnapshot);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        console.log('User data:', userData);
        setProjects(userData.projects || []);
      } else {
        console.log('User profile not found');
        setError('User profile not found');
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Error fetching projects');
    }
  };

  useEffect(() => {
    if (userId) {
      const [firstName, lastName] = userId.split('-');
      fetchProjects(firstName, lastName);
    }
  }, [userId]);

  return (
    <div className={`mt-5 ${styles.container}`}>
      <h3 className={`text-secondary ${styles.title}`}>Projects</h3>
      {error && <p className={styles.error}>{error}</p>}
      {projects.length > 0 ? (
        <ul className={styles.projectList}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <div className='d-flex justify-content-between'>
                <div>
              <p className={styles.projectName}>Name: {project.name}</p>
              <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: project.description }}></p>
              </div>
              <p><a href={project.projectLink}>{project.name}</a></p>
              </div>

              {Array.isArray(project.images) && project.images.length > 0 ? (
                project.images.map((image, imgIndex) => (
<div className='col-md-6 offset-sm-3 bg-secondary py-2 px-3 border rounded'>
                  <img key={imgIndex} src={image} alt="Project" className={`${styles.projectImage} text-center`} />
                  </div>
                ))
              ) : (
                <p className={styles.noImages}>No images available</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !error && <p className={styles.noProjectsFound}>No projects found</p>
      )}
    </div>
  );
};

export default Projects;
