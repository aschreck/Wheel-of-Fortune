class Game {
  constructor(round, dataHandler){
    this.round = round;
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.player3 = new Player(3);
    this.dataHandler = dataHandler;
    this.currentPlayer = this.player1;
  }

  startGame() {
    $(".game").append("<button class='wheel-spin'>Spin the Wheel!</button>")
  }

  processSpinValue(spinVal) {
    //this method will have side effects on the game.
    if (spinVal === "BANKRUPT") {
      // remove the player's money.
      this.getBankrupt();
      // move to the next player and set up the wheel.
      this.nextPlayer();
    } else if (spinVal === "LOSE A TURN") {
      // end the player's turn.
      this.nextPlayer();
    }
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
      this.processSpinValue(spinVal);
      this.addPuzzle();
      this.wheel.removeWheel();
    })
  }

  addPuzzle() {
    let puzzleData = data.puzzles.one_word_answers.puzzle_bank.sort(() => .5 - Math.random())[0];
    let puzzle = new Puzzle(puzzleData.category, puzzleData.number_of_words,puzzleData.first_word,puzzleData.description, puzzleData.correct_answer)
    this.puzzle = puzzle;
    puzzle.obfuscateAnswer();
    $(".puzzle").append(
      `<div class='puzzle'>
        <p class='answer'>${this.puzzle.inProgressAnswer}</p>
        <p>category: ${puzzle.category}</p>
        <p>number of words: ${puzzle.number_of_words}</p>
        <p>length of first word: ${puzzle.first_word}</p>
        <p>description: ${puzzle.description}</p>
        <input type="text" name="answer-section">
        <button class='answer-submit'>Submit</button>
      </div>`
    )
    $(".buttons").append(
      `
      <select class="vowels">
        <option value="a">a</option>
        <option value="e">e</option>
        <option value="i">i</option>
        <option value="o">o</option>
        <option value="u">u</option>
      </select>
      <button class='vowel-submit'>Buy A Vowel</button>
      `
    )
    $(".vowel-submit").click(() => {
      //grab the value of the currently selected option
      let selectedOption = $(".vowels option:selected").text();
      console.log(selectedOption);
      this.puzzle.buyAVowel(selectedOption);
      //display new inProgressAnswer
      this.puzzle.updateInProgressAnswer();
    })
  }

  nextPlayer() {
    if (this.currentPlayer.id == 1) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer.id == 2) {
      this.currentPlayer = this.player3;
    } else if (this.currentPlayer.id == 3) {
      this.currentPlayer = this.player1;
      //restart the round.
      this.createNewRound()
    }
    console.log(`current player is ${this.currentPlayer.id}`)
  }

  createNewRound() {
    let round = new Round(this.round.num + 1);
    this.round = round;
    console.log(`current round is ${this.round.num}`)
    $(".game").append(`<h3>Round: ${this.round.num}</h3>`)
  }

  getBankrupt() {
    console.log("you are bankrupt")
    this.currentPlayer.cash = 0;
    let id = this.currentPlayer.id + '';
    $(`#player-${this.currentPlayer.id}-score`).text(0);
  }
}