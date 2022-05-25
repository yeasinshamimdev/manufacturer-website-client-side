import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useBooking from '../../../hooks/useBooking';
import Loading from '../../Shared/Loading';

const Payment = () => {
    const [booking, isLoading, refetch, isError] = useBooking();
    const { id } = useParams();
    const [user] = useAuthState(auth);
    if (isLoading) return <Loading />

    const singleBooking = booking?.data.find(book => book._id === id);
    const { name, perUnitPrice, quantity, address, phone, zipCode } = singleBooking;

    return (
        <div className='md:pl-12 px-2 mt-8'>
            <div className="card md:w-2/3 w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-xl mb-4'>Hello, {user?.displayName}</h2>
                    <h2 className="card-title mb-2">Please pay for <span className='text-primary'>{name}</span></h2>

                    <div className='flex justify-between'>
                        <div>
                            <p className='mb-2'>Price per unit: <span className='font-bold'>{perUnitPrice}$</span></p>
                            <p className='mb-2'>Your quantity: <span className='font-bold'>{quantity}$</span> </p>
                            <p className='mb-2'>Your Phone: <span className='font-bold'>{phone}</span> </p>
                        </div>
                        <div>
                            <p className='mb-2' >Address: <span className='font-bold'>{address}</span></p>
                            <p className='mb-2'>Total Price: <span className='font-bold'>{quantity * perUnitPrice}$</span></p>
                            <p className='mb-2'>Zip code: <span className='font-bold'>{zipCode}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card md:w-2/3 w-full bg-base-100 shadow-xl mt-8">
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;