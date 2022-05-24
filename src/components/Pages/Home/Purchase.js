import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [purchaseOrder, setPurchaseOrder] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        axios.get(url).then(data => setPurchaseOrder(data.data));
    }, [id]);

    const { _id, name, img, minimumQuantity, availableQuantity, description, perUnitPrice } = purchaseOrder;

    const onSubmit = async (data, e) => {
        console.log(data);
    }
    console.log(purchaseOrder);

    return (
        <div className='my-10 md:w-full mx-auto px-4 md:px-24'>
            <div className='flex justify-between align-middle'>
                <div className='md:flex-1 hidden md:block'>
                    <img className='mt-14' src={img} alt="" />
                </div>
                <div className='md:flex-1 mx-auto w-full '>
                    <div className='border-2 py-10 md:w-4/5 mx-auto px-6 shadow-md'>
                        <div className='md:flex-1 block md:hidden'>
                            <img className='w-44 mx-auto' src={img} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>{name}</h1>
                            <p className='text-sm my-2'>{description}</p>
                            <h5>Available quantity: {availableQuantity}</h5>
                            <h5 className='my-2'>Minimum order quantity: {minimumQuantity}</h5>
                            <h5 className='mb-2'>per unit price: {perUnitPrice}</h5>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} >

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number"
                                    {...register("quantity", {
                                        min: {
                                            value: `${parseInt(minimumQuantity)}`,
                                            message: `Quantity can not be less than ${minimumQuantity} parts`
                                        },
                                        max: {
                                            value: `${parseInt(availableQuantity)}`,
                                            message: `Quantity can not be getter than ${availableQuantity} parts`
                                        }
                                    })}
                                    placeholder="type minimum to available Quantity value"
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
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