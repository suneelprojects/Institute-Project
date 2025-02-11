import React, { useState, useEffect } from 'react';
import app from '../../../services/firebaseConfig.js'; // Firebase configuration file
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import styles from './Form.module.css'; // Import the CSS module
import ReactQuill from 'react-quill'; // Import Quill
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const db = getFirestore(app);
const storage = getStorage(app);

const Form = ({ user }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    about: '',
    githubLink:'',
    linkedinLink:'',
    // instagramLink:'',
    profileImage: '',
    resume: '',
    skills: [],
    certifications: [{ image: '',name:'', description: '' }],
    projects: [{ name: '', images: [], description: '', projectLink:'' }]
  });

  const handleInputChange = (e, index, type, field) => {
    const newFormData = { ...formData };
    if (type === 'certification') {
      newFormData.certifications[index][field] = e.target.value;
    } else if (type === 'project') {
      newFormData.projects[index][field] = e.target.value;
    } else {
      newFormData[field] = e.target.value;
    }
    setFormData(newFormData);
  };



  const handleFileChange = async (e, index, type, field) => {
    try {
      const files = e.target.files;
      if (!files.length) return;
  
      const newFormData = { ...formData };
  
      if (type === 'project' && field === 'images') {
        const imageUrls = await Promise.all(
          [...files].map(async (file) => {
            const storageRef = ref(storage, `uploads/${file.name}`);
            await uploadBytes(storageRef, file);
            return getDownloadURL(storageRef);
          })
        );
        newFormData.projects[index].images = imageUrls;
      } else {
        const file = files[0];
        const storageRef = ref(storage, `uploads/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
  
        if (type === 'certification') {
          newFormData.certifications[index][field] = downloadURL;
        } else {
          newFormData[field] = downloadURL;
        }
      }
  
      setFormData(newFormData);
    } catch (error) {
      console.error('File upload error:', error);
      toast.error('File upload failed.');
    }
  };
  


  const handleEditorChange = (content, field, index = null, type = null) => {
    setFormData((prevData) => {
      const newFormData = { ...prevData };
  
      if (type === 'certification') {
        const updatedCertifications = [...newFormData.certifications]; // Create a new array
        updatedCertifications[index] = {
          ...updatedCertifications[index], 
          [field]: content, 
        };
        newFormData.certifications = updatedCertifications;
      } else if (type === 'project') {
        const updatedProjects = [...newFormData.projects]; // Create a new array
        updatedProjects[index] = {
          ...updatedProjects[index], 
          [field]: content, 
        };
        newFormData.projects = updatedProjects;
      } else {
        newFormData[field] = content;
      }
  
      return newFormData; 
    });
  };
  


  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { image: '',name:'', description: '' }]
    });
  };

  const removeCertification = (index) => {
    const newFormData = { ...formData };
    newFormData.certifications.splice(index, 1);
    setFormData(newFormData);
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { name: '', images: [], description: '', projectLink:'' }]
    });
  };

  const removeProject = (index) => {
    const newFormData = { ...formData };
    newFormData.projects.splice(index, 1);
    setFormData(newFormData);
  };


  const addSkill = (e) => {
    const skillInput = document.getElementById('skillInput').value.trim();
    if ((e.key === 'Enter' || e.type === 'click') && skillInput) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput],
      }));
      document.getElementById('skillInput').value = '';
    }
  };
  



  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };
  

  const saveData = async () => {
    try{
    const userDoc = doc(db, 'UsersProfile', user.uid); // Save data using user ID
    await setDoc(userDoc, formData);
    toast.success('Data Saved Successfully')
    }
    catch (error) {
      console.error('Error saving data:', error);
      toast.error(`Data Not Saved: ${error.message}`);
    }
    
  };

  const fetchData = async () => {
    const userDoc = doc(db, 'UsersProfile', user.uid); // Fetch data using user ID
    const userSnapshot = await getDoc(userDoc);
    if (userSnapshot.exists()) {
      setFormData(userSnapshot.data());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      fetchData();
    }
  }, [user]);
  



  
  useEffect(() => {
    let isMounted = true;
    if (user?.uid) {
      fetchData().then(() => {
        if (!isMounted) return;
      });
    }
    return () => {
      isMounted = false;
    };
  }, [user]);
  

  return (
    <div>
    <form className={`${styles.formContainer} container`}>
      <div className='row'>
        <div className='col-md-6 mb-3'>
      <div className="form-group">
        <label>First Name</label>
        <input type="name" className="form-control" value={formData.firstName} onChange={(e) => handleInputChange(e, null, null, 'firstName')} />
      </div>
      </div>
      <div className='col-md-6 mb-3'>
      <div className="form-group">
        <label>Last Name</label>
        <input type="name" className="form-control" value={formData.lastName} onChange={(e) => handleInputChange(e, null, null, 'lastName')} />
      </div>
      </div>
      </div>
      <div className='row'>
      <div className='col-md-6 mb-3'>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={formData.email} onChange={(e) => handleInputChange(e, null, null, 'email')} />
      </div>
      </div>
      <div className='col-md-6 mb-3'>
      <div className="form-group">
        <label>Mobile</label>
        <input type="name" className="form-control" value={formData.mobile} onChange={(e) => handleInputChange(e, null, null, 'mobile')} />
      </div>
      </div>
      </div>
      <div className="form-group mb-3">
        <label>About Yourself</label>
        <ReactQuill
          value={formData.about}
          onChange={(content) => handleEditorChange(content, 'about')}
          theme="snow"
        />
      </div>
      <div className='row'>
        <div className='col-md-6 mb-3'>
      <div className="form-group">
        <label>GitHub</label>
        <input type="text" className="form-control" value={formData.githubLink} onChange={(e) => handleInputChange(e, null, null, 'githubLink')} />
      </div>
      </div>
      <div className='col-md-6 mb-3'>
      <div className="form-group">
        <label>LinkedIn</label>
        <input type="text" className="form-control" value={formData.linkedinLink} onChange={(e) => handleInputChange(e, null, null, 'linkedinLink')} />
      </div>
      </div>
      </div>
      <div className="form-group mb-3">
        <label>Profile Image</label>
        <input type="file" className="form-control" onChange={(e) => handleFileChange(e, null, null, 'profileImage')} />
      </div>
      <div className="form-group mb-3">
        <label>Resume</label>
        <input type="file" className="form-control" onChange={(e) => handleFileChange(e, null, null, 'resume')} />
      </div>
      <div className='row'>
        <div className='col-md-6 offset-sm-3'>
      <div className="form-group border p-3 m-2">
        <label>Skills</label>
        <div className="input-group mb-3">
          <input type="name" id="skillInput" className="form-control" onKeyDown={addSkill} />
          <div className="input-group-append mb-2">
            <button type="button" className="btn btn-primary" onClick={addSkill}>Add Skill</button>
          </div>
        </div>
       
        <div className={styles.skillsContainer}>
          {formData.skills.map((skill, index) => (
            <div key={index} className={styles.skillTag}>
              {skill} <button type="button" className="btn btn-danger btn-sm" onClick={() => removeSkill(index)}>x</button>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
      <div className="form-group">
        <label>Certifications</label>
        {formData.certifications.map((cert, index) => (
          <div key={index} className={styles.certificationGroup}>
            <input type="file" className="form-control mb-2" onChange={(e) => handleFileChange(e, index, 'certification', 'image')} />
            <input type="name" className="form-control mb-2" value={cert.name} onChange={(e) => handleInputChange(e, index, 'certification', 'name')} />
            <ReactQuill
    value={cert.description}
    onChange={(content) => handleEditorChange(content, "description", index, "certification")}
    theme="snow"
    className='mb-2'
/>

            {/* <button type="button" className="btn btn-danger mt-2" onClick={() => removeCertification(index)}>Delete Certification</button> */}
            <i class="bi bi-trash3 btn btn-danger mt-2" onClick={() => removeCertification(index)}></i>
          </div>
        ))}
        <p type="button" className="text-primary mt-2" onClick={addCertification}>+ Add Another Certification</p>
      </div>
      <div className="form-group">
        <label>Projects</label>
        {formData.projects.map((project, index) => (
          <div key={index} className={styles.projectGroup}>
            <input type="text" className="form-control" value={project.name} onChange={(e) => handleInputChange(e, index, 'project', 'name')} />
            <input type="file" className="form-control" onChange={(e) => handleFileChange(e, index, 'project', 'images')} multiple />
            <input type="text" className="form-control" placeholder="Project Link" value={project.projectLink} onChange={(e) => handleInputChange(e, index, 'project', 'projectLink')} />
            <ReactQuill
              value={project.description}
              onChange={(content) => handleEditorChange(content, 'description', index, 'project')}
              theme="snow"
            />
            {/* <button type="button" className="btn btn-danger mt-2" onClick={() => removeProject(index)}>Delete Project</button> */}
            <i class="bi bi-trash3 btn btn-danger mt-2" onClick={() => removeProject(index)}></i>
          </div>
        ))}
        <p type="button" className="text-primary mt-2" onClick={addProject}>+ Add Another Project</p>
      </div>
      <div className='d-flex justify-content-center'>
      <button type="button" className={`btn btn-success mt-3 ${styles.btnSuccess} px-5`} onClick={saveData}>Save</button>
      </div>
    </form>
    <ToastContainer/>
    </div>
  );
};

export default Form;


