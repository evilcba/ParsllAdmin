// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../src/Components/Body Section/SideBarSection/Sidebar";
import Top from "../src/Components/Body Section/Top Section/Top";
import Products from "./Components/Body Section/List Section/Products";

function App() {
  return (
    <div className="App">
      <div>
        <Top />
      </div>
      <div className="Sidebars" style={{ display: "flex" }}>
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;
