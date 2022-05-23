import React from 'react';

const OurSpecialty = ({ specialty }) => {
    const { img, name, des } = specialty;

    return (
        <div className='flex border-2 rounded-sm pl-6 py-2 mb-6'>
            <div className='mr-4'>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className='font-semibold'>{name}</h1>
                <p className='text-xs'>{des}</p>
            </div>
        </div>
    );
};

export default OurSpecialty;