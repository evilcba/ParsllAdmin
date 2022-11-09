import React, { useState } from "react";
import ModalLayout from "../../../../Modal/ModalLayout";
import { axiosPost } from "../../../../Services/axiosIntercepor";

const AddTask = ({ closeModal, openModal }) => {
  const [Task_Name, setTaskName] = useState("");
  const [Task_Description, setTaskDescription] = useState("");
  const postTask = async () => {
    try {
      const res = await axiosPost(
        "api/v1/task/createTask",
        Task_Name,
        Task_Description
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ModalLayout closeModal={closeModal} openModal={openModal}>
      <form className="row g-3">
        <div className="">
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Task_Name"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Task_Description"
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>

        <div class="col-12">
          <button
            type="submit"
            className="btn productButton"
            onClick={postTask}
          >
            Add Tasks
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default AddTask;
