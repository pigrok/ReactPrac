// 중앙 데이터 관리소(stor)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/users";

const rootReducer = combineReducers({
  // 리듀서를 다 넣음
  counter,
  users,
});

const store = createStore(rootReducer);

export default store;
