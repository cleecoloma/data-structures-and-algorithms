"use strict";

function sortYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortTitle(movies) {
  return movies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
}

module.exports = { sortYear, sortTitle };
