const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  // Example 1
  it('should be able to get a list of film titles', function () {
    const expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']
    const actual = cinema.filmsByTitle(films);
    assert.deepStrictEqual(actual, expected)
  });


  //Example 2
  it('should be able to find a film by title', function () {
      const actual = cinema.findFilmByTitle(films, "T2 Trainspotting")
      const expected = [trainspotting]
      assert.deepStrictEqual(actual, expected)
  });


  //Example 3
  it('should be able to filter films by genre', function () {
      const actual = cinema.filterByGenre(films, 'drama')
      const expected = [moonlight, trainspotting]
      assert.deepStrictEqual(actual, expected)
  });

  //Example 4
  it('should be able to calculate total running time of all films', function (){
      const actual = cinema.totalRunningTime(films)
      const expected = 622
      assert.strictEqual(actual, expected)
  });

//Example 5
  it('should be able to confirm *at least one* film is from a specified year - true case - 1/2' , function (){
      const actual = cinema.atLeastOneFilmFromYear(films, 2017)
      const expected = true
      assert.strictEqual(actual, expected)
  });

    it('should be able to confirm *at least one* film is from a specified year - false case - 2/2' , function (){
      const actual = cinema.atLeastOneFilmFromYear(films, 1993)
      const expected = false
      assert.strictEqual(actual, expected)
  });

  it('should be able to confirm whether *all* films are *at least* a specified length (true / false)', function (){
      const actual = cinema.minLength(films, 30)
      const expected = true
      assert.strictEqual(actual, expected)
  });
})