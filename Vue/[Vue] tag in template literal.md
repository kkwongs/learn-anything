## [Vue] tag in template literal

템플릿 리터럴 안에 있는 태그들을 바인딩 했을 때 적용되지 않는 문제 발생

### 해결 방법
v-html directive를 사용하여 해결

```html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

```
Using text interpolation: <span style="color: red">This should be red.</span>
Using v-html directive: This should be red.
```

### Reference
- [Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html#raw-html)