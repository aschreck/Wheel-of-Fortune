class Wheel {
  constructor(options){
    this.options = options;
  }

  selectValue(){
    let selection = Math.random();
    selection = Math.ceil(selection);
    this.value = this.options[selection];
    return this.value
  }
  removeWheel() {
    $(".wheel-spin").remove()
    $(".wheel-options").remove()
  }
}