import React, { useEffect } from "react";
import { useState } from "react";
import { axiosPost, axiosGet } from "../../../Services/axiosIntercepor";
import tableToCSV from "../../../Services/DownloadCSV";
import AddTask from "./AddTask/AddTask";
import "./Task.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const response = await axiosGet("api/v1/task/getAllTasks");
      setTasks(response.data);
      console.log(response.data);
    };
    getTasks();
  }, []);
  const showAddTaskModalHandler = () => {
    setShowAddTaskModal((prev) => !prev);
  };

  return (
    <>
      <div className="Products">
        <h4
          className="productTitle mt-5 ps-5 mb-5"
          onClick={showAddTaskModalHandler}
        >
          Add Task
        </h4>
        <h4 style={{ color: "black", cursor: "pointer" }}>
          <i onClick={() => tableToCSV("task")}>Download</i>
        </h4>
        <div className="addProducts">
          <div>
            <AddTask
              openModal={showAddTaskModal}
              closeModal={showAddTaskModalHandler}
            />
          </div>
        </div>
        <div className="tableWhole">
          <table className="table" id="task">
            <thead className="tableHead">
              <tr>
                <th scope="col" className="tableName">
                  Id
                </th>
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
                  Task Pay
                </th>
                <th scope="col" className="tableName">
                  Action
                </th>
                <th scope="col" className="tableName">
                  Status
                </th>
                <th scope="col" className="tableName">
                  Completion date
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{task.task_id}</td>
                  <td>{task.task_name}</td>
                  <td>{task.task_description}</td>
                  <td>{task.task_pay}</td>
                  <td>{task.task_status}</td>
                  <td>{task.completion_date}</td>
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

export default Task;
