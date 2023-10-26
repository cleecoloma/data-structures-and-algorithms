'use strict';

// const { sortByYear, sortByTitle } = require("../sort-comparison");
const { Movies } = require("./movies");
const { sortTitle, sortYear } = require("../sort-comparison");

// // Test data
// const movies = [
//   new Movie("The Shawshank Redemption", 1994, ["Drama"]),
//   new Movie("The Godfather", 1972, ["Crime", "Drama"]),
//   new Movie("A Beautiful Mind", 2001, ["Biography", "Drama"]),
//   new Movie("Avatar", 2009, ["Action", "Adventure", "Fantasy"]),
// ];

// describe("sortByYear", () => {
//   it("should sort movies by most recent year first", () => {
//     const sorted = sortByYear(movies);
//     expect(sorted).toEqual([
//       new Movie("Avatar", 2009, ["Action", "Adventure", "Fantasy"]),
//       new Movie("A Beautiful Mind", 2001, ["Biography", "Drama"]),
//       new Movie("The Shawshank Redemption", 1994, ["Drama"]),
//       new Movie("The Godfather", 1972, ["Crime", "Drama"]),
//     ]);
//   });
// });

// describe("sortByTitle", () => {
//   it("should sort movies alphabetically by title, ignoring articles", () => {
//     const sorted = sortByTitle(movies);
//     expect(sorted).toEqual([
//       new Movie("A Beautiful Mind", 2001, ["Biography", "Drama"]),
//       new Movie("Avatar", 2009, ["Action", "Adventure", "Fantasy"]),
//       new Movie("The Godfather", 1972, ["Crime", "Drama"]),
//       new Movie("The Shawshank Redemption", 1994, ["Drama"]),
//     ]);
//   });
// });

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Intouchables",
      "Valkyrie",
      "Stardust",
      "Ratatouille",
      "City of God",
      "Memento",
      "The Shawshank Redemption",
      "Beetlejuice",
      "Crocodile Dundee",
      "The Cotton Club",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });
});
