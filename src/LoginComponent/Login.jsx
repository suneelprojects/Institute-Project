// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import style from './login.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignUp = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSignUp = async () => {
//         if (!email || !password) {
//             setError('Email and password are required.');
//             return;
//         }
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//             toast.success("Successfully Signed Up");
//             navigate('/jobListing'); // Navigate to jobListing
//         } catch (error) {
//             if (error.code === 'auth/email-already-in-use') {
//                 console.log('Email address is already in use');
//                 toast.error('Email address is already in use');
//             } else {
//                 console.error('Sign-up error:', error);
//                 setError(error.message);
//             }
//         }
//     };

//     const handleForgotPassword = async () => {
//         if (!email) {
//             setError('Please enter your email to reset password.');
//             return;
//         }
//         try {
//             await sendPasswordResetEmail(auth, email);
//             alert('Password reset email sent! Check your inbox.');
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className='col-md-5 offset-md-4 mt-5'>
//             <h3 className='text-center mt-3'>Sign Up Page</h3>
//             <div className={`p-3 m-2 ${style.container}`}>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <div className='form-group'>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         id='email'
//                         type='email'
//                         className='form-control p-3'
//                         placeholder='Email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='password'>Password</label>
//                     <input
//                         id='password'
//                         type='password'
//                         className='form-control p-3'
//                         placeholder='Password'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <Link to="#" onClick={handleForgotPassword}>Forgot Password</Link>
//                 <button className={`btn mt-3 ${style.button}`} onClick={handleSignUp}>Sign Up</button>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default SignUp;



// import React, { useState } from 'react';
// import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
// import { poolData } from '../UserPool.js'; // Import the pool data

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const userPool = new CognitoUserPool(poolData);

//   const onSubmit = event => {
//     event.preventDefault();

//     const user = new CognitoUser({
//       Username: username,
//       Pool: userPool
//     });

//     const authDetails = new AuthenticationDetails({
//       Username: username,
//       Password: password
//     });

//     user.authenticateUser(authDetails, {
//       onSuccess: result => {
//         console.log('Sign-in successful!', result);
//       },
//       onFailure: err => {
//         console.log('Sign-in failed:', err);
//       }
//     });
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         className='form-control'
//         type='text'
//         value={username}
//         placeholder='Username'
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         className='form-control'
//         type='password'
//         value={password}
//         placeholder='Password'
//         onChange={e => setPassword(e.target.value)}
//       />
//       <button type='submit'>Sign In</button>
//     </form>
//   );
// };

// export default SignIn;







// import React, { useState } from 'react';
// import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
// import { poolData } from '../UserPool.js';
// import styles from './login.module.css'
// import { useNavigate } from 'react-router';

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//    const navigate=useNavigate('');

//   const userPool = new CognitoUserPool(poolData);

//   const onSubmit = event => {
//     event.preventDefault();

//     const user = new CognitoUser({
//       Username: username,
//       Pool: userPool
//     });

//     const authDetails = new AuthenticationDetails({
//       Username: username,
//       Password: password
//     });

//     user.authenticateUser(authDetails, {
//       onSuccess: result => {
//         console.log('Sign-in successful!', result);
//       },
//       onFailure: err => {
//         console.log('Sign-in failed:', err);
//       }
//     });
//   };

//   const handleSignUp=()=>{
// navigate('/signup');
//   }
//   return (
//     <div className={`${styles.container}`}>
//          <div className='container'>
//         <div className='row justify-content-center'>
//         <div className='col-md-6'>
//     <form onSubmit={onSubmit} className={`${styles.form}`}>
//       <label htmlFor='name'>User Name</label>
//       <input id='name' className='form-control' type='name' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)} />
//       <label htmlFor='password'>Password</label>
//       <input id='password' className='form-control' type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
//       <div className='d-flex justify-content-center mt-3'>
//       <button type='submit' className='btn btn-primary'>Sign In</button>
//       </div>
//       <p>Don't have an account <a className='text-primary' onClick={handleSignUp}>Sign Up</a></p>

//     </form>
//   </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default SignIn;







// import React, { useState } from 'react';
// import { auth } from '../firebase.js'; // Ensure this path is correct
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log('User signed in:', user);
//         toast.success('User signed in');
//         navigate('/home'); // Navigate to home or dashboard after login
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error signing in:', errorCode, errorMessage);
//         toast.error('Error signing in:', errorCode, errorMessage);

