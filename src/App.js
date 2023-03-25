import React, { useState } from "react";
import './App.css';
import TestButton from "./TestButton";

export default function App() {
  const [counter, setCounter] = useState(0);

  const onButtonClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <TestButton onButtonClick={onButtonClick} />
      <div id="counter-div">The button has been clicked {counter} times.</div>
    </div>
  );
}
