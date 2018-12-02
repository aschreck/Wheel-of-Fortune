$(document).ready(function () {

  $(".game-start").click((e) =>{
    var round = new Round()
    var game = new Game(round)
    console.log(game)
    while (game.round.num < 5) {
      //play the game.

    }
  })
})