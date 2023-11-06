'use strict';

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

addVertex(value) {
  let vertex = new Vertex(value);
  this.adjacencyList.set(vertex, []);
  return vertex;
}

addEdge(startVertex, endVertex, weight = 0) {
  if (!this.adjacencyList.get(startVertex) || !this.adjacencyList.get(endVertex)) {
    throw new Error('Invalid vertices!')
  }

  const adjacencies = this.adjacencyList.get(startVertex);
  adjacencyList.push(new Edge(endVertex, weight));
}
