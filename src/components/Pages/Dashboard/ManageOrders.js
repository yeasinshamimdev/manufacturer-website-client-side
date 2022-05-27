import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import Loading from '../../Shared/Loading';
import DeleteProductAdminModal from './DeleteProductAdminModal';

const ManageOrders = () => {
    const { data: bookings, isLoading, refetch } = useQuery('bookings', () => axiosPrivate.get('https://agile-earth-86444.herokuapp.com/bookings'));
    const [openModal, setOpenModal] = useState(null);

    if (isLoading) return <Loading />

    const handleDeleteProduct = id => {
        setOpenModal(id);
    }

    const handlePaymentStatus = id => {
        const url = `https://agile-earth-86444.herokuapp.com/user/booking/${id}`;
        axiosPrivate.put(url, {
            paymentStatus: "shipped"
        })
            .then(data => {
                if (data?.data?.modifiedCount) {
                    refetch();
                    toast.success('Order shipped')
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>No.</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Product</th>
                            <th className='text-center'>User Name</th>
                            <th className='text-center'>Address</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Delete/ Transaction Id</th>
                            <th className='text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.data?.map((book, index) => <tr key={book._id}>
                                <th className='text-center'>{index + 1}</th>
                                <td className='text-center'><img className='w-14' src={book.img} alt="booking img" /></td>
                                <td className='text-center'>{book.name}</td>
                                <td className='text-center'>{book.userName}</td>
                                <td className='text-center'>{book.address}</td>
                                <td className='text-center'>{book.quantity}</td>
                                <td className='text-center'>
                                    {book.paid ? book.transactionId :
                                        <div className='flex justify-center align-middle'>
                                            <label
                                                onClick={() => handleDeleteProduct(book._id)}
                                                htmlFor="deleteAdminProduct" className="btn btn-xs bg-red-400 hover:bg-red-500 text-white border-none">Delete</label>
                                        </div>
                                    }
                                </td>
                                <td className='text-center'>
                                    {
                                        book.paid ? <button
                                            onClick={() => handlePaymentStatus(book._id)}
                                            className='btn btn-xs bg-green-400 hover:bg-green-500 text-white border-none'
                                        >{book.paymentStatus}
                                        </button> :
                                            <div>
                                                <button className='btn btn-xs bg-yellow-400 hover:bg-yellow-500 text-white border-none'>Unpaid</button>
                                            </div>
                                    }
                                </td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
            {
                openModal && <DeleteProductAdminModal refetch={refetch}
                    openModal={openModal}
                />
            }
        </div>
    );
};

export default ManageOrders;