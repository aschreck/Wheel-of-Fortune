class Player {
  constructor(id) {
    this.cash = 300;
    this.id = id;
  }

  updateCash(incomingCash) {
    console.log(incomingCash)
    this.cash += incomingCash;
    console.log(this.cash)
  }
}