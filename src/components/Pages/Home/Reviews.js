import React from 'react';
import useReviews from '../../../hooks/useReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <section className='mt-20 px-4 md:px-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-cyan-400 mb-6'>Customers Reviews</h1>
            <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review review={review} />)
                }
            </div>
        </section>
    );
};

export default Reviews;