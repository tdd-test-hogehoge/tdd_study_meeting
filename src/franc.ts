export default class Franc {
  private amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(object: Franc) {
    return this.amount === object.amount;
  }
}
