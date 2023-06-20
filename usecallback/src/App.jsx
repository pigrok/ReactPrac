import React, { useState, useCallback } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const boxesStyle = {
  display: "flex",
  marginTop: "10px",
};

function App() {
  console.log("App 컴포넌트가 렌더링되었습니다!");

  const [count, setCount] = useState(0);

  // 1을 증가시키는 함수
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  // 1을 감소시키는 함수
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  // count 초기화
  // box1이 props로 내려온 이 값을 왜 바뀌었다고 판단할까?
  // 불변성을 유지 해주는 방법을 통해 바꿔줘야함 => 함수도 객체이기 때문에
  // initCount는 새로운 주소 값을 같기 때문에 리-렌더링됨.
  // const initCount = () => {
  //   setCount(0);
  // };
  // useCallback을 통해 별도의 메모리에 저장함.
  // => 렌더링이 되더라최초의 그 주소값만 계속해서 내려 받음
  const initCount = useCallback(() => {
    // console.log(`${count}에서 0으로 변경되었습니다.`) => 0에서 0으로 변경되었습니다. 라고 출력됨.
    // 이미 count가 0인 최초의 시점의 값을 저장하기 때문
    // 그렇기 떄문에 useCallback(() => {}, [count]) 배열안에 넣어줘야함.
    setCount(0);
  }, [count]);

  return (
    <>
      <h3>카운트 예제입니다!</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={boxesStyle}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
