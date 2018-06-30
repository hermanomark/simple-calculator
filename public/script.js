const calculator = {
  textInput: "",
  result: 0,
  displayNumber() {
    console.log(this.textInput);
  },
  zero() {
    this.textInput += "0";
    this.displayNumber();
  },
  one() {
    this.textInput += "1";
    this.displayNumber();
  },
  two() {
    this.textInput += "2";
    this.displayNumber();
  },
  three() {
    this.textInput += "3";
    this.displayNumber();
  },
  four() {
    this.textInput += "4";
    this.displayNumber();
  },
  five() {
    this.textInput += "5";
    this.displayNumber();
  },
  six() {
    this.textInput += "6";
    this.displayNumber();  
  },
  seven() {
    this.textInput += "7";
    this.displayNumber();
  },
  eight() {
    this.textInput += "8";
    this.displayNumber();
  },
  nine() {
    this.textInput += "9";
    this.displayNumber();
  },
  point() {
    this.textInput += ".";
    this.displayNumber();
  },
  addition() {
    this.textInput += "+";
    this.displayNumber();
  },
  subtraction() {
    this.textInput += "-";
    this.displayNumber();
  },
  multiplication() {
    this.textInput += "*";
    this.displayNumber();
  },
  division() {
    this.textInput += "/";
    this.displayNumber();
  },
  clear() {
    this.textInput = "";
    this.displayNumber();
  },
  equal() {
    this.result = eval(this.textInput);
    this.textInput = this.result;
    this.displayNumber();
  }
};

const handlers = {
  zero() {
    calculator.zero();
    view.displayNumber();
  },
  one() {
    calculator.one();
    view.displayNumber();

  },
  two() {
    calculator.two();
    view.displayNumber();

  },
  three() {
    calculator.three();
    view.displayNumber();
  },
  four() {
    calculator.four();
    view.displayNumber();
  },
  five() {
    calculator.five();
    view.displayNumber();
  },
  six() {
    calculator.six();
    view.displayNumber();
  },
  seven() {
    calculator.seven();
    view.displayNumber();
  },
  eight() {
    calculator.eight();
    view.displayNumber();
  },
  nine() {
    calculator.nine();
    view.displayNumber();
  },
  point() {
    calculator.point();
    view.displayNumber();
  },
  addition() {
    calculator.addition();
    view.displayNumber();
  },
  subtraction() {
    calculator.subtraction();
    view.displayNumber();
  },
  multiplication() {
    calculator.multiplication();
    view.displayNumber();
  },
  division() {
    calculator.division();
    view.displayNumber();
  },
  clear() {
    calculator.clear();
    view.displayNumber();
  },
  equal() {
    calculator.equal();
    view.displayNumber();
  }
};

const view = {
  displayNumber() {
    document.getElementById("textInput").value = calculator.textInput;
  }
}