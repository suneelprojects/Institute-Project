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








import React, { useState } from 'react';
import { auth } from '../firebase.js'; // Ensure this path is correct
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import styles from './login.module.css';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import logo from '../assets/socialhire.png'

const Login = ({ setIsAuthenticated }) => { // Accept setIsAuthenticated as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
        toast.success('User signed in');
        setIsAuthenticated(true); // Update the authenticated state
        navigate('/home'); // Navigate to home or dashboard after login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
        toast.error('Error signing in:', errorMessage);
      });
  };

  const handleSignUp = () => {
    navigate('/signup');
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
    <div className={`${styles.container}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-sm-3'>
            <form onSubmit={handleSubmit} className={`${styles.form} `}>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={logo} height={80} width={250} alt="SocialHire Logo" />
              </div>
              <p className='text-white fs-6 text-center'>
                Discover endless opportunities with <b>SocialHire</b>, the AI-driven platform connecting
                top talent with innovative employers. Take control of your career growth with
                the support and tools you need to succeed.
              </p>
              <input type="email" className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              <input type="password" className='form-control mb-3' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
              <div className='d-flex justify-content-center'>
                <button type="submit" className='btn btn-primary'>Log In</button>
              </div>
              <div className='d-flex justify-content-between mt-3'>
                <p className='text-white'>Don't have an account? <b  ><a className='text-primary' onClick={handleSignUp} style={{ cursor: 'pointer' }}>Sign Up</a></b></p>
                <p className='text-white' onClick={handleForgotPassword} style={{ cursor: 'pointer' }}><b>Forgot Password?</b></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
