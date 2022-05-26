import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axiosPrivate.post('http://localhost:5000/addProduct', {
            data
        });
        reset();
        toast.success('Product added')
    };

    return (
        <div className='md:flex-1 mx-auto w-full '>
            <div className='border-2 py-10 md:w-2/3 mx-auto px-6 shadow-md'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h1 className='text-center text-3xl font-bold mb-4'>Add Product</h1>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'product name is required!!'
                                }
                            })}
                            placeholder="product name"
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input type="text"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'product img is required!!'
                                }
                            })}
                            placeholder="product img link"
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'product description is required!!'
                                }
                            })}
                            placeholder="product description"
                            className="textarea input-bordered w-full "
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <input type="text"
                            {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: 'product minimum Quantity is required!!'
                                }
                            })}
                            placeholder="product minimum quantity"
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            {errors.minimumQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumQuantity.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'product available Quantity is required!!'
                                }
                            })}
                            placeholder="product available quantity"
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Per Unit Price </span>
                        </label>
                        <input type="text"
                            {...register("perUnitPrice", {
                                required: {
                                    value: true,
                                    message: 'product per Unit Price is required!!'
                                }
                            })}
                            placeholder="product per Unit Price"
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            {errors.perUnitPrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.perUnitPrice.message}</span>}
                        </label>
                    </div>

                    <input className='btn btn-primary text-white mt-4 w-full' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;