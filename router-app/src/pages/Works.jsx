import React from "react";
import { Link } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  return (
    <div>
      <h3>할 일 목록</h3>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item.id}
            <Link to={`/works/${item.id}`}>&nbsp;{item.todo}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;

// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// function Works() {
//   //   const navigate = useNavigate();
//   const location = useLocation();

//   console.log(location);

//   return (
//     <div>
//       Works
//       <br />
//       <button
//         onClick={() => {
//           //   navigate("/");
//         }}
//       >
//         Home으로 이동
//       </button>
//       {/* // a태그와 유사 */}
//       <Link to="/contact">contact 페이지로 이동하기</Link>
//     </div>
//   );
// }

// export default Works;
