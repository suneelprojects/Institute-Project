// import React, { useState } from 'react';
// // import { db, storage } from '../firebase.jsx';

// import { collection, addDoc } from "firebase/firestore"; 
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
// import { toast, ToastContainer } from 'react-toastify';

// const MentorForm = () => {
//     const [fullName, setFullName] = useState("");
//     const [mentorFor, setMentorFor] = useState("");
//     const [otherMentorFor, setOtherMentorFor] = useState("");
//     const [aboutMentor, setAboutMentor] = useState("");
//     const [image, setImage] = useState(null);
//     const [imageUrl, setImageUrl] = useState("");

//     const handleImageChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };



//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let url = '';
//         if (image) {
//             const imageRef = ref(storage, `mentors/${image.name}`);
//             await uploadBytes(imageRef, image);
//             url = await getDownloadURL(imageRef);
//             setImageUrl(url);
//         }
    
//         try {
//             await addDoc(collection(db, "mentors"), {
//                 fullName,
//                 mentorFor: mentorFor === 'Other' ? otherMentorFor : mentorFor,
//                 aboutMentor,
//                 imageUrl: url // Use the url directly here
//             });
//             toast.success("Mentor added successfully!");
    
//             // Reset the form fields
//             setFullName("");
//             setMentorFor("");
//             setOtherMentorFor("");
//             setAboutMentor("");
//             setImage(null);
//             setImageUrl("");
//         } catch (error) {
//             console.error("Error adding document: ", error);
//             toast.error("Error adding mentor.");
//         }
//     };
    


//     return (
//         <div style={{marginTop:'150px'}}>
//             <div className='col-md-6 offset-sm-3'>
//                 <div className='p-2 mb-3' style={{border:'1px solid gray',borderRadius:'20px'}}>
//                 <h1>Mentor Form</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="image">
//                         <input
//                             type="file"
//                             id="image"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             style={{ display: 'none' }}
//                         />
//                         <div style={{ position: 'relative', display: 'inline-block' }}>
//                             <div style={{
//                                 borderRadius: '50%',
//                                 width: '100px',
//                                 height: '100px',
//                                 border: '2px solid #5451A6',
//                                 backgroundColor:'skyblue',
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 backgroundImage: image ? `url(${URL.createObjectURL(image)})` : ''
//                             }}></div>
//                             <i className="bi bi-camera-fill" style={{
//                                 position: 'absolute',
//                                 bottom: '0',
//                                 right: '0',
//                                 color: '#5451A6',
//                                 fontSize: '30px'
//                             }}></i>
//                         </div>
//                     </label>
//                     <div className='mt-3'>
//                         <label htmlFor='FullName'>Full Name</label>
//                         <input
//                             className='form-control'
//                             id='FullName'
//                             value={fullName}
//                             onChange={(e) => setFullName(e.target.value)}
//                         />
//                         <label htmlFor='MentorFor'>Mentor For</label>
//                         <select
//                             className='form-control'
//                             id='MentorFor'
//                             value={mentorFor}
//                             onChange={(e) => setMentorFor(e.target.value)}
//                         >
//                             <option>Select Domain</option>
//                             <option value='Full Stack Java'>Full Stack Java</option>
//                             <option value='Full Stack Python'>Full Stack Python</option>
//                             <option value='DevOps'>DevOps</option>
//                             <option value='AWS'>AWS</option>
//                             <option value='Business Analyst'>Business Analyst</option>
//                             <option value='Data Analytics'>Data Analytics</option>
//                             <option value='Data Science'>Data Science</option>
//                             <option value='Other'>Other</option>
//                         </select>
//                         {mentorFor === 'Other' && (
//                             <div>
//                                 <label htmlFor='OtherMentorFor'>Please specify</label>
//                                 <input
//                                     className='form-control'
//                                     id='OtherMentorFor'
//                                     value={otherMentorFor}
//                                     onChange={(e) => setOtherMentorFor(e.target.value)}
//                                 />
//                             </div>
//                         )}
//                         <label htmlFor='AboutMentor'>About Mentor</label>
//                         <input
//                             className='form-control'
//                             id='AboutMentor'
//                             value={aboutMentor}
//                             onChange={(e) => setAboutMentor(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className='btn btn-primary mt-3'>Submit</button>
//                 </form>
//                 </div>
//             </div>
//             <ToastContainer/>
//         </div>
//     );
// };

// export default MentorForm;





// import React, { useState } from 'react';
// import { db, storage } from '../services/firebaseConfig.js';

// import { collection, addDoc } from "firebase/firestore"; 
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
// import { toast, ToastContainer } from 'react-toastify';

