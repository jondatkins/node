interface EdgeMap {
  nodeName: string;
  edgeList: string[];
}

interface AdjacencyList {
  key: string;
  value: EdgeMap;
}

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
}

let testGraph = new Graph();
testGraph.addVertex("Tokyo");
testGraph.addVertex("Dallas");
testGraph.addVertex("Aspen");

testGraph.addEdge("Dallas", "Tokyo");
testGraph.addEdge("Dallas", "Aspen");
testGraph.removeEdge("Aspen", "Dallas");
testGraph.removeEdge("Dallas", "Tokyo");
// testGraph.addVertex("A");
// testGraph.addVertex("B");
// testGraph.addVertex("C");
// testGraph.addVertex("D");
// testGraph.addVertex("E");
// testGraph.addVertex("F");
console.log(testGraph.adjacencyList);

module.exports = {};
