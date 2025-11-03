class Dice {
  constructor(numDice = 5) {
    this.numDice = numDice;
    this.diceValues = [];
  }

  roll() {
    this.diceValues = Array.from({ length: this.numDice }, () =>
      Math.floor(Math.random() * 6) + 1
    );
    return this.diceValues;
  }
}
