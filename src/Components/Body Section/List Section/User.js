import React from "react";
import "./User.css";

const User = () => {
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
                  Register_date
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
                  Password
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
                <td>@mdo</td>
                <td>Inprogress</td>
                <td></td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr>
              <tr>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
