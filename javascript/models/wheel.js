class Wheel {
  constructor(options){
    this.options = options;
  }

  selectValue(){
    let selection = Math.random();
    selection = Math.ceil(selection);
    return this.options[selection];
  }
}