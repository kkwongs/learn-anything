## Sort

### Bubble Sort

```javascript
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = 0;

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }

    if (!temp) {
      break;
    }
  }

  return array;
}
```

### Insertion Sort

```javascript
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    
    for (j; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  
  return array;
}
```

### Selection Sort

```javascript
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }

  return array;
}
```

### 시간 복잡도
|Sort|Best|Worst|Average|
|---|:---:|:---:|:---:|
|Bubble|O(n)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|
|Insertion|O(n)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|
|Selection|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|

### Reference
- [[JS Algorithm] 자바스크립트 Sorting - 기본편 (Bubble, Selection, Insertion)](https://velog.io/@young_mason/Algorithm-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Sorting-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Basic%ED%8E%B8)
- [[JS/Sorting] 버블 정렬, 삽입 정렬, 선택 정렬 자바스크립트로 구현하기 (Bubble Sort, Insertion Sort, Selection Sort in JavaScript)](https://im-developer.tistory.com/133)