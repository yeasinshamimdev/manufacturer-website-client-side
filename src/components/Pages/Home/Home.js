import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Feedback from './Feedback';
import OurSpecialty from './OurSpecialty';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    const ourSpecialty = [
        { id: 1, img: "https://i.ibb.co/98LMbYv/2-1.png", name: "Free Delivery", des: "Free shopping on off offer" },
        { id: 2, img: "https://i.ibb.co/BrcTKCT/3-1.png", name: "Money Return", des: "Money back guaranty in 7 days" },
        { id: 3, img: "https://i.ibb.co/d7gsjTP/1-1.png", name: "Member Discount", des: "Delivery order over $1000" },
        { id: 4, img: "https://i.ibb.co/54PBjMg/4-1.png", name: "Online Support", des: "Support 24 hours a day" },
    ];

    return (
        <div className='md:px-10'>
            <Banner />
            <div className='grid grid-cols-1 md:grid-cols-4 mt-10 gap-4 px-4 md:px-0'>
                {
                    ourSpecialty.map(specialty => <OurSpecialty key={specialty.id} specialty={specialty} />)
                }
            </div>
            <Parts />
            <BusinessSummary />
            <Reviews />
            <Feedback />
        </div>
    );
};

export default Home;