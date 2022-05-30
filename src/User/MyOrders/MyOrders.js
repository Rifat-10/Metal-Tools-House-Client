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

  const email = user?.email;

  useEffect(() => {
    if (email) {
      fetch(
        `https://hidden-ravine-16154.herokuapp.com/orders/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setValues(data)
        });
    }
  },[]);

  console.log(email, value);

  return(
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

               <tr className='hover text-center'>
                 {/* <th>{index + 1}</th>
                 <td>{myOrder.productId}</td>
                 <td>{myOrder.orderQuantity}</td>
                 <td>{myOrder.orderPayable} $</td>
                 <td>{myOrder.orderStatus}</td>
                 <td>{myOrder.transactionId}</td> */}
                 <td>1</td>
                 <td>{value?.productId}</td>
                 <td>{value?.productName}</td>
                 <td>{value?.orderQuantity}</td>
                 <td>{value?.orderPayable}</td>
                 <td>{value?.orderStatus}</td>
                 <td>{value?.transactionId}</td>
                 <td>
                   {value?.transactionId ? (
                     <div>
                       <Link
                         to={`/dashboard/payment/${value?._id}`}
                         className='btn btn-sm btn-primary font-bold mr-2'
                         disabled='disabled'
                       >
                         Payment
                       </Link>
                       <label
                         for='delete-confirm-modal'
                         className='btn btn-error btn-sm font-bold'
                         disabled='disabled'
                        //  onClick={() => setDeleteOrder(1)}
                       >
                         Delete
                       </label>
                     </div>
                   ) : (
                     <div>
                       <Link
                        to={`/dashboard/payment/${value?._id}`}
                        className='btn btn-sm btn-primary font-bold mr-2'
                       >
                         Payment
                       </Link>
                       <label
                         for='delete-confirm-modal'
                         className='btn btn-sm btn-error font-bold'
                       >
                         Delete
                       </label>
                     </div>
                   )}
                 </td>
               </tr>
           </tbody>
         </table>
       </div>
       {/* {deleteOrder && (
         <DeleteConfirmModal
           order={deleteOrder}
           refetch={refetch}
         ></DeleteConfirmModal> */}
     </div>
  )


  // // useEffect(() => {
  // //   fetch(`http://localhost:5000/myOrders/${email}`)
  // //     .then((res) => res.json())
  // //     .then((data) => setOrderDet(data));
  // // }, []);
  
  // const { data: myOrders, isLoading, refetch } = useQuery("myOrders",
  //   () =>
  //     fetch(
  //       `http://localhost:5000/myOrders/${email}`
  //     ).then((res) => res.json())
  // );

  // if (isLoading) {

  //   return <Loading></Loading>
  // }

  // console.log(user.email, myOrders);
  // const goToPaymentPage = (id) => {
  //   navigate(`/dashboard/payment/${id}`);
  // };

  // return (
  //   <div>
  //     <div className='overflow-x-auto my-5'>
  //       <table className='table w-full'>
  //         {/* <!-- head --> */}
  //         <thead>
  //           <tr className='text-center'>
  //             <th>#</th>
  //             <th>Product Id</th>
  //             <th>Order Quantity</th>
  //             <th>Order Payable</th>
  //             <th>Order Status</th>
  //             <th>Transaction Id</th>
  //             <th>Options</th>
  //           </tr>
  //         </thead>
  //         <tbody className='text-white'>

  //           {myOrders.map((myOrder, index) => (
  //             <tr className='hover text-center'>
  //               <th>{index + 1}</th>
  //               <td>{myOrder.productId}</td>
  //               <td>{myOrder.orderQuantity}</td>
  //               <td>{myOrder.orderPayable} $</td>
  //               <td>{myOrder.orderStatus}</td>
  //               <td>{myOrder.transactionId}</td>
  //               <td>
  //                 {myOrder.transactionId ? (
  //                   <div>
  //                     <Link
  //                       to='/dashboard/payment'
  //                       for='delete-confirm-modal'
  //                       className='btn btn-sm btn-primary font-bold mr-2'
  //                       disabled='disabled'
  //                     >
  //                       Payment
  //                     </Link>
  //                     <label
  //                       for='delete-confirm-modal'
  //                       className='btn btn-sm btn-error font-bold'
  //                       disabled='disabled'
  //                       onClick={() => setDeleteOrder(1)}
  //                     >
  //                       Delete
  //                     </label>
  //                   </div>
  //                 ) : (
  //                   <div>
  //                     <button
  //                       onClick={() => {
  //                         goToPaymentPage(myOrder._id);
  //                       }}
  //                       className='btn btn-sm btn-primary font-bold mr-2'
  //                     >
  //                       Payment
  //                     </button>
  //                     <label
  //                       for='delete-confirm-modal'
  //                       className='btn btn-sm btn-error font-bold'
  //                       onClick={() => setDeleteOrder(myOrder)}
  //                     >
  //                       Delete
  //                     </label>
  //                   </div>
  //                 )}
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //     {deleteOrder && (
  //       <DeleteConfirmModal
  //         order={deleteOrder}
  //         refetch={refetch}
  //       ></DeleteConfirmModal>
  //     )}
  //   </div>
  // );
};

export default MyOrders;
