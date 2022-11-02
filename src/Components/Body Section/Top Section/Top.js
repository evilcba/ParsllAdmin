import React from "react";
import "./Top.css";
import parsllLogo from "../Images/parsllLogo.png";
import SearchIcon from "@mui/icons-material/Search";
// import ReactTooltip from "react-tooltip";
// import PageviewIcon from "@mui/icons-material/Pageview";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
const Top = () => {
  return (
    <>
      <section>
        <div className="Bar">
          <div>
            <img src={parsllLogo} className="parsllLogo" />
          </div>

          <div className="Icons">
            <div className="IconImage">{<SearchIcon className="Icon" />}</div>
            <input type="search" className="searchBar" placeholder="search.." />
            <div>
              <AdminPanelSettingsIcon className="settings" />
              {/* <Route to="/Employee"> */}
              {/* <AdminPanelSettingsIcon className="settings" /> */}
              {/* </Route> */}
              {/* <p className="settings">My Profile</p> */}
              {/* <i className="bi bi-person-circle settings"></i> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Top;
