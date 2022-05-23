import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='md:px-10'>
            <Banner />
            <Parts />
            <BusinessSummary />
        </div>
    );
};

export default Home;