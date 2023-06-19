import React, { useEffect, useRef, useState } from "react";

function App() {
  const idRef = useRef("");
  const pwRef = useRef("");

  const [id, setId] = useState("");
  //화면이 렌더링 될 때, 어떤 작업을 => useEffect
  useEffect(() => {
    idRef.current.focus();
    // pwRef.current.focus();
  }, []);

  // useEffect(() => {
  //   // idRef.current.focus();
  //   if (id.length >= 10) {
  //     pwRef.current.focus();
  //   }
  // }, [id]);
  // dependency array에는 id라는 state가 바뀔 때마다 수행

  return (
    <>
      <div>
        {/* ref={}를 사용하여 상단에 선언한 idRef를 넣어주면 서로 연결됨. */}
        아이디 :
        <input
          value={id}
          onChange={(event) => {
            setId(event.target.value);

            // 10자리가 아니라 11자리일때 내려가는 이유
            // 리액트에서 state => 배치 업데이트
            // 반영되기 직전이므로
            if (id.length >= 10) {
              pwRef.current.focus();
            }
          }}
          type="text"
          ref={idRef}
        />
      </div>
      <div>
        패스워드 : <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import "./App.css";
// import React, { useRef, useState } from "react";

// const style = {
//   border: "1px solid black",
//   margin: "10px",
//   padding: "10px",
// };

// function App() {
//   // ref : reference
//   // 이렇게 설정된 ref값은 컴포넌트가 계속해서 렌더링 되어도
//   // 이 컴포넌트가 죽기 전(unmount) 전까지 값을 유지

//   // ref에 저장한 값은 렌더링을 일으키지 않으므로, 내부 변수들이 초기화 되는 것을 막음
//   // ref에 저장한 값은 유지!!

//   // state는 리렌더링이 꼭 필요한 값을 다룰 때 => ex) count app
//   // ref는 리렌더링을 발생하지 않은 값을 저장할 때

//   // Dom => 렌더링 되자마자 특정 input이 focusing돼야 한다면 useRef를 사용

//   // const ref = useRef("초기값");
//   // console.log("ref1", ref);

//   // ref.current = "변경값";
//   // console.log("ref2", ref);

//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const plusStateCountButtonHandler = () => {
//     setCount(count + 1);
//   };
//   const plusRefCountButtonHandler = () => {
//     countRef.current++;
//     console.log(countRef.current);
//   };
//   return (
//     <>
//       <div style={style}>
//         state 영역입니다. {count} <br />
//         <button onClick={plusStateCountButtonHandler}>state 증가</button>
//       </div>
//       <div style={style}>
//         ref 영역입니다. {countRef.current} <br />
//         <button onClick={plusRefCountButtonHandler}>ref 증가</button>
//       </div>
//     </>
//   );
// }

// export default App;
