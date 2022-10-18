import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../src/Components/Body Section/SideBarSection/Sidebar";
import Top from "../src/Components/Body Section/Top Section/Top";
import Products from "./Components/Body Section/List Section/Products";
import Task from "./Components/Body Section/List Section/Task";
import Order from "./Components/Body Section/List Section/Order";
import User from "./Components/Body Section/List Section/User";

function App() {
  return (
    <div className="App">
      <div>
        <Top />
      </div>
      <div className="Sidebars" style={{ display: "flex" }}>
        <Router>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Products />}></Route>
            <Route exact path="/Products" element={<Products />}></Route>
            <Route exact path="/Task" element={<Task />}></Route>
            <Route exact path="/Order" element={<Order />}></Route>
            <Route exact path="/User" element={<User />}></Route>
          </Routes>
        </Router>

        {/* <Products />
        <Task /> */}
      </div>
    </div>
  );
}

export default App;
