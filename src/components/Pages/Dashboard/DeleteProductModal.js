import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';

const DeleteProductModal = ({ openModal, refetch }) => {

    const handleDeleteProduct = (id) => {
        const url = `http://localhost:5000/parts/${id}`

        axiosPrivate.delete(url).then(data => {
            if (data.data.deletedCount > 0) {
                toast.success('Delete successful');
                refetch();
            }
        })
    }

    return (
        <>


            <input type="checkbox" id="deleteProduct" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="deleteProduct" class="btn btn-success btn-sm text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-14 mt-6">Are you sure! You want to delete this product?</h3>
                    <div className="modal-action">
                        <label
                            onClick={() => handleDeleteProduct(openModal)}
                            htmlFor="deleteProduct" className="btn bg-red-400 hover:bg-red-500 border-none  text-white btn-sm px-6 py-2">Delete</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteProductModal;