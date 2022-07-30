import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

function App(props) {
  let From = props.from;
  let to = props.to;
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Details" element={<Details from={From} to={to} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
