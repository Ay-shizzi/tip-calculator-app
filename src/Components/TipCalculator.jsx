import React, { useState } from "react";
import "./TipCalculator.css";
import Input from "../Components/Input";
import Result from "../Components/Result";

const TipCalculator = () => {
  const [tipResult, setTipResult] = useState(0);
  const [personResult, setPersonResult] = useState(0);

  const handleTipCalculation = (calculatedTip, calculatedPerson) => {
    setTipResult(calculatedTip);
    setPersonResult(calculatedPerson);
  };

  const handleReset = () => {
    setTipResult(0);
    setPersonResult(0);
  };

  return (
    <div className="container">
      <div className="tip-calculator">
        <div className="header">
          <h3 className="header-title">
            SPLI <span>TTER</span>
          </h3>
        </div>
        <div className="calculator">
          <Input onTipCalculation={handleTipCalculation} />
          <Result
            tipResult={tipResult}
            personResult={personResult}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
