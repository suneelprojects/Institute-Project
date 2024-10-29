import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { auth } from '../firebase'; 
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import style from './login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({job}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password); 
         toast.success("Successfully Loged in");
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('Email address is already in use');
                toast.error('Email address is already in use');
            } else {
                console.error('Sign-up error:', error); 
                setError(error.message);
            }
        }
    };

    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent! Check your inbox.');
        } catch (error) {
            setError(error.message); 
        }
    };

    return (
        <div className='col-md-5 offset-md-4 mt-5'>
            <h3 className='text-center mt-3'>Sign Up Page</h3>
            <div className={`p-3 m-2 ${style.container}`}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        className='form-control p-3'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                        className='form-control p-3'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link onClick={handleForgotPassword}>Forgot Password</Link>
                <button className={`btn mt-3 ${style.button}`} onClick={handleSignUp}>Sign Up</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;