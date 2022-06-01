import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteConfirmModal from '../User/Operations/DeleteConfirmModal';

const ManageOrder = () => {
    const [orders, setOrder] = useState();
    const [deleteOrder, setDeleteOrder] = useState(null);

    useEffect(() => {
        fetch("https://hidden-ravine-16154.herokuapp.com/orders").then(res => res.json()).then(data => {
            setOrder(data);
        })
    }, [])

    const handleApprovedProduct = (id) => {
        fetch(
            `https://hidden-ravine-16154.herokuapp.com/shippedOrder/${id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ orderStatus: "shipped" }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    fetch("https://hidden-ravine-16154.herokuapp.com/orders").then(res => res.json()).then(result => {
                        setOrder(result);
                    })
                    toast.success("The Product Shipment Successfull !");
                }
            });
    };
    return (
        <div>
            <div className='overflow-x-auto my-5'>
                <table className='table w-full'>
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>User Email</th>
                            <th>User Phone</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Order Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {orders?.map((order, index) => (
                            <tr className='hover text-center'>
                                <th>{index + 1}</th>
                                <td>{order?.userEmail}</td>
                                <td>{order?.userPhone}</td>
                                <td>{order?.productName}</td>
                                <td>{order?.orderQuantity}</td>
                                <td>{order?.orderStatus}</td>
                                <td>
                                    <button
                                        className={`btn btn-sm btn-success ${order.orderStatus === "pending"
                                                ? "active"
                                                : "disabled"
                                            } font-bold mr-2`}
                                        onClick={() => {
                                            handleApprovedProduct(order?._id);
                                        }}
                                    >
                                        approved
                                    </button>
                                    <label
                                        for='delete-confirm-modal'
                                        className={`btn btn-sm btn-danger ${order.orderStatus === "unpaid"
                                                ? "active"
                                                : "disabled"
                                            } font-bold mr-2`}
                                        onClick={() => setDeleteOrder(order)}
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deleteOrder && (
                <DeleteConfirmModal
                    order={deleteOrder}
                ></DeleteConfirmModal>
            )}
        </div>
    );
};

export default ManageOrder;