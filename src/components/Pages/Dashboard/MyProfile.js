import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { displayName, email } = user;
    const onSubmit = data => {

        reset();
    };
    console.log(user);

    return (
        <div className='gird grid-cols-1 md:grid md:grid-cols-2'>
            <div className='border-2 w-3/4 md:w-2/3 my-4 ml-4 p-2 rounded'>
                <h1>Your Name: <span className='font-bold ml-1'>{displayName}</span></h1>
                <p>Your Email: <span className='font-bold ml-1'>{email}</span></p>
            </div>
            <div className='w-full px-2 my-4'>
                <div className='border-2 py-10 ml-4 md:w-2/3 px-6'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className='text-center text-xl font-bold mb-4'>Add Profile Information</h1>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
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
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text"
                                {...register("userEmail")}
                                className="input input-bordered w-full"
                                value={user?.email}
                                readOnly
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Education</span>
                            </label>
                            <input type="text"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'education is required!!'
                                    }
                                })}
                                placeholder="Your education"
                                className="input input-bordered w-full "
                            />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your District</span>
                            </label>
                            <input type="text"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'District is required!!'
                                    }
                                })}
                                placeholder="Your District"
                                className="input input-bordered w-full "
                            />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="number"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is required!!'
                                    }
                                })}
                                placeholder="Your phone"
                                className="input input-bordered w-full "
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Linkedin profile </span>
                            </label>
                            <input type="text"
                                {...register("linkedin", {
                                    required: {
                                        value: true,
                                        message: 'linkedin is required!!'
                                    }
                                })}
                                placeholder="Your linkedin"
                                className="input input-bordered w-full "
                            />
                            <label className="label">
                                {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-primary text-white mt-4 w-full' value="Add" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;