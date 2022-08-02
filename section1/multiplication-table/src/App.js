import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const num1 = Math.ceil(Math.random() * 9);
const num2 = Math.ceil(Math.random() * 9);

function App() {
  const [answer, setAnswer] = useState(undefined);
  const [correct, setCorrect] = useState(false);

  function isCorrect(num1, num2, answer) {
    console.log(
      "num1 : " +
        Number(num1) +
        ", num2 : " +
        Number(num2) +
        ", answer : " +
        Number(answer)
    );
    setCorrect(Number(num1) * Number(num2) === Number(answer));
    console.log("in isCorrect, correct : " + correct);
  }

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="App">
      <div>
        {num1} 곱하기 {num2}는?
      </div>
      <input type="number" onChange={onChangeAnswer}></input>
      <button onClick={() => isCorrect(num1, num2, answer)}>입력</button>
      <div>{correct ? "성공!" : "실패..."}</div>
    </div>
  );
}

export default App;
