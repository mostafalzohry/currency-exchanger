import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import style from "../css/Body.module.css";

function User() {
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("AED");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
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
    convert();
  }, [data]);

  function convert() {
    setOutput(input * data[to]);
  }

  function opposite() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className={style.Converter}>
      <div className="container">
        <div className={style.CurrencyExchanger}>
          <div className={style.CurrencyInputuser}>
            <p>Amount</p>
            <input
              className={style.CurrencyInput}
              type="number"
              name="Amount"
              placeholder="Enter Your Amount"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className={style.Select}>
            <div className={style.dropdown}>
              <p>From</p>
              <Dropdown
                className={style.dropbutton}
                options={options}
                onChange={(e) => {
                  setFrom(e.value);
                }}
                value={from}
              />
            </div>

            <div className="switch d-flex mb-3 align-items-end">
              <HiSwitchHorizontal
                size="40px"
                onClick={() => {
                  opposite();
                }}
              />
            </div>
            <div className={style.dropdown}>
              <p>To</p>
              <Dropdown
                options={options}
                onChange={(e) => {
                  setTo(e.value);
                }}
                value={to}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end w-100 px-5">
          <div className="w-50">
            <button
              className={style.converterButton}
              onClick={() => {
                convert();
              }}
            >
              Convert
            </button>
          </div>
        </div>

        <div className=" d-flex justify-content-between px-3 py-4">
          <div className="w-50">
            <input
              className={style.ConvertInput}
              value={
                output.toFixed(2) === "NaN"
                  ? "XX.XX"
                  : input + " " + from + " = " + output.toFixed(2) + " " + to
              }
            />
          </div>
          <div className=" w-50 d-flex justify-content-center">
            <input
              className={style.displayPrice}
              value={
                output.toFixed(2) === "NaN"
                  ? "XX.XX"
                  : output.toFixed(2) + " " + to
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
