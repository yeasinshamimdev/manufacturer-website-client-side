import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Feedback from './Feedback';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='md:px-10'>
            <Banner />
            <Parts />
            <BusinessSummary />
            <Reviews />
            <Feedback />
        </div>
    );
};

export default Home;