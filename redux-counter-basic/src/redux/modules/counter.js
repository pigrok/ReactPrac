// action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";
// action creator : action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값 (state)
const initialState = {
  number: 0,
};
// const [counter, setCounter] = useState(0);
//에서 useState(0)을 말함

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state와 action을 받음
// action : value와 type이 존재
const counter = (state = initialState, action) => {
  switch (action.type) {
    // type : PLUS_ONE
    case PLUS_ONE:
      return {
        //새로운 객체를 만들어서 return해야 함!
        number: state.number + 1,
      };

    case MINUS_ONE:
      return {
        //새로운 객체를 만들어서 return해야 함!
        number: state.number - 1,
      };

    case PLUS_N:
      return {
        number: state.number + action.payload,
      };

    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    // 아무것도 없다면 디폴트로 state를 출력
    default:
      return state;
  }
};

export default counter;
