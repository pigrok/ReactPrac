import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import ToDoList from "./components/ToDoList";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "테스트 제목1",
      contents: "테스트 내용1",
      isDone: false, //할일 목록으로 들어가기 떄문에 false
    },
    {
      id: uuid(),
      title: "테스트 제목2",
      contents: "테스트 내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "테스트 제목3",
      contents: "테스트 내용3",
      isDone: false,
    },
  ];

  const [toDos, setToDos] = useState(initialState);
  // state로 관리를 시킴 단순히 변수로 할당하는 것이 아님

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    // 빈 태그 <> </>로 해도됌 - 브라우저가 인식하지 않음
    <>
      <header
        style={{
          backgroundColor: "#c3ddf7",
          padding: "10px",
        }}
      >
        <h1>HEADER</h1>
      </header>
      <main
        style={{
          backgroundColor: "#c3f7c9",
          padding: "10px",
        }}
      >
        <div>
          <h3>INPUT</h3>
          <div>
            <form
              onSubmit={function (event) {
                event.preventDefault();

                // ToDo : 넣을 객체 생성 (new todo)
                const newToDo = {
                  id: uuid(),
                  title,
                  contents,
                  isDone: false,
                };
                // ToDo : toDos state에 넣어줘야 해!! =>   // toDos.push() => 불변 객체 이므로 x
                setToDos([...toDos, newToDo]);
              }}
            >
              <input
                type="text"
                placeholder="제목입력"
                value={title}
                onChange={function (event) {
                  // console.log(event.target.value);
                  setTitle(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="내용입력"
                value={contents}
                onChange={function (event) {
                  // console.log(event.target.value);
                  setContents(event.target.value);
                }}
              />
              <button type="submit">제출</button>
            </form>
          </div>
        </div>
        <ToDoList toDos={toDos} setToDos={setToDos} isDone={false} />
        <ToDoList toDos={toDos} setToDos={setToDos} isDone={true} />
      </main>
      <footer
        style={{
          backgroundColor: "#f5dfa2",
          padding: "10px",
        }}
      >
        <h2>FOOTER</h2>
      </footer>
    </>
  );
}

export default App;