// const MentorForm = () => {
//     const [fullName, setFullName] = useState("");
//     const [mentorFor, setMentorFor] = useState([]);
//     const [otherMentorFor, setOtherMentorFor] = useState("");
//     const [aboutMentor, setAboutMentor] = useState("");
//     const [topmatLink, setTopmatLink] = useState(""); // New field for Topmat Link
//     const [image, setImage] = useState(null);
//     const [imageUrl, setImageUrl] = useState("");

//     const handleImageChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };

//     const handleMentorForChange = (e) => {
//         const value = Array.from(e.target.selectedOptions, option => option.value);
//         setMentorFor(value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let url = '';
//         if (image) {
//             const imageRef = ref(storage, `mentors/${image.name}`);
//             await uploadBytes(imageRef, image);
//             url = await getDownloadURL(imageRef);
//             setImageUrl(url);
//         }
    
//         try {
//             await addDoc(collection(db, "mentors"), {
//                 fullName,
//                 mentorFor: mentorFor.includes('Other') ? [...mentorFor.filter(tag => tag !== 'Other'), otherMentorFor] : mentorFor,
//                 aboutMentor,
//                 topmatLink, // Store the Topmat Link in Firebase
//                 imageUrl: url // Use the url directly here
//             });
//             toast.success("Mentor added successfully!");
    
//             // Reset the form fields
//             setFullName("");
//             setMentorFor([]);
//             setOtherMentorFor("");
//             setAboutMentor("");
//             setTopmatLink("");
//             setImage(null);
//             setImageUrl("");
//         } catch (error) {
//             console.error("Error adding document: ", error);
//             toast.error("Error adding mentor.");
//         }
//     };

//     return (
//         <div style={{marginTop:'150px'}}>
//             <div className='col-md-6 offset-sm-3'>
//                 <div className='p-2 mb-3' style={{border:'1px solid gray',borderRadius:'20px'}}>
//                     <h1>Mentor Form</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="image">
//                             <input
//                                 type="file"
//                                 id="image"
//                                 accept="image/*"
//                                 onChange={handleImageChange}
//                                 style={{ display: 'none' }}
//                             />
//                             <div style={{ position: 'relative', display: 'inline-block' }}>
//                                 <div style={{
//                                     borderRadius: '50%',
//                                     width: '100px',
//                                     height: '100px',
//                                     border: '2px solid #5451A6',
//                                     backgroundColor:'skyblue',
//                                     backgroundSize: 'cover',
//                                     backgroundPosition: 'center',
//                                     backgroundImage: image ? `url(${URL.createObjectURL(image)})` : ''
//                                 }}></div>
//                                 <i className="bi bi-camera-fill" style={{
//                                     position: 'absolute',
//                                     bottom: '0',
//                                     right: '0',
//                                     color: '#5451A6',
//                                     fontSize: '30px'
//                                 }}></i>
//                             </div>
//                         </label>
//                         <div className='mt-3'>
//                             <label htmlFor='FullName'>Full Name</label>
//                             <input
//                                 className='form-control'
//                                 id='FullName'
//                                 value={fullName}
//                                 onChange={(e) => setFullName(e.target.value)}
//                             />
//                             <label htmlFor='MentorFor'>Mentor For</label>
//                             <select
//                                 className='form-control'
//                                 id='MentorFor'
//                                 value={mentorFor}
//                                 onChange={handleMentorForChange}// Enable multiple selections
//                             >
//                                 <option value='Full Stack Java'>Full Stack Java</option>
//                                 <option value='Full Stack Python'>Full Stack Python</option>
//                                 <option value='DevOps'>DevOps</option>
//                                 <option value='AWS'>AWS</option>
//                                 <option value='Business Analyst'>Business Analyst</option>
//                                 <option value='Data Analytics'>Data Analytics</option>
//                                 <option value='Data Science'>Data Science</option>
//                                 <option value='Other'>Other</option>
//                             </select>
//                             {mentorFor.includes('Other') && (
//                                 <div>
//                                     <label htmlFor='OtherMentorFor'>Please specify</label>
//                                     <input
//                                         className='form-control'
//                                         id='OtherMentorFor'
//                                         value={otherMentorFor}
//                                         onChange={(e) => setOtherMentorFor(e.target.value)}
//                                     />
//                                 </div>
//                             )}
//                             <label htmlFor='AboutMentor'>About Mentor</label>
//                             <input
//                                 className='form-control'
//                                 id='AboutMentor'
//                                 value={aboutMentor}
//                                 onChange={(e) => setAboutMentor(e.target.value)}
//                             />
//                             <label htmlFor='TopmatLink'>Topmat Link</label> {/* New field for Topmat Link */}
//                             <input
//                                 className='form-control'
//                                 id='TopmatLink'
//                                 value={topmatLink}
//                                 onChange={(e) => setTopmatLink(e.target.value)}
//                             />
//                         </div>
//                         <button type="submit" className='btn btn-primary mt-3'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//             <ToastContainer/>
//         </div>
//     );
// };

