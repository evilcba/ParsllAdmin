import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/BodySection/SideBarSection/Sidebar";
import Top from "./Components/BodySection/Top Section/Top";
import Products from "./Components/BodySection/ListSection/Product/Products";
import Task from "./Components/BodySection/ListSection/Task/Task";
import Order from "./Components/BodySection/ListSection/Order/Order";
import User from "./Components/BodySection/ListSection/User/User";
import Employee from "./Components/BodySection/ListSection/Employee";

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
            <Route exact path="/" element={<Products />} />
            <Route exact path="/Products" element={<Products />}></Route>
            <Route exact path="/Task" element={<Task />}></Route>
            <Route exact path="/Order" element={<Order />}></Route>
            <Route exact path="/User" element={<User />}></Route>
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </Router>

        {/* <Products />
        <Task /> */}
      </div>
    </div>
  );
}

export default App;
