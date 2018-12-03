$(document).ready(function () {

  $(".game-start").click((e) =>{
    $(".game-start").remove()

    let round = new Round()
    let dataHandler = new DataHandler(data)
    let game = new Game(round, dataHandler)
    game.startGame();
    game.initializeWheel();
    game.spinWheel();
  })
})