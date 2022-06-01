import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [tools, setTool] = useState()
    const [deleteProduct, setDeleteProduct] = useState();

    useEffect(() => {
        fetch("https://hidden-ravine-16154.herokuapp.com/tools").then(res => res.json()).then(data => {
            setTool(data)
        })
    }, [])
    return (
        <div>
      <div className='overflow-x-auto my-5'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Minimum Order</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className=''>
            {tools?.map((tool, index) => (
              <tr className='hover text-center'>
                <th>{index + 1}</th>
                <td>{tool?.name}</td>
                <td>
                  <img src={tool?.img} alt='' height={75} width={75} />
                </td>
                <td>{tool?.price} $</td>
                <td>{tool?.available_quantity}</td>
                <td>{tool?.minimum_order_quantity}</td>
                <td>
                  <label
                    for='delete-product-modal'
                    className='btn btn-sm btn-danger font-bold'
                    onClick={() => setDeleteProduct(tool)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <removeProduct
          product={deleteProduct}
        ></removeProduct>
      )}
    </div>
    );
};

export default ManageProduct;