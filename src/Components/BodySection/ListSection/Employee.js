import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { axiosGet } from "../../Services/axiosIntercepor";

const User = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axiosGet("api/v1/employee/getAllEmployees", {});
        setEmployees(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getEmployees();
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
              {employees.map(
                (
                  { employee_id, register_date, full_name, email, phone, task },
                  index
                ) => (
                  <tr key={index}>
                    <th scope="row">{employee_id}</th>
                    <td>{full_name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{register_date}</td>
                    <td>{}</td>
                    <td>
                      <i className="bi bi-pen"></i>
                      <i className="bi bi-trash3"></i>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
