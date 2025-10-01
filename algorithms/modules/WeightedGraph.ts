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
    for (const node in this.adjacencyList) {
      distances[node] = Infinity;
    }
    distances[startNode] = 0;
    let visited: string[] = [];
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
    // console.dir(priorityQueue, { depth: null, colors: true });

    // create previous object.
    let previous: Record<T, T | null> = {} as Record<T, T>;
    for (const node in this.adjacencyList) {
      previous[node] = null;
    }
    // console.dir(previous, { depth: null, colors: true });
    while (priorityQueue.length) {
      // vertex is {'x':someNum}
      let vertex = priorityQueue.dequeue();
      if (vertex.val === endNode) {
        break;
      }
      // Get the neighbouring nodes for this node.
      let adjList = this.adjacencyList[vertex.val];
      // Calculate the distance to that vertex from
      // the starting vertex.
      adjList.forEach((value, index) => {
        if (visited.indexOf(value.node) === -1 && value.weight < distances[value.node]) {
          let newDist = value.weight;
          let prev = previous[vertex.val];
          if (prev) {
            newDist = newDist + distances[vertex.val]
          }
          if (newDist < distances[value.node]) {
            distances[value.node] = newDist;
          }
          // else {
          //   distances[value.node] = value.weight;
          // }
          previous[value.node] = vertex.val;
          priorityQueue.enqueue(value.node, value.weight)
        }
      });
      visited.push(vertex.val);
    }
    console.dir(distances, { depth: null, colors: true })
    console.dir(previous, { depth: null, colors: true })
    console.dir(visited, { depth: null, colors: true })
    return distances[endNode];
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
// console.dir(graph, { depth: null, colors: true });
let shortest = graph.shortestPath("A", "E") // Should be '6', A-C-D-F-E
console.log(shortest);
// console.log(util.inspect(graph, { depth: null, colors: true }));
// console.log(JSON.stringify(graph, null, 2))
// module.exports = { WeightedGraph };
