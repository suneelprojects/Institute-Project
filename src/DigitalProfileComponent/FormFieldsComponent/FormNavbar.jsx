import { Library } from 'lucide-react';
import React from 'react';

const FormNavbar = () => {
    return (
        <>
<div style={{marginTop:'150px'}}>
    <nav>
        <ul>
            <li>
                <Link>Personal Info</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Skills</Link>
            </li>
            <li>
                <Link>Projects</Link>
            </li>
            <li>
                <Link>Experience</Link>
            </li>
            <li>
                <Link>Education</Link>
            </li>
            <li>
                <Link>Certification</Link>
            </li>
        </ul>
    </nav>
    </div>            
        </>
    );
};

export default FormNavbar;