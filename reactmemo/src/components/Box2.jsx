import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4e93ed",
  color: "white",
};

function Box2() {
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
