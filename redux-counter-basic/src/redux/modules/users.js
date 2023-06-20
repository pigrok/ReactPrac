// 초기 상태값 (state)
const initialState = {
  userId: 123,
};
// const [counter, setCounter] = useState(0);
//에서 useState(0)을 말함

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state와 action을 받음
// action : value와 type이 존재
const users = (state = initialState, action) => {
  switch (action.type) {
    // 아무것도 없다면 디폴트로 state를 출력
    default:
      return state;
  }
};

export default users;
