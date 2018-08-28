import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return (
    <div className="CalculatorDisplay">
      <span className="DisplayArea">{props.total}</span>
    </div>
  )
}

export default CalculatorDisplay