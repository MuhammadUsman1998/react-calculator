import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Clock from "./components/Clock";

const App = () => {
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [output, setOutput] = useState(null);

  // const onChange = (e) => {
  //   const val = e.target.value;
  //   [e.target.name] = val;
  //   setName(val);
  // };
  const onChangeHandler1 = (e) => {
    const val = e.target.value;
    [e.target.name] = val;
    setNum1(val);
    setInput("");
  };
  const onChangeHandler2 = (e) => {
    const val = e.target.value;
    [e.target.name] = val;
    setNum2(val);
  };

  const multiplyHandler = () => {
    const total = num1 * num2;
    setOutput(+total);
  };

  const divideHandler = () => {
    const total = num1 / num2;
    setOutput(+total);
  };
  const AdditionHandler = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    const total = n1 + n2;
    setOutput(total);
  };

  const submitBtn = (e) => {
    e.preventDefault();
    setNum1(...num1, input);
  };

  return (
    <div className="App">
      <div className="calc">
        <h2>React Calculator</h2>
      </div>
      <form onSubmit={submitBtn}>
        <input type="number" title="Enter Number" onChange={onChangeHandler1} />
        <button title="multiply" onClick={multiplyHandler}>
          *
        </button>
        <button title="divide" onClick={divideHandler}>
          /
        </button>
        <button title="Addition" onClick={AdditionHandler}>
          +
        </button>
        <input type="number" title="Enter Number" onChange={onChangeHandler2} />

        <button>{output}</button>
        {/* <h1>{output}</h1> */}
        {console.log(output)}
        <Button data={"Usman"} />
        <Button data={"Ali"} />
        <Button data={"Ahmad"} />
        <Button data={"Umer"} />
        <Button data={"Haseeb"} />
        <Clock />
      </form>
    </div>
  );
};

export default App;
