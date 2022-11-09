import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { axiosGet } from "../../../Services/axiosIntercepor";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axiosGet("api/v1/user/getAllUsers", {});
        setUsers(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="Products">
        <h4 className="productTitle mt-5 ps-5 mb-5">All Users</h4>

        <div className="tableWhole">
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th scope="col" className="tableName">
                  User_id
                </th>

                <th scope="col" className="tableName">
                  Full_name
                </th>
                <th scope="col" className="tableName">
                  Email
                </th>

                <th scope="col" className="tableName">
                  Phone
                </th>
                <th scope="col" className="tableName">
                  Register_date
                </th>

                <th scope="col" className="tableName">
                  Action
                </th>
              </tr>
            </thead>
            {/* {console.log(users)} */}
            <tbody>
              {users.map(
                (
                  { user_id, register_date, full_name, email, phone },
                  index
                ) => (
                  <tr key={index}>
                    <th scope="row">{user_id}</th>
                    <td>{full_name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{register_date}</td>
                    <td></td>
                    <td>
                      <i className="bi bi-pen"></i>
                      <i className="bi bi-trash3"></i>
                    </td>
                  </tr>
                )
              )}
              {/* <tr>
                <th scope="row">14/18/2022</th>
                <td>Website</td>
                <td>Rs 50,000</td>
                <td>@fat</td>
                <td>ongoing</td>
                <td></td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">09/18/2022</th>
                <td>Digital Marketing</td>
                <td>Rs 35,000</td>
                <td></td>
                <td>completed</td>
                <td></td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr> */}
              {/* })} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
