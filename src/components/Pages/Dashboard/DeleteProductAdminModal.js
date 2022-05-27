import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';

const DeleteProductAdminModal = ({ openModal, refetch }) => {

    const handleDeleteOrder = id => {
        const url = `https://agile-earth-86444.herokuapp.com/booking/${id}`
        axiosPrivate.delete(url);
        toast.success('Order delete successful');
        refetch()
    }

    return (
        <>

            <input type="checkbox" id="deleteAdminProduct" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="deleteAdminProduct" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-12 mt-4">Are you sure? You want to delete this order?</h3>
                    <div className="modal-action">
                        <label
                            onClick={() => handleDeleteOrder(openModal)}
                            htmlFor="deleteAdminProduct" className="btn btn-xs bg-red-400 hover:bg-red-500 text-white border-none">Delete</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteProductAdminModal;