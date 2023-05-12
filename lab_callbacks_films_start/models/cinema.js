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
  const years = films.map((film) => {
    return film.year
    
  })
  const min = years.filter((year) => {
    return year >= specYear
  })
  if (min.length === years.length){
    return true
  }
}

Cinema.prototype.minLength = (films, num) => {
  const lengths = films.map((film) => {
    return film.length
  })
  if (lengths.forEach === -1){
    return false
  }
  return true
}


module.exports = Cinema;
