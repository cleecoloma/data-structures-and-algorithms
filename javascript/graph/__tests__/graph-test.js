"use strict";
const { Graph, Vertex } = require("../graph.js");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("should add a vertex to the graph", () => {
    const vertex = graph.addVertex("A");
    expect(graph.getVertices()).toContain(vertex);
  });

  it("should add an edge to the graph", () => {
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    graph.addEdge(vertexA, vertexB, 5);
    const edges = graph.getEdges(vertexA);
    expect(edges).toHaveLength(1);
    expect(edges[0].vertex).toBe(vertexB);
    expect(edges[0].weight).toBe(5);
  });

  it("should retrieve a collection of all vertices from the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    const vertices = graph.getVertices();
    expect(vertices).toHaveLength(3);
    expect(vertices.map((vertex) => vertex.value)).toEqual(
      expect.arrayContaining(["A", "B", "C"])
    );
  });

  it("should retrieve appropriate neighbors with weights", () => {
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    const vertexC = graph.addVertex("C");
    graph.addEdge(vertexA, vertexB, 5);
    graph.addEdge(vertexA, vertexC, 3);
    const neighbors = graph.getNeighbors(vertexA);
    expect(neighbors).toHaveLength(2);
    expect(neighbors[0].vertex).toBe(vertexB);
    expect(neighbors[0].weight).toBe(5);
    expect(neighbors[1].vertex).toBe(vertexC);
    expect(neighbors[1].weight).toBe(3);
  });

  it("should return the proper size of the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    expect(graph.size()).toBe(3);
  });

  it("should handle a graph with only one vertex and edge", () => {
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    graph.addEdge(vertexA, vertexB, 2);
    expect(graph.getVertices()).toHaveLength(2);
    expect(graph.size()).toBe(2);
  });

  it("should perform BFS traversal starting from the given vertex", () => {
    const graph = new Graph();
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    const vertexC = graph.addVertex("C");
    const vertexD = graph.addVertex("D");
    const vertexE = graph.addVertex("E");

    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);
    graph.addEdge(vertexB, vertexD);
    graph.addEdge(vertexC, vertexE);

    const visitedVertices = graph.bfs(vertexA);

    const visitedValues = [...visitedVertices].map((vertex) => vertex.value);
    expect(visitedValues).toEqual(["A", "B", "C", "D", "E"]);
  });

  it("should return an empty array when starting from an isolated vertex", () => {
    const graph = new Graph();
    const vertexA = graph.addVertex("A");

    const visitedVertices = graph.bfs(vertexA);

    expect([...visitedVertices].map((vertex) => vertex.value)).toEqual(["A"]);
  });

  it("should perform BFS traversal starting from the given vertex with names", () => {
    const graph = new Graph();
    const alice = graph.addVertex("Alice");
    const bob = graph.addVertex("Bob");
    const charlie = graph.addVertex("Charlie");
    const dave = graph.addVertex("Dave");
    const elaine = graph.addVertex("Elaine");

    graph.addEdge(alice, bob);
    graph.addEdge(alice, charlie);
    graph.addEdge(bob, dave);
    graph.addEdge(charlie, elaine);

    const visitedVertices = graph.bfs(alice);

    const visitedNames = [...visitedVertices].map((vertex) => vertex.value);
    expect(visitedNames).toEqual(["Alice", "Bob", "Charlie", "Dave", "Elaine"]);
  });

  it("should perform a depth-first search starting from the given vertex", () => {
    const graph = new Graph();
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    const vertexC = graph.addVertex("C");
    const vertexD = graph.addVertex("D");

    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);
    graph.addEdge(vertexB, vertexD);

    const result = graph.dfs(vertexA);

    // Check if all expected vertices are visited (order-independent)
    const visitedVertices = Array.from(result).map((vertex) => vertex.value);
    expect(visitedVertices).toContain("A");
    expect(visitedVertices).toContain("B");
    expect(visitedVertices).toContain("C");
    expect(visitedVertices).toContain("D");
  });

  it("should handle disconnected vertices", () => {
    const graph = new Graph();
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    const vertexC = graph.addVertex("C");

    // Only add edges between A and B, and C is disconnected
    graph.addEdge(vertexA, vertexB);

    const result = graph.dfs(vertexA);

    // Check if the vertices are visited in the correct order
    const visitedVertices = Array.from(result).map((vertex) => vertex.value);
    expect(visitedVertices).toEqual(["A", "B"]);
  });

  it("should return an empty set for an empty graph", () => {
    const graph = new Graph();
    const vertices = graph.getVertices(); // Get all vertices in the empty graph

    // Perform DFS on each vertex (there are no vertices in an empty graph)
    for (const vertex of vertices) {
      const result = graph.dfs(vertex);
      expect(result.size).toBe(0); // Check that the result is an empty set
    }
  });
});
