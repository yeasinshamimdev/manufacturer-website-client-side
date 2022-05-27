import React from 'react';
import { Link } from 'react-router-dom';
import carManufacture from '../../../img/carManufacture.png';

const InfoCar = () => {
    return (
        <div className='md:flex block md:px-6 py-6 px-4'>
            <div className='flex-1 md:mr-6 h-80'>
                <img className='shadow-2xl h-full w-full rounded-lg' src={carManufacture} alt="car manufacture" />
            </div>
            <div className='flex-1 mt-8 md:mt-0 md:pl-4 pl-0'>
                <h1 className='text-3xl text-primary font-bold mb-6 mt-1'>World Famous Car Manufacture Site Here</h1>
                <p className='text-justify'>Car parts manufacture is the site of a car parts manufacturing. This is the world best car parts manufacture website. Our car parts company is now almost 15 years old. We export our parts all over the world. We have many many customer all over the world. We always focus our customers satisfaction. We hope you also like our customer server and product.</p>
                <div className='mt-4'>
                    <Link to='/dashboard' className='btn btn-primary text-white'>Know More</Link>
                </div>
            </div>
        </div>
    );
};

export default InfoCar;