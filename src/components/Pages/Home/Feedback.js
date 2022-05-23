import React from 'react';
import { toast } from 'react-toastify';

const Feedback = () => {
    const handleFeedback = e => {
        e.preventDefault();
        e.target.reset()
        toast.success('Feedback received')
    }

    return (
        <div className='md:px-10'>
            <h1 className='text-center text-xl'>Leave a feedback here</h1>
            <div>
                <form onSubmit={handleFeedback}>

                    <label htmlFor="name">Your Name</label>
                    <input className='w-full text-sm outline-none px-2 h-7 mb-4 rounded' type="text" name="name" id="name" placeholder='Your name' required />

                    <label htmlFor="email">Email</label>
                    <input className='w-full text-sm outline-none px-2 h-7 mb-4 rounded' type="email" name="email" id="email" placeholder='Your email' required />

                    <label htmlFor="comment">Your feedback</label>
                    <textarea className='w-full text-sm outline-none px-2 h-16 mb-4 rounded' name="comment" id="comment" placeholder='Your feedback' required></textarea>

                    <input
                        className='bg-green-500 hover:bg-green-400 px-4 py-1 rounded text-white cursor-pointer' type="submit" value="Feedback" />
                </form>
            </div>
        </div>
    );
};

export default Feedback;