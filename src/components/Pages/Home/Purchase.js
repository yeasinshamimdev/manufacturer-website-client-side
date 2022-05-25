import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import { signOut } from 'firebase/auth';

const Purchase = () => {
    const [purchaseOrder, setPurchaseOrder] = useState({});
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        (async () => {
            try {
                const { data } = await axiosPrivate.get(url);
                setPurchaseOrder(data);
            }
            catch (error) {
                console.log(error.response.status);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        })()
    }, [id, navigate]);

    const { _id, name, img, minimumQuantity, availableQuantity, description, perUnitPrice } = purchaseOrder;

    const onSubmit = (formData) => {
        try {
            const { resData } = axiosPrivate.post('http://localhost:5000/booking', {
                productId: _id,
                name, img,
                description,
                perUnitPrice,
                userName: formData.userName,
                userEmail: formData.userEmail,
                address: formData.address,
                phone: formData.phone,
                zipCode: formData.zipCode,
                quantity: formData.quantity
            })
            toast.success('Order complete');
            reset();
        }
        catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login')
            }
        }



    }

    return (
        <div className='my-10 md:w-full mx-auto px-4 md:px-24'>
            <div className='flex justify-between align-middle'>
                <div className='md:flex-1 hidden md:block'>
                    <img className='mt-14' src={img} alt="" />
                </div>
                <div className='md:flex-1 mx-auto w-full '>
                    <div className='border-2 py-10 md:w-full mx-auto px-6 shadow-md'>
                        <div className='md:flex-1 block md:hidden'>
                            <img className='w-44 mx-auto' src={img} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>{name}</h1>
                            <p className='text-sm my-2'>{description}</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"
                                    {...register("userName", { required: true })}
                                    className="input input-bordered w-full"
                                    value={user?.displayName}
                                    readOnly
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your email</span>
                                </label>
                                <input type="text"
                                    {...register("userEmail", { required: true })}
                                    className="input input-bordered w-full"
                                    value={user?.email}
                                    readOnly
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is required'
                                        }
                                    })}
                                    placeholder='Your address'
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'phone is required'
                                        }
                                    })}
                                    placeholder='Your phone number'
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Zip code</span>
                                </label>
                                <input type="number"
                                    {...register("zipCode", {
                                        required: {
                                            value: true,
                                            message: 'Zip Code is required'
                                        }
                                    })}
                                    placeholder='zip code'
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.zipCode?.type === 'required' && <span className="label-text-alt text-red-500">{errors.zipCode.message}</span>}
                                </label>
                            </div>

                            <div>
                                <h5>Available quantity: {availableQuantity}</h5>
                                <h5 className='my-2'>Minimum order quantity: {minimumQuantity}</h5>
                                <h5 className='mb-2'>per unit price: {perUnitPrice}</h5>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Order Quantity</span>
                                </label>
                                <input type="number"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Quantity is required'
                                        },
                                        min: {
                                            value: `${parseInt(minimumQuantity)}`,
                                            message: `Quantity can not be less than ${minimumQuantity} parts`
                                        },
                                        max: {
                                            value: `${parseInt(availableQuantity)}`,
                                            message: `Quantity can not be getter than ${availableQuantity} parts`
                                        }
                                    })}
                                    placeholder={minimumQuantity}
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>
                            <input
                                className='btn btn-primary text-white mt-4 w-full' value="Purchase" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;