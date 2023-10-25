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
    const titleA = a.title.replace(/^(A |An |The )/i, "");
    const titleB = b.title.replace(/^(A |An |The )/i, "");
    return titleA.localeCompare(titleB);
  });
}

module.exports = { Movie, sortByYear, sortByTitle };
