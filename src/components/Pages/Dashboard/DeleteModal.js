import React from 'react';
import axiosPrivate from '../../../api/axiosPrivate';
import { toast } from 'react-toastify';

const DeleteModal = ({ openModal, booking, refetch }) => {

    const deleteProduct = id => {
        const singleId = booking?.data?.find(b => b._id === id);

        const url = `https://agile-earth-86444.herokuapp.com/booking/${singleId._id}`;
        axiosPrivate.delete(url)
            .then(data => {
                if (data.data.deletedCount) {
                    toast.success('Delete successful')
                    refetch()
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="productDeleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="productDeleteModal" className="btn btn-sm text-white bg-red-400 hover:bg-red-500 btn-circle absolute border-none right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label
                            onClick={() => deleteProduct(openModal)}
                            htmlFor="productDeleteModal" className="btn btn-sm">Delete</label>
                        <label htmlFor="productDeleteModal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;