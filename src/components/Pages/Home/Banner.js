import React from 'react';
import carManufacturer from '../../../img/car-garage.jpg';

const Banner = () => {
    return (
        <div className='bg-cover min-h-screen' style={{ backgroundImage: `url(${carManufacturer})` }}>
            <h1>this is </h1>
        </div>
    );
};

export default Banner;