//       });
//   };

//   const handleSignUp = () => {
//     navigate('/signup');
//   }

//   return (
//     <div className={`${styles.container}`}>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-6 offset-sm-3'>
//             <form onSubmit={handleSubmit} className={`${styles.form}`}>
//               <input type="email" className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//               <input type="password" className='form-control mb-3' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//               <div className='d-flex justify-content-center'>
//                 <button type="submit" className='btn btn-primary'>Log In</button>
//               </div>
//               <p>Don't have an account? <a className='text-primary' onClick={handleSignUp}>Sign Up</a></p>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer/>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { auth } from '../firebase.js'; // Ensure this path is correct
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import logo from '../assets/socialhire.png'

// const Login = ({ setIsAuthenticated }) => { // Accept setIsAuthenticated as a prop
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log('User signed in:', user);
//         toast.success('User signed in');
//         setIsAuthenticated(true); // Update the authenticated state
//         navigate('/home'); // Navigate to home or dashboard after login
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error signing in:', errorCode, errorMessage);
//         toast.error('Error signing in:', errorMessage);
//       });
//   };

//   const handleSignUp = () => {
//     navigate('/signup');
//   }

//   return (
//     <div className={`${styles.container}`}>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-6 offset-sm-3'>
//             <form onSubmit={handleSubmit} className={`${styles.form} `}>
//               <div  className='d-flex justify-content-center align-items-center'>
//               <img src={logo} height={80} width={250}></img>
//               </div>
//               <p className='text-white fs-6 text-center'>Discover endless opportunities with <b>SocialHire</b>, the AI-driven platform connecting
// top talent with innovative employers. Take control of your career growth with
// the support and tools you need to succeed.</p>
//               <input type="email" className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//               <input type="password" className='form-control mb-3' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//               <div className='d-flex justify-content-center'>
//                 <button type="submit" className='btn btn-primary'>Log In</button>
//               </div>
//               <p className='text-white'>Don't have an account? <b className='text-white' onClick={handleSignUp}>Sign Up</b></p>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer/>
//     </div>
//   );
// };

// export default Login;








// import React, { useState } from 'react';
// import { auth } from '../firebase.js'; // Ensure this path is correct
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import logo from '../assets/socialhire.png';
// import Signup from './SignUp.js';

// const Login = ({ setIsAuthenticated ,onClose}) => { // Accept setIsAuthenticated as a prop
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const [isSignUpOpen, setIsSignUpOpen] = useState(false);

//   const toggleSignUp = () => {
//     setIsSignUpOpen(!isSignUpOpen);
//     navigate('/signup');

// };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log('User signed in:', user);
//         toast.success('User signed in');
//         setIsAuthenticated(true); // Update the authenticated state
//         navigate('/home'); // Navigate to home or dashboard after login
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error signing in:', errorCode, errorMessage);
//         toast.error('Error signing in:', errorMessage);
//       });
//   };

//   const handleSignUp = () => {
//   };

//   const handleForgotPassword = () => {
//     if (email) {
//       sendPasswordResetEmail(auth, email)
//         .then(() => {
//           toast.success('Password reset email sent!');
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.error('Error sending password reset email:', errorCode, errorMessage);
//           toast.error('Error sending password reset email:', errorMessage);
//         });
//     } else {
//       toast.error('Please enter your email address first.');
//     }
//   };


//     return (
//       <>
//       <div className={styles.overlay} onClick={onClose} /> 
//       <div className={`${styles.modal}`}>
//           <button onClick={onClose} className={`${styles.closeBtn}`}>X</button>
//               <form onSubmit={handleSubmit} className={`${styles.form}`}>
//                   {/* <div className='d-flex justify-content-center align-items-center'>
//                       <img src={logo} height={80} width={250} alt="SocialHire Logo" />
//                   </div>
//                   <p className='text-white fs-6 text-center'>
//                       Discover endless opportunities with <b>SocialHire</b>, the AI-driven platform connecting
//                       top talent with innovative employers. Take control of your career growth with
//                       the support and tools you need to succeed.
//                   </p> */}
//                   <input type="email" className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//                   <input type="password" className='form-control mb-3' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//                   <div className='d-flex justify-content-center'>
//                       <button type="submit" className='btn btn-primary'>Log In</button>
//                   </div>
//                   <div className='d-flex justify-content-between mt-3'>
//                       {/* <p className='text-white'>Don't have an account? <b><a className='text-primary' onClick={toggleSignUp} style={{ cursor: 'pointer', color: 'white' }}>Sign Up</a></b></p> */}
//                       <p className='text-white' onClick={handleForgotPassword} style={{ cursor: 'pointer',whiteSpace:'nowrap' }}><b>Forgot Password?</b></p>
//           </div>
              
