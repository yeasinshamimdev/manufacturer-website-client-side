import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import signUpImg from '../../img/sign up.png';

const SignUp = () => {
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const onSubmit = async (data, e) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        e.target.reset();
        console.log('update done');
    };

    return (
        <div className='my-20 md:w-full mx-auto px-4 md:px-24'>
            <div className='flex justify-between align-middle'>
                <div className='md:flex-1 hidden md:block'>
                    <img src={signUpImg} alt="" />
                </div>
                <div className='md:flex-1 mx-auto w-full '>
                    <div className='border-2 py-10 md:w-2/3 mx-auto px-6 shadow-md'>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <h1 className='text-center text-3xl font-bold mb-4'>Sign Up</h1>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required!!'
                                        }
                                    })}
                                    placeholder="Your name"
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required!!'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email!!'
                                        }
                                    })}
                                    placeholder="Your email"
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required!!'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 character or longer!!'
                                        }
                                    })}
                                    placeholder="password"
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <input className='btn btn-primary text-white mt-4 w-full' value="Sign Up" type="submit" />
                        </form>
                        <div className="divider mt-8">OR</div>
                        <button onClick={() => signInWithGoogle()} className='btn mt-2 border-0 text-white w-full'>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;