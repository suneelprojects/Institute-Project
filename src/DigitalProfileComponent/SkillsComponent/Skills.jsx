import React from 'react';

const Skills = ({ userData, handleChange }) => {
  return (
    <div>
      <label>Skills:</label>
      <input type="text" name="skills" value={userData.skills} onChange={handleChange} />
    </div>
  );
};

export default Skills;
