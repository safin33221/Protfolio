import React from 'react';
import HeroBanner from '../../Components/HeroBanner';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {
    return (
        <div className=''>
            <HeroBanner/>
            <AboutMe/>
            <ContactMe/>
        </div>
    );
};

export default Home;