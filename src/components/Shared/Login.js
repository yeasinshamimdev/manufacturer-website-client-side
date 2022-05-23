import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import loginImg from '../../img/login.png';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data, e) => {
        await signInWithEmailAndPassword(data.email, data.password);
        e.target.reset();
    };

    useEffect(() => {
        if (emailError?.message === 'Firebase: Error (auth/user-not-found).') {
            toast.error('No user found')
        }
        if (emailError?.message === 'Firebase: Error (auth/wrong-password).') {
            toast.error('Wrong Password')
        }

        if (user || googleUser || emailUser) {
            navigate(from, { replace: true });
            toast.success('Login Successful')
        }
    }, [user, navigate, from, googleUser, emailError, emailUser]);

    return (
        <div className='my-20 md:w-full mx-auto px-4 md:px-24'>
            <div className='flex justify-between align-middle'>
                <div className='md:flex-1 hidden md:block'>
                    <img src={loginImg} alt="login" />
                </div>
                <div className='md:flex-1 mx-auto w-full '>
                    <div className='border-2 py-10 md:w-2/3 mx-auto px-6 shadow-md'>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <h1 className='text-center text-3xl font-bold mb-4'>Login</h1>

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
                            <input className='btn btn-primary text-white mt-4 w-full' value="Login" type="submit" />
                        </form>
                        <h6 className='text-sm mt-3'>New to car parts manufacture? <Link to='/signup' className='btn-link'>Sign up</Link></h6>
                        <div className="divider mt-8">OR</div>
                        <button onClick={() => signInWithGoogle()} className='btn mt-2 border-0 text-white w-full'>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;