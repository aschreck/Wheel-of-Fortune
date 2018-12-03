class DataHandler {
  constructor(data) {
    this.data = data;
    this.categoryChoices = [
      "one_word_answers",
      "two_word_answers",
      "three_word_answers",
      "four_word_answers",
    ]
  }

  getWheelData() {
    const shuffled = this.data.wheel.sort(() => .5 - Math.random());
    let selected = shuffled.slice(0,7);
    return selected
  }
  selectACategory() {
    let randVal = Math.floor(Math.random() * 4)
    let selectedCategory = this.categoryChoices[randVal]
    return selectedCategory;
  }
}