//               </form>

//           <ToastContainer />
//       </div>
//       </>
//   );
// };

// export default Login;






// // Login.js
// import React, { useState } from 'react';
// import { auth } from '../firebase.js';
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';

// const Login = ({ setIsAuthenticated, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         toast.success('User signed in');
//         setIsAuthenticated(true);
//         onClose(); // Close modal after login
//         navigate('/home'); // Navigate to home or dashboard after login
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         toast.error(`Error signing in: ${errorMessage}`);
//       });
//   };

//   const handleForgotPassword = () => {
//     if (email) {
//       sendPasswordResetEmail(auth, email)
//         .then(() => {
//           toast.success('Password reset email sent!');
//         })
//         .catch((error) => {
//           const errorMessage = error.message;
//           toast.error(`Error sending password reset email: ${errorMessage}`);
//         });
//     } else {
//       toast.error('Please enter your email address first.');
//     }
//   };

//   return (
//     <div className={styles.modalContent}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className='form-control mb-3'
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className='form-control mb-3'
//           required
//         />
//         <div className='d-flex justify-content-center'>
//           <button type="submit" className='btn btn-primary'>Log In</button>
//         </div>
//         <div className='d-flex justify-content-between mt-3'>
//           <p className='text-white'>Don't have an account? <b><a className='text-primary' onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: 'white' }}>Sign Up</a></b></p>
//           <p className='text-white' onClick={handleForgotPassword} style={{ cursor: 'pointer', whiteSpace:'nowrap' }}><b>Forgot Password?</b></p>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from 'react';
// import { auth, db } from '../services/firebaseConfig.js'; // Ensure this path is correct
// import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import logo from '../assets/Social_Hire_page-0001-removebg-preview.png'
// import google from '../assets/icons8-google-48.png';


// const Login = ({ setIsAuthenticated, onClose }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const provider = new GoogleAuthProvider();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in
//                 const user = userCredential.user;
//                 console.log('User signed in:', user);
//                 toast.success('User signed in');
//                 setIsAuthenticated(true); // Update the authenticated state
//                 navigate('/home'); // Navigate to home or dashboard after login
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.error('Error signing in:', errorCode, errorMessage);
//                 toast.error('Error signing in:', errorMessage);
//             });
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             const result = await signInWithPopup(auth, provider);
//             const user = result.user;
//             console.log('User signed in with Google:', user);

//             // Check if user has additional info
//             const userDoc = await getDoc(doc(db, "users", user.uid));
//             if (!userDoc.exists()) {
//                 // Redirect to profile completion form
//                 navigate('/complete-profile', { state: { uid: user.uid, email: user.email, displayName: user.displayName } });
//             } else {
//                 // User already has additional info
//                 toast.success('User signed in with Google successfully');
//                 setIsAuthenticated(true); // Update the authenticated state
//                 navigate('/home');
//             }
//         } catch (error) {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error('Error signing in with Google:', errorCode, errorMessage);
//             toast.error('Error signing in with Google: ' + errorMessage);
//         }
//     };

//     const handleForgotPassword = () => {
//         if (email) {
//             sendPasswordResetEmail(auth, email)
//                 .then(() => {
//                     toast.success('Password reset email sent!');
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     console.error('Error sending password reset email:', errorCode, errorMessage);
//                     toast.error('Error sending password reset email:', errorMessage);
//                 });
//         } else {
//             toast.error('Please enter your email address first.');
//         }
//     };

