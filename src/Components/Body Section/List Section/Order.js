import React, { useState } from "react";
import "./Order.css";

const Order = () => {
  const[paymentMethod,setPaymentMethod]=useState('');
  const[paymentPrice,setPaymentPrice]=useState('');
  const[paymentStatus,setPaymentStatus]=useState('');

  
  return (
    <>
      <div className="Products">
        <h4 className="productTitle mt-5 ps-5 mb-5">Total Orders</h4>

        <div className="tableWhole">
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th scope="col" className="tableName">
                  User_id
                </th>
                <th scope="col" className="tableName">
                  Payment_method
                </th>

                <th scope="col" className="tableName">
                  Payment_price
                </th>
                <th scope="col" className="tableName">
                  Payment_status
                </th>
              
                <th scope="col" className="tableName">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">10/18/2022</th>
                <td>Documents</td>
                <td>Rs 15,000</td>
             
                <td>Inprogress</td>
         
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
