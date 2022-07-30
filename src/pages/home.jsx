import { useEffect, useState } from "react";
import Axios from "axios";
import style from "../css/Body.module.css";
import Navbar from "../Navbar/Navbar";
import Cardsgrid from "../Cards/Cards";
import User from "../convert/convert";
import HomeHeader from "../Homeheader/Homeheader";

function Home() {
 
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("AED");
  const [options, setOptions] = useState([]);
  const [data, setdata] = useState([]);


  useEffect(() => {
    Axios.get(
      `https://v6.exchangerate-api.com/v6/71f801149f9d8f4f637cbca8/latest/${from}`
    ).then((res) => {
      console.log(res);
      setdata(res.data.conversion_rates);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(data));
    }, [data]);


  return (
    <div className={style.parent}>
      <Navbar from={from} to={to} />
      <HomeHeader/>
      <User />
      <Cardsgrid Data={options} from={from} to={to} />
    </div>
  );
}

export default Home;