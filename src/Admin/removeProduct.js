import React from 'react';
import { toast } from "react-toastify";

const removeProduct = ({product}) => {
    const { name, _id } = product;
    console.log(product);

    const handleDeleteProduct = async (id) => {
        await fetch(
            `http://localhost:5000/tool/${id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged === true) {
                    toast.success("The Product Deleted Successfully");
                }
            });
    };
    return (
        <div>
            <div>
                <input
                    type='checkbox'
                    id='delete-product-modal'
                    className='modal-toggle'
                />
                <div className='modal modal-bottom sm:modal-middle'>
                    <div className='modal-box'>
                        <h3 className='font-bold text-lg text-error'>
                            Are you sure you want to delete Tool for {name}?
                        </h3>
                        <p className='py-4'>
                            Once you delete the product, The product will be removed from
                            the system.
                        </p>
                        <div className='modal-action'>
                            <label
                                for='delete-product-modal'
                                className='btn'
                                onClick={() => {
                                    handleDeleteProduct(_id);
                                }}
                            >
                                Delete
                            </label>
                            <label for='delete-product-modal' className='btn'>
                                Close
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default removeProduct;