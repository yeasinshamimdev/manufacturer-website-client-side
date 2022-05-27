import React from 'react';
import developer from '../../../img/developer.jpg';

const Portfolio = () => {
    return (
        <div className='md:flex justify-center align-middle block md:px-10 md:py-12'>
            <div className='flex-1'>
                <img className='rounded-full w-2/3' src={developer} alt="Yeasin Shamim" />
            </div>
            <div className='flex-1'>
                <h1 className='text-4xl font-bold mb-2'>Hi, I am Yeasin Shamim</h1>
                <p>MERN Stack Web Developer.</p>
                <p className='mb-2'>Email: yeasinshamim7@gmail.com</p>
                <p className='mb-2 mt-6'>I study B.Sc honours in Zoology.</p>
                <p className='mb-2'>I have skill in HTML, CSS, JavaScript, nodeJs, expressJs, ReactJs, mongodb etc.</p>
                <p className='mb-2 mt-4'>I have already done some project: </p>
                <p className='mb-2'>1. sports gear warehouse site: <a className='link text-blue-400' href="https://sports-gear-warehouse.web.app" target="_blank" rel="noopener noreferrer">Live Site Link</a></p>
                <p className='mb-2'>Project description: In this project you will see a warehouse site. here you can add product, delete product, update product etc.</p>

                <p className='mb-2 '>1. car parts manufacture site: link: <a className='link text-blue-400' href="https://car-parts-manufactures.web.app/" target="_blank" rel="noopener noreferrer">Live Site Link</a></p>
                <p className='mb-2'>Project description: In this project you will see a manufacture site. here you can add product, delete product, update product etc. you can create account and login also. </p>

                <p className='mb-2'>1. Personal gym site: <a className='link text-blue-400' href="https://gym-with-shamim.web.app" target="_blank" rel="noopener noreferrer">Live Site Link</a></p>
                <p className='mb-2'>Project description: In this project you will see a personal gym site. here you can enroll course of gym.</p>
            </div>
        </div>
    );
};

export default Portfolio;