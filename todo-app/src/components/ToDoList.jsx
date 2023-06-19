import React from "react";

const ToDoList = ({ toDos, setToDos, isDone }) => {
  return (
    <div>
      <div>
        <h2>{isDone ? "DONELIST" : "TODOLIST"}</h2>
        {toDos
          .filter(function (t) {
            return t.isDone === isDone;
          })
          .map(function (toDo) {
            return (
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
                key={toDo.id}
              >
                <p>{toDo.id}</p>
                <p>{toDo.title}</p>
                <p>{toDo.contents}</p>
                <p>{toDo.isDone.toString()}</p>
                <button
                  onClick={function () {
                    // alert(toDo.id);
                    const newToDos = toDos.filter(
                      (filteredToDo) => filteredToDo.id !== toDo.id
                    );

                    setToDos(newToDos);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={function () {
                    // 새로운 배열 생성
                    const newToDos = toDos.map(function (item) {
                      if (item.id === toDo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setToDos(newToDos);
                  }}
                >
                  {isDone ? "취소" : "완료"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToDoList;
