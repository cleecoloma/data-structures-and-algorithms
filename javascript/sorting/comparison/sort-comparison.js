"use strict";

class Movie {
  constructor(title, year, genres) {
    this.title = title;
    this.year = year;
    this.genres = genres;
  }
}

function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortByTitle(movies) {
  return movies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
}

module.exports = { Movie, sortByYear, sortByTitle };
