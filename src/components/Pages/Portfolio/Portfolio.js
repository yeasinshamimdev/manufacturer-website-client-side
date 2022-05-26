import React from 'react';

const Portfolio = () => {
    return (
        <div className='flex justify-center align-middle md:px-10 md:py-12'>
            <div>
                <h1 className='text-4xl font-bold mb-2'>Hi, I am Yeasin Shamim</h1>
                <p>MERN Stack Web Developer.</p>
                <p className='mb-2'>Email: yeasinshamim7@gmail.com</p>
                <p className='mb-2 mt-6'>I study B.Sc honours in Zoology.</p>
                <p className='mb-2'>I have skill in HTML, CSS, JavaScript, nodeJs, expressJs, ReactJs, mongodb etc.</p>
                <p className='mb-2 mt-4'>I have already done some project: </p>
                <p className='mb-2'>1. sports gear warehouse site: link: https://sports-gear-warehouse.web.app</p>
                <p className='mb-2'>Project description: In this project you will see a warehouse site. here you can add product, delete product, update product etc.</p>

                <p className='mb-2'>1. car parts manufacture site: link: https://car-parts-manufactures.web.app/</p>
                <p className='mb-2'>Project description: In this project you will see a manufacture site. here you can add product, delete product, update product etc. you can create account and login also. </p>

                <p className='mb-2'>1. Personal gym site: link: https://gym-with-shamim.web.app/</p>
                <p className='mb-2'>Project description: In this project you will see a personal gym site. here you can enrool course of gym.</p>
            </div>
        </div>
    );
};

export default Portfolio;