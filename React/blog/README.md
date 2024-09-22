# 코딩애플 리액트 강의

2022 코딩애플 리액트 강의 **[ㄱㄱ](https://www.youtube.com/playlist?list=PLfLgtT94nNq0qTRunX9OEmUzQv4lI4pnP).**

## JSX 문법

JSX(JavaScript Syntax eXtension)란 JavaScript를 확장한 문법임.

### `className`

html에서 쓰던 class와 같음.

js의 class 선언과 같아서 className을 사용.

```jsx
<div className="side-nav"></div>
```

### `{변수}`

```jsx
let post = "리액트 강의";

<div>{post}</div>;
```

### `style={{ 속성: 값 }}`

font-size와 같은 속성은 -를 빼기로 생각해서 camelCase인 fontSize로 해야 됨.

```jsx
<div style={{ fontSize: "20px", color: "red" }}>안녕하세요.</div>
```

## state

자료를 잠깐 저장할 때 변수 선언(var, let, const) 대신 state 사용해도 됨.

### 사용법

1. `import { useState } from 'react'`
2. useState(보관할 자료)
3. let [작명(state에 보관했던 자료), 작명(state 변경 도와주는 함수)]

```jsx
import { useState } from "react";

function App() {
  let [title, method] = use;

  return (
    <div>
      <div>
        <h4>{title}</h4>
        <p>예시입니다.</p>
      </div>
    </div>
  );
}
```

- (참고) Destructuring assignment(구조 분해 할당)

  객체나 배열을 변수로 분해할 수 있게 해주는 문법

  ```jsx
  let num = [1, 2];

  let [a, b] = num;
  // let a = num[0];
  // let b = num[1];
  ```

### 사용하는 이유

일반 변수는 변경되면 자동으로 반영 안 됨. 하지만 state는 변경되면 자동으로 재렌더링 됨.

따라서 state가 변경이 되면 자동으로 html이 재렌더링 되도록 하고 싶을 때 사용.
