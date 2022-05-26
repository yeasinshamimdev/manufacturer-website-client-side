import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { userName, rating, userReview } = review;
    return (
        <div className='shadow-xl px-2 rounded-md bg-white my-4 py-4'>
            <h1 className='w-full shadow rounded-full mx-auto bg-gray-200 font-bold text-center mb-6 mt-2'>{userName}</h1>
            <div className='text-center'>

                <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                <FontAwesomeIcon className={`${rating < 2 ? '' : 'text-yellow-400'}`} icon={faStar} />
                <FontAwesomeIcon className={`${rating < 3 ? '' : 'text-yellow-400'}`} icon={faStar} />
                <FontAwesomeIcon className={`${rating < 4 ? '' : 'text-yellow-400'}`} icon={faStar} />
                <FontAwesomeIcon className={`${rating < 5 ? '' : 'text-yellow-400'}`} icon={faStar} />
                <p className='font-mono'>Rating: {rating} star</p>
                <p className='text-justify my-2 text-sm px-4'>{userReview}</p>
            </div>
        </div>
    );
};

export default Review;