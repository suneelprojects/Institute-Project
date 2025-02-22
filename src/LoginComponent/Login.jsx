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
        // toast.error('Error signing in:', errorMessage);
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
                <p className="text-white" onClick={handleForgotPassword} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
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


