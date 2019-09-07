var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of string', () => {
      expect(starWars.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings(array) {
        return array.every((item)=>{
          return typeof item === 'string';
        })
      }
    });

    it('should contain `souman paul', () => {
      expect(starWars.all).to.include('souman paul');
    });
  });

  describe('random', () =>{
    it('should retrun a random item from the starWars.all', () => {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
    it('should return an array of random items if passed a number' , () => {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(element => {
        expect(starWars.all).to.include(element);
      });
    })
  });
});