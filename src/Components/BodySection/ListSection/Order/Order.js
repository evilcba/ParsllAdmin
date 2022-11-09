import React, { useEffect, useState } from "react";
import { axiosGet } from "../../../Services/axiosIntercepor";
import { logIn } from "../../../Services/helpers";
import "./Order.css";

const Order = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentPrice, setPaymentPrice] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await logIn({
          user: "sagar@gmail.com",
          password: "parsll",
        });
        const response = await axiosGet("/api/v1/order/getAllOrders", {});
        setOrders(response.data);
      } catch (error) {}
    };
    getOrders();
  }, []);

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
                  Order_id
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
                  Order_status
                </th>
                <th scope="col" className="tableName">
                  Order_description
                </th>
                <th scope="col" className="tableName">
                  Order_date
                </th>

                <th scope="col" className="tableName">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr>
                  <th scope="row">{order.user_id}</th>
                  <th scope="row">{order.order_id}</th>

                  <td>{order.payment_method}</td>
                  <td>{order.order_price}</td>
                  <td>{order.payment}</td>

                  <td>{order.order_status}</td>
                  <td>{order.order_description}</td>
                  <td>{order.order_date}</td>

                  <td>
                    <i className="bi bi-pen"></i>
                    <i className="bi bi-trash3"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
