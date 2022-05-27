import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';

const ReviewAdd = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axiosPrivate.post('https://agile-earth-86444.herokuapp.com/review', {
            data
        });
        reset();
        toast.success('Review added')
    };

    return (
        <div className='md:w-2/4 w-full p-4 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h1 className='text-center text-2xl font-bold mb-4'>Add a Review</h1>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your name</span>
                    </label>
                    <input type="text"
                        {...register("userName")}
                        className="input input-bordered w-full"
                        value={user?.displayName}
                        readOnly
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'rating is required!!'
                            },
                            min: {
                                value: 1,
                                message: `Rating can not be less than 1`
                            },
                            max: {
                                value: 5,
                                message: 'Rating can not be getter than 5'
                            }
                        })}
                        placeholder="rating"
                        className="input input-bordered w-full "
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        {errors.rating?.type === 'min' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        {errors.rating?.type === 'max' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your review</span>
                    </label>
                    <textarea type="text"
                        {...register("userReview", {
                            required: {
                                value: true,
                                message: 'review is required!!'
                            }
                        })}
                        placeholder="Your review"
                        className="textarea textarea-bordered w-full "
                    />
                    <label className="label">
                        {errors.userReview?.type === 'required' && <span className="label-text-alt text-red-500">{errors.userReview.message}</span>}

                    </label>
                </div>

                <input className='btn btn-primary text-white mt-4 w-full' value="Add Review" type="submit" />
            </form>
        </div>
    );
};

export default ReviewAdd;