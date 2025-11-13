class Dice {
  constructor(numDice = 5) {
    this.numDice = numDice;
    this.diceValues = [];
  }

  // MODIFIED: Now fetches from server instead of generating locally
  async roll() {
    try {
      const response = await fetch(`/roll-dices?numDice=${this.numDice}`);
      
      if (!response.ok) {
        throw new Error(`Server status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        this.diceValues = data.dice;
        console.log('Dice rolled :', this.diceValues);
        return this.diceValues;
      } else {
        throw new Error(data.error || 'Unknown server error');
      }
      
    } catch (error) {
      console.error('Failed to get dice from server:', error);
      
      // FALLBACK: Use local random generation if server fails
      console.log('Using fallback local dice generation');
      this.diceValues = Array.from({ length: this.numDice }, () =>
        Math.floor(Math.random() * 6) + 1
      );
      return this.diceValues;
    }
  }
}