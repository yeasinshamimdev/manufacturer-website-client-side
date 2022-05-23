import React from 'react';
import { toast } from 'react-toastify';

const Feedback = () => {
    const handleFeedback = e => {
        e.preventDefault();
        e.target.reset()
        toast.success('Feedback received')
    }

    return (
        <div className='gird md:grid md:grid-cols-2 gap-x-20 gap-y-10 p-4 md:pr-10 mt-10'>
            <div className='flex items-center'>
                <div className='md:px-10'>
                    <h1 className='text-center text-3xl font-bold'>Give us a feedback</h1>
                    <p className='text-sm my-4 text-justify font-semibold'>We hope you are very enjoy our fancy car parts manufacture website. So, now time give us a feedback. So that we can improve our website. Our Customer feedback is very important for us. We love to receive feedback from our user. So, please give us a feedback for improvement. Thank you. </p>
                </div>
            </div>
            <div>
                <h1 className='text-center text-2xl mb-4'>Leave a feedback here</h1>
                <div>
                    <form onSubmit={handleFeedback}>

                        <label htmlFor="name">Your Name</label>
                        <input className='w-full text-sm outline-none px-2 h-7 mb-4 rounded' type="text" name="name" id="name" placeholder='Your name' required />

                        <label htmlFor="email">Email</label>
                        <input className='w-full text-sm outline-none px-2 h-7 mb-4 rounded' type="email" name="email" id="email" placeholder='Your email' required />

                        <label htmlFor="comment">Your feedback</label>
                        <textarea className='w-full text-sm outline-none px-2 h-16 mb-4 rounded' name="comment" id="comment" placeholder='Your feedback' required></textarea>

                        <input
                            className='btn btn-sm btn-primary px-4 py-1 rounded text-white border-0' type="submit" value="Feedback" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;