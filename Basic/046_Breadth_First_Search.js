// **너비 우선 탐색**이란 어떤 노드를 방문하여 확인한 후, 
// 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

// 가까운 정점을 먼저 방문, 먼 정점은 나중에 방문

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b11e9de9-66f6-4691-8a08-4b84497e4fa6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b11e9de9-66f6-4691-8a08-4b84497e4fa6/Untitled.png)

// 다음과 같이 입력이 주어질 때 **너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.**

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D A F C B

let graph = {
    'E': ['D', 'A'],
    'F': ['D'],
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F']
}

let graph2 = {    
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F'],
    'E': ['D', 'A'],
    'F': ['D']
}

function dfs(graph, start) {
    let visited = [];
    let queue = [start];

    while (queue.length != 0) {
        let n = queue.shift();
        if (!visited.includes(n)) {
            visited.push(n);
            let sub = graph[n].filter(x => !visited.includes(x));
            for (let i of sub) {
                queue.push(i);
            }
        } else {

        }
    }

    return visited;
}

console.log(dfs(graph, 'E'));
console.log(dfs(graph2, 'E'));