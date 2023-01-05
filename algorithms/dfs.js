// Create Graph
const vertices = ["A", "B", "C", "D", "E", "F", "G"]

const adjacent = {
    "A": ["B", "C", "D"],
    "B": ["A", "C", "D"],
    "C": ["A", "B", "D", "E"],
    "D": ["A", "B", "C", "F"],
    "E": ["C"],
    "F": ["D", "G"],
    "G": ["F"]
}

// Recursive DFS on graph
function dfs(goal, vertice, adj, discovered = []) {
    discovered[vertice] = true;

    for (let i = 0; i < adj[vertice].length; i++){
        let w = adj[vertice][i];

        if (!discovered[w]) {
            dfs(goal, w, adj, discovered);
        }
    }

    return discovered[goal] || false;
}

console.log(dfs("D", vertices[0], adjacent)) // returns true


// Iterative DFS on graph
function dfsIterative(goal, vertice, adj) {
    const discovered = {};
    // Mocking the stack data structure
    const stack = [];

    stack.push(vertice);

    while (stack.length !== 0) {
        vertice = stack.pop();

        if (!discovered[vertice]) {
            discovered[vertice] = true
        }

        for (let i = 0; i < adj[vertice].length; i++) {
            if (!discovered[adj[vertice][i]]) {
                stack.push(adj[vertice][i])
            }
        }
    }

    return discovered[goal] || false
}

console.log(dfsIterative("B", vertices[0], adjacent)) // returns true