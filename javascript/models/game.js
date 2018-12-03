class Game {
  constructor(round, dataHandler){
    this.round = round;
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.player3 = new Player(3);
    this.dataHandler = dataHandler;
  }

  startGame() {
    $(".game").append("<button class='wheel-spin'>Spin the Wheel!</button>")
  }

  initializeWheel(){
    let selected = this.dataHandler.getWheelData();
    let wheel = new Wheel(selected)
    this.wheel = wheel;
    //insert the wheel
    $(".wheel").append(`<div class='wheel-options'>Your options are: ${wheel.options}</div>`)
  }
  spinWheel() {
    $(".wheel-spin").click((e) => {
      const spinVal = this.wheel.selectValue();
      $(".wheel-options").remove();
      $(".wheel").append(
        `<div spin-result>Your spin is ${spinVal}</div>`
      )
    })
    this.addPuzzle();
    this.wheel.removeWheel();
  }
  addPuzzle() {
    let puzzle = data.puzzles.one_word_answers.puzzle_bank.sort(() => .5 - Math.random())[0];
    $(".puzzle").append(
      `<div class='puzzle'>
        <p>category: ${puzzle.category}</p>
        <p>number of words: ${puzzle.number_of_words}</p>
        <p>length of first word: ${puzzle.first_word}</p>
        <p>description: ${puzzle.description}</p>
        <input type="text" name="answer-section">
        <button class='answer-submit'>Submit</button>
      </div>`
    )
  }
}