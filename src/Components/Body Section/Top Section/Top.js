import React from "react";
import "./Top.css";
import parsllLogo from "../Images/parsllLogo.png";
import SearchIcon from "@mui/icons-material/Search";
// import PageviewIcon from "@mui/icons-material/Pageview";
import SettingsIcon from "@mui/icons-material/Settings";
// import { Link } from "react-router-dom";
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
              <SettingsIcon className="settings" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Top;
