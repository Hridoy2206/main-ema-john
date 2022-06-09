import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import Order from "./component/Order/Order";
import Product from "./component/Product/Product";
import RequarAuth from "./component/RequarAuth/RequarAuth";
import Shipment from "./component/Shipment/Shipment";
import Shop from "./component/Shop/Shop";
import Signup from "./component/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/shipment" element={
          <RequarAuth>
            <Shipment></Shipment>
          </RequarAuth>
        }></Route>
        <Route
          path="/about"
          element={
            <RequarAuth>
              <About></About>
            </RequarAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
