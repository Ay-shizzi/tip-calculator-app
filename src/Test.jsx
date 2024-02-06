import React, { useState } from 'react';

const MyComponent = () => {
  // State to store the values of the two inputs
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  // States to store the calculated results
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);

  // Event handler for the first input
  const handleInput1Change = (event) => {
    const value = parseFloat(event.target.value);
    setInputValue1(value);
    setResult1((value / 100) * 35);
  };

  // Event handler for the second input
  const handleInput2Change = (event) => {
    const value = parseFloat(event.target.value);
    setInputValue2(value);
    setResult2((value * 60) / 30);
  };

  return (
    <div>
      {/* First input box with an onChange event handler */}
      <input
        type="number"
        value={inputValue1}
        onChange={handleInput1Change}
        placeholder="Enter a number for calculation 1..."
      />

      {/* Display the result of the first calculation */}
      {result1 !== null && (
        <p>
          Result 1: {result1}
        </p>
      )}

      {/* Second input box with an onChange event handler */}
      <input
        type="number"
        value={inputValue2}
        onChange={handleInput2Change}
        placeholder="Enter a number for calculation 2..."
      />

      {/* Display the result of the second calculation */}
      {result2 !== null && (
        <p>
          Result 2: {result2}
        </p>
      )}
    </div>
  );
};

export default MyComponent;