//     return (
//         <>
//             <div className={styles.overlay} onClick={onClose} />
//             <div className={styles.modal}>
//                 <button onClick={onClose} className={styles.closeBtn}>X</button>
//                 <div className='d-flex justify-content-center'>
//                     <img src={logo} alt='logo'></img>
//                 </div>
//                 <form onSubmit={handleSubmit} className={styles.form}>
//                     <input
//                         type="email"
//                         className='form-control mb-3'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         required
//                     />
//                     <input
//                         type="password"
//                         className='form-control mb-3'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         required
//                     />
//                     <div className='d-flex justify-content-center'>
//                         <button type="submit" className='btn btn-primary'>Log In</button>
//                     </div>
//                     <div className='d-flex justify-content-center mt-3'>
//                         <button type="button" onClick={handleGoogleSignIn} className='btn btn-light'>
//                             <img src={google} alt='googleicon' width={30} height={30}></img>
//                             Continue with Google
//                         </button>
//                     </div>
//                     <div className='d-flex justify-content-between mt-3'>
//                         <p className='text-white' onClick={handleForgotPassword} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
//                             <b>Forgot Password?</b>
//                         </p>
//                     </div>
//                 </form>
//                 <ToastContainer />
//             </div>
//         </>
//     );
// };

// export default Login;




// import React, { useState } from 'react';
// import { auth, db } from '../services/firebaseConfig.js'; 
// import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import logo from '../assets/Social_Hire_page-0001-removebg-preview.png'
// import google from '../assets/icons8-google-48.png';

// const Login = ({ setIsAuthenticated, onClose }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const provider = new GoogleAuthProvider();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log('User signed in:', user);
//                 toast.success('User signed in');
//                 setIsAuthenticated(true);
//                 onClose(); // Close modal on successful login
//                 navigate('/home'); 
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.error('Error signing in:', errorCode, errorMessage);
//                 toast.error('Error signing in:', errorMessage);
//             });
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             const result = await signInWithPopup(auth, provider);
//             const user = result.user;
//             console.log('User signed in with Google:', user);

//             const userDocRef = doc(db, "users", user.uid);
//             const userDocSnap = await getDoc(userDocRef);

//             if (!userDocSnap.exists()) {
//                 navigate('/completeProfile', { state: { uid: user.uid, email: user.email, displayName: user.displayName } });
//             } else {
//                 toast.success('User signed in with Google successfully');
//                 setIsAuthenticated(true);
//                 onClose(); // Close modal on successful login
//                 navigate('/home');
//             }
//         } catch (error) {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error('Error signing in with Google:', errorCode, errorMessage);
//             toast.error('Error signing in with Google: ' + errorMessage);
//         }
//     };

//     const handleForgotPassword = () => {
//         if (email) {
//             sendPasswordResetEmail(auth, email)
//                 .then(() => {
//                     toast.success('Password reset email sent!');
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     console.error('Error sending password reset email:', errorCode, errorMessage);
//                     toast.error('Error sending password reset email:', errorMessage);
//                 });
//         } else {
//             toast.error('Please enter your email address first.');
//         }
//     };

//     return (
//         <>
//             <div className={styles.overlay} onClick={onClose} />
//             <div className={styles.modal}>
//                 <button onClick={onClose} className={styles.closeBtn}>X</button>
//                 <div className='d-flex justify-content-center'>
//                     <img src={logo} alt='logo' width={250} height={100}/>
//                 </div>
                
//                 <form onSubmit={handleSubmit} className={styles.form}>
//                     <input
//                         type="email"
//                         className='form-control mb-3'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         required
//                     />
//                     <input
//                         type="password"
//                         className='form-control mb-3'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         required
//                     />
//                     <div className='d-flex justify-content-center'>
//                         <button type="submit" className='btn btn-primary'>Log In</button>
//                     </div>
//                     <div className='d-flex justify-content-center mt-3'>
//                         <button type="button" onClick={handleGoogleSignIn} className='btn btn-light'>
//                             <img src={google} alt='google icon' width={30} height={30} />
//                             Continue with Google
//                         </button>
//                     </div>
//                     <div className='d-flex justify-content-between mt-3'>
//                         <p className='text-white' onClick={handleForgotPassword} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
//                             <b>Forgot Password?</b>
//                         </p>
//                     </div>
//                 </form>
//                 <ToastContainer />
//             </div>
//         </>
//     );
// };

// export default Login;




