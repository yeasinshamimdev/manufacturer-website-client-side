import React from 'react';
import developer from '../../../img/developer.jpg';

const Portfolio = () => {
    return (
        <div>
            <div className='md:flex justify-center align-middle block md:px-10 md:py-12 py-10 px-4'>
                <div className='flex-1 mb-5 md:mb-0'>
                    <img className='rounded-full h-3/4 w-2/3 mx-auto' src={developer} alt="Yeasin Shamim" />
                </div>
                <div className='flex-1 md:mt-12'>
                    <h1 className='text-4xl font-bold mb-2'>Hi, Yeasin Shamim Here</h1>
                    <p className='text-sm font-bold'>MERN Stack Web Developer.</p>
                    <p className='text-sm my-1'>Email: yeasinshamim7@gmail.com</p>
                    <p className='mb-2 text-sm'>Study B.Sc honours in Zoology.</p>
                    <div className='mt-12'>
                        <label >HTML</label>
                        <progress className="progress progress-success h-3 w-full" value="95" min="60" max="100"></progress>

                        <label >CSS</label>
                        <progress className="progress progress-info h-3 w-full" value="90" max="100"></progress>

                        <label >JavaScript</label>
                        <progress className="progress progress-secondary  h-3 w-full" value="70" max="100"></progress>

                        <label >Node Js</label>
                        <progress className="progress progress-primary h-3 w-full" value="70" max="100"></progress>
                        <label >Express Js</label>
                        <progress className="progress progress-success h-3 w-full" value="100" max="100"></progress>
                        <label >React Js</label>
                        <progress className="progress progress-accent h-3 w-full" value="100" max="100"></progress>
                        <label >MongoDb</label>
                        <progress className="progress progress-warning h-3 w-full" value="100" max="100"></progress>
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-10'>
                <p className='mb-2 mt-4 text-xl font-bold'>I have already done some project, Take a look: </p>
                <p className='mb-2 font-bold mt-4'>1. sports gear warehouse site: <a className='link text-blue-400' href="https://sports-gear-warehouse.web.app" target="_blank" rel="noopener noreferrer">Live Site Link</a></p>
                <p className='mb-2'>Project description: In this project you will see a warehouse site. here you can add product, delete product, update product etc. Sports gear warehouse is a multifuctional website.</p>

                <p className='mb-2  font-bold mt-4'>1. car parts manufacture site: <a className='link text-blue-400' href="https://car-parts-manufactures.web.app/" target="_blank" rel="noopener noreferrer">Live Site Link</a></p>
                <p className='mb-2'>Project description: In this project you will see a manufacture site. here you can add product, delete product, update product etc. you can create account and login also. here you can see private route for admin and normal user. </p>

                <p className='mb-2 font-bold mt-4'>1. Personal gym site: <a className='link text-blue-400' href="https://gym-with-shamim.web.app" target="_blank" rel="noopener noreferrer">Live Site Link</a></p>
                <p className='mb-2'>Project description: In this project you will see a personal gym site. here you can enroll course of gym. Your trainer will take care you. You can create user account and manage user.</p>
            </div>
        </div>

    );
};

export default Portfolio;