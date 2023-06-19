import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
// import { useState } from "react";

//useEffect
// 1. input에 값을 입력.
// 2. value, 즉 state가 변경
// 3. state가 바뀌었기 때문에 => App 컴포넌트가 리렌더링
// 4. 리렌더링 -> useEffect()
// 1~4번 계속 반복

// Dependency Array 의존성 배열
// 이 배열에 값을 넣으면, 그 값이 바뀔 때만 useEffect를 실행!

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    // value가 변경되었을 때 무조건 나오게 할 떄
    console.log(`hello : ${value}`);

    return () => {
      // 컴포넌트가 죽을 때 console을 찍고싶다
      console.log("die");
    };
  }, [value]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
    </div>
  );
}
export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// useState
// function App() {
//   const [number, setNumber] = useState(0);
//   return (
//     <>
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           // 일반적 업데이트 => 3번해도 1씩 plus됨.
//           // 배치성으로 처리됌
//           // setNumber(number + 1);
//           // setNumber(number + 1);
//           // setNumber(number + 1);

//           // 렌더링이 잦다! => 성능에 이슈가 있는 것!

//           //함수영 업데이트 => 3번하면 3씩 plus됨.
//           setNumber((currentNumber) => currentNumber + 1);
//           setNumber((currentNumber) => currentNumber + 1);
//           setNumber((currentNumber) => currentNumber + 1);
//         }}
//       >
//         누르면 up
//       </button>
//     </>
//   );
// }

// export default App;
