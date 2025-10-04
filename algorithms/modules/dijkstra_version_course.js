class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  numEdges() {
    let total = 0;

    Object.values(this.adjacencyList).forEach(list => {
      total += list.length;
    });

    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
}

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(startNode, endNode) {
    let distances = {};
    let priorityQueue = new PriorityQueue();
    let previous = {};
    let path = []; //to return at end
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
    let smallest;
    // create previous object.
    while (priorityQueue.values.length) {
      smallest = priorityQueue.dequeue().val;
      if (smallest === endNode) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      // Get the neighbouring priorityQueue for this node.
      let adjList = this.adjacencyList[smallest];
      if (smallest || distances[smallest] !== Infinity) {
        adjList.forEach((neighbour) => {
          let candidate = neighbour.weight + distances[smallest];
          if (candidate < distances[neighbour.node]) {
            distances[neighbour.node] = candidate;
            previous[neighbour.node] = smallest;
            priorityQueue.enqueue(neighbour.node, neighbour.weight);
          }
        });
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


let shortPath = graph.Dijkstra("A", "E");
console.log(shortPath);
// ["A", "C", "D", "F", "E"]
