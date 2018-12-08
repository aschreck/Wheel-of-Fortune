var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('game', function() {
  it('should take a string of obscured characters and reveal the values', function(){
    let round = new Round()
    let dataHandler = new DataHandler(data)
    let game = new Game(round, dataHandler)
    let puzzleData = data.puzzles.one_word_answers.puzzle_bank.sort(() => .5 - Math.random())[0];
    let puzzle = new Puzzle(puzzleData.category, puzzleData.number_of_words,puzzleData.first_word,puzzleData.description, puzzleData.correct_answer)
    game.puzzle = new Puzzle()

    assert.equal()
  })
})