"use strict";

function sortYear(movies) {
  return movies.sort((a, b) => a.year - b.year);
}

function sortTitle(movies) {
  return movies.sort((a, b) => {
    const titleA = a.title.replace(/^The /i, "");
    const titleB = b.title.replace(/^The /i, "");
    return titleA.localeCompare(titleB);
  });
}

module.exports = { sortYear, sortTitle };