// export default MentorForm;





import React, { useState } from 'react';
import { db, storage } from '../services/firebaseConfig.js';
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { toast, ToastContainer } from 'react-toastify';
import profile from '../assets/profile.png'

const MentorForm = () => {
    const [fullName, setFullName] = useState("");
    const [mentorFor, setMentorFor] = useState([]);
    const [otherMentorFor, setOtherMentorFor] = useState("");
    const [aboutMentor, setAboutMentor] = useState("");
    const [topmatLink, setTopmatLink] = useState(""); // New field for Topmat Link
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleMentorForChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setMentorFor(value);
    };

    const handleAddTag = (e) => {
        const value = e.target.value;
        if (value && !mentorFor.includes(value)) {
            setMentorFor([...mentorFor, value]);
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setMentorFor(mentorFor.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = '';
        if (image) {
            const imageRef = ref(storage, `mentors/${image.name}`);
            await uploadBytes(imageRef, image);
            url = await getDownloadURL(imageRef);
            setImageUrl(url);
        }
    
        try {
            await addDoc(collection(db, "mentors"), {
                fullName,
                mentorFor: mentorFor.includes('Other') ? [...mentorFor.filter(tag => tag !== 'Other'), otherMentorFor] : mentorFor,
                aboutMentor,
                topmatLink, // Store the Topmat Link in Firebase
                imageUrl: url // Use the url directly here
            });
            toast.success("Mentor added successfully!");
    
            // Reset the form fields
            setFullName("");
            setMentorFor([]);
            setOtherMentorFor("");
            setAboutMentor("");
            setTopmatLink("");
            setImage(null);
            setImageUrl("");
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("Error adding mentor.");
        }
    };

    const backgroundImage = image ? `url(${URL.createObjectURL(image)})` : `url('../assets/profile.png')`;
    return (
        <div style={{marginTop:'150px'}}>
            <div className='col-md-6 offset-sm-3'>
                <div className='p-2 mb-3' style={{border:'1px solid gray',borderRadius:'20px'}}>
                    <h1>Mentor Form</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="image">
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <div style={{
                                    borderRadius: '50%',
                                    width: '100px',
                                    height: '100px',
                                    border: '2px solid #5451A6',
                                    backgroundImage: backgroundImage,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
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
                        <div className='mt-3'>
                            <label htmlFor='FullName'>Full Name</label>
                            <input
                                className='form-control'
                                id='FullName'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <label htmlFor='MentorFor'>Mentor For</label>
                            <select
                                className='form-control'
                                id='MentorFor'
                                onChange={handleAddTag}
                            >
                                <option value=''>Select Domain</option>
                                <option value='Full Stack Java'>Full Stack Java</option>
                                <option value='Full Stack Python'>Full Stack Python</option>
                                <option value='DevOps'>DevOps</option>
                                <option value='AWS'>AWS</option>
                                <option value='Business Analyst'>Business Analyst</option>
                                <option value='Data Analytics'>Data Analytics</option>
                                <option value='Data Science'>Data Science</option>
                                <option value='Other'>Other</option>
                            </select>
                            <div className='mt-2'>
                                {mentorFor.map((tag, index) => (
                                    <span key={index} className="badge bg-primary m-1">
                                        {tag} <i className="bi bi-x-circle" onClick={() => handleRemoveTag(tag)}></i>
                                    </span>
                                ))}
                            </div>
                            {mentorFor.includes('Other') && (
                                <div>
                                    <label htmlFor='OtherMentorFor'>Please specify</label>
                                    <input
                                        className='form-control'
                                        id='OtherMentorFor'
                                        value={otherMentorFor}
                                        onChange={(e) => setOtherMentorFor(e.target.value)}
                                    />
                                </div>
                            )}
                            <label htmlFor='AboutMentor'>About Mentor</label>
                            <input
                                className='form-control'
                                id='AboutMentor'
                                value={aboutMentor}
                                onChange={(e) => setAboutMentor(e.target.value)}
                            />
                            <label htmlFor='TopmatLink'>Topmat Link</label> {/* New field for Topmat Link */}
                            <input
                                className='form-control'
                                id='TopmatLink'
                                value={topmatLink}
                                onChange={(e) => setTopmatLink(e.target.value)}
                            />
                        </div>
                        <button type="submit" className='btn btn-primary mt-3'>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default MentorForm;
