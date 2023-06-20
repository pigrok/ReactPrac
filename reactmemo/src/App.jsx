import { useState } from "react";
import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import { flushSync } from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>카운트 예제</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
