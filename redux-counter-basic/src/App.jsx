import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { plusOne } from "./redux/modules/counter";
import { minusOne } from "./redux/modules/counter";
import { useState } from "react";
import { plusN } from "./redux/modules/counter";
import { minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  // useSelector
  const data = useSelector((state) => {
    return state;
  });

  const counter = useSelector((state) => {
    return state.counter;
  });

  // useEffect(() => {
  //   console.log(number);
  // }, [number]);

  //dispatch 가져오기
  const dispatch = useDispatch();

  // console.log("data=>", data);
  // console.log("counter=>", counter.number);
  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            const { value } = event.target;
            // +를 통해 숫자로 형 변환
            setNumber(+value);
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          // +1 해주는 로직을 작성
          // dispatch({
          //   //action 객체 : key value pair
          //   type: PLUS_ONE,
          // });

          // action creator 사용
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // -1 해주는 로직을 작성
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
