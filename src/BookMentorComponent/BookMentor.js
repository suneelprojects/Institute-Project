import React from 'react';
import comingsoon from '../assets/commingsoon.mp4';

const BookMentor = () => {
    return (
        <div>
             <div style={{marginTop:'200px',marginBottom:'100px'}} data-aos="flip-left">
                        <video src={comingsoon}
                        className='my-5'
                        style={{
                            height: 'auto',
                            width: '100%',
                            maxWidth: '700px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            border:'none',
                            border: 'none',
                             padding: '0'
                        }} autoPlay loop muted></video>
                    </div>
        </div>
    );
};

export default BookMentor;