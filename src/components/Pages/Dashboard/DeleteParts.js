import React from 'react';;

const DeleteParts = ({ part, setOpenModal }) => {
    const { _id, name, img, description, minimumQuantity, availableQuantity, perUnitPrice } = part;

    const handleDeletePart = id => {
        setOpenModal(id)
    }

    return (
        <div className='p-1 rounded-lg bg-white shadow-xl'>
            <div>
                <img className='rounded mb-4 hover:scale-105 hover:transition hover:duration-1000 hover:ease-in-out' src={img} alt="parts images" />
            </div>
            <div className='px-2'>
                <h4 className='text-2xl mb-4 font-serif font-bold'>{name}</h4>
                <p className='mb-1 font-semibold'>Per Unit Price: <span className='font-bold'>{perUnitPrice}</span></p>
                <p className='mb-1 font-semibold'>Minimum Order Quantity: <span className='font-bold'>{minimumQuantity}</span></p>
                <p className='mb-1 font-semibold'>Available Quantity: <span className='font-bold'>{availableQuantity}</span></p>
                <p className='text-sm mt-4 font-semibold text-justify pr-4'>{description}</p>
                <div className='flex justify-center align-middle mt-4 mb-1'>

                    <label onClick={() => handleDeletePart(_id)}
                        htmlFor="deleteProduct" className='btn bg-red-400 hover:bg-red-500 border-none  text-white btn-sm px-8 py-2'>Delete
                    </label>

                </div>
            </div>
        </div>
    );
};

export default DeleteParts;