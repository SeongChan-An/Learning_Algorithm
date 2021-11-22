// 다음과 같이 노드의 연결 관계가 주어집니다. 
// 입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다. 
// 우리는 **이 두 정점으로 가기 위한 최대 거리**를 구하고자 합니다. 

// 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

// 데이터
// graph = {1: [2, 3, 4],
// 				 2: [1, 3, 4, 5, 6],
// 				 3: [1, 2, 7],
// 				 4: [1, 2, 5, 6],
// 				 5: [2, 4, 6, 7],
// 				 6: [2, 4, 5, 7],
// 				 7: [3, 5, 6]}

// 입력
// 1 7

// 출력
// 6

// key concept
// Dynamic Programming 
// MaxNumber Alogorithm

let graph = {
    1: [2, 3, 4],
	2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]
}

const user_input = [1, 7];
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

function solution (n, visited) {
    // 가장 마지막에 있는 요소를 노드에
    let node = n[n.length-1]
    let length = 0;

    if (node == end) {
        return visited.length
    }

    if (visited.includes(node)) {
        return visited.length;
    } else {
        visited.push(node);
    }

    let max = [];

    // 그래프에서 각 값의 요소에 방문
    for (let next_node in graph[node]) {
        n.push(graph[node][next_node]);

        max.push(length, solution(n, visited));
        length = Math.max.apply(null, max);

        queue.pop();
    }

    return length;
}

////////////////////////////////////////////////////////////////
/* 
디버그
1회차
function solution (n, visited) {            // n == [1], visited == []
    // 가장 마지막에 있는 요소를 노드에      
    let node = n[n.length-1]                // node == 1, n==[1], visited =[]
    let length = 0;                         // length == 0, node == 1, n == [1], visited == []

    if (node == end) {                      // Pass
        return visited.length
    }

    if (visited.includes(node)) {
        return visited.length;
    } else {
        visited.push(node);                 // visited == [1]    
    }

    let max = [];

    // 그래프에서 각 값의 요소에 방문
    for (let next_node in graph[node]) {    // graph 1 : 2, 3, 4,
        n.push(graph[node][next_node]);     // n = [1, 2]

        max.push(length, solution(n, visited));
        length = Math.max.apply(null, max);

        queue.pop();
    }

    return length;
}

1회차 재귀
function solution (n, visited) {            // n == [1, 2], visited == [1]
    // 가장 마지막에 있는 요소를 노드에      
    let node = n[n.length-1]                // node == 2, n==[1,2], visited =[1]
    let length = 0;                         // length == 0, node == 2, n == [1,2], visited == [1]

    if (node == end) {                      // Pass
        return visited.length
    }

    legnth == 0,
    node == 2,
    n == [1,2],
    visited == [1, 2]

    if (visited.includes(node)) {
        return visited.length;
    } else {
        visited.push(node);                 // visited == [1]    
    }

    let max = [];

    // 그래프에서 각 값의 요소에 방문
    for (let next_node in graph[node]) {    // graph 2 : 1, 3, 4, 5, 6
        n.push(graph[node][next_node]);     // n = [1, 2. 1]

        max.push(length, solution(n, visited));
        length = Math.max.apply(null, max);

        queue.pop();
    }

    return length;
}

1회차 재귀의 재귀 
function solution (n, visited) {            // n == [1, 2, 1], visited == [1, 2]
    // 가장 마지막에 있는 요소를 노드에      
    let node = n[n.length-1]                // node == 1, n==[1,2], visited =[1]
    let length = 0;                         // length == 0, node == 2, n == [1,2], visited == [1]

    if (node == end) {                      // Pass
        return visited.length
    }

    legnth == 0,
    node == 2,
    n == [1,2],
    visited == [1, 2]

    if (visited.includes(node)) {
        return visited.length;              // 2 반환 
    } else {
        visited.push(node);                 
    }
    ...
}
1회차 진행
    // 그래프에서 각 값의 요소에 방문
    for (let next_node in graph[node]) {        // graph 2 : 1, 3, 4, 5, 6
        n.push(graph[node][next_node]);         // n = [1, 2. 1]

        max.push(length, solution(n, visited));     //  length == 0, sol(n, vitited) == 2
        length = Math.max.apply(null, max);         // 2

        queue.pop();                             // 1, 2, 1 에서 1 반환
    }

    return length;

2회차 진행
    max == [0, 2]
    legnth == 2,
    node == 2,
    n == [1,2],
    visited == [1, 2]
    graph[node] = [1, 3, 4, 5, 6]
    next_node = 1

    // 그래프에서 각 값의 요소에 방문
    for (let next_node in graph[node]) {    // graph 2 : 1, 3, 4, 5, 6
        n.push(graph[node][next_node]);     // n = [1, 2. 3]

        max.push(length, solution(n, visited)); length == 2
        length = Math.max.apply(null, max);

        queue.pop();
    }
*/


