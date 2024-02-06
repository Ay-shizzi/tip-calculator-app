import React from "react";
import "./Result.css";
const Result = ({ tipResult, personResult, onReset }) => {
  const formattedTipResult =
    isNaN(tipResult) || !isFinite(tipResult) ? "0.00" : tipResult.toFixed(2);
  const formattedPersonResult =
    isNaN(personResult) || !isFinite(personResult)
      ? "0.00"
      : personResult.toFixed(2);

  const handleReset = () => {
    onReset();
  };

  return (
    <div className="result">
      <div className="result-output">
        <div className="tip-amount result-description">
          <div className="title">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="bill">
            <h1>${formattedTipResult}</h1>
          </div>
        </div>
        <div className="total result-description">
          <div className="title">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="bill">
            <h1>${formattedPersonResult}</h1>
          </div>
        </div>
      </div>
      <div className="result-button">
        <input
          type="button"
          value="RESET"
          className="result-btn"
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default Result;
