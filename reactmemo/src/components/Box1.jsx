import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#01c49f",
  color: "white",
};

function Box1() {
  return <div style={style}>Box1</div>;
}

export default React.memo(Box1);
