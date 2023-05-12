const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsByTitle = (films) => {
  const titles = films.map((film) => {
    return film.title
  })
  return titles
}

Cinema.prototype.findFilmByTitle = (films, title) => {
  const filmByTitle = films.filter((film) => {
    return film.title === title
  })
  return filmByTitle
}
Cinema.prototype.filterByGenre = (films, genre) => {
  const filmByGenre = films.filter((film) => {
    return film.genre === genre
  })
  return filmByGenre
}


Cinema.prototype.totalRunningTime = (films) => {
  const lengths = films.map((film) => {
    return film.length
  })
    const totalRunTime = lengths.reduce((accumulator, number) => {
    return accumulator += number
  })
  return totalRunTime
}
Cinema.prototype.atLeastOneFilmFromYear = (films, specYear) => {
  return films.some((film) => {
    return film.year === year
  })
}

Cinema.prototype.minLength = (films, num) => {
  return films.every((film) => {
    return film.length >= length
  })
}


module.exports = Cinema;
