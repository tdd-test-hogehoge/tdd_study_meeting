export default class Dollar {
  private amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: Dollar) {
    return this.amount === object.amount;
  }
}
