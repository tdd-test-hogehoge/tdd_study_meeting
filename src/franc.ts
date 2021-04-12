export default class Doller {
  private amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Doller(this.amount * multiplier);
  }

  equals(object: Doller) {
    return this.amount === object.amount;
  }
}
