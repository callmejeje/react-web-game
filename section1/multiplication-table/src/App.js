// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// let num1 = Math.ceil(Math.random() * 9);
// let num2 = Math.ceil(Math.random() * 9);

// function makeNum() {
//   num1 = Math.ceil(Math.random() * 9);
//   num2 = Math.ceil(Math.random() * 9);

//   console.log("makeNum()");
// }

const Answer = ({ onChange }) => {
  return (
    <div className="answer">
      <input type="number" onChange={onChange}></input>
    </div>
  );
};

function App() {
  const [answer, setAnswer] = useState(undefined);
  const [correct, setCorrect] = useState(undefined);

  const [nums, setNums] = useState([
    Math.ceil(Math.random() * 9),
    Math.ceil(Math.random() * 9),
  ]);

  const Question = () => {
    return <div>{`${nums[0]} 곱하기 ${nums[1]}는?`}</div>;
  };

  function isCorrect(num1, num2, answer) {
    /*
    // console.log(
    //   "num1 : " +
    //     Number(num1) +
    //     ", num2 : " +
    //     Number(num2) +
    //     ", answer : " +
    //     Number(answer)
    // );
    // setCorrect(Number(num1) * Number(num2) === Number(answer));
    // setAnswer(undefined);

    // console.log("in isCorrect, correct : " + correct);

    // if (correct) {
    //   makeNum();
    // }
*/
    return Number(num1) * Number(num2) === Number(answer);
  }

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const onClickCorrect = () => {
    setCorrect(isCorrect(nums[0], nums[1], answer));
  };

  const onClickSetNum = () => {
    if (correct) {
      setNums([Math.ceil(Math.random() * 9), Math.ceil(Math.random() * 9)]);
    }
  };

  return (
    <div className="App">
      {/* <div>{`${num1} 곱하기 ${num2}는?`}</div> */}
      <Question />
      {/* <input type="number" value={answer} onChange={onChangeAnswer}></input> */}
      <Answer onChange={onChangeAnswer} />
      {/* <button onClick={() => isCorrect(num1, num2, answer)}>입력</button> */}
      <button
        // type="submit"
        onClick={() => {
          onClickCorrect();
          onClickSetNum();
        }}
      >
        입력
      </button>
      {/* {correct ? makeNum() : undefined} */}
      <div>{correct ? "성공!" : correct !== undefined ? "실패..." : ""}</div>
    </div>
  );
}

export default App;
