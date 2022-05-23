import React from 'react';
import { Link } from 'react-router-dom';
import carManufacturer from '../../../img/car-garage.jpg';

const Banner = () => {
    return (
        <div className="hero py-10 md:py-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='md:max-w-xl w-full rounded-lg shadow-2xl' src={carManufacturer} alt='car manufacture' />
                <div className='md:mr-4'>
                    <h1 className="md:text-4xl text-2xl mt-4 font-bold">Your Favorite Car Parts Manufactures Here</h1>
                    <p className="py-6">Hi there, we are here to provide you to the best car parts manufacture service in the world. Our car parts is very much famous all over the world. We export our product all over the country. So, you can buy your needed product form us. </p>
                    <Link to='/' className="btn btn-primary text-white px-10">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;