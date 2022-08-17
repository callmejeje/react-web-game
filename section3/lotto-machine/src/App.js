import { render } from "@testing-library/react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

function useInterval(callback, delay) {
  const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

/////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [nums, setNums] = useState([]);
  const [bonus, setBonus] = useState();
  const [loading, setLoading] = useState(true);
  const [ment, setMent] = useState("로또를 돌려보아요!");

  const makeNums = () => {
    let ranNum;
    if (!loading) {
      setNums([]);
      setBonus();
      setLoading(true);
      makeNums();
    }
    if (nums.length === 0) {
      setNums([Math.ceil(Math.random() * 40)]);
    } else if (nums.length > 0 && nums.length < 6) {
      ranNum =
        Math.ceil(Math.random() * (nums.length + 40 - nums[nums.length - 1])) +
        nums[nums.length - 1];
      setNums([...nums, ranNum]);
    } else {
      setBonus(Math.ceil(Math.random() * 45));
      setLoading(() => {
        // setMent(() => "로또 당첨 번호입니다!");
        return false;
      });
      setMent(() => "로또 당첨 번호입니다!");
    }
  };

  useInterval(makeNums, loading ? 1000 : null);

  return (
    <div className="App">
      <h1>오늘의 행운 번호</h1>
      {/* <div>{loading ? "로또를 돌려보아요!" : "로또 당첨 번호입니다!"}</div> */}
      <div>{ment}</div>
      {/* <div>{nums.map((num) => loadNums(num))}</div> */}
      <div>{nums.map((num) => num + " ")}</div>
      <div>보너스!</div>
      <div>{bonus}</div>
      <button
        onClick={() => {
          new Promise((resolve) => {
            resolve(setNums([]));
          }).then(() => makeNums());
          // makeNums();
        }}
      >
        다시!
      </button>
      {/* <button onClick={() => initalizeNums(setNums)}>다시!</button> */}
    </div>
  );
}

export default App;
