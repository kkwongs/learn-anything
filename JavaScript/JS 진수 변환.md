# JS 진수 변환

## 10진수에서 n진수로 변환하는 방법

```javascript
const decimal = 1023;

// 10진수 -> 2진수
const binary = decimal.toString(2); // 1111111111

// 10진수 -> 8진수
const octal = decimal.toString(8); // 1777

// 10진수 -> 16진수
const hex = decimal.toString(16); // 3ff
```

## n진수에서 10진수로 변환하는 방법

```javascript
// 2진수 -> 10진수
const binary = "1111111111";
const decimal = parseInt(binary, 2); // 1023

// 8진수 -> 10진수
const octal = "1777";
const decimal = parseInt(octal, 8); // 1023

// 16진수 -> 10진수
const hex = "3ff";
const decimal = parseInt(hex, 16); // 1023
```

## n진수에서 n진수로 변환하는 방법

10진수로 변환 -> n진수로 변환

```javascript
const binary = "1111111111";
const octal = parseInt(binary, 2).toString(8); // 1777
const hex = parseInt(octal, 8).toString(16); // 3ff
```
