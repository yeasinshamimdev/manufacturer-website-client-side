import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axiosPrivate from '../../../api/axiosPrivate';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState([]);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { displayName, email } = user;

    useEffect(() => {
        axiosPrivate.get('http://localhost:5000/users').then(data => setUserData(data))
    }, [userData]);

    const onSubmit = formData => {
        const url = `http://localhost:5000/users/email?email=${email}`;
        axiosPrivate.put(url, {
            formData
        })
        reset();
        toast.success('Profile updated')
    };

    const singleUser = userData?.data?.find(user => user.userEmail === email);

    return (
        <div className='gird grid-cols-1 md:grid md:grid-cols-2'>
            <div className='border-2 w-3/4 md:w-2/3 my-4 ml-4 p-2 rounded'>
                <h1 className='mb-2'>Your Name: <span className='font-bold ml-1'>{displayName}</span></h1>
                <p className='mb-2'>Your Email: <span className='font-bold ml-1'>{email}</span></p>
                <p className='mb-2'>Your Education: <span className='font-bold ml-1'>{singleUser?.education}</span></p>
                <p className='mb-2'>Your location: <span className='font-bold ml-1 '>{singleUser?.location}</span></p>
                <p className='mb-2'>Your phone: <span className='font-bold ml-1'>{singleUser?.phone}</span></p>
                <p>Your linkedin: <span className='font-bold ml-1'>{singleUser?.linkedin}</span></p>
            </div>
            <div className='w-full px-2 my-4'>
                <div className='border-2 py-10 ml-4 md:w-2/3 px-6'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className='text-center text-xl font-bold mb-4'>Update Profile Information</h1>

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

                        <input className='btn btn-primary text-white mt-4 w-full' value="Update" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;