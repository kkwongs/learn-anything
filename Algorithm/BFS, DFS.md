## BFS, DFS

### 그래프 탐색 알고리즘

- 너비 우선 탐색(BFS, Breadth First Search): 정점과 같은 레벨에 있는 노드들을 우선 탐색
- 깊이 우선 탐색(DFS, Depth First Search): 정점의 자식 노드들을 우선 탐색

### 예제

![BFS, DFS](https://velog.velcdn.com/images%2Fsangbooom%2Fpost%2F2857cad2-88f8-4848-8937-da3e9764d7ab%2Fimage.png)

- BFS: A - B - C - D - G - H - I - E - F - J
- DFS: A - B - D - E - F - C - G - H - I - J

### BFS 구현

```javascript
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};

const BFS = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while(needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }

  return visited;
};

BFS(graph, 'A');
```

### DFS 구현

```javascript
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};

const DFS = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while(needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }

  return visited;
};

DFS(graph, 'A');
```

### 시간 복잡도
- 노드 수: V, 간선 수: E
- 모든 노드를 방문하므로 함수가 V번 호출, 함수 내부에서 간선 수 만큼 반복하므로 E번 반복
- 즉, BFS와 DFS는 O(V+E)로 동일한 시간 복잡도를 가진다.


### Reference
- [[JS] BFS, DFS](https://velog.io/@sangbooom/JS-BFS-DFS)
- [그래프 탐색 알고리즘 BFS, DFS 정리](https://saegeullee.github.io/algorithm/bfs-dfs)