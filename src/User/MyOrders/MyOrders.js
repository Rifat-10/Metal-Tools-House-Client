import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteConfirmModal from "../Operations/DeleteConfirmModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { getAuth } from "firebase/auth";

const MyOrders = () => {
  const [user] = useAuthState(getAuth());
  const navigate = useNavigate();
  const [value, setValues] = useState();
  const [deleteOrder, setDeleteOrder] = useState(null);

  const email = user?.email;

  const myOrder = async () => {
    await fetch(
      `https://hidden-ravine-16154.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setValues(data);
        // console.log(data);
      });
  }

  useEffect(() => {
    if (email) {
      myOrder()
    }
  }, []);

  

  console.log(email, value);

  return (
    <div>
      <div className='overflow-x-auto my-5'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Order Payable</th>
              <th>Order Status</th>
              <th>Transaction Id</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className=''>

            {value?.map((val, index) => (
              <tr className='hover text-center'>
                <td>{index}</td>
                <td>{val?.productId}</td>
                <td>{val?.productName}</td>
                <td>{val?.orderQuantity}</td>
                <td>{val?.orderPayable}</td>
                <td>{val?.orderStatus}</td>
                <td>{val?.transactionId}</td>
                <td>
                  <div>
                    <Link
                      to={`/dashboard/payment/${val?._id}`}
                      className={`btn btn-sm btn-primary font-bold mr-2 ${val?.transactionId ? "disabled" : "btn-success"}`}
                    >
                      Payment
                    </Link>
                    <label
                      for='delete-confirm-modal'
                      className={`btn btn-sm btn-danger font-bold ${val?.transactionId ? "disabled" : "btn-danger"}`}
                      onClick={() => setDeleteOrder(val)}
                    >
                      Delete
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteConfirmModal
          order={deleteOrder}
        ></DeleteConfirmModal>)}
    </div>
  )
};

export default MyOrders;
