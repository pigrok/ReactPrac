import React, { useState, useMemo } from "react";

function HeavyComponent() {
  const [count, setCount] = useState(0);

  //리렌더링이 굉장히 오래걸림
  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };

  //컴포넌트가 리렌더링되면 항상 호출하는 부분 => 비효율적인 작업
  //   const value = heavyWork();

  // 이 값을 메모리에 저장한다면? useMemo를 사용!
  const value = useMemo(() => heavyWork(), []);

  return (
    <div>
      <p>나는 엄청 무거운 컴포넌트야!</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면 아래 count가 올라가요!
      </button>{" "}
      <br />
      {count}
    </div>
  );
}

export default HeavyComponent;
