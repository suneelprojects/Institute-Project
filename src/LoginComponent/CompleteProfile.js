import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import { toast, ToastContainer } from 'react-toastify';
import styles from './login.module.css';
import google from '../assets/icons8-google-48.png';


const CompleteProfile = () => {
    const location = useLocation();
    const { uid, email, displayName } = location.state;
    const [name, setName] = useState(displayName || '');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, "users", uid), {
                name: name,
                email: email,
                phone: phone,
            });
            toast.success('Profile completed successfully');
            navigate('/home');
        } catch (error) {
            const errorMessage = error.message;
            console.error('Error completing profile:', errorMessage);
            toast.error('Error completing profile: ' + errorMessage);
        }
    };

    return (
        <div className='mt-5'>
            <div className={styles.overlay} />
            <div className={styles.modal}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
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
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className='btn btn-primary'>Complete Profile</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CompleteProfile;
