"use strict";

function businessTrip(graph, cities) {
  if (!graph || cities.length < 2) {
    return null;
  }

  let totalCost = 0;

  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];

    const currentVertex = graph
      .getVertices()
      .find((vertex) => vertex.value === currentCity);
    const nextVertex = graph
      .getVertices()
      .find((vertex) => vertex.value === nextCity);

    if (currentVertex && nextVertex) {
      const edge = graph
        .getEdges(currentVertex)
        .find((e) => e.vertex === nextVertex);
      if (edge) {
        totalCost += edge.weight;
      } else {
        return null; // If a direct flight is not available, return null
      }
    } else {
      return null; // If the cities are not valid, return null
    }
  }

  return totalCost;
}

module.exports = businessTrip;