
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
}


let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B", 9)
graph.addEdge("A", "C", 5)
graph.addEdge("B", "C", 7)
console.dir(graph, { depth: null, colors: true });
// console.log(util.inspect(graph, { depth: null, colors: true }));
// console.log(JSON.stringify(graph, null, 2))
module.exports = { WeightedGraph };
