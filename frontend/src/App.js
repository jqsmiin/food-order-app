import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import SellFood from "./pages/SellFood";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Foods from "./pages/Foods";
import PrivateRoute from "./components/PrivateRoute";
import Food from "./pages/Food";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/food/:id" element={<Food />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sell-food" element={<SellFood />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-up/:user" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/foods" element={<Foods />} />
        </Routes>
        <ToastContainer limit={1} />
      </Router>
    </>
  );
}

export default App;
