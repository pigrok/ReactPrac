import React, { useEffect, useState } from "react";

function ObjectComponent() {
  const [isAlive, setIsAlive] = useState(true);
  const [uselessCount, setUselessCount] = useState(0);

  // 현재 하단의 상관없는 버튼을 누르면
  // useEffect를 사용했음에도 불구하고 me가 같이 렌더링되는 현상이 있음.
  // 다른 메모리 주소값을 할당받기 떄문
  // 이전 것과 모양은 같지만 주소갈 다르기 때문에 인식하고 useEffect 내부 로직이 호출됨.

  // 하지만 너무 많은 메모리의 확보가 이루어지면 성능이 악화될 수 있으므로 필요할 때만 사용!!
  const me = useMemo(() => {
    return {
      name: "Ted Chang",
      age: 21,
      isAlive: isAlive ? "생존" : "사망",
    };
  }, [isAlive]);

  useEffect(() => {
    console.log("생존여부가 바뀔 때만 호출해주세요!");
  }, [me]);

  return (
    <>
      <div>
        내 이름은 {me.name}이구, 나이는 {me.age}야!
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            setIsAlive(!isAlive);
          }}
        >
          누르면 살았다가 죽었다가 해요
        </button>
        <br />
        생존여부 : {me.isAlive}
      </div>
      <hr />
      필요없는 숫자 영역이에요!
      <br />
      {uselessCount}
      <br />
      <button
        onClick={() => {
          setUselessCount(uselessCount + 1);
        }}
      >
        누르면 숫자가 올라가요
      </button>
    </>
  );
}

export default ObjectComponent;
