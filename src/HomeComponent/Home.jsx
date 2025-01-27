import React from 'react';
import HomeNavBar from './HomeNavBar.jsx';
import Home1 from './Home1Componet/Home1.jsx';
import Home2 from './Home2Component/Home2.jsx';
import Home3 from './Home3Component/Home3.jsx';
import Home4 from './Home4Component/Home4.jsx';
import Home5 from './Home5Component/Home5.jsx';
import Home6 from './Home6Component/Home6.jsx';
import Home7 from './Home7Component/Home7.jsx';
import HomeFooter from './HomeFooter.jsx';
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
