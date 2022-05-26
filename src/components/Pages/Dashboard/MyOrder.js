import React, { useState } from 'react';
import useBooking from '../../../hooks/useBooking';
import Loading from '../../Shared/Loading';
import DeleteModal from './DeleteModal';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
    const [openModal, setOpenModal] = useState(null);
    const [booking, isLoading, refetch, isError] = useBooking();
    const navigate = useNavigate();

    if (isLoading) return <Loading />

    const handleDateProduct = id => {
        const singleId = booking?.data?.find(b => b._id === id);
        setOpenModal(singleId._id);
    };

    return (
        <div>
            <h1 className='text-2xl text-center text-primary mb-6 mt-4'>Your added product: {booking?.data?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>NO.</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Price Per Unit</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Total Price</th>
                            <th className='text-center'>Address</th>
                            <th className='text-center'>Action</th>
                            <th className='text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking?.data.map((book, index) => <tr key={book._id}>
                                <th className='text-center'>{index + 1}</th>
                                <td className='rounded-full w-14'><img src={book.img} alt="" /></td>
                                <td className='text-center'>{book.name}</td>
                                <td className='text-center'>{book.perUnitPrice}</td>
                                <td className='text-center'>{book.quantity}</td>
                                <td className='text-center'>{book.perUnitPrice * book.quantity}</td>
                                <td className='text-center'>{book.address}</td>

                                <td>
                                    <label
                                        onClick={() => handleDateProduct(book._id)}
                                        htmlFor="productDeleteModal" className="btn btn-xs bg-red-400 text-white border-none hover:bg-red-500 mx-auto">Delete</label>
                                </td>

                                <td >
                                    <button
                                        onClick={() => navigate(`/dashboard/payment/${book._id}`)}
                                        className='btn btn-xs bg-green-400 hover:bg-green-500 text-white border-none'>Pay now
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {openModal && <DeleteModal setOpenModal={setOpenModal}
                openModal={openModal}
                booking={booking}
                refetch={refetch}
            />}
        </div>
    );
};

export default MyOrder;