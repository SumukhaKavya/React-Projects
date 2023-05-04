import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    setInput(input + value);
  }

  const handleClear = () => {
    setInput('');
  }

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  }

  const handleCalculate = () => {
    setInput(eval(input));
  }

  const handlePercentage = () => {
    setInput(eval(input)/100);
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={input} disabled />
      <div className="buttons">
        <button className="function" value="C" onClick={handleClear}>C</button>
        <button className="operator" value="%" onClick={handlePercentage}>%</button>
        <button className="operator" value="/" onClick={handleClick}>/</button>
        <button className="operator" value="*" onClick={handleClick}>x</button>
        <button className="operator" value="-" onClick={handleClick}>-</button>
        <button className="number" value="7" onClick={handleClick}>7</button>
        <button className="number" value="8" onClick={handleClick}>8</button>
        <button className="number" value="9" onClick={handleClick}>9</button>
        <button className="operator" value="+" onClick={handleClick}>+</button>
        <button className="number" value="4" onClick={handleClick}>4</button>
        <button className="number" value="5" onClick={handleClick}>5</button>
        <button className="number" value="6" onClick={handleClick}>6</button>
        <button className="equal" value="=" onClick={handleCalculate}>=</button>
        <button className="number" value="1" onClick={handleClick}>1</button>
        <button className="number" value="2" onClick={handleClick}>2</button>
        <button className="number" value="3" onClick={handleClick}>3</button>
        <button className="operator" value="(" onClick={handleClick}>(</button>
        <button className="operator" value=")" onClick={handleClick}>)</button>
        <button className="number" value="0" onClick={handleClick}>0</button>
        <button className="decimal" value="." onClick={handleClick}>.</button>
        <button className="backspace" value="backspace" onClick={handleBackspace}>⌫</button>
        
      </div>
    </div>
  );
}

export default Calculator;
