// import { SimplePriorityQueue } from "./simplePriorityQueue.js"
const { PriorityQueue, INode } = require("./PriorityQueue.ts");

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
    let priorityQueue = new PriorityQueue();
    let previous: Record<T, T | null> = {} as Record<T, T>;
    let path = [] //to return at end
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
    let smallest: T;
    // create previous object.
    while (priorityQueue.length) {

      smallest = priorityQueue.dequeue().value;
      if (smallest === endNode) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest] as T;
        }
        break;
      }
      // Get the neighbouring nodes for this node.
      let adjList: WeightedEdge<T>[] = this.adjacencyList[smallest];
      if (smallest || distances[smallest] !== Infinity) {
        adjList.forEach((neighbour: WeightedEdge<T>) => {
          let candidate = neighbour.weight + distances[smallest]
          if (candidate < distances[neighbour.node]) {
            distances[neighbour.node] = candidate;
            previous[neighbour.node] = smallest;
            priorityQueue.enqueue(neighbour.node, neighbour.weight)
          }
        });
      }
      // visited.push(vertex.neighbour);
    }
    console.dir(distances, { depth: null, colors: true })
    console.dir(previous, { depth: null, colors: true })
    // return distances[endNode];
    return path.concat(smallest).reverse();
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
