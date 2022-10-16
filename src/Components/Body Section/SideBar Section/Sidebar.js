// import React, { useEffect, useState } from "react";
import "./Sidebar.css";
// import fetchData from "../../../API/Fetch";
import React from "react";
// import { SideBarData } from "./SideBarData";
import SideBarData from "./SideBarData";
const Sidebar = () => {
  return (
    <>
      {
        <section>
          <div className="sideBar">
            <div className="itemName">OverViews</div>
            <div className="itemName">Reports</div>
            <div className="itemName">Produts</div>
            <div className="itemName">Team</div>
            <div className="itemName">Message</div>
            <div className="itemName">Support</div>
            <div className="itemName ">Logout</div>
            {/* <div>{SideBarData}</div> */}
          </div>
        </section>
      }
    </>
  );
};

export default Sidebar;
