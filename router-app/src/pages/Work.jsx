import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {
  const params = useParams();
  // 어떤 todo인지 찾아보기
  const foundData = data.find((item) => {
    return item.id === parseInt(params.id); // === 일치연산자 이므로 타입까지 맞아야함
  });
  return (
    <div>
      <h3>할 일 : {foundData.todo}</h3>
    </div>
  );
}

export default Work;
