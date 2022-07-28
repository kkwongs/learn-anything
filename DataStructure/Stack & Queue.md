## Stack & Queue

### Stack 구현 with JS
```javascript
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}
```

### Queue 구현 with JS
```javascript
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}
```

### Reference
- [큐, 스택, 트리](https://helloworldjavascript.net/pages/282-data-structures.html)