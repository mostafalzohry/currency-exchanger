import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import style from "./Navbar.module.css";
import logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";

function Navbar(props) {


  var From = props.from;
  var To = props.to;
  
  return (
    <div className={style.parent}>
      <NavLink className={style.NavbarLink} to={"/"}>
        <img src={logo} className={style.Logo} />
      </NavLink>

      <div className=" w-100 d-flex justify-content-end align-items-center pt-3">
        <ul className="d-flex justify-content-around w-25 list-unstyled ">
          <li className={style.NavbarButton}>
            <NavLink className={style.NavbarLink} to={"/Details"}>
              {From}-{To} Details
            </NavLink>
          </li>
          <li className={style.NavbarButton}>
            <NavLink className={style.NavbarLink} to={"/Details"}>
              {From}-{To} Details
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
