"use strict";
const { Vertex, Edge, Graph } = require("../../graph/graph.js");
const businessTrip = require("../graph-business-trip.js");

describe("businessTrip Function", () => {
  test("Calculate the cost of a successful trip", () => {
    const flightGraph = new Graph();

    const cityA = flightGraph.addVertex("A");
    const cityB = flightGraph.addVertex("B");
    const cityC = flightGraph.addVertex("C");
    const cityD = flightGraph.addVertex("D");
    const cityE = flightGraph.addVertex("E");

    flightGraph.addEdge(cityA, cityB, 100);
    flightGraph.addEdge(cityB, cityC, 200);
    flightGraph.addEdge(cityC, cityD, 150);
    flightGraph.addEdge(cityD, cityE, 120);

    const citiesToVisit = ["A", "B", "C", "D", "E"];
    const tripCost = businessTrip(flightGraph, citiesToVisit);

    expect(tripCost).toEqual(570); // Total cost of the trip
  });

  test("Return null for an unsuccessful trip (missing direct flight)", () => {
    const flightGraph = new Graph();

    const cityA = flightGraph.addVertex("A");
    const cityB = flightGraph.addVertex("B");
    const cityC = flightGraph.addVertex("C");
    const cityD = flightGraph.addVertex("D");

    flightGraph.addEdge(cityA, cityB, 100);
    flightGraph.addEdge(cityC, cityD, 150); // Missing flight from C to D

    const citiesToVisit = [cityA, cityB, cityC, cityD];
    const tripCost = businessTrip(flightGraph, citiesToVisit);

    expect(tripCost).toBeNull(); // Trip is not possible with missing flight
  });

  test("Return null for an invalid input (null graph or empty city list)", () => {
    const flightGraph = new Graph();

    const citiesToVisit = []; // Empty city list
    const tripCost = businessTrip(flightGraph, citiesToVisit);

    expect(tripCost).toBeNull(); // Trip is not possible with an empty city list

    const nullGraph = null;
    const tripCostWithNullGraph = businessTrip(nullGraph, ["A", "B"]);

    expect(tripCostWithNullGraph).toBeNull(); // Trip is not possible with a null graph
  });
});