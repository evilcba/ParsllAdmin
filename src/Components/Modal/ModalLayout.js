import React from "react";
import useComponentVisible from "../Hooks/useVisible";
import "./Modal.css";
import PropTypes from "prop-types";
// import { UilTimes } from "@iconscout/react-unicons";
const ModalLayout = ({ children, closeModal, openModal, title }) => {
  const { ref } = useComponentVisible(openModal, closeModal);

  return (
    openModal && (
      <div className="modal-background">
        <div className="modal-container" ref={ref}>
          <div className="modal-title">
            <div className="modal-title--main">{title}</div>
            <div className="modal__title--sec">
              <span
                onClick={closeModal}
                style={{ color: "black", cursor: "pointer" }}
              >
                X
              </span>
              {/* <UilTimes size="24" onClick={closeModal} /> */}
            </div>
          </div>
          {children}
        </div>
      </div>
    )
  );
};
ModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalLayout;
