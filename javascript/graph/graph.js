"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.get(startVertex) ||
      !this.adjacencyList.get(endVertex)
    ) {
      throw new Error("Invalid vertices!");
    } else {
      const adjacencies = this.adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  getEdges(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return [];
    }
    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }

  bfs(vertex) {
    let queue = [];
    let visited = new Set();
    queue.push(vertex);
    visited.add(vertex);

    while (queue.length) {
      let current = queue.shift();
      // console.log(current.value);
      let edges = this.getEdges(current);

      for (let edge of edges) {
        let childVertex = edge.vertex;

        if (!visited.has(childVertex)) {
          visited.add(childVertex);
          queue.push(childVertex);
        }
      }
    }
    return visited;
  }

  dfs(vertex) {
    let stack = [vertex];
    let visited = new Set();
    visited.add(vertex);

    while (stack.length) {
      let current = stack.pop();
      // console.log(current.value);
      let edges = this.getEdges(current);

      for (let edge of edges) {
        let childVertex = edge.vertex;

        if (!visited.has(childVertex)) {
          visited.add(childVertex);
          stack.push(childVertex);
        }
      }
    }
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph
}