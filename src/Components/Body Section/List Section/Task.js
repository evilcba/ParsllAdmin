import React from "react";
import "./Task.css";

const Task = () => {
  return (
    <>
      <div className="Products">
        <h4 className="productTitle mt-5 ps-5 mb-5">Tasks</h4>
        <div className="addProducts">
          <div>
            <form className="row g-3">
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Task_Name"
                />
              </div>

              <div className="col-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Task_Description"
                ></textarea>
              </div>

              <div class="col-12">
                <button type="submit" className="btn productButton">
                  Add Tasks
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="tableWhole">
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th scope="col" className="tableName">
                  Task_Id
                </th>
                <th scope="col" className="tableName">
                  Task_Name
                </th>
                <th scope="col" className="tableName">
                  Task_Description
                </th>
                <th scope="col" className="tableName">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td></td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>

                <td>@fat</td>
                <td></td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
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

export default Task;
