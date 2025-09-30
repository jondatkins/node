// import { SimplePriorityQueue } from "./simplePriorityQueue.js"
const { SimplePriorityQueue } = require("./simplePriorityQueue.js");

interface WeightedEdge<T> {
  node: T;
  weight: number;
}

type WeightedAdjacencyList<T extends string | number> = {
  [vertex in T]: WeightedEdge<T>[];
};

class WeightedGraph<T extends string | number> {
  adjacencyList: WeightedAdjacencyList<T> = {} as WeightedAdjacencyList<T>;

  addVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: T, vertex2: T, weight: number) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    // for undirected graphs:
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(startNode: T, endNode: T) {
    let distances: Record<T, number> = {} as Record<T, number>;
    distances[startNode] = 0;
    for (const node in this.adjacencyList) {
      distances[node] = Infinity;
    }
    // Add each vertex to the priorityQueue,
    // Make each priority 'Infinity', except
    // the starting vertx, which is 0.
    let priorityQueue = new SimplePriorityQueue();
    for (const node in this.adjacencyList) {
      if (node !== startNode) {
        priorityQueue.enqueue(node, Infinity);
      }
    }
    priorityQueue.enqueue(startNode, 0);
    // create previous object.
    let previous: Record<T, T | null> = {} as Record<T, T>;
    for (const node in this.adjacencyList) {
      previous[node] = null;
    }
    while (priorityQueue.length) {
      // vertex is {'x':someNum}
      let vertex: { string: number } = priorityQueue.dequeue();
      let vertexKey = Object.keys(vertex)[0];
      if (vertexKey === endNode) {
        break;
      }
      let adjList = this.adjacencyList[vertexKey as T];
      // Calculate the distance to that vertex from
      // the starting vertex.
      adjList.forEach((value, index) => {

      });
    }
  }
}


let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("D", "E", 3)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "F", 1)
graph.addEdge("F", "E", 1)
console.dir(graph, { depth: null, colors: true });
// console.log(util.inspect(graph, { depth: null, colors: true }));
// console.log(JSON.stringify(graph, null, 2))
// module.exports = { WeightedGraph };
