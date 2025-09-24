class Graph<T extends string | number> {
  adjacencyList: Record<T, T[]> = {} as Record<T, T[]>;

  constructor() {
    this.adjacencyList = {} as Record<T, T[]>;
  }

  addVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Accept two vertices, vertex1 and vertex2
  // Find vertex1 key in the adjacency array
  // and push vertex 2 to the array.
  // Find vertex2 and push vertex1 to the array
  addEdge(vertex1: T, vertex2: T) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  // Accepts 2 vertices, vertex1 and vertex2
  // Reassign the key of vertex1 to be an array that 
  // does not contain vertex2
  // Same for vertex2
  removeEdge(vertex1: T, vertex2: T) {
    let edges1 = this.adjacencyList[vertex1].filter(elem => elem !== vertex2)
    this.adjacencyList[vertex1] = edges1;
    let edges2 = this.adjacencyList[vertex2].filter(elem => elem !== vertex1);
    this.adjacencyList[vertex2] = edges2;
  }

  // Loop over adjacencyList for the 
  // vertex. For each edge, remove the edge 
  // using remove edge with the vertex's name
  removeVertex(vertex: T) {
    while (this.adjacencyList[vertex].length) {
      let linkedVertex = this.adjacencyList[vertex].pop();
      if (linkedVertex) {
        this.removeEdge(vertex, linkedVertex);
      }
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(vertex: T) {
    let results: T[] = [];
    const searchHelper = (vertex: T) => {
      if (!vertex) {
        return;
      }
      results.push(vertex);
      let linkedVertices = this.adjacencyList[vertex];
      for (const node of linkedVertices) {
        if (results.indexOf(node) === -1) {
          searchHelper(node);
        }

      }
    }
    searchHelper(vertex);
    return results;
  }

  depthFirstSearchCourse(start: T) {
    let results: T[] = [];
    const visited: Record<string, boolean> = {}; // or Record<T, boolean> if T is a string/number
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex: T) {
      if (!vertex) {
        return null;
      }
      visited[vertex as unknown as string] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbour => {
        if (!visited[neighbour as string]) {
          return dfs(neighbour);
        }
      })
    })(start)
    return results;
  }

  depthFirstSearchCourse2(start: T): T[] {
    const results: T[] = [];
    const visited: Record<string, boolean> = {}; // or Map<T, boolean>
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex: T) {
      if (!vertex) return;
      visited[vertex as unknown as string] = true;
      results.push(vertex);

      for (const neighbour of adjacencyList[vertex]) {
        if (!visited[neighbour as unknown as string]) {
          dfs(neighbour);
        }
      }
    })(start)

    // dfs(start);
    return results;
  }


}

// testGraph.addVertex("Tokyo");
// testGraph.addVertex("Dallas");
// testGraph.addVertex("Aspen");
// testGraph.addEdge("Dallas", "Tokyo");
// testGraph.addEdge("Dallas", "Aspen");
// testGraph.removeEdge("Aspen", "Dallas");
// testGraph.removeEdge("Dallas", "Tokyo");
// testGraph.removeVertex("Dallas");
// testGraph.depthFirstSearch("Tokyo");

// B - A - E
// | \   / |
// C - D - F
//
// Starting from A, go to B. Then C, D, E, F.
let testGraph = new Graph();
testGraph.addVertex("B")
testGraph.addVertex("A")
testGraph.addVertex("E")
testGraph.addVertex("C")
testGraph.addVertex("D")
testGraph.addVertex("F")
testGraph.addEdge("B", "A")
testGraph.addEdge("A", "E")
testGraph.addEdge("B", "C")
testGraph.addEdge("B", "D")
testGraph.addEdge("C", "D")
testGraph.addEdge("D", "E")
testGraph.addEdge("D", "F")
testGraph.addEdge("E", "F")
let depthFirst1 = testGraph.depthFirstSearch("A")
// console.log(depthFirst1);

// B - A - C
// |       |
// D ----- E
//  \     /
//     F
//
// A, B, D, E, C, (Dead End, go back to E), F
let testGraph2 = new Graph();
testGraph2.addVertex("A")
testGraph2.addVertex("B")
testGraph2.addVertex("C")
testGraph2.addVertex("D")
testGraph2.addVertex("E")
testGraph2.addVertex("F")
testGraph2.addEdge("A", "B")
testGraph2.addEdge("A", "C")
testGraph2.addEdge("B", "D")
testGraph2.addEdge("C", "E")
testGraph2.addEdge("D", "E")
testGraph2.addEdge("D", "F")
testGraph2.addEdge("F", "E")
let depthFirst = testGraph2.depthFirstSearchCourse("A")
console.log(depthFirst);
module.exports = { Graph };
