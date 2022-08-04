// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// const Answer = ({ onChange }) => {
//   return (
//     <div className="answer">
//       <input type="number" onChange={onChange}></input>
//     </div>
//   );
// };

function App() {
  const [answer, setAnswer] = useState(undefined);
  const [correct, setCorrect] = useState(undefined);

  const [nums, setNums] = useState([
    Math.ceil(Math.random() * 9),
    Math.ceil(Math.random() * 9),
  ]);

  // const Question = () => {
  //   return <div>{`${nums[0]} 곱하기 ${nums[1]}는?`}</div>;
  // };

  // function isCorrect(num1, num2, answer) {
  //   return Number(num1) * Number(num2) === Number(answer);
  // }

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const onClickCorrect = () => {
    // setCorrect(isCorrect(nums[0], nums[1], answer));
    if (Number(nums[0]) * Number(nums[1]) === Number(answer)) {
      setCorrect(true);
      setNums([Math.ceil(Math.random() * 9), Math.ceil(Math.random() * 9)]);
    } else {
      setCorrect(false);
    }
    // onClickSetNum();
  };

  // const onClickSetNum = () => {
  //   console.log("correct: " + correct);
  //   if (correct === true) {
  //     setNums([Math.ceil(Math.random() * 9), Math.ceil(Math.random() * 9)]);
  //   } else {
  //     let num0 = nums[0];
  //     let num1 = nums[1];
  //     setNums([num0, num1]);
  //   }
  // };

  return (
    <div className="App">
      <div>{`${nums[0]} 곱하기 ${nums[1]}는?`}</div>
      {/* <Question /> */}
      <input type="number" onChange={onChangeAnswer}></input>
      {/* <Answer onChange={onChangeAnswer} /> */}
      {/* <button onClick={() => isCorrect(num1, num2, answer)}>입력</button> */}
      <button
        // type="submit"
        onClick={() => {
          onClickCorrect();
          // onClickSetNum();
        }}
      >
        입력
      </button>
      <div>{correct ? "성공!" : correct !== undefined ? "실패..." : ""}</div>
    </div>
  );
}

export default App;
