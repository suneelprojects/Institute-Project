import React from 'react';
import HomeNavBar from './HomeNavBar.js';
import Home1 from './Home1Componet/Home1.js';
import Home2 from './Home2Component/Home2.js';
import Home3 from './Home3Component/Home3.js';
import Home4 from './Home4Component/Home4.js';
import Home5 from './Home5Component/Home5.js';
import Home6 from './Home6Component/Home6.js';
import Home7 from './Home7Component/Home7.js';
import HomeFooter from './HomeFooter.js';
import homeStyles from './home.module.css';
import video from '../assets/backgroundAnimation.mp4'

const Home = () => {
    return (
        <div className={homeStyles.Home}>
            <div>
                <HomeNavBar />
                <Home1 />
                <Home2 />
                <Home3 />
                <Home4 />
                <Home5 />
                <Home6 />
                <Home7 />
                <HomeFooter />
            </div>
        </div>
    );
};

export default Home;
