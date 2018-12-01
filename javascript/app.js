$(document).ready(function () {
  //Listeners.initialListener();
  $(".game-start").click((e) =>{
    //display the wheel information
    //select wheel info.
    $(".game").append("<button class='wheel-spin'>Spin the Wheel!</button>")
    $(".game-start").remove()
    //create a new wheel object
    //get data from data.js
    const shuffled = data.wheel.sort(() => .5 - Math.random());
    let selected = shuffled.slice(0,7);
    let wheel = new Wheel(selected)
    //insert the wheel
    $(".wheel").append(`<div class='wheel-options'>Your options are: ${wheel.options}</div>`)
    $(".wheel-spin").click((e) => {
      const spinVal = wheel.selectValue();
      $(".wheel-options").remove();
      $(".wheel").append(
        `<div spin-result>Your spin is ${spinVal}</div>`
      )
    })
    //now that we have our wheel value we want a question.
  })
});

  let player1 = new Player(1);
  let player2 = new Player(2);
  let player3 = new Player(3);
  let round = new Round();