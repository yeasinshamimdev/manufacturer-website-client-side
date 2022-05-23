import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { name, img, rating, description } = review;
    return (
        <div className='shadow-xl px-2 rounded-md bg-white my-4 py-4'>
            <img className='w-24 rounded-full mx-auto' src={img} alt="" />
            <div className='text-center'>
                <h5 className='text-xl mt-4 font-mono'>{name}</h5>
                <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                <p className='font-mono'>Rating: {rating} star</p>
                <p className='text-justify my-2 text-sm px-4'>{description}</p>
            </div>
        </div>
    );
};

export default Review;