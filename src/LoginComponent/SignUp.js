// import React, { useState } from 'react';
// import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
// import { poolData } from '../UserPool.js'; // Import the pool data

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');

//   const userPool = new CognitoUserPool(poolData);

//   const onSubmit = event => {
//     event.preventDefault();
    
//     const attributeList = [
//       new CognitoUserAttribute({
//         Name: 'email',
//         Value: email
//       }),
//       new CognitoUserAttribute({
//         Name: 'phone_number',
//         Value: phone
//       }),
//       new CognitoUserAttribute({
//         Name: 'name',
//         Value: name
//       })
//     ];

//     userPool.signUp(username, password, attributeList, null, (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(data);
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
//         type='email'
//         value={email}
//         placeholder='Email'
//         onChange={e => setEmail(e.target.value)}
//       />
//       <input
//         className='form-control'
//         type='password'
//         value={password}
//         placeholder='Password'
//         onChange={e => setPassword(e.target.value)}
//       />
//       <input
//         className='form-control'
//         type='text'
//         value={name}
//         placeholder='Full Name'
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         className='form-control'
//         type='tel'
//         value={phone}
//         placeholder='Mobile Number'
//         onChange={e => setPhone(e.target.value)}
//       />
//       <button type='submit'>Sign Up</button>
//     </form>
//   );
// };

// export default SignUp;








// import React, { useState } from 'react';
// import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
// import { poolData } from '../UserPool.js';
// import { useNavigate } from 'react-router';
// import styles from './login.module.css'

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [confirmationCode, setConfirmationCode] = useState('');
//   const [isConfirming, setIsConfirming] = useState(false);
//   const navigate=useNavigate();

//   const userPool = new CognitoUserPool(poolData);

//   const onSubmit = event => {
//     event.preventDefault();
    
//     const attributeList = [
//       new CognitoUserAttribute({ Name: 'email', Value: email }),
//       new CognitoUserAttribute({ Name: 'phone_number', Value: phone }),
//       new CognitoUserAttribute({ Name: 'name', Value: name })
//     ];

//     userPool.signUp(username, password, attributeList, null, (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Sign-up successful!', data);
//       setIsConfirming(true);
//     });
//   };

//   const onConfirm = event => {
//     event.preventDefault();
    
//     const user = new CognitoUser({
//       Username: username,
//       Pool: userPool
//     });

//     user.confirmRegistration(confirmationCode, true, (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Confirmation successful!', result);
//       navigate('/login');

//     });
//   };

//   return (
//     <div className={` ${styles.container}`}>
//       <div className='container-fluid'>
//       <div className='row'>
//         <div className='col-md-6 offset-md-3'>

//       {!isConfirming ? (
//         <form onSubmit={onSubmit} className={styles.form}>
//             <label htmlFor='user'>User Nmae</label>
//           <input className='form-control' type='text' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)} />
//             <label htmlFor='email'>Email</label>
//           <input className='form-control' type='email' value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
//             <label htmlFor='password'>Password</label>
//           <input className='form-control' type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
//             <label htmlFor='Full name'>Full Name</label>
//           <input className='form-control' type='text' value={name} placeholder='Full Name' onChange={e => setName(e.target.value)} />
//             <label htmlFor='phone'>Phone Number</label>
//           <input className='form-control' type='tel' value={phone} placeholder='Mobile Number' onChange={e => setPhone(e.target.value)} />
//           <div className=' d-flex justify-content-center mt-3'>
//           <button type='submit' className='btn btn-primary'>Sign Up</button>
//           </div>
//           <p>Already have an account <a className='text-primary'>Sign In</a></p>
//         </form>
//       ) : (
//         <form onSubmit={onConfirm}>
//           <input className='form-control' type='text' value={confirmationCode} placeholder='Confirmation Code' onChange={e => setConfirmationCode(e.target.value)} />
//           <button type='submit' className='btn'>Confirm Registration</button>
//         </form>
//       )
//       }
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default SignUp;





// import React, { useState } from 'react';
// import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
// import { poolData } from '../UserPool.js';
// import { useNavigate } from 'react-router';
// import styles from './login.module.css';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [confirmationCode, setConfirmationCode] = useState('');
//   const [isConfirming, setIsConfirming] = useState(false);
//   const navigate = useNavigate();

//   const userPool = new CognitoUserPool(poolData);

//   const onSubmit = event => {
//     event.preventDefault();
    
//     const attributeList = [
//       new CognitoUserAttribute({ Name: 'email', Value: email }),
//       new CognitoUserAttribute({ Name: 'phone_number', Value: phone }),
//       new CognitoUserAttribute({ Name: 'name', Value: name })
//     ];

//     userPool.signUp(username, password, attributeList, null, (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Sign-up successful!', data);
//       setIsConfirming(true);
//     });
//   };

//   const onConfirm = event => {
//     event.preventDefault();
    
//     const user = new CognitoUser({
//       Username: username,
//       Pool: userPool
//     });

//     user.confirmRegistration(confirmationCode, true, (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Confirmation successful!', result);
//       navigate('/login');
//     });
//   };

//   return (
//     <div className={styles.container}>
//       <div className='container'>
//         <div className='row justify-content-center'>
//           <div className='col-md-6'>

//             {!isConfirming ? (
//               <form onSubmit={onSubmit} className={styles.form}>
//                 <div className="form-group">
//                   <label htmlFor='username'>User Name</label>
//                   <input className='form-control' type='name' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor='email'>Email</label>
//                   <input className='form-control' type='email' value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor='password'>Password</label>
//                   <input className='form-control' type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor='name'>Full Name</label>
//                   <input className='form-control' type='name' value={name} placeholder='Full Name' onChange={e => setName(e.target.value)} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor='phone'>Phone Number</label>
//                   <input className='form-control' type='tel' value={phone} placeholder='Mobile Number' onChange={e => setPhone(e.target.value)} />
//                 </div>
//                 <div className='d-flex justify-content-center mt-3'>
//                   <button type='submit' className={`btn btn-primary ${styles.button}`}>Sign Up</button>
//                 </div>
//                 <p>Already have an account? <a className='text-primary' href='/login'>Sign In</a></p>
//               </form>
//             ) : (
//               <form onSubmit={onConfirm}>
//                 <input className='form-control' type='name' value={confirmationCode} placeholder='Confirmation Code' onChange={e => setConfirmationCode(e.target.value)} />
//                 <button type='submit' className='btn btn-primary'>Confirm Registration</button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;








// import React, { useState } from 'react';
// import { auth } from '../firebase.js'; // Ensure this path is correct
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import styles from './login.module.css';
// import { useNavigate } from 'react-router';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate=useNavigate('')

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log('User signed up:', user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error signing up:', errorCode, errorMessage);
//       });
//   };

//   const handleSignIn=()=>{
// navigate('/login');
//   }

//   return (
//     <div className={`${styles.container}`}>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-6 offset-sm-3'>
//             <form onSubmit={handleSubmit} className={`${styles.form}`}>
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='form-control mb-3' required />
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='form-control mb-3' required />
//               <div className='d-flex justify-content-center'>
//                 <button type="submit" className='btn btn-primary'>Sign Up</button>
//               </div>
//               <p>Already have an account <a className='text-primary' onClick={handleSignIn}>Sign In</a></p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;






import React, { useState } from 'react';
import { auth, db } from '../firebase.js'; // Ensure this path is correct
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import styles from './login.module.css';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import logo from '../assets/socialhire.png'
import { Link } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log('User signed up:', user);

                // Save additional user info to Firestore
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    email: email,
                    phone: phone,
                });

                toast.success('User signed up successfully');
                navigate('/login'); // Redirect to home page or dashboard
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing up:', errorCode, errorMessage);
                toast.error('Error signing up:', errorMessage);
            });
    };

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <div className={`${styles.container}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-sm-3'>
                        <form onSubmit={handleSubmit} className={`${styles.form}`}>
                            <div className='d-flex justify-content-center'>
              <img src={logo} height={80} width={250}></img>
              </div>
              <p className='text-white fs-6 text-center'>Discover endless opportunities with <b>SocialHire</b>, the AI-driven platform connecting
top talent with innovative employers. Take control of your career growth with
the support and tools you need to succeed.</p>
                            <input
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                className='form-control mb-3'
                                required
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className='form-control mb-3'
                                required
                            />
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone Number"
                                className='form-control mb-3'
                                required
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className='form-control mb-3'
                                required
                            />
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className='btn btn-primary'>Sign Up</button>
                            </div>
                            <p className='text-white mt-3'>Already have an account?<b><a className='text-primary' onClick={handleSignIn} style={{ cursor: 'pointer' }}>Sign In</a></b> </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Signup;
