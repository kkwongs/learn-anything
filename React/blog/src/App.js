/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [titleList, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [likeCount, setLikeCount] = useState(0);

  function upLikeCount() {
    setLikeCount(likeCount + 1);
  }

  function updateTitle() {
    const list = [...titleList];
    list[0] = "여자코트 추천";
    setTitle(list);
  }

  function sortByTitleList() {
    const list = [...titleList];
    list.sort((a, b) => (a < b ? -1 : a == b ? 0 : 1));
    setTitle(list);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={sortByTitleList}>가나다순 정렬</button>

      <button onClick={updateTitle}>글 수정</button>

      {titleList.map((title, index) => (
        <div className="list" key={index}>
          <h4>
            {title} <span onClick={upLikeCount}>👍</span> {likeCount}
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}

      <Modal></Modal>
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

// function Modal() {
//   return (
//     <div className="modal">
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   );
// }

export default App;
