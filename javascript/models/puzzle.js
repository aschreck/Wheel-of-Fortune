class Puzzle  {
  constructor(category,number_of_words,first_word,description, correct_answer){
    this.category = category;
    this.number_of_words = number_of_words;
    this.first_word = first_word;
    this.description = category;
    this.correct_answer = correct_answer;
  }
  obfuscateAnswer() {
    let chars = this.correct_answer.split('')
    let newChars = []
    chars.forEach(function(element) {
      if (element == " ") {
        console.log("element is " + element)
        newChars.push(' ')
      } else {
        newChars.push("@")
      }
    })
    this.inProgressAnswer = newChars.join("");
  }
}