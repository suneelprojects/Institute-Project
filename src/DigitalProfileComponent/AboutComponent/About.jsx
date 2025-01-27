import React from 'react';

const About = ({ userData, handleChange }) => {
  return (
    <div>
      <label>About:</label>
      <textarea name="about" value={userData.about} onChange={handleChange}></textarea>
    </div>
  );
};

export default About;
