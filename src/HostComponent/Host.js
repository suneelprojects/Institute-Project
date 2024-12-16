import React, { useState } from 'react';
import { db, storage } from '../firebase.js';
import { setDoc, doc } from 'firebase/firestore';
import style from './host.module.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw, EditorState } from 'draft-js';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Host = () => {
  const [formInput, setFormInput] = useState({
    companyName: '',
    location: '',
    CTC: '',
    position: '',
    startDate: '',
    endedDate: '',
    companyLink: '',
    workLocation: '',
    Experience: '',
    workType: '',
    applyLink:'',
    views:0,
  });

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(''); // State to hold the image URL
  const [editorStateJobDescription, setEditorStateJobDescription] = useState(EditorState.createEmpty());
  const [editorStateWhatYouWillBring, setEditorStateWhatYouWillBring] = useState(EditorState.createEmpty());


  const changeHandler = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  // const addTag = () => {
  //   if (tagInput && !tags.includes(tagInput)) {
  //     setTags([...tags, tagInput]);
  //     setTagInput('');
  //   }
  // };
  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput(''); // Clear the input field after adding
    }
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission on Enter key press
      addTag(); 
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file)); // Set the image file
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const isEmptyField = Object.values(formInput).some(field => field === '');
    if (isEmptyField || !image) {
        alert('Please fill in all fields and upload an image.');
        return; // Prevent form submission
    }

    try {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url); // Set the image URL for display

        // Get the content from the editors
        const whatYouWillBringContent = convertToRaw(editorStateWhatYouWillBring.getCurrentContent());
        const jobDescriptionContent = convertToRaw(editorStateJobDescription.getCurrentContent());

        const userData = {
            ...formInput,
            tags: tags,
            imageUrl: url,
            jobDescription: JSON.stringify(jobDescriptionContent),
            whatYouWillBring: JSON.stringify(whatYouWillBringContent),
        };

        const formDocRef = doc(db, "Users", new Date().getTime().toString());
        await setDoc(formDocRef, userData);

        console.log('Data stored successfully');
        toast.success('Data stored successfully');

        // Reset form after successful submission
        setFormInput({
            companyName: '',
            location: '',
            CTC: '',
            position: '',
            startDate: '',
            endedDate: '',
            companyLink: '',
            workLocation: '',
            Experience: '',
            workType: '',
            applyLink: '',
        });
        setTags([]);
        setTagInput('');
        setImage(null);
        setImageUrl(''); // Reset image URL
        setEditorStateJobDescription(EditorState.createEmpty());
        setEditorStateWhatYouWillBring(EditorState.createEmpty());
    } catch (error) {
        console.error('Error storing data: ', error);
        toast.error('Data is not stored in Firebase');
    }
};

  return (
    <div style={{marginTop:'150px'}} >
           <div className={`container mt-5 p-3 ${style.host}`}>
             <h1>Post</h1>
             <form onSubmit={handleSubmit}>
               <div className="form-group">
                 
  <label htmlFor="image">
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <div style={{
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      border: '2px solid #5451A6',
      backgroundColor:'skyblue',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}></div>
    <i className="bi bi-camera-fill" style={{
      position: 'absolute',
      bottom: '0',
      right: '0',
      color: '#5451A6',
      fontSize: '30px'
    }}></i>
  </div>
</label>
<input
      type="file"
      accept="image/*"
      className="form-control"
      id="image"
      placeholder="Upload an Image"
      onChange={handleImageChange}
      hidden
    />
    
                {/* {image && <img src={URL.createObjectURL(image)} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />} */}
              </div>
    
              <div className="row">
             <div className="col-md-6 col-sm-12">
               <div className="form-group">
              <label htmlFor="package">Company Name</label>         
      <input
                  type="text"
                  className="form-control"
                  id="package"
                  placeholder="Enter Company Name"
                  name='companyName'
                  onChange={changeHandler}
                  value={formInput.companyName}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter Location"
                  name='location'
                  onChange={changeHandler}
                  value={formInput.location}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="CTC">CTC</label>

<select
  id="CTC"
  className="form-control mx-2"
  onChange={changeHandler}
  name='CTC'
  value={formInput.CTC}
>
  <option value="all">All Salaries</option>
  <option value="0-3 LPA">0-3 LPA</option>
  <option value="3-6 LPA">3-6 LPA</option>
  <option value="6-10 LPA">6-10 LPA</option>
  <option value="10+ LPA">10+ LPA</option>
</select>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor='position'>Position</label>
              <select 
          id='position' 
          className='form-control' 
          onChange={changeHandler}
          name='position' // Ensure this matches formInput
          required
          value={formInput.position}
        >
          <option value=''>Select a Positon</option>
          <option value='Full Stack Java Developer'> Full Stack Java Developer</option>
          <option value='Full Stack Python Developer'>Full Stack Python Developer</option>
          <option value='UI/UX Development'>UI/UX Developer</option>
          <option value='MERN Stack'>MERN Stack</option>
          <option value='Data Analytics'>Data Analyst</option>
          <option value='Data Science'>Data Science</option>
          <option value='Business Analyst'>Business Analyst</option>
        </select>
              </div>
            </div>
          </div>
         
          <div className="row p-2">
            <div className="col-md-6 offset-md-3">
            <div className="form-group">
              <div className={style.tagInput}>
                <ul className={style.tagsList}>
                  {tags.map((tag, index) => (
                    <li key={index} className={style.tag}>
                      {tag}
                      <button type="button" onClick={() => removeTag(index)}>x</button>
                    </li>
                  ))}
                </ul>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    value={formInput.tags}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagInputKeyDown}
                    className="form-control"
                    placeholder="Skills"
                  />
                  <div className="input-group-append">
                    <button type="button" onClick={addTag} className="btn btn-secondary p-2">
                      Add
                    </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="package">Application Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="package"
                  placeholder="Enter Application Start Date"
                  name='startDate'
                  onChange={changeHandler}
                  required
                  value={formInput.startDate}

                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="location">Application End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="location"
                  placeholder="Enter Application End Date"
                  name='endedDate'
                  onChange={changeHandler}
                  value={formInput.endedDate}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="package">Company Link</label>
                <input
                  type="link"
                  className="form-control"
                  id="package"
                  placeholder="https://www.ibm.com/in-en"
                  name='companyLink'
                  onChange={changeHandler}
                  value={formInput.companyLink}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="workLocation">Work Location</label>
                <select 
          id='workLocation' 
          className='form-control' 
          onChange={changeHandler}
          name='workLocation' // Ensure this matches formInput
          value={formInput.workLocation}

          required
        >
          <option value=''>Select a location</option>
          <option value='On-site'>On-site</option>
          <option value='Remote'>Remote</option>
          <option value='Hybrid'>Hybrid</option>
        </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="Experience">Experience</label>
                <select 
          id='Experience' 
          className='form-control' 
          onChange={changeHandler}
          name="Experience" // Ensure this matches formInput
          value={formInput.Experience}

          required
        >
          <option value=''>Select experience level</option>
          <option value='Freshers'>Freshers</option>
          <option value='0-1 year'>0-1 year</option>
          <option value='1-2 year'>1-2 year</option>
          <option value='2-3 year'>2-3 year</option>
          <option value='4&gt; year'>4&gt; year</option>
        </select>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="workType">Work Type</label>
                <select 
          id='workType' 
          className='form-control' 
          onChange={changeHandler}
          name='workType' // Ensure this matches formInput
          value={formInput.workType}
          required
        >
          <option value=''>Select a work type</option>
          <option value='Full Time'>Full Time</option>
          <option value='Part Time'>Part Time</option>
          <option value='Contract'>Contract</option>
          <option value='Internship'>Internship</option>
          <option value='Freelance'>Freelance</option>
          <option value='Temporary'>Temporary</option>
        </select>
              </div>
            </div>
          </div>
    
              <div className="row">
                <div className="col-md-12 col-sm-12 mt-3">
                  <div className={`form-group ${style.editorClassName}`}>
                    <label htmlFor="jobDescription">Job Description</label>
                    <Editor
                      editorState={editorStateJobDescription}
                      onEditorStateChange={setEditorStateJobDescription}
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      toolbarClassName="toolbarClassName"
                      toolbar={{
                        options: ['inline', 'blockType', 'list', 'textAlign', 'history'],
                        inline: { options: ['bold', 'italic', 'underline', 'strikethrough'] },
                        list: { options: ['unordered', 'ordered'] },
                        textAlign: { options: ['left', 'center', 'right', 'justify'] },
                        history: { options: ['undo', 'redo'] }
                      }}
                      required
                      />
                                     </div>
                                 </div>
                               <div className="col-md-12 col-sm-12 mt-3">
                               <div className={`form-group ${style.editorClassName}`}>
                                       <label htmlFor="jobDescription">What Will Bring</label>
                                       <Editor
                                        editorState={editorStateWhatYouWillBring}
                                        onEditorStateChange={setEditorStateWhatYouWillBring}
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        toolbarClassName="toolbarClassName"
                                        toolbar={{
                                          options: ['inline', 'blockType', 'list', 'textAlign', 'history'],
                                          inline: { options: ['bold', 'italic', 'underline', 'strikethrough'] },
                                          list: { options: ['unordered', 'ordered'] },
                                          textAlign: { options: ['left', 'center', 'right', 'justify'] },
                                          history: { options: ['undo', 'redo'] }
                                        }}
                                        required
                                      />
                                    </div>
                                </div>
                                <div className='form-group'>
                                <label htmlFor='applyLink'>Apply Link</label>
                                <input type='link'
                                className='form-control'
                                onChange={changeHandler}
                                name='applyLink'
                                placeholder='https://www.amazon'
                  value={formInput.applyLink}
                                required
                                 ></input>
                                 </div>
                                 <input type='number' onChange={changeHandler} name='views' hidden></input>
                            </div>
                            <button type="submit" className="btn m-2" style={{backgroundColor:' #5451A6',color:'white'}}>Submit</button>
                          </form>
                        </div>
                        <ToastContainer/>
                        </div>
                        );
                      };
                      
                     
 export default Host;
    