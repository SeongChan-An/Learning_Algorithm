// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 

// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 

// 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

// 데이터
// graph = {'A': ['B', 'C'],
//          'B': ['A', 'D', 'E'],
//          'C': ['A', 'F'],
//          'D': ['B'],
//          'E': ['B', 'F'],
//          'F': ['C', 'E']}

// 입력
// A F

// 출력
// 2

// BFS (너비우선 탐색) 개념을 적용
// 

let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

const user_input = ["A", "F"];
console.log(user_input);

const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

function solution() {
    // count++ 을 할 것이므로 편의를 위해
    let count = -1;

    while(queue.length !== 0){
        count += 1;
        let size = queue.length;
        for (let i=0; i < size; i++) {
            // 너비 우선을 하기 때문에 항상 0번째에서
            let node = queue.splice(0, 1);
            if (node == end) {
                return count;
            }
            for (let next_node in graph[node]) {
                // 
                if(!visited.includes(graph[node][next_node])){
                    visited.push(graph[node][next_node]);
                    queue.push(graph[node][next_node]);
                }
            }
        }
    }
}

console.log(solution());