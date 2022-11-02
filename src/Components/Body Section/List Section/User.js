import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import "./User.css";

const User = () => {
const [users,setUsers]=useState([]);

useEffect(() =>{
  axios.get("api/v1/user/findUser")
  .then((res)=>{
    setUsers(res.data);
  
  })
},[])

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
                {/* <th scope="col" className="tableName">
                  Register_date
                </th> */}
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
            {/* {console.log(users)} */}
            <tbody>
            {/* { users.map((Users,index) =>{ */}

          
              {/* <tr key={index}>
                <th scope="row">{user_id}</th>
                <td>{register_date}</td>
                <td>{full_name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td></td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr> */}
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
                {/* })} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