// import React, { useState } from 'react';
// import { auth, db } from '../services/firebaseConfig.js';
// import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import logo from '../assets/Social_Hire_page-0001-removebg-preview.png';
// import google from '../assets/icons8-google-48.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = ({ setIsAuthenticated, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log('User signed in:', user);
//         toast.success('User signed in');
//         setIsAuthenticated(true);
//         onClose(); // Close modal on successful login
//         navigate('/home');
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error signing in:', errorCode, errorMessage);
//         toast.error('Error signing in:', errorMessage);
//       });
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log('User signed in with Google:', user);

//       const userDocRef = doc(db, "users", user.uid);
//       const userDocSnap = await getDoc(userDocRef);

//       if (!userDocSnap.exists()) {
//         navigate('/completeProfile', { state: { uid: user.uid, email: user.email, displayName: user.displayName } });
//       } else {
//         toast.success('User signed in with Google successfully');
//         setIsAuthenticated(true);
//         onClose(); // Close modal on successful login
//         navigate('/home');
//       }
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Error signing in with Google:', errorCode, errorMessage);
//       toast.error('Error signing in with Google: ' + errorMessage);
//     }
//   };

//   const handleForgotPassword = () => {
//     if (email) {
//       sendPasswordResetEmail(auth, email)
//         .then(() => {
//           toast.success('Password reset email sent!');
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.error('Error sending password reset email:', errorCode, errorMessage);
//           toast.error('Error sending password reset email:', errorMessage);
//         });
//     } else {
//       toast.error('Please enter your email address first.');
//     }
//   };

//   return (
//     <>
//     <div className='col-md-6 offset-sm-3'>
//       <div className={styles.overlay} onClick={onClose} />
//       <div className={`${styles.modal} modal-dialog modal-dialog-centered modal-lg`}>
//         <div className="modal-content">
//           <button onClick={onClose} className={styles.closeBtn}>×</button>
//           <div className="text-center my-3">
//             <img src={logo} alt="logo" width={200} height={80} />
//           </div>
//           <form onSubmit={handleSubmit} className="px-4">
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="d-flex justify-content-center">
//               <button type="submit" className="btn btn-primary">Log In</button>
//             </div>
//             <div className="d-flex justify-content-center mt-3">
//               <button type="button" onClick={handleGoogleSignIn} className="btn btn-light">
//                 <img src={google} alt="google icon" width={30} height={30} className="me-2" />
//                 Continue with Google
//               </button>
//             </div>
//             <div className="d-flex justify-content-between mt-3">
//               <p className="text-dark" onClick={handleForgotPassword} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
//                 <b>Forgot Password?</b>
//               </p>
//             </div>
//           </form>
//           <ToastContainer />
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { auth, db } from '../services/firebaseConfig.js';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import styles from './login.module.css';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import logo from '../assets/Social_Hire_page-0001-removebg-preview.png';
import google from '../assets/icons8-google-48.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ setIsAuthenticated, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        toast.success('User signed in');
        setIsAuthenticated(true);
        onClose(); // Close modal on successful login
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
        toast.error('Error signing in:', errorMessage);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in with Google:', user);

      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        navigate('/completeProfile', { state: { uid: user.uid, email: user.email, displayName: user.displayName } });
      } else {
        toast.success('User signed in with Google successfully');
        setIsAuthenticated(true);
        onClose(); // Close modal on successful login
        navigate('/home');
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in with Google:', errorCode, errorMessage);
      toast.error('Error signing in with Google: ' + errorMessage);
    }
  };

  const handleForgotPassword = () => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Password reset email sent!');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error sending password reset email:', errorCode, errorMessage);
          toast.error('Error sending password reset email:', errorMessage);
        });
    } else {
      toast.error('Please enter your email address first.');
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className={`modal-dialog modal-dialog-centered ${styles.modal}`}>
          <div className="modal-content">
            <button onClick={onClose} className={styles.closeBtn}>×</button>
            <div className="text-center my-3">
              <img src={logo} alt="logo" className="img-fluid" width={200} height={80} />
            </div>
            <form onSubmit={handleSubmit} className="px-4">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Log In</button>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button type="button" onClick={handleGoogleSignIn} className="btn btn-light">
                  <img src={google} alt="google icon" width={30} height={30} className="me-2" />
                  Continue with Google
                </button>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p className="text-dark" onClick={handleForgotPassword} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  <b>Forgot Password?</b>
                </p>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


