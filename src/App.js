import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Body Section/SideBar Section/Sidebar";
import Top from "./Components/Body Section/Top Section/Top";
import Overview from "./RouteList/Overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Overview from "../src/RouteList/Overview";
// import { useEffect } from "react";
// import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="bar">
        <Top />
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/overview" exact component={Overview} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
