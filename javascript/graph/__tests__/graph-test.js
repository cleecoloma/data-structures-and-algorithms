"use strict";
const { Graph } = require("../graph.js");

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


});
