import React, { useState } from 'react';
import { auth, db } from '../services/firebaseConfig.js'; // Ensure this path is correct
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import styles from './login.module.css';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import google from '../assets/icons8-google-48.png';
import logo from '../assets/Social_Hire_page-0001-removebg-preview.png';


const Signup = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User signed in with Google:', user);

            // Check if user has additional info
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (!userDoc.exists()) {
                // Redirect to profile completion form
                navigate('/completeProfile', { state: { uid: user.uid, email: user.email, displayName: user.displayName } });
            } else {
                // User already has additional info
                toast.success('User signed in with Google successfully');
                navigate('/home');
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in with Google:', errorCode, errorMessage);
            toast.error('Error signing in with Google: ' + errorMessage);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    name,
                    email,
                    phone,
                });
                toast.success('User signed up successfully');
                onClose(); // Close modal after signup
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`Error signing up: ${errorMessage}`);
            });
    };

    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.modal}>
            <button onClick={onClose} className={styles.closeBtn}>X</button>
             <div className="text-center my-3">
                        <img src={logo} alt="logo" width={200} height={80} />
                      </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="name"
                        className='form-control mb-3'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        className='form-control mb-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        className='form-control mb-3'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input
                        type="tel"
                        className='form-control mb-3'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        required
                    />
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className='btn btn-primary'>Sign Up</button>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="button" onClick={handleGoogleSignIn} className='btn btn-light'>
                            <img src={google} alt='googleicon' width={30} height={30}></img>
                            Continue with Google
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default Signup;


