import { useState } from "react";
import "react-dropdown/style.css";
import style from "../css/Body.module.css";
import Navbar from "../Navbar/Navbar";
import ChartComponent from "../Chart/Chart";
import User from "../convert/convert";
import Detailsheader from "../DetailsHeader/detailsheader";

export default function Details() {
   
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("AED");
   

  
  return (
    <div className={style.parent}>
      <Navbar from={from} to={to} />
      <Detailsheader from={from} to={to} />
      <User />
       <ChartComponent from={from} to={to} /> 

   
    </div>
  );
}
