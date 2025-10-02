// import { SimplePriorityQueue } from "./simplePriorityQueue.js"
const { SimplePriorityQueue, INode } = require("./SimplePriorityQueue.ts");

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
    let visited: string[] = [];
    // Add each vertex to the priorityQueue,
    // Make each priority 'Infinity', except
    // the starting vertx, which is 0.
    let priorityQueue = new SimplePriorityQueue();
    let previous: Record<T, T | null> = {} as Record<T, T>;

    for (const node in this.adjacencyList) {
      if (node !== startNode) {
        distances[node] = Infinity;
        priorityQueue.enqueue(node, Infinity);
      }
      else {
        distances[node] = 0;
        priorityQueue.enqueue(node, 0);
      }
      previous[node] = null;
    }
    let vertex: typeof INode;
    // create previous object.
    while (priorityQueue.length) {
      // vertex is {'x':someNum}
      vertex = priorityQueue.dequeue();
      if (vertex.value === endNode) {
        break;
      }
      let vertValue: T = vertex.value;
      // Get the neighbouring nodes for this node.
      let adjList: WeightedEdge<T>[] = this.adjacencyList[vertValue];
      // Calculate the distance to that vertex from
      // the starting vertex.
      // addjList is an array of objects where the key is the node name
      // and the value is the weight of the edge
      if (vertex.val || distances[vertValue] !== Infinity) {
        adjList.forEach((value: WeightedEdge<T>) => {
          let newDist = value.weight;
          let prev = previous[vertValue];
          // if (prev) {
          newDist = newDist + distances[vertValue]
          // }
          if (newDist < distances[value.node]) {
            distances[value.node] = newDist;
          }
          previous[value.node] = vertex.value;
          priorityQueue.enqueue(value.node, value.weight)
        });
      }
      visited.push(vertex.value);
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
graph.addEdge("E", "F", 1)
// console.dir(graph, { depth: null, colors: true });
let shortest = graph.shortestPath("A", "E") // Should be '6', A-C-D-F-E
console.log(shortest);
// console.log(util.inspect(graph, { depth: null, colors: true }));
// console.log(JSON.stringify(graph, null, 2))
// module.exports = { WeightedGraph };
