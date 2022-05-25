import React from 'react';
import useBooking from '../../../hooks/useBooking';

const MyOrder = () => {
    const [booking, isLoading, refetch, isError] = useBooking();

    const handleDateProduct = () => {

    };

    return (
        <div>
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
                                        onClick={handleDateProduct}
                                        htmlFor="productDeleteModal" className="btn btn-xs bg-red-400 text-white border-none hover:bg-red-500 mx-auto">Delete</label>
                                </td>

                                <td ><button className='btn btn-xs bg-yellow-400 hover:bg-yellow-500 text-white border-none'>UnPaid</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;