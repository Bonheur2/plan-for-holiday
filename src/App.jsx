import React from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Navigation/Home";
import About from "./components/Navigation/About";
import Destination from "./components/Navigation/Destination";
import Tour from "./components/Navigation/Tour";
import Contact from "./components/Navigation/Contact";
import Footer from "./Footer";
import Login from "./components/Navigation/Login";
import Register from "./components/Navigation/Register";
import Dashboard from "./components/Navigation/Dashboard";
import SingleTour from "./components/Navigation/SingleTour";
import Users from "./components/Navigation/dashboard/Users";
import Tourdash from "./components/Navigation/dashboard/Tourdash";
import Booking from "./components/Navigation/Booking";
import BarChart from "./components/Navigation/dashboard/MYchart";
import Message from "./components/Navigation/Message";
import ProdectedRoute from "./components/Navigation/dashboard/ProdectedRoute";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const Dash = () => {
  return (
    <div>
      <ProdectedRoute>
      <Dashboard />
      </ProdectedRoute>
    </div>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/tour/:_id" element={<SingleTour />}></Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<Register />} ></Route>
        <Route path="/tour" element={<Tour />}></Route>
        <Route path="/dashboard" element={<Dash />}>
          <Route path="barchart" element={<BarChart />} />
          <Route path="users" element={<Users />} />
          <Route path="dashtour" element={<Tourdash />} />
          <Route path="booking" element={<Booking />} />
          <Route path="message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;