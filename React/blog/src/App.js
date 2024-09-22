/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [likeCount, setLikeCount] = useState(0);

  function upLikeCount() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {글제목.map((title, index) => (
        <div className="list" key={index}>
          <h4>
            {title} <span onClick={upLikeCount}>👍</span> {likeCount}
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}
    </div>
  );
}

export default App;
