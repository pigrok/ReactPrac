import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#c491be",
  color: "white",
};

function Box3() {
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);
