## Linked List

### 연결 리스트(Linked List)란?

```
모든 요소가 다음 요소에 연결된 자료구조

- 장점: 삭제, 삽입 시 O(1)
- 단점: 검색 시 O(n), Array보다 많은 메모리 사용
```

### 연결 리스트 구현 with JavaScript

[여기](https://webruden.tistory.com/1052)를 참고하여 생각대로 구현해봄

```javascript
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.root = null
    this.size = 0
  }

  addLast(value) {
    const node = new Node(value)

    if (!this.root) {
      this.root = node
    } else {
      let currentNode = this.root

      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.size++
  }

  removeLast() {
    if (this.size) {
      let currentNode = this.root
      let target

      if (currentNode) {
        while (currentNode.next.next) {
          currentNode = currentNode.next
        }
        target = currentNode.next
        currentNode.next = null
      } else {
        target = currentNode
        this.root = null
      }
      this.size--
  
      return target.value
    }
  }

  addFirst(value) {
    const node = new Node(value)
    node.next = this.root
    this.root = node
    this.size++
  }

  removeFirst() {
    if (this.size) {
      let target = this.root
      this.root = target.next
      this.size--

      return target.value
    }
  }

  add(value, index = 0) {
    if (index > this.size) return 0
    if (index === 0) return this.addFirst(value)
    if (index === this.size) return this.addLast(value)

    const node = new Node(value)
    let currentNode = this.root
    let currentIndex = 0
    let prevNode
    
    while (currentNode) {
      if (currentIndex === index) {
        prevNode.next = node
        node.next = currentNode
      }
      prevNode = currentNode
      currentNode = currentNode.next
      currentIndex++
    }
    this.size++
  }

  getValue(index) {
    let currentNode = this.root
    let currentIndex = 0

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode.value
      }

      currentNode = currentNode.next
      currentIndex++
    }
  }

  remove(index) {
    let currentNode = this.root
    let currentIndex = 0
    let prevNode

    while (currentNode) {
      if (currentIndex === index) {
        prevNode.next = currentNode.next
        this.size--

        return currentNode.value
      }
      prevNode = currentNode
      currentNode = currentNode.next
      currentIndex++
    }
  }
}
```

### Reference
- [[자바스크립트] 연결리스트(Linked List) 예시를 통해 쉽게 이해하기 (1)](https://webruden.tistory.com/1052)