class Puzzle  {
  constructor(category,number_of_words,first_word,description, correct_answer){
    this.category = category;
    this.number_of_words = number_of_words;
    this.first_word = first_word;
    this.description = description;
    this.correct_answer = correct_answer;
    this.inProgressAnswer = '';
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

  updateInProgressAnswer() {
    console.log("in progress answer: ",this.inProgressAnswer)
    $(".answer").replaceWith(this.inProgressAnswer);
  }

  buyAVowel(vowel) {
    //check correct answer for values and get their index position
    let indexOfValues = [];
    this.correct_answer.split('').forEach(function(element,index) {
      if(element == vowel) {
        indexOfValues.push(index);
      }
    })

    //add those letters to the appropriate index positions in the inProgress Answer.
    let splitProgress = this.inProgressAnswer.split('')
    indexOfValues.forEach(function(element){
      splitProgress[element] = vowel;
    })
    this.inProgressAnswer = splitProgress.join('');
    this.updateInProgressAnswer();
  }
}