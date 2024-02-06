import React, { useState } from "react";
import "./Input.css";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

const Input = ({ onTipCalculation }) => {
  const [billValue, setBillValue] = useState("");
  const [personValue, setPersonValue] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [tipResult, setTipResult] = useState(0);
  const [personResult, setPersonResult] = useState(0);

  const handleChangeBill = (e) => {
    const bill = parseFloat(e.target.value);
    setBillValue(isNaN(bill) ? "" : bill);
  };
  const handleChangePerson = (e) => {
    const person = parseFloat(e.target.value);
    setPersonValue(isNaN(person) ? "" : person);
  };

  const calculateTip = (percentage) => {
    const calculatedTipValue = (billValue / personValue / 100) * percentage;
    const calculatedPersonValue = billValue / personValue + calculatedTipValue;
    setTipResult(calculatedTipValue);
    setPersonResult(calculatedPersonValue);

    onTipCalculation(calculatedTipValue, calculatedPersonValue);
  };

  const handleClickFive = () => calculateTip(5);

  const handleClickTen = () => calculateTip(10);

  const handleClickFifteen = () => calculateTip(15);

  const handleClickTwenty = () => calculateTip(20);

  const handleClickTwentyfive = () => calculateTip(25);

  const handleCustomChange = (e) => {
    const customTip = parseFloat(e.target.value);

    setCustomValue(customTip);

    calculateTip(isNaN(customTip) ? 0 : customTip);
  };

  return (
    <div className="input">
      <div className="bill">
        <p className="label">Bill</p>
        <img className="icon" src={dollarIcon} />
        <input
          type="number"
          className="input-field"
          onChange={handleChangeBill}
          value={billValue}
        />
      </div>
      <div className="tip">
        <p className="label">Select Tip %</p>
        <div className="tip-btn">
          <input
            type="button"
            value="5%"
            className="btn"
            onClick={handleClickFive}
          />
          <input
            type="button"
            value="10%"
            className="btn"
            onClick={handleClickTen}
          />
          <input
            type="button"
            value="15%"
            className="btn"
            onClick={handleClickFifteen}
          />
          <input
            type="button"
            value="20%"
            className="btn"
            onClick={handleClickTwenty}
          />
          <input
            type="button"
            value="25%"
            className="btn"
            onClick={handleClickTwentyfive}
          />
          <input
            type="number"
            placeholder="Custom"
            className="custom"
            value={customValue}
            onChange={handleCustomChange}
          />
        </div>
      </div>
      <div className="people">
        <div className="label-error">
          <p className="label">Number of people</p>
          <p className="error-message">can't be zero</p>
        </div>
        <img className="icon" src={personIcon} />
        <input
          type="number"
          className="input-field"
          onChange={handleChangePerson}
          value={personValue}
        />
      </div>
    </div>
  );
};

export default Input;
