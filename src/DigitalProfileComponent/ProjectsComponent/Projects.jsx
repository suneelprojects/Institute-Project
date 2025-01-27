import React from 'react';

const Projects = ({ userData, handleChange }) => {
  return (
    <div>
      <label>Projects:</label>
      <input type="text" name="projects" value={userData.projects} onChange={handleChange} />
    </div>
  );
};

export default Projects